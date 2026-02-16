"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarCn } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Plane,
  MapPin,
  Calendar,
  Moon,
  Users,
  Search,
  X,
  ChevronDown,
  Plus,
  Star,
  ChevronDownIcon,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";

// Remove react-datepicker import
// import DatePicker from "react-datepicker";

const cities = [
  "Весь Казахстан",
  "Астана",
  "Алматы",
  "Актау",
  "Атырау",
  "Актобе",
  "Уральск",
  "Костанай",
  "Петропавловск",
  "Кокшетау",
  "Павлодар",
  "Семей",
  "Усть-Каменогорск",
  "Караганды",
  "Жезказган",
  "Кызылорда",
  "Конаев",
  "Талдыкорганан",
  "Туркистан",
  "Тараз",
  "Шымкент",
];

const resorts = [
  "Любой курорт",
  "Астана",
  "Алматы",
  "Актау",
  "Алаколь",
  "Балхаш",
  "Баянаул",
  "Боровое",
  "Бухтарма",
  "Зайсан",
  "Катон-Карагай",
  "Капчагай",
  "Мангышлак (Мангистау)",
  "Сарыагаш",
  "Туркестан",
];

const holidayTypesArray = [
  "Все виды",
  "Экскурсионные тур",
  "Культурно-познавательный тур",
  "Горнолыжный отдых",
  "Семейный отдых (Отдых с детьми)",
  "Спортивно-активный отдых",
  "Оздоровительный отдых",
  "Пляжный отдых",
  "Религиозно-паломнический тур",
  "Деловой тур",
  "Шоп туры",
  "Пассивный отдых",
  "Языковые туры (казахский, английский)",
  "Производственный тур",
  "Тимбилдинг",
  "Этно тур «Өлке тану»",
  "Ремесленный тур",
  "Фестивальный и событийный тур",
  "Свадебный тур",
  "Юбилейный тур",
  "Городской тур",
];

const hotelType = [
  "Любой",
  "Отель",
  "Пансионат",
  "Гостевой дом",
  "Апартаменты",
  "Вилла",
  "Хостел",
];

const rationType = [
  "Любое",
  "BB - Только завтрак",
  "HB - Завтрак, ужин",
  "FB - Полный пансион",
  "AI - Все включено",
  "UAI - Ультра все включено",
];

const budgetCurrencies = ["KZT "];

const hotels = [
  { name: "1207 HOTEL (EX. ALZER)", stars: 4 },
  { name: "A GOOD LIFE UTOPIA FAMILY RESORT", stars: 5 },
  { name: "ACANTHUS & CENNET BARUT COLLECTION", stars: 5 },
  { name: "ACAR", stars: 4 },
  { name: "ACRA HOTEL", stars: 4 },
  {
    name: "ADA JULIAN MARMARIS ADULTS ONLY 16+(EX. JULIAN MARMARIS)",
    stars: 4,
  },
];

