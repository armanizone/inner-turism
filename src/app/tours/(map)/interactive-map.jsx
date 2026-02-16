"use client"

import React from 'react'
import dynamic from "next/dynamic"
import { resortsData } from "./resorts-data"
import { ResortDetailPanel } from "./resort-detail-panel"
import { ResortList } from "./resorts-list"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Mountain } from "lucide-react"

// Динамический импорт карты для избежания проблем SSR
const KazakhstanMap = dynamic(
  () => import("./map").then((mod) => mod.KazakhstanMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="text-sm text-muted-foreground">Загрузка карты...</span>
        </div>
      </div>
    ),
  }
)

export default function InteractiveMap() {
  const [selectedResort, setSelectedResort] = React.useState(null)
  const [hoveredResort, setHoveredResort] = React.useState(null)

  const handleResortSelect = (resort) => {
    setSelectedResort(resort)
  }

  const handleResortHover = (resort) => {
    setHoveredResort(resort)
  }

  const handleClosePanel = () => {
    setSelectedResort(null)
  }

  return (
    <div className="flex w-full overflow-hidden bg-background md:flex-row flex-col-reverse">
      
      <div className="flex h-full w-[350px] shrink-0 flex-col border-r border-border bg-card px-4">

        <div className="border-b border-border p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Mountain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Курорты Казахстана</h1>
              <p className="text-xs text-muted-foreground">Откройте для себя удивительные направления</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-b border-border p-4">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">{resortsData.length}</div>
            <div className="text-xs text-muted-foreground">Курортов</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">
              {(resortsData.reduce((acc, r) => acc + r.visits, 0) / 1000000).toFixed(1)}М
            </div>
            <div className="text-xs text-muted-foreground">Посетителей</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">
              {(resortsData.reduce((acc, r) => acc + r.rating, 0) / resortsData.length).toFixed(1)}
            </div>
            <div className="text-xs text-muted-foreground">Средний рейтинг</div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          {selectedResort ? (
            <div className="relative h-full">
              <ResortDetailPanel resort={selectedResort} onClose={handleClosePanel} />
            </div>
          ) : (
            <ScrollArea className="flex-1">
              <div className="p-4">
                <ResortList
                  resorts={resortsData}
                  selectedResort={selectedResort}
                  onResortSelect={handleResortSelect}
                  onResortHover={handleResortHover}
                />
              </div>
            </ScrollArea>
          )}
        </div>
      </div>

      <div className="relative flex-1 w-full">
        <KazakhstanMap
          resorts={resortsData}
          selectedResort={selectedResort}
          hoveredResort={hoveredResort}
          onResortSelect={handleResortSelect}
          onResortHover={handleResortHover}
        />

        <div className="absolute bottom-4 left-4 rounded-lg border border-border bg-card/95 p-3 backdrop-blur-sm">
          <div className="mb-2 text-xs font-semibold text-foreground">Легенда</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Расположение курорта</span>
            </div>
          </div>
        </div>

        {!selectedResort && (
          <div className="absolute right-4 top-4 rounded-lg border border-border bg-card/95 p-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                Наведите на маркер для предпросмотра, кликните для подробностей
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
