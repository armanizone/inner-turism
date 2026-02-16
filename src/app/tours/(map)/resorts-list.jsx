"use client"

import { Star, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function ResortList({
  resorts,
  selectedResort,
  onResortSelect,
  onResortHover,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-2 px-1">
        <h3 className="text-sm font-semibold text-foreground">Все курорты</h3>
        <p className="text-xs text-muted-foreground">{resorts.length} направлений</p>
      </div>
      {resorts.map((resort) => (
        <button
          key={resort.id}
          className={cn(
            "flex gap-3 rounded-lg p-2 text-left transition-all hover:bg-muted",
            selectedResort?.id === resort.id && "bg-muted ring-1 ring-primary"
          )}
          onClick={() => onResortSelect(resort)}
          onMouseEnter={() => onResortHover(resort)}
          onMouseLeave={() => onResortHover(null)}
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
            <Image
              src={resort.images[0] || "/placeholder.svg"}
              alt={resort.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <h4 className="truncate text-sm font-medium text-foreground">
              {resort.name}
            </h4>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{resort.location}</span>
            </div>
            <div className="mt-1 flex items-center gap-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs font-medium text-foreground">
                {resort.rating}
              </span>
              <span className="text-xs text-muted-foreground">
                • {(resort.visits / 1000).toFixed(0)}K visits
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
