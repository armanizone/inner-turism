import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Utensils, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function TourCard({ tour }) {
  return (
    <Link href={`/tours/${tour.id}`} className="group block">
      <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 pt-0">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
          {tour.discount > 0 && (
            <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
              {`-${tour.discount}%`}
            </Badge>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <Badge
              variant="secondary"
              className="bg-background/80 text-foreground backdrop-blur-sm"
            >
              {tour.type}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold leading-tight text-foreground line-clamp-1">
            {tour.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-1">{tour.region}</span>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {tour.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-chart-4 text-chart-4" />
              <span className="font-medium text-foreground">{tour.rating}</span>
              <span>{`(${tour.reviewCount})`}</span>
            </span>
            <span className="flex items-center gap-1">
              <Utensils className="h-3.5 w-3.5" />
              {tour.mealOptions.length > 0
                ? `${tour.mealOptions.length} вариантов`
                : "Без питания"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {tour.season.includes("Круглый год")
                ? "Круглый год"
                : `${tour.season.length} мес.`}
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/40 pt-4">
          <div className="flex w-full items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{"от"}</p>
              <p className="text-lg font-bold text-primary">
                {tour.priceFrom.toLocaleString("ru-RU")}
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  {"тг/сут"}
                </span>
              </p>
            </div>
            <span className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">
              <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
