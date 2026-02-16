"use client"

import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, MapPin, Users, DollarSign, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ResortDetailPanel({ resort, onClose }) {
  if (!resort) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 rounded-full bg-muted p-4">
          <MapPin className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          Выберите курорт
        </h3>
        <p className="text-sm text-muted-foreground">
          Кликните на маркер на карте, чтобы посмотреть детали курорта
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Кнопка закрытия */}
      <div className="absolute right-3 top-3 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Карусель изображений */}
      <div className="relative px-4 pt-4">
        <Carousel className="w-full">
          <CarouselContent>
            {resort.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-16/10 overflow-hidden rounded-xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${resort.name} - Изображение ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 h-8 w-8 border-none bg-background/80 text-foreground backdrop-blur-sm hover:bg-background" />
          <CarouselNext className="right-2 h-8 w-8 border-none bg-background/80 text-foreground backdrop-blur-sm hover:bg-background" />
        </Carousel>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        {/* Заголовок */}
        <div>
          <div className="mb-2 flex items-start justify-between gap-2">
            <h2 className="text-xl font-bold text-foreground text-balance">{resort.name}</h2>
            <Badge variant="secondary" className="shrink-0 bg-primary text-primary-foreground">
              {resort.category}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{resort.location}</span>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-muted p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-bold text-foreground">{resort.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">Рейтинг</span>
          </div>
          <div className="rounded-lg bg-muted p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-bold text-foreground">
                {(resort.visits / 1000).toFixed(0)}К
              </span>
            </div>
            <span className="text-xs text-muted-foreground">Посетителей</span>
          </div>
          <div className="rounded-lg bg-muted p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="font-bold text-foreground">{resort.priceRange}</span>
            </div>
            <span className="text-xs text-muted-foreground">Цена</span>
          </div>
        </div>

        {/* Описание */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">О курорте</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {resort.description}
          </p>
        </div>

        {/* Удобства */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Удобства</h3>
          <div className="flex flex-wrap gap-2">
            {resort.amenities.map((amenity) => (
              <Badge key={amenity} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        {/* <div className="mt-auto pt-4">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Забронировать
          </Button>
        </div> */}
      </div>
    </div>
  )
}
