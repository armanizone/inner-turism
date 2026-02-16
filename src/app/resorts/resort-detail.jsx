"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowLeft,
  MapPin,
  Heart,
  AlertTriangle,
  Stethoscope,
  FileCheck,
  Calendar,
  Bed,
  Utensils,
  Building2,
  ClipboardList,
  FileText,
  Phone,
  Star,
  Clock,
  Shield,
  Sparkles,
  Check,
  Users,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Removed TypeScript interface definition for ResortDetailProps

const tabs = [
  { id: "overview", label: "Обзор" },
  { id: "medical", label: "Лечение" },
  { id: "accommodation", label: "Проживание" },
  { id: "programs", label: "Программы" },
]

export function ResortDetail({ resort }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [currentImage, setCurrentImage] = useState(0)
  const [liked, setLiked] = useState(false)

  const images = [
    resort.photo || "/images/resort-1.jpg",
    "/images/resort-2.jpg",
    "/images/resort-5.jpg",
    "/images/resort-7.jpg",
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* Top Nav */}
      <nav className="z-50 border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Назад к каталогу</span>
          </Link>
          {/* <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">Поделиться</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`gap-2 transition-colors ${liked ? "text-red-500" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span className="hidden sm:inline text-sm">Сохранить</span>
            </Button>
          </div> */}
        </div>
      </nav>

      {/* Photo Gallery */}
      <section className="relative">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:h-[420px]">
            {/* Main Image */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={images[currentImage]}
                alt={resort.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {resort.discount > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    -{resort.discount}%
                  </span>
                </div>
              )}
              {/* Image navigation */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
                type="button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
                type="button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-card w-6" : "bg-card/50"}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
            {/* Side Images */}
            {images.slice(1, 3).map((img, i) => (
              <div key={i} className="hidden md:block relative rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={img}
                  alt={`${resort.name} ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
            {/* Last image with overlay */}
            <div className="hidden md:block relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={images[3]}
                alt={`${resort.name} 4`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                <span className="text-card text-sm font-medium">+12 фото</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 min-w-0">
            {/* Title Block */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                  {resort.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-foreground">4.8</span>
                  <span className="text-sm text-muted-foreground">(124 отзыва)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance leading-tight">
                {resort.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{resort.address}</span>
              </div>
            </div>

            {/* Quick Info Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-5 bg-card rounded-2xl border border-border">
              <div className="text-center">
                <Shield className="h-5 w-5 text-primary mx-auto mb-1.5" />
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Лицензия</p>
                <p className="text-xs font-semibold text-foreground mt-0.5 truncate">{resort.license}</p>
              </div>
              <div className="text-center">
                <Calendar className="h-5 w-5 text-primary mx-auto mb-1.5" />
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Сезон</p>
                <p className="text-xs font-semibold text-foreground mt-0.5 truncate">
                  {resort.seasonality.length === 1 ? resort.seasonality[0] : `${resort.seasonality.length} мес.`}
                </p>
              </div>
              <div className="text-center">
                <Bed className="h-5 w-5 text-primary mx-auto mb-1.5" />
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Номера</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">{resort.roomTypes.length} типов</p>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 text-primary mx-auto mb-1.5" />
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Программы</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">{resort.treatmentPrograms.length} курса</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-8 p-1 bg-secondary rounded-xl overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">О санатории</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {resort.name} - это {resort.category.toLowerCase()}, расположенный в {resort.region}.
                    Мы предлагаем широкий спектр лечебных и оздоровительных программ, включая{" "}
                    {resort.treatmentMethods.slice(0, 3).join(", ").toLowerCase()} и многое другое.
                    Наш санаторий оснащен всем необходимым для комфортного проживания и эффективного лечения.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    На территории имеется {resort.infrastructure.slice(0, 4).join(", ").toLowerCase()}.
                    Мы обеспечиваем {resort.mealOptions[0]?.toLowerCase()} питание с учетом индивидуальных потребностей каждого гостя.
                  </p>
                </div>

                {/* Infrastructure */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Инфраструктура
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {resort.infrastructure.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 bg-card rounded-xl border border-border">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meals */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-accent" />
                    Питание
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resort.mealOptions.map((meal, i) => (
                      <span key={i} className="px-4 py-2.5 bg-card border border-border rounded-xl text-sm text-foreground">
                        {meal}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Documents */}
                <div className="p-6 bg-secondary/60 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    Необходимые документы
                  </h3>
                  <div className="space-y-2.5">
                    {resort.requiredDocuments.map((doc, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FileCheck className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "medical" && (
              <div className="space-y-8">
                {/* Indications */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Показания к лечению
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {resort.indications.map((item, i) => (
                      <span key={i} className="px-4 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contraindications */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Противопоказания
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {resort.contraindications.map((item, i) => (
                      <span key={i} className="px-4 py-2.5 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Treatment Methods */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    Методы лечения
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {resort.treatmentMethods.map((method, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">{i + 1}</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seasonality */}
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Сезонность
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resort.seasonality.map((s, i) => (
                      <Badge key={i} variant="secondary" className="rounded-full px-3.5 py-1.5 text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "accommodation" && (
              <div className="space-y-8">
                {/* Room Types */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                    <Bed className="h-5 w-5 text-accent" />
                    Типы номеров
                  </h2>
                  <div className="space-y-3">
                    {resort.roomTypes.map((type, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Bed className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{type}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {type === "Люкс" || type === "Апартаменты" ? "Премиум класс" :
                               type === "Полулюкс" ? "Улучшенный номер" :
                               type === "Коттедж" ? "Отдельное проживание" : "Стандартное размещение"}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Amenities */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Удобства в номере
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    {resort.roomAmenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 bg-card rounded-xl border border-border">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "programs" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  Программы лечения
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {resort.treatmentPrograms.map((program, i) => {
                    const parts = program.split(". ")
                    const title = parts[0] || program
                    const description = parts.slice(1).join(". ") || "Подробности уточняйте при бронировании."
                    return (
                      <AccordionItem
                        key={i}
                        value={`program-${i}`}
                        className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
                      >
                        <AccordionTrigger className="py-5 hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-semibold text-foreground">{title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 pl-14">
                          <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
                          <div className="flex flex-wrap gap-2">
                            {resort.treatmentMethods.slice(0, 4).map((m, j) => (
                              <Badge key={j} variant="secondary" className="rounded-full text-xs">
                                {m}
                              </Badge>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            )}

            {/* FAQ Section */}
            <div className="mt-12 pt-10 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">Частые вопросы</h2>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="faq-1" className="border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                    Как добраться до санатория?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    Санаторий расположен по адресу: {resort.address}. Вы можете добраться на личном транспорте или воспользоваться трансфером от санатория (уточняйте при бронировании).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                    Какие документы нужны для заезда?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    Для заезда вам потребуются: {resort.requiredDocuments.join(", ")}.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                    Есть ли скидки на длительное проживание?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {resort.discount > 0
                      ? `Да, в настоящее время действует скидка ${resort.discount}%. Для получения дополнительной информации свяжитесь с нами.`
                      : "Для информации о скидках и специальных предложениях свяжитесь с нами по телефону."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Right Column - Sticky Booking Card */}
          <div className="lg:w-[380px] shrink-0">
            <div className="lg:sticky lg:top-20">
              <div className="bg-card rounded-2xl border border-border shadow-lg shadow-foreground/5 overflow-hidden">
                {/* Price Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-foreground">
                      {resort.priceFrom.toLocaleString("ru-RU")}
                    </span>
                    <span className="text-muted-foreground">₸ / сутки</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    до {resort.priceTo.toLocaleString("ru-RU")} ₸ в зависимости от номера
                  </p>
                  {resort.discount > 0 && (
                    <div className="flex items-center gap-2 mt-3 p-2.5 bg-accent/10 rounded-lg">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">Скидка {resort.discount}% при раннем бронировании</span>
                    </div>
                  )}
                </div>

                {/* Quick Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Категория</span>
                    <span className="font-medium text-foreground">{resort.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Регион</span>
                    <span className="font-medium text-foreground">{resort.region}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Питание</span>
                    <span className="font-medium text-foreground">{resort.mealOptions[0]}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Сезон</span>
                    <span className="font-medium text-foreground">
                      {resort.seasonality.length === 1 ? resort.seasonality[0] : `${resort.seasonality.length} мес.`}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  <Button className="w-full rounded-xl h-12 text-base font-semibold gap-2">
                    <Phone className="h-4 w-4" />
                    Забронировать
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl h-12 text-base bg-transparent">
                    Задать вопрос
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 p-3.5 bg-secondary rounded-xl">
                    <Shield className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-foreground">Лицензированный объект</p>
                      <p className="text-[11px] text-muted-foreground">{resort.license}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Mini Card */}
              <div className="mt-4 p-5 bg-card rounded-2xl border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Нужна помощь?</p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Наши специалисты помогут подобрать оптимальную программу лечения и ответят на все ваши вопросы.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1 rounded-lg text-xs gap-1.5">
                    <Phone className="h-3.5 w-3.5" />
                    Позвонить
                  </Button>
                  <Button size="sm" variant="secondary" className="flex-1 rounded-lg text-xs">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Санатории Казахстана. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}
