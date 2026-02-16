import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Calendar,
  Utensils,
  Bed,
  Check,
  CreditCard,
  ArrowLeft,
  Phone,
  FileText,
  BadgePercent,
  Mountain,
  Sparkles,
  Users,
  Clock,
  Shield,
  Wifi,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TourCard } from "../tour-card";
import { TourImageGallery } from "../tour-image-gallery";
import { getTourById, tours } from "../tours-data";

export function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: `${tour.name} - QazTour`,
    description: tour.shortDescription,
  };
}

export default async function TourDetailPage({ params }) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    notFound();
  }

  const relatedTours = tours
    .filter((t) => t.id !== tour.id && t.region === tour.region)
    .slice(0, 3);

  const hasRelated = relatedTours.length > 0;
  const fallbackTours = hasRelated
    ? relatedTours
    : tours.filter((t) => t.id !== tour.id).slice(0, 3);

  const galleryImages = tour.gallery || [tour.image];

  return (
    <div className="flex min-h-screen flex-col bg-background">

      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            {"Главная"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/tours"
            className="transition-colors hover:text-foreground"
          >
            {"Курорты"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground line-clamp-1">
            {tour.name}
          </span>
        </nav>
      </div>

      {/* Title Section */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-accent text-accent-foreground">
                {tour.type}
              </Badge>
              {tour.discount > 0 && (
                <Badge className="bg-destructive text-destructive-foreground">
                  {`Скидка ${tour.discount}%`}
                </Badge>
              )}
              {tour.season.includes("Круглый год") && (
                <Badge variant="secondary">{"Круглый год"}</Badge>
              )}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {tour.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {tour.address}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
                <span className="font-semibold text-foreground">
                  {tour.rating}
                </span>
                {`(${tour.reviewCount} отзывов)`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{"от"}</p>
              <p className="text-2xl font-bold text-primary">
                {tour.priceFrom.toLocaleString("ru-RU")}
                <span className="text-sm font-normal text-muted-foreground">
                  {" тг/сут"}
                </span>
              </p>
            </div>
            <a
              href="tel:+77172123456"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              {"Забронировать"}
            </a>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-8">
        <TourImageGallery images={galleryImages} name={tour.name} />
      </div>

      {/* Highlights strip */}
      {tour.highlights && tour.highlights.length > 0 && (
        <div className="border-y border-border/60 bg-secondary/50">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-5 md:justify-start md:gap-10">
            {tour.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      )}

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                {"О курорте"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {tour.description}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Tabs Section */}
            <Tabs defaultValue="rooms" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="rooms" className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  <span className="hidden sm:inline">{"Проживание"}</span>
                  <span className="sm:hidden">{"Номера"}</span>
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center gap-1.5">
                  <Check className="h-4 w-4" />
                  <span>{"Услуги"}</span>
                </TabsTrigger>
                <TabsTrigger value="dining" className="flex items-center gap-1.5">
                  <Utensils className="h-4 w-4" />
                  <span>{"Питание"}</span>
                </TabsTrigger>
              </TabsList>

              {/* Rooms Tab */}
              <TabsContent value="rooms" className="mt-6">
                <div className="flex flex-wrap gap-3">
                  {tour.rooms.map((room) => (
                    <Card key={room} className="flex-1 min-w-[140px] border-border/60">
                      <CardContent className="flex flex-col items-center gap-2 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Bed className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {room}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                  <Wifi className="h-4 w-4 text-primary" />
                  {"Удобства в номере"}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {tour.roomAmenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2.5 rounded-lg bg-secondary/50 px-3 py-2.5 text-sm text-foreground"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/15">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* Room Gallery */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/images/tours/gallery-rooms.jpg"
                      alt="Room interior"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/images/tours/gallery-spa.jpg"
                      alt="Spa area"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {"Включено в стоимость"}
                      </h3>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      {tour.included.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {"Платные услуги"}
                      </h3>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      {tour.paidServices.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activities Gallery */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/tours/gallery-activities.jpg"
                      alt="Activities"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/tours/gallery-nature.jpg"
                      alt="Nature"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/tours/gallery-pool.jpg"
                      alt="Pool"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Dining Tab */}
              <TabsContent value="dining" className="mt-6">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="relative aspect-21/9">
                    <Image
                      src="/images/tours/gallery-restaurant.jpg"
                      alt="Restaurant"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xl font-bold text-secondary">
                        {"Ресторан и питание"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {tour.mealOptions.map((option) => {
                    const parts = option.split(" – ");
                    return (
                      <Card key={option} className="border-border/60">
                        <CardContent className="flex items-start gap-3 p-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                            <Utensils className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {parts[0]}
                            </p>
                            {parts[1] && (
                              <p className="mt-0.5 text-sm text-muted-foreground">
                                {parts[1]}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            <Separator className="my-8" />

            {/* FAQ Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                {"Часто задаваемые вопросы"}
              </h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                <AccordionItem value="checkin">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"Какие документы нужны для заезда?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {`Для заезда необходимо предоставить: ${tour.document}. Для детей до 18 лет — свидетельство о рождении. При бронировании на организацию — доверенность и реквизиты.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"Как формируется стоимость проживания?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {`Стоимость рассчитывается индивидуально и зависит от: выбранной категории номера (${tour.rooms.join(", ")}), программы питания, длительности заезда, дополнительных платных услуг и сезона. Базовая цена от ${tour.priceFrom.toLocaleString("ru-RU")} тг/сут.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="season">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"В какое время года лучше приехать?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {tour.season.includes("Круглый год")
                      ? "Курорт работает круглый год. Каждый сезон предлагает свои уникальные возможности для отдыха: зимой — зимние развлечения и SPA, летом — активный отдых на природе, осенью — спокойный отдых и оздоровление."
                      : `Лучшее время для посещения: ${tour.season.join(", ")}. В эти месяцы погодные условия наиболее благоприятны для комфортного отдыха.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="children">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"Подходит ли курорт для отдыха с детьми?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {tour.included.some((i) => i.toLowerCase().includes("детск"))
                      ? "Да, курорт отлично подходит для семейного отдыха с детьми. На территории есть детские площадки, а также предусмотрены специальные условия для маленьких гостей. Детям до 5 лет проживание может быть бесплатным (уточняйте при бронировании)."
                      : "Курорт подходит для отдыха с детьми старшего возраста. Рекомендуем уточнить наличие специальных условий для детей при бронировании."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="transfer">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"Есть ли трансфер до курорта?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {tour.paidServices.some((s) => s.toLowerCase().includes("трансфер"))
                      ? "Да, курорт предоставляет платную услугу трансфера. Вы можете заказать трансфер от аэропорта или вокзала при бронировании. Стоимость зависит от расстояния и типа транспорта."
                      : "Трансфер можно организовать самостоятельно. Курорт расположен по адресу: " +
                        tour.address +
                        ". Рекомендуем заранее уточнить детали маршрута."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cancel">
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {"Какие условия отмены бронирования?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {"Бесплатная отмена возможна за 7 и более дней до заезда. При отмене за 3-6 дней удерживается 50% стоимости первых суток. При отмене менее чем за 3 дня или неприбытии удерживается полная стоимость первых суток. Подробные условия уточняйте при бронировании."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 flex flex-col gap-5">
              {/* Price Card */}
              <Card className="overflow-hidden border-border/60">
                <div className="bg-primary p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-foreground/80">
                      {"Стоимость от"}
                    </span>
                    {tour.discount > 0 && (
                      <Badge className="bg-background/20 text-primary-foreground">
                        <BadgePercent className="mr-1 h-3.5 w-3.5" />
                        {`-${tour.discount}%`}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {tour.priceFrom.toLocaleString("ru-RU")}
                    </span>
                    <span className="text-sm text-primary-foreground/80">
                      {"тг/сут"}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <a
                    href="tel:+77172123456"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    {"Забронировать"}
                  </a>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    {"Бесплатная отмена за 7 дней"}
                  </p>
                  <Separator className="my-4" />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 shrink-0 text-accent" />
                      {"Гарантия лучшей цены"}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0 text-accent" />
                      {"Быстрое подтверждение"}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 shrink-0 text-accent" />
                      {`${tour.reviewCount} довольных гостей`}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Season Card */}
              <Card className="border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    {"Сезон работы"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tour.season.map((month) => (
                      <Badge key={month} variant="secondary" className="text-xs">
                        {month}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Card */}
              <Card className="border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mountain className="h-5 w-5 text-primary" />
                    {"Основное"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{"Тип"}</span>
                      <span className="font-medium text-foreground">
                        {tour.type}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{"Регион"}</span>
                      <span className="font-medium text-foreground">
                        {tour.region}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{"Номеров"}</span>
                      <span className="font-medium text-foreground">
                        {`${tour.rooms.length} категории`}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{"Рейтинг"}</span>
                      <span className="flex items-center gap-1 font-medium text-foreground">
                        <Star className="h-3.5 w-3.5 fill-chart-4 text-chart-4" />
                        {tour.rating}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{"Документы"}</span>
                      <span className="text-right font-medium text-foreground">
                        {tour.document}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location mini image */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative aspect-video">
                  <Image
                    src={tour.image}
                    alt={`${tour.name} location`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="flex items-center gap-1.5 text-sm font-medium text-secondary">
                      <MapPin className="h-4 w-4" />
                      {tour.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Related Tours */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {hasRelated
                ? "Похожие курорты в регионе"
                : "Другие курорты"}
            </h2>
            <Link
              href="/tours"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {"Все курорты"}
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackTours.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}
