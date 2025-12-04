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

export default function ResortsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-col flex-1 items-center px-4 pt-20">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
            <div className="flex flex-col lg:flex-row gap-6 p-4 items-start">
              <div className="flex flex-col gap-4 w-full lg:w-1/4 p-4 bg-white rounded-xl shadow-sm border border-[#f0f4f2] lg:sticky lg:top-24">
                <div className="relative w-full">
                  {/* Lucide Search Icon */}
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-search">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>
                  <input
                    className="form-input w-full rounded-full border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm pl-10 pr-4 py-2"
                    id="search"
                    placeholder="Поиск курортов..."
                    type="search"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#111813] pt-2 border-t border-[#f0f4f2] mt-2">
                  Фильтры
                </h3>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-[#111813]"
                    htmlFor="resort-type"
                  >
                    Тип курорта
                  </label>
                  <select
                    className="form-select w-full rounded-lg border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm"
                    id="resort-type"
                  >
                    <option>Все типы</option>
                    <option>Горнолыжный</option>
                    <option>СПА</option>
                    <option>Природа</option>
                    <option>Озеро</option>
                    <option>Горный</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#111813]">
                    Удобства
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-checkbox rounded border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="amenities"
                        type="checkbox"
                      />
                      <span>Бассейн</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-checkbox rounded border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="amenities"
                        type="checkbox"
                      />
                      <span>Бесплатный Wi-Fi</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-checkbox rounded border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="amenities"
                        type="checkbox"
                      />
                      <span>СПА и Wellness центр</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#111813]">
                      <input
                        className="form-checkbox rounded border-[#e2e8f0] text-primary focus:ring-primary/50"
                        name="amenities"
                        type="checkbox"
                      />
                      <span>Ресторан</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#111813]">
                    Ценовой диапазон
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
                    <span>0₸</span>
                    <span>1000₸+</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
                  <Button>
                    Применить фильтры
                  </Button>
                  <Button variant="secondary">
                    Сбросить
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                {/* <div className="flex justify-end mb-4">
                  <div className="inline-flex items-center bg-white rounded-full border border-[#f0f4f2] p-1 shadow-sm">
                    <button className="flex items-center justify-center gap-2 h-8 px-4 bg-primary/20 text-primary text-sm font-bold rounded-full">
                      <span className="text-base flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-grid">
                          <rect width="7" height="7" x="3" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="14" rx="1" />
                          <rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg>
                      </span>
                      <span>Сетка</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 h-8 px-4 text-[#61896f] text-sm font-medium rounded-full">
                      <span className="text-base flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="lucide lucide-map">
                          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
                          <line x1="9" y1="18" x2="9" y2="6" />
                          <line x1="15" y1="21" x2="15" y2="9" />
                        </svg>
                      </span>
                      <span>Карта</span>
                    </button>
                  </div>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Поющие барханы национального парка Алтын-Эмель на закате"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6x2tfEIiUnSHECM-nS4idhPlv_YlzQwWWlvNE4MxE_GqpshbDDucuAYJ-4aOrENPH1swLvLhdokSkN5oNvoWu3qqZTrHQ41dhVkFmCeZVVGSn-s12S93LGxttnPW_nVW6t8ug4MFll7nRnN-TPRfy6BOsrwczLSGiXd3Dhd1RAPk9vn8BYMsuOQ43DkuJzUPxpyaPF5Je_3ppvSHlKzmz-9bA-I3NX62cL7fI-18N8UJE_MOsRQoKAysEgrVVTrc8WFp7saGGTYI")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Горнолыжный курорт Шымбулак
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Ключевое горнолыжное направление в горах Тянь-Шаня с захватывающими видами.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 120$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Впечатляющие скальные образования и виды на Чарынский каньон"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1UHBt_RRDl-t8lgnWXzZh5JH1nHHykd7MKbc3q0fu4wwfDkXOGCQ6NeoBi9yxkah_UWeHa5AzpQhuOsieh5waXoC4lV0z2r-sHQKiVy0MNFqbYy_fM_q-3jwuIgnOXSOSEcOs0IRfgZA1CVcqJIpPyi9Bz9kAkwGzbJ1LufcRjMPMaaFrcMtTzyuIIX7GGyf6KbUOPGiWL-KFGh2I6qG7mN5MI92qDOrndBe7rDoXH_S5l6ZPzSbQsgqS7vbtgKCtdx-Hq-gcd-I")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Rixos Боровое
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Роскошный озёрный велнес-ретрит в самом сердце &quot;Казахской Швейцарии&quot;.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 350$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Вознесенский собор в Алматы — красочный деревянный православный храм"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYGVTzjQNv1kXIRpVqyC-Awb3GwdA8oosm7cAIOHzYozf_xMJoIUPKLXrkHQy2a29J-tkEHdj-hMKyaXtVzUfJDhVP_jGlvj1yMsYTGzITDfnAsSVn2aWd2k_DzdQqQfgIVBaSdoXeOoMh6NuLrEEuyH3Zw-gyllLqhTFPMjrfWDioR1NOtZWbOBTfBu63sIGzGUWxh4Qa_8uxaCyrZAXI845X1Y_yS6W7pnRb7uNR0C_p4hYSfDGSC8l5w16A6NWeST38kKwVfaU")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Горный Лодж &quot;Кольсайские озёра&quot;
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Деревенский уют и невероятные возможности для хайкинга у чистейших озёр Кольсай.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 90$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Чистейшая бирюзовая вода Кольсайского озера в окружении сосновых лесов"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb_7srx9s_sqt30185ObdfziqAyb4M6R6UbfXyRyfcyuhFyb7VU71uG6U7vjYwPTcDCWvSlED4Y_DAFDgmUytBZST31khRXDLKDV-DNdfZLU12sft7jGaYcB4Qe9MTdjs3mQAhBHrhJrid9OKykBHaNF1rY5-N2lB-zmxhb6mDZjCIr17jrhhrKusnikezcRJ7XzRpOwKZIxbVG5xF13wXifqUgSZEKfzZoQ7NbVtwT36XSRLAmBMgynSrpSiykavxDfyPAlDlVKI")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        Санаторий и СПА Сарыагаш
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Известен своими целебными минеральными водами и комплексными программами оздоровления.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 150$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
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
                        Ой-Карагай Лесная Сказка
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Круглогодичный горный курорт с активностями от катания на лыжах до верховой езды.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 180$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      data-alt="Футуристическая архитектура Астаны с видом на Байтерек"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApyIJL4-s6xKT8GN9_hjtcQu8zR723UjMzj-0bCyGd8cefNZMLGEEAtg9Ab3hwZLrJR-IDQqIXssh-5F0-beXcTZRh4z4RWvU_XE12GAZFazNR3oJX6zNVeEaVou5-3pDUpAv0TsATXIgcc1XZWKq1cG8xelIWGhD9JNDqNYZuLwwTaOorJHJ52LDSIbiGcdrHR2dM7CObgHiLXHKPWg076UYrsz4jzdseXDBlI4D1fL9gtFlkxclgnLQV7GTm4RCMQNI90Hz8zJ0")',
                      }}
                    />
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <p className="text-[#111813] text-lg font-bold leading-normal">
                        The Ritz-Carlton, Алматы
                      </p>
                      <p className="text-[#61896f] text-sm font-normal leading-normal">
                        Абсолютная роскошь с панорамными видами на город и горы, а также изысканным СПА.
                      </p>
                      <p className="text-[#111813] text-base font-semibold leading-normal mt-auto">
                        От 450$ / сутки
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
                {/* Pagination with Lucide chevrons */}
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
