import { useEffect, useRef, useState } from "react";

// 改良されたシンプルマップコンポーネント
export default function SimpleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const scriptLoadedRef = useRef<boolean>(false);
  const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    console.log("SimpleMap component mounted");
    const apiKey = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
    console.log("API Key:", apiKey ? "設定済み" : "未設定");
    
    // スクリプトが既に読み込まれているかチェック
    if (window.google && window.google.maps) {
      console.log("Google Maps already loaded, initializing...");
      initMap();
      return;
    }

    // 既存のスクリプトタグをチェック
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript && !scriptLoadedRef.current) {
      console.log("Google Maps script already exists, waiting for load...");
      existingScript.addEventListener('load', initMap);
      return;
    }

    loadGoogleMaps();

    return () => {
      // クリーンアップは不要（他のコンポーネントが使用する可能性があるため）
    };
  }, []);

  const loadGoogleMaps = async () => {
    try {
      const apiKey = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
      
      if (!apiKey) {
        console.error("Google Maps API key is not defined");
        setLoadStatus('error');
        return;
      }

      // 直接Google Maps APIを読み込み（Forgeプロキシを使用しない）
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log("Google Maps script loaded successfully");
        scriptLoadedRef.current = true;
        setLoadStatus('success');
        initMap();
      };
      
      script.onerror = (error) => {
        console.error("Failed to load Google Maps script:", error);
        setLoadStatus('error');
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.error("Error loading Google Maps:", error);
      setLoadStatus('error');
    }
  };

  const initMap = () => {
    if (!mapRef.current) {
      console.error("Map container not found");
      return;
    }

    if (!window.google || !window.google.maps) {
      console.error("Google Maps not loaded");
      return;
    }

    try {
      console.log("Initializing map...");
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 39.0528, lng: 141.3892 }, // 大東高校の座標
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      mapInstanceRef.current = map;
      console.log("Map initialized successfully");

      // 新しいAdvancedMarkerElementを使用（推奨）
      if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          position: { lat: 39.0528, lng: 141.3892 },
          map: map,
          title: "岩手県立大東高等学校",
        });
        console.log("Advanced marker added successfully");
      } else {
        // フォールバック：従来のMarkerを使用
        const marker = new window.google.maps.Marker({
          position: { lat: 39.0528, lng: 141.3892 },
          map: map,
          title: "岩手県立大東高等学校",
        });
        console.log("Classic marker added successfully");
      }

      setLoadStatus('success');

    } catch (error) {
      console.error("Error initializing map:", error);
      setLoadStatus('error');
    }
  };

  const getStatusColor = () => {
    switch (loadStatus) {
      case 'loading': return 'bg-yellow-50 text-yellow-800';
      case 'success': return 'bg-green-50 text-green-800';
      case 'error': return 'bg-red-50 text-red-800';
      default: return 'bg-gray-50 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (loadStatus) {
      case 'loading': return '読み込み中...';
      case 'success': return 'マップ表示成功';
      case 'error': return 'エラーが発生しました';
      default: return '不明な状態';
    }
  };

  return (
    <div className="w-full">
      <div className={`mb-4 p-4 rounded-lg ${getStatusColor()}`}>
        <h3 className="font-semibold">Google Maps テスト</h3>
        <p className="text-sm">
          APIキー: {import.meta.env.VITE_FRONTEND_FORGE_API_KEY ? "設定済み" : "未設定"}
        </p>
        <p className="text-sm">状態: {getStatusText()}</p>
        {loadStatus === 'error' && (
          <div className="mt-2 text-xs">
            <p>考えられる原因：</p>
            <ul className="list-disc list-inside ml-2">
              <li>請求先アカウントが未設定</li>
              <li>Maps JavaScript APIが無効</li>
              <li>APIキーの制限設定</li>
            </ul>
          </div>
        )}
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-96 border border-gray-300 rounded-lg"
        style={{ minHeight: '400px' }}
      >
        {loadStatus === 'loading' && (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <p className="text-gray-600">マップを読み込み中...</p>
          </div>
        )}
        {loadStatus === 'error' && (
          <div className="flex items-center justify-center h-full bg-red-50">
            <div className="text-center text-red-600">
              <p className="font-semibold">マップの読み込みに失敗しました</p>
              <p className="text-sm mt-2">詳細はブラウザコンソールをご確認ください</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}