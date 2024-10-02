"use client";

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export const Map = () => {
  const mapRef = useRef(null); // Usar un ref para almacenar el mapa

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      mapRef.current = map; // Almacenar el mapa en el ref
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Limpiar el mapa al desmontar el componente
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" className="h-44" style={{ height: '500px', width: '100%' }}></div>;
};