export function ToursFilter() {
  const [searchType, setSearchType] = React.useState("tours");
  const [hotelClass, setHotelClass] = React.useState(4);

  const [charterOnly, setCharterOnly] = React.useState(true);
  const [hotelGuarantee, setHotelGuarantee] = React.useState(false);
  const [budgetOpen, setBudgetOpen] = React.useState(false);
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(null);

  const [holidayTypes, setHolidayTypes] = React.useState([]);

  const handleHolidayCheck = (checked, type) => {
    if (checked) {
      if (type === "Все виды") {
        setHolidayTypes([...holidayTypesArray]);
      } else {
        const allExceptAllTypes = holidayTypesArray.filter(
          (r) => r !== "Все виды"
        );
        const selected = [...holidayTypes, type];
        const uniqueSelected = Array.from(new Set(selected));
        if (
          uniqueSelected.length === allExceptAllTypes.length &&
          allExceptAllTypes.every((opt) => uniqueSelected.includes(opt))
        ) {
          setHolidayTypes([...allExceptAllTypes, "Все виды"]);
        } else {
          setHolidayTypes([...holidayTypes, type]);
        }
      }
    } else {
      if (type === "Все виды") {
        setHolidayTypes([]);
      } else {
        setHolidayTypes(
          holidayTypes.filter((r) => r !== type && r !== "Все виды")
        );
      }
    }
  };

  // Helper: disabled function for shadcn Calendar
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const min = new Date(today);
    min.setDate(today.getDate() + 3);
    const max = new Date(today);
    max.setDate(today.getDate() + 24);
    return date < min || date > max;
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      {/* Top Header Section */}
      <div className="bg-primary rounded-lg p-6 space-y-4">
        {/* Radio Group */}
        <RadioGroup
          value={searchType}
          onValueChange={setSearchType}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="tours"
              id="tours"
              className="border-white text-white"
            />
            <Label
              htmlFor="tours"
              className="text-white font-medium cursor-pointer"
            >
              Туры с перелетом
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="hotels"
              id="hotels"
              className="border-white text-white"
            />
            <Label
              htmlFor="hotels"
              className="text-white font-medium cursor-pointer"
            >
              Отели
            </Label>
          </div>
        </RadioGroup>

        {/* Search Fields */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-white rounded-lg p-4">
          {/* Departure City */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase">
              <Plane className="h-3 w-3" />
              Город вылета
            </div>
            <Select defaultValue={"Весь Казахстан"}>
              <SelectTrigger className="w-[200px] bg-white shadow-sm">
                <SelectValue placeholder="Тип отеля" />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((q, i) => {
                  return (
                    <SelectItem key={q} value={q}>
                      {q}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Country */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase">
              <MapPin className="h-3 w-3" />
              Курорты
            </div>
            <Select defaultValue={"Любой курорт"}>
              <SelectTrigger className="w-[200px] bg-white shadow-sm">
                <SelectValue placeholder="Тип отеля" />
              </SelectTrigger>
              <SelectContent>
                {resorts?.map((q, i) => {
                  return (
                    <SelectItem key={q} value={q}>
                      {q}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Dates */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase">
              <Calendar className="h-3 w-3" />
              <span>Даты вылета</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[200px] justify-start text-left font-normal"
                >
                  {selectedDate ? (
                    format(selectedDate, "dd.MM.yyyy")
                  ) : (
                    <span className="text-gray-400">Выберите дату</span>
                  )}
                  <ChevronDownIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0" align="start">
                <CalendarCn
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={isDateDisabled}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Nights */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase">
              <Moon className="h-3 w-3" />
              Ночей
            </div>
            <div className="font-bold text-lg">6 - 14</div>
          </div>

          {/* Tourists */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase">
              <Users className="h-3 w-3" />
              Туристы
            </div>
            <div className="font-bold text-lg">2 взрослых</div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Hotel Class */}
        <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border">
          <span className="text-sm font-medium whitespace-nowrap">
            Класс отеля
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 cursor-pointer ${
                  star <= hotelClass
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
                onClick={() => setHotelClass(star)}
              />
            ))}
          </div>
        </div>

        {/* Hotel Type */}
        <Select defaultValue="any">
          <SelectTrigger className="w-[200px] bg-white shadow-sm">
            <SelectValue placeholder="Тип отеля" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Любой тип</SelectItem>
            <SelectItem value="resort">Курорт</SelectItem>
            <SelectItem value="hotel">Отель</SelectItem>
            <SelectItem value="apartment">Апартаменты</SelectItem>
          </SelectContent>
        </Select>

        {/* Meal Plan */}
        <Select defaultValue="any">
          <SelectTrigger className="w-[200px] bg-white shadow-sm">
            <SelectValue placeholder="Питание" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Любое</SelectItem>
            <SelectItem value="breakfast">Завтрак</SelectItem>
            <SelectItem value="half">Полупансион</SelectItem>
            <SelectItem value="full">Полный пансион</SelectItem>
            <SelectItem value="all">Все включено</SelectItem>
          </SelectContent>
        </Select>

        {/* Rating Filter */}
        <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm border">
          <span className="text-xs text-gray-500 uppercase">Рейтинг</span>
          <span className="font-medium">4,0 и более</span>
          {/* <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
            <X className="h-3 w-3" />
          </Button> */}
        </div>

        {/* Advanced Filters */}
        <Select defaultValue="none">
          <SelectTrigger className="w-[220px] bg-white shadow-sm">
            <SelectValue placeholder="Расширенные фильтры" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Нет</SelectItem>
            <SelectItem value="pool">С бассейном</SelectItem>
            <SelectItem value="beach">На пляже</SelectItem>
            <SelectItem value="spa">С СПА</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Sidebar - Resorts */}
        <div className="bg-white rounded-lg p-4 shadow-sm border h-fit">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-2">
              {holidayTypesArray.map((type) => (
                <div
                  key={type}
                  className="flex items-center justify-between p-2"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={holidayTypes.includes(type)}
                      onCheckedChange={(checked) =>
                        handleHolidayCheck(checked, type)
                      }
                    />
                    <Label
                      htmlFor={type}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {type}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Center - Hotel List */}
        <div className="bg-white rounded-lg p-4 shadow-sm border lg:col-span-2">
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="ВВЕДИТЕ НАЗВАНИЕ ОТЕЛЯ"
              className="pl-10 uppercase placeholder:text-gray-400"
            />
          </div>

          {/* Hotel List */}
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 py-2 hover:bg-gray-50 rounded px-2"
                >
                  <Checkbox id={`hotel-${index}`} />
                  <Label
                    htmlFor={`hotel-${index}`}
                    className="flex-1 cursor-pointer text-sm"
                  >
                    {hotel.name} {hotel.stars}*
                  </Label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Bottom Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Budget Collapsible */}
        <Collapsible open={budgetOpen} onOpenChange={setBudgetOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between bg-white shadow-sm"
            >
              <span>Бюджет (РУБ)</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  budgetOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <div className="bg-white p-4 rounded-lg border shadow-sm space-y-2">
              <Input type="number" placeholder="От" />
              <Input type="number" placeholder="До" />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Charter Only Checkbox */}
        <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm border">
          <Checkbox
            id="charter"
            checked={charterOnly}
            onCheckedChange={(checked) => setCharterOnly(checked)}
          />
          <Label htmlFor="charter" className="font-medium cursor-pointer">
            Только чартер
          </Label>
        </div>

        {/* Hotel Guarantee Checkbox */}
        <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm border">
          <Checkbox
            id="guarantee"
            checked={hotelGuarantee}
            onCheckedChange={(checked) => setHotelGuarantee(checked)}
          />
          <Label htmlFor="guarantee" className="font-medium cursor-pointer">
            Гарантия мест в отеле
          </Label>
        </div>

        {/* Search Button */}
        <Button className="w-full h-12 bg-primary text-white font-medium text-base shadow-sm">
          Найти туры
        </Button>
      </div>
    </div>
  );
}
