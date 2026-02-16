import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Link from "next/link";
import { ToursFilter } from "./tours-filter";
import InteractiveMap from "./(map)/interactive-map";
import { MapPin } from "lucide-react";
import { tours } from "./tours-data";
import { TourCard } from "./tour-card";

export const metadata = {
  title: "Туры",
  description: "Страница туров",
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
  ],
};

export default function ToursPage() {

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="max-w-6xl mx-auto w-full mt-8">
          <InteractiveMap />
        </div>
        

        <main className="flex flex-col flex-1 items-center px-4 pt-20">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
              <ToursFilter/>
            {/* <div className="flex flex-col lg:flex-row gap-6 pt-4 items-start">
              <div className="flex flex-col gap-4 w-full lg:w-1/4 p-4 bg-white rounded-xl shadow-sm border border-[#f0f4f2] lg:sticky lg:top-24">
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-search"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                  <input
                    className="form-input w-full rounded-full border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm pl-10 pr-4 py-2"
                    id="search"
                    placeholder="Поиск туров, направлений..."
                    type="search"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#111813] pt-2 border-t border-[#f0f4f2] mt-2">
                  Фильтры
                </h3>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-[#111813]"
                    htmlFor="tour-type"
                  >
                    Тип тура
                  </label>
                  <select
                    className="form-select w-full rounded-lg border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm"
                    id="tour-type"
                  >
                    <option>Все типы</option>
                    <option>Приключения</option>
                    <option>Культурные</option>
                    <option>Исторические</option>
                    <option>Природа и дикая жизнь</option>
                    <option>Городские туры</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#111813]">
                    Продолжительность
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        defaultChecked
                        className="form-radio rounded-full border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="duration"
                        type="radio"
                      />
                      <span>Любая</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-radio rounded-full border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="duration"
                        type="radio"
                      />
                      <span>1 - 3 дня</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-radio rounded-full border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="duration"
                        type="radio"
                      />
                      <span>4 - 7 дней</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-radio rounded-full border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="duration"
                        type="radio"
                      />
                      <span>8+ дней</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#111813]">
                    Диапазон цен
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-2 bg-[#e2e8f0] rounded-full appearance-none"
                      max={1000}
                      min={0}
                      step={50}
                      type="range"
                      defaultValue={500}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-[#61896f]">
                    <span>0$</span>
                    <span>1000$+</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
                  <Button>Применить фильтры</Button>
                  <Button variant="secondary">Сбросить</Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Поющие барханы Алтын-Эмеля на закате"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6x2tfEIiUnSHECM-nS4idhPlv_YlzQwWWlvNE4MxE_GqpshbDDucuAYJ-4aOrENPH1swLvLhdokSkN5oNvoWu3qqZTrHQ41dhVkFmCeZVVGSn-s12S93LGxttnPW_nVW6t8ug4MFll7nRnN-TPRfy6BOsrwczLSGiXd3Dhd1RAPk9vn8BYMsuOQ43DkuJzUPxpyaPF5Je_3ppvSHlKzmz-9bA-I3NX62cL7fI-18N8UJE_MOsRQoKAysEgrVVTrc8WFp7saGGTYI")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Приключение в Национальном парке Алтын-Эмель
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Испытайте поющие барханы и красочные горы в этом
                        уникальном пустынном парке.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $250
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Величественные скальные образования и виды Чарынского каньона"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1UHBt_RRDl-t8lgnWXzZh5JH1nHHykd7MKbc3q0fu4wwfDkXOGCQ6NeoBi9yxkah_UWeHa5AzpQhuOsieh5waXoC4lV0z2r-sHQKiVy0MNFqbYy_fM_q-3jwuIgnOXSOSEcOs0IRfgZA1CVcqJIpPyi9Bz9kAkwGzbJ1LufcRjMPMaaFrcMtTzyuIIX7GGyf6KbUOPGiWL-KFGh2I6qG7mN5MI92qDOrndBe7rDoXH_S5l6ZPzSbQsgqS7vbtgKCtdx-Hq-gcd-I")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Открытие Чарынского каньона
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Исследуйте величественные скалы и потрясающие виды
                        «Казахстанского Гранд Каньона».
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $180
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Зенковский собор в Алматы, красочный деревянный православный храм"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYGVTzjQNv1kXIRpVqyC-Awb3GwdA8oosm7cAIOHzYozf_xMJoIUPKLXrkHQy2a29J-tkEHdj-hMKyaXtVzUfJDhVP_jGlvj1yMsYTGzITDfnAsSVn2aWd2k_DzdQqQfgIVBaSdoXeOoMh6NuLrEEuyH3Zw-gyllLqhTFPMjrfWDioR1NOtZWbOBTfBu63sIGzGUWxh4Qa_8uxaCyrZAXI845X1Y_yS6W7pnRb7uNR0C_p4hYSfDGSC8l5w16A6NWeST38kKwVfaU")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Культурный тур по Алматы
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Погрузитесь в историю и яркую культуру южной столицы
                        Казахстана.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $150
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Чистейшие бирюзовые воды озера Кольсай, окружённые сосновыми лесами"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb_7srx9s_sqt30185ObdfziqAyb4M6R6UbfXyRyfcyuhFyb7VU71uG6U7vjYwPTcDCWvSlED4Y_DAFDgmUytBZST31khRXDLKDV-DNdfZLU12sft7jGaYcB4Qe9MTdjs3mQAhBHrhJrid9OKykBHaNF1rY5-N2lB-zmxhb6mDZjCIr17jrhhrKusnikezcRJ7XzRpOwKZIxbVG5xF13wXifqUgSZEKfzZoQ7NbVtwT36XSRLAmBMgynSrpSiykavxDfyPAlDlVKI")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Пеший тур на озёра Кольсай
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Прогуляйтесь по девственным лесам к кристально чистым
                        водам «Жемчужин Тянь-Шаня».
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $300
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Неземные пейзажи и подземные мечети Мангистау"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb5vbIWmloVaNrheIqJi-uMqdTPjyKy5f1Rp4Z3k_e5PdhfqtkvAiFMJX4IQhxUuYWYAmRCfUonZeTMF0DQBYYXwkV4tQwD7__3W-DjGbB4XGL2Xsm0BzMndr_j23qbq-I1Iil3POptNtyX6YTl7JP2URTyCY_l9_3iwhK73hgv1Pgrp11AFFm_GFl6CRy4UcekX1_7TctbVOeMGDiHTvfofntOT01yBwxmmXHv9B-MVAe8i2CFkTMUkKXze6b0sl0GkkEh3rM1fw")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Тайны Мангистау
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Откройте для себя неземные пейзажи, подземные мечети и
                        древние некрополи.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $450
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                  <Link
                    href="/tours/1"
                    className="flex flex-col gap-3 pb-3 rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Футуристическая архитектура города Астана с Байтереком"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApyIJL4-s6xKT8GN9_hjtcQu8zR723UjMzj-0bCyGd8cefNZMLGEEAtg9Ab3hwZLrJR-IDQqIXssh-5F0-beXcTZRh4z4RWvU_XE12GAZFazNR3oJX6zNVeEaVou5-3pDUpAv0TsATXIgcc1XZWKq1cG8xelIWGhD9JNDqNYZuLwwTaOorJHJ52LDSIbiGcdrHR2dM7CObgHiLXHKPWg076UYrsz4jzdseXDBlI4D1fL9gtFlkxclgnLQV7GTm4RCMQNI90Hz8zJ0")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Экскурсия по городу Астана
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Оцените футуристическую архитектуру и современные чудеса
                        столицы страны.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От $120
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </Link>
                </div>
                <Pagination className="mt-6">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div> */}

        {tours.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
              {"Ничего не найдено"}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {"Попробуйте изменить параметры фильтрации или поисковый запрос"}
            </p>
          </div>
        )}
          </div>
        </main>
      </div>
    </div>
  );
}
