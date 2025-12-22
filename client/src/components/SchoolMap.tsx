import { useEffect, useRef } from "react";
import { MapView } from "./Map";
import { Button } from "./ui/button";
import { MapPin, Navigation } from "lucide-react";

// 岩手県立大東高等学校の座標
const SCHOOL_LOCATION = {
  lat: 39.0528, // 大東町摺沢の緯度
  lng: 141.3892, // 大東町摺沢の経度
};

interface SchoolMapProps {
  className?: string;
  showControls?: boolean;
}

export default function SchoolMap({ className, showControls = true }: SchoolMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // 学校の位置にマーカーを設置
    if (window.google) {
      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: SCHOOL_LOCATION,
        title: "岩手県立大東高等学校",
      });

      // 情報ウィンドウを作成
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937;">岩手県立大東高等学校</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
              〒029-0523<br>
              岩手県一関市大東町摺沢字堀河ノ沢34番4号
            </p>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <span style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">📞 0191-75-3116</span>
              <span style="background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">🏫 創立100周年</span>
            </div>
          </div>
        `,
      });

      // マーカークリックで情報ウィンドウを表示
      markerRef.current.addListener("click", () => {
        infoWindow.open(map, markerRef.current);
      });

      // 初期表示で情報ウィンドウを開く
      setTimeout(() => {
        infoWindow.open(map, markerRef.current);
      }, 500);
    }
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${SCHOOL_LOCATION.lat},${SCHOOL_LOCATION.lng}&query_place_id=ChIJGwVKWvNwpF8R_KYhKGKGWmc`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${SCHOOL_LOCATION.lat},${SCHOOL_LOCATION.lng}&destination_place_id=ChIJGwVKWvNwpF8R_KYhKGKGWmc`;
    window.open(url, '_blank');
  };

  return (
    <div className={className}>
      <MapView
        initialCenter={SCHOOL_LOCATION}
        initialZoom={16}
        onMapReady={handleMapReady}
        className="w-full h-[400px] rounded-lg shadow-lg"
      />
      
      {showControls && (
        <div className="flex gap-3 mt-4 justify-center">
          <Button
            onClick={openInGoogleMaps}
            variant="outline"
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            Google Mapsで開く
          </Button>
          <Button
            onClick={getDirections}
            className="flex items-center gap-2"
          >
            <Navigation className="h-4 w-4" />
            ルート案内
          </Button>
        </div>
      )}
    </div>
  );
}