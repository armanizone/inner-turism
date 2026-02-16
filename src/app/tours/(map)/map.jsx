"use client"

import React from 'react'
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export function KazakhstanMap({
  resorts,
  selectedResort,
  hoveredResort,
  onResortSelect,
  onResortHover,
}) {
  const mapRef = React.useRef(null)
  const mapInstanceRef = React.useRef(null)
  const markersRef = React.useRef(new Map())

  React.useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map centered on Kazakhstan
    const map = L.map(mapRef.current, {
      center: [48.0196, 66.9237],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true,
    })

    // Add dark themed tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        // attribution:
        //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        attribution: '&copy; OpenStreetMap contributors',
        subdomains: "abcd",
        maxZoom: 20,
      }
    ).addTo(map)

    mapInstanceRef.current = map

    // Create markers for each resort
    resorts.forEach((resort) => {
      const markerIcon = L.divIcon({
        className: "custom-marker",
        html: `
          <div class="marker-container" data-id="${resort.id}">
            <div class="marker-dot"></div>
            <div class="marker-pulse"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })

      const marker = L.marker(resort.coordinates, { icon: markerIcon })
        .addTo(map)
        .on("click", () => onResortSelect(resort))
        .on("mouseover", () => onResortHover(resort))
        // .on("mouseout", () => onResortHover(null))

      // Add popup for hover
      const popupContent = `
        <div class="popup-content">
          <img src="${resort.images[0]}" alt="${resort.name}" class="popup-image" />
          <div class="popup-text">
            <h4>${resort.name}</h4>
            <p>${resort.shortDescription}</p>
          </div>
        </div>
      `

      marker.bindPopup(popupContent, {
        className: "custom-popup",
        closeButton: false,
        autoPan: false,
        autoClose: false,
        closeOnClick: false
      })

      marker.on('mouseover', () => {
        const map = mapInstanceRef.current;
        if (map) {
          const currentZoom = map.getZoom();
          map.setMinZoom(currentZoom);
          map.setMaxZoom(currentZoom);
          marker.openPopup();
        }
      });
      
      marker.on('mouseout', () => {
        const map = mapInstanceRef.current;
        if (map) {
          map.setMinZoom(0);
          map.setMaxZoom(20);
          marker.closePopup();
        }
      });

      markersRef.current.set(resort.id, marker)
    })

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resorts])

  // Handle hovered resort - show popup
  React.useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      if (hoveredResort && hoveredResort.id === id) {
        marker.openPopup()
      } else if (!hoveredResort) {
        marker.closePopup()
      }
    })
  }, [hoveredResort])

  

  // Handle selected resort - pan to it and update marker style
  React.useEffect(() => {
    if (selectedResort && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedResort.coordinates, 8, {
        duration: 1,
      })
    }

    // Update marker styles
    markersRef.current.forEach((marker, id) => {
      const element = marker.getElement()
      if (element) {
        const markerContainer = element.querySelector(".marker-container")
        if (markerContainer) {
          if (selectedResort && selectedResort.id === id) {
            markerContainer.classList.add("selected")
          } else {
            markerContainer.classList.remove("selected")
          }
        }
      }
    })
  }, [selectedResort])

  return (
    <>
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }

        .marker-container {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marker-dot {
          width: 14px;
          height: 14px;
          background: oklch(0.78 0.15 85);
          border-radius: 50%;
          border: 2px solid oklch(0.15 0.01 250);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .marker-container:hover .marker-dot,
        .marker-container.selected .marker-dot {
          width: 18px;
          height: 18px;
        }

        .marker-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          background: oklch(0.78 0.15 85 / 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
          z-index: 1;
        }

        .marker-container.selected .marker-pulse {
          animation: pulse 1s infinite;
          background: oklch(0.78 0.15 85 / 0.5);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .custom-popup .leaflet-popup-content-wrapper {
          background: oklch(0.18 0.01 250);
          border: 1px solid oklch(0.28 0.01 250);
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .custom-popup .leaflet-popup-tip {
          background: oklch(0.18 0.01 250);
          border: 1px solid oklch(0.28 0.01 250);
        }

        .custom-popup .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }

        .popup-content {
          width: 220px;
        }

        .popup-image {
          width: 100%;
          height: 100px;
          object-fit: cover;
        }

        .popup-text {
          padding: 12px;
        }

        .popup-text h4 {
          color: oklch(0.95 0 0);
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .popup-text p {
          color: oklch(0.65 0 0);
          font-size: 12px;
          margin: 0;
          line-height: 1.4;
        }

        .leaflet-control-zoom {
          border: none !important;
        }

        .leaflet-control-zoom a {
          background: oklch(0.18 0.01 250) !important;
          color: oklch(0.95 0 0) !important;
          border: 1px solid oklch(0.28 0.01 250) !important;
        }

        .leaflet-control-zoom a:hover {
          background: oklch(0.25 0.01 250) !important;
        }

        .leaflet-control-attribution {
          background: oklch(0.15 0.01 250 / 0.8) !important;
          color: oklch(0.65 0 0) !important;
          font-size: 10px;
        }

        .leaflet-control-attribution a {
          color: oklch(0.78 0.15 85) !important;
        }
      `}</style>
      <div ref={mapRef} className="h-[400px] md:h-full w-full z-40" />
    </>
  )
}
