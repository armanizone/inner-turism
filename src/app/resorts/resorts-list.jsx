"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { ResortCard } from "./resort-card"
import { AiResortWizard } from "./ai-resort-wizard"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { regions, categories, indications } from "./resort-data"
import {
  Search,
  SlidersHorizontal,
  X,
  Plus,
  Sparkles,
  ArrowUp,
  MapPin,
  Tag,
  Heart,
  Banknote,
} from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const suggestedQueries = [
  { icon: Heart, text: "Лечение опорно-двигательного аппарата" },
  { icon: MapPin, text: "Санатории в Алматы" },
  { icon: Tag, text: "Санатории со скидкой" },
  { icon: Banknote, text: "Бюджетные до 30 000 ₸" },
]

export function ResortsList({ resorts }) {
  const [search, setSearch] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIndication, setSelectedIndication] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 400000])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [showWizard, setShowWizard] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`
    }
  }, [search])

  const filteredResorts = useMemo(() => {
    return resorts.filter((resort) => {
      const searchLower = search.toLowerCase()
      const matchesSearch =
        !search ||
        resort.name.toLowerCase().includes(searchLower) ||
        resort.address.toLowerCase().includes(searchLower) ||
        resort.region.toLowerCase().includes(searchLower) ||
        resort.category.toLowerCase().includes(searchLower) ||
        resort.indications.some((ind) => ind.toLowerCase().includes(searchLower)) ||
        resort.treatmentMethods.some((m) => m.toLowerCase().includes(searchLower)) ||
        resort.infrastructure.some((inf) => inf.toLowerCase().includes(searchLower))

      const matchesRegion =
        selectedRegion === "all" || resort.region === selectedRegion

      const matchesCategory =
        selectedCategory === "all" || resort.category === selectedCategory

      const matchesIndication =
        selectedIndication === "all" ||
        resort.indications.includes(selectedIndication)

      const matchesPrice =
        resort.priceFrom >= priceRange[0] && resort.priceFrom <= priceRange[1]

      return matchesSearch && matchesRegion && matchesCategory && matchesIndication && matchesPrice
    })
  }, [resorts, search, selectedRegion, selectedCategory, selectedIndication, priceRange])

  const activeFiltersCount = [
    selectedRegion !== "all",
    selectedCategory !== "all",
    selectedIndication !== "all",
    priceRange[0] > 0 || priceRange[1] < 400000,
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedRegion("all")
    setSelectedCategory("all")
    setSelectedIndication("all")
    setPriceRange([0, 400000])
    setSearch("")
  }

  const handleSuggestionClick = (text) => {
    setSearch(text)
    textareaRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
    }
  }

  return (
    <div>
      {/* AI Search Block / Wizard */}
      <div className="mb-10">
        {showWizard ? (
          <AiResortWizard onClose={() => setShowWizard(false)} />
        ) : (
          <>
            <div
              className={`relative rounded-[28px] bg-card border-2 transition-all duration-500 ${
                isFocused
                  ? "border-primary/40 shadow-[0_0_0_4px_oklch(0.38_0.08_145/0.08),0_20px_60px_-10px_oklch(0.38_0.08_145/0.12)]"
                  : "border-border shadow-lg shadow-foreground/5"
              }`}
            >
              {/* Top glow accent */}
              <div
                className={`absolute -top-px left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary transition-all duration-500 ${
                  isFocused ? "w-2/3 opacity-100" : "w-0 opacity-0"
                }`}
              />

              <div className="p-6 pb-4">
                {/* Label */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-xl transition-colors duration-300 ${isFocused ? "bg-primary/15" : "bg-muted"}`}>
                    <Sparkles className={`h-4 w-4 transition-colors duration-300 ${isFocused ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Elim-AI</span>
                    <span className="text-sm text-muted-foreground ml-1.5">/ подбор санаториев по заболеваниям и патологиям</span>
                  </div>
                </div>

                {/* Textarea */}
                {/* <textarea
                  ref={textareaRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="Опишите, что вы ищете... Например: «санаторий с бассейном для лечения суставов в Алматы»"
                  rows={3}
                  className="w-full resize-none bg-transparent text-foreground text-lg leading-relaxed placeholder:text-muted-foreground/50 focus:outline-none"
                /> */}

                
            {/* CTA Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => setShowWizard(true)}
                type="button"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Подобрать санаторий</span>
                <ArrowUp className="h-4 w-4 rotate-45 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </button>
            </div>
              </div>

              {/* <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-border/60">
                <div className="flex items-center gap-2 flex-wrap">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="h-9 rounded-full bg-secondary/80 border-0 text-xs gap-1.5 px-3.5 w-auto">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <SelectValue placeholder="Регион" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все регионы</SelectItem>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-9 rounded-full bg-secondary/80 border-0 text-xs gap-1.5 px-3.5 w-auto">
                      <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                      <SelectValue placeholder="Тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 rounded-full gap-1.5 px-3.5 text-xs text-muted-foreground hover:text-foreground"
                      >
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        <span>Фильтры</span>
                        {activeFiltersCount > 0 && (
                          <span className="flex items-center justify-center h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                            {activeFiltersCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Расширенные фильтры</SheetTitle>
                      </SheetHeader>
                      <div className="space-y-8 mt-8">
                        <div className="space-y-3">
                          <Label className="text-sm font-medium">Показания</Label>
                          <Select value={selectedIndication} onValueChange={setSelectedIndication}>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Выберите показание" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Все показания</SelectItem>
                              {indications.map((ind) => (
                                <SelectItem key={ind} value={ind}>
                                  {ind}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-sm font-medium">Цена за сутки</Label>
                          <Slider
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value)}
                            min={0}
                            max={400000}
                            step={5000}
                            className="mt-3"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{priceRange[0].toLocaleString("ru-RU")} &#8376;</span>
                            <span>{priceRange[1].toLocaleString("ru-RU")} &#8376;</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full rounded-xl bg-transparent"
                          onClick={clearFilters}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Сбросить все фильтры
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="flex items-center gap-2">
                  {search && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 rounded-full px-3 text-xs text-muted-foreground"
                      onClick={() => setSearch("")}
                    >
                      <X className="h-3.5 w-3.5 mr-1" />
                      Очистить
                    </Button>
                  )}
                  <button
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    type="button"
                  >
                    {search ? (
                      <ArrowUp className="h-4.5 w-4.5" />
                    ) : (
                      <Search className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>
              </div> */}
            </div>


            {/* Suggestion chips */}
            {!search && (
              <div className="flex flex-wrap items-center gap-2 mt-5 px-2">
                <span className="text-xs text-muted-foreground mr-1">Попробуйте:</span>
                {suggestedQueries.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSuggestionClick(q.text)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <q.icon className="h-3.5 w-3.5" />
                    {q.text}
                  </button>
                ))}
              </div>
            )}

            {/* Active filter pills */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4 px-2">
                <span className="text-xs text-muted-foreground mr-1">Активные фильтры:</span>
                {selectedRegion !== "all" && (
                  <button
                    onClick={() => setSelectedRegion("all")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {selectedRegion}
                    <X className="h-3 w-3" />
                  </button>
                )}
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {selectedCategory}
                    <X className="h-3 w-3" />
                  </button>
                )}
                {selectedIndication !== "all" && (
                  <button
                    onClick={() => setSelectedIndication("all")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {selectedIndication.length > 25
                      ? `${selectedIndication.substring(0, 25)}...`
                      : selectedIndication}
                    <X className="h-3 w-3" />
                  </button>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 400000) && (
                  <button
                    onClick={() => setPriceRange([0, 400000])}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {priceRange[0].toLocaleString("ru-RU")} - {priceRange[1].toLocaleString("ru-RU")} &#8376;
                    <X className="h-3 w-3" />
                  </button>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 ml-1"
                >
                  Сбросить все
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Results header + Add button */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-muted-foreground">
            Найдено{" "}
            <span className="font-semibold text-foreground">{filteredResorts.length}</span>{" "}
            санатори{filteredResorts.length === 1 ? "й" : filteredResorts.length < 5 ? "я" : "ев"}
          </p>
        </div>
        {/* <Button asChild className="rounded-full px-6 gap-2 h-10">
          <Link href="/create">
            <Plus className="h-4 w-4" />
            Добавить санаторий
          </Link>
        </Button> */}
      </div>

      {/* Resort Grid */}
      {filteredResorts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-muted mb-6">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Ничего не найдено</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
            Попробуйте изменить запрос или сбросить фильтры для просмотра всех доступных санаториев
          </p>
          <Button variant="outline" onClick={clearFilters} className="rounded-full bg-transparent px-6">
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  )
}
