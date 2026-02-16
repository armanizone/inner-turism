"use client"

import React from "react"
import { MapPin, Star, ArrowRight, Sparkles, Waves, Dumbbell, TreePine, Building2, Flame } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const infrastructureIcons = {
  "Бассейн": <Waves className="h-3.5 w-3.5" />,
  "Бассейн с подогревом": <Waves className="h-3.5 w-3.5" />,
  "Термальные бассейны": <Flame className="h-3.5 w-3.5" />,
  "Тренажёрный зал": <Dumbbell className="h-3.5 w-3.5" />,
  "Территория для прогулок": <TreePine className="h-3.5 w-3.5" />,
  "Медицинский корпус": <Building2 className="h-3.5 w-3.5" />,
}

export function ResortCard({ resort }) {
  const [randomRating] = React.useState(() => Math.floor(Math.random() * 3 + 6))
  const [randomIndications] = React.useState(resort.indications.slice(0, 2))
  const [randomInfrastructure] = React.useState(resort.infrastructure.slice(0, 3))

  const [randomPrice] = React.useState(resort.priceFrom.toLocaleString("ru-RU"))

  return (
    <Link
      href={`/resorts/${resort.id}`}
      className="max-w-[366px] mx-auto group block rounded-3xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={resort.photo || "/images/resort-1.jpg"}
          alt={resort.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          {resort.discount > 0 ? (
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              <Sparkles className="h-3 w-3" />
              -{resort.discount}%
            </span>
          ) : (
            <span />
          )}
          <span className="bg-card/90 backdrop-blur-sm text-card-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
            {resort.category}
          </span>
        </div>

        {/* Bottom overlay content */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 mb-1.5 text-balance">
            {resort.name}
          </h3>
          <div className="flex items-center gap-1.5 text-white/80 text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-1">{resort.region}, {resort.address.split(",")[0]}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">4.{randomRating}</span>
        </div>

        {/* Indications tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {randomIndications.map((ind) => (
            <span
              key={ind}
              className="px-2.5 py-1 bg-primary/8 text-primary rounded-full text-xs font-medium"
            >
              {ind.length > 22 ? `${ind.substring(0, 22)}...` : ind}
            </span>
          ))}
          {resort.indications.length > 2 && (
            <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
              +{resort.indications.length - 2}
            </span>
          )}
        </div>

        {/* Infrastructure icons row */}
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
          {randomInfrastructure.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-1.5 text-muted-foreground"
            >
              <span className="p-1.5 rounded-lg bg-secondary">
                {infrastructureIcons[feat] || <Building2 className="h-3.5 w-3.5" />}
              </span>
              <span className="text-xs hidden sm:inline">{feat.length > 12 ? `${feat.substring(0, 12)}...` : feat}</span>
            </div>
          ))}
          {resort.infrastructure.length > 3 && (
            <span className="text-xs text-muted-foreground">+{resort.infrastructure.length - 3}</span>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">от</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">
                {randomPrice}
              </span>
              <span className="text-sm text-muted-foreground">₸/сутки</span>
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
