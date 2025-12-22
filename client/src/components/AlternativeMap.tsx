import { useEffect, useRef, useState } from "react";

// Leaflet型定義の拡張
declare global {
  interface Window {
    L: any;
  }
}

// 代替マップコンポーネント（OpenStreetMapを使用）
export default function AlternativeMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // LeafletとOpenStreetMapを使用した代替マップ
    loadLeafletMap();
  }, []);

  const loadLeafletMap = () => {
    try {
      setLoadStatus('loading');

      // Leaflet CSS
      const leafletCSS = document.createElement('link');
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(leafletCSS);

      // Leaflet JS
      const leafletJS = document.createElement('script');
      leafletJS.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      leafletJS.onload = () => {
        initLeafletMap();
      };
      leafletJS.onerror = () => {
        setLoadStatus('error');
      };
      document.head.appendChild(leafletJS);

    } catch (error) {
      console.error('Error loading Leaflet:', error);
      setLoadStatus('error');
    }
  };

  const initLeafletMap = () => {
    if (!mapRef.current || !window.L) {
      setLoadStatus('error');
      return;
    }

    try {
      // 大東高校の座標
      const schoolLocation: [number, number] = [39.0528, 141.3892];

      // マップを初期化
      const map = window.L.map(mapRef.current).setView(schoolLocation, 15);

      // OpenStreetMapタイルを追加
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // カスタムアイコンを作成
      const schoolIcon = window.L.divIcon({
        html: `
          <div style="
            background: #1e40af; 
            color: white; 
            padding: 8px 12px; 
            border-radius: 20px; 
            font-size: 12px; 
            font-weight: bold;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border: 2px solid white;
          ">
            🏫 岩手県立大東高等学校
          </div>
        `,
        className: 'custom-div-icon',
        iconSize: [200, 40],
        iconAnchor: [100, 40]
      });

      // マーカーを追加
      window.L.marker(schoolLocation, { icon: schoolIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937;">岩手県立大東高等学校</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
              〒029-0523<br>
              岩手県一関市大東町摺沢字堀河ノ沢34番4号
            </p>
            <div style="margin-top: 12px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=39.0528,141.3892" 
                 target="_blank" 
                 style="
                   background: #3b82f6; 
                   color: white; 
                   padding: 6px 12px; 
                   text-decoration: none; 
                   border-radius: 4px; 
                   font-size: 12px;
                   display: inline-block;
                   margin: 2px;
                 ">
                📍 ルート案内
              </a>
              <a href="tel:0191-75-3116" 
                 style="
                   background: #10b981; 
                   color: white; 
                   padding: 6px 12px; 
                   text-decoration: none; 
                   border-radius: 4px; 
                   font-size: 12px;
                   display: inline-block;
                   margin: 2px;
                 ">
                📞 電話
              </a>
            </div>
          </div>
        `)
        .openPopup();

      // 地図コントロールのカスタマイズ
      map.zoomControl.setPosition('topright');

      setLoadStatus('success');
      console.log('Leaflet map initialized successfully');

    } catch (error) {
      console.error('Error initializing Leaflet map:', error);
      setLoadStatus('error');
    }
  };

  const getStatusColor = () => {
    switch (loadStatus) {
      case 'loading': return 'bg-blue-50 text-blue-800';
      case 'success': return 'bg-green-50 text-green-800';
      case 'error': return 'bg-red-50 text-red-800';
      default: return 'bg-gray-50 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (loadStatus) {
      case 'loading': return 'マップを読み込み中...';
      case 'success': return 'マップ表示成功 (OpenStreetMap使用)';
      case 'error': return 'マップの読み込みに失敗しました';
      default: return '不明な状態';
    }
  };

  return (
    <div className="w-full">
      <div className={`mb-4 p-4 rounded-lg ${getStatusColor()}`}>
        <h3 className="font-semibold">代替マップ (OpenStreetMap)</h3>
        <p className="text-sm">状態: {getStatusText()}</p>
        <p className="text-xs mt-2">
          Google Maps APIの設定が完了するまでの代替手段として、
          無料のOpenStreetMapを使用しています。
        </p>
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-96 border border-gray-300 rounded-lg"
        style={{ minHeight: '400px' }}
      >
        {loadStatus === 'loading' && (
          <div className="flex items-center justify-center h-full bg-blue-50">
            <div className="text-center text-blue-600">
              <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-2">マップを読み込み中...</p>
            </div>
          </div>
        )}
        {loadStatus === 'error' && (
          <div className="flex items-center justify-center h-full bg-red-50">
            <div className="text-center text-red-600">
              <p className="font-semibold">マップの読み込みに失敗しました</p>
              <p className="text-sm mt-2">ネットワーク接続をご確認ください</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}