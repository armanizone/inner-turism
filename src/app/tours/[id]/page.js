import React from "react";
import {
  Menu,
  MapPin,
  Clock,
  Star,
  StarHalf,
  Star as StarOutline,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        <main className="flex flex-col flex-1 items-center px-4 pt-20">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 py-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-2/3">
                <div
                  className="w-full h-96 rounded-xl bg-center bg-cover"
                  data-alt="Впечатляющие скальные образования и виды на Чарынский каньон"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1UHBt_RRDl-t8lgnWXzZh5JH1nHHykd7MKbc3q0fu4wwfDkXOGCQ6NeoBi9yxkah_UWeHa5AzpQhuOsieh5waXoC4lV0z2r-sHQKiVy0MNFqbYy_fM_q-3jwuIgnOXSOSEcOs0IRfgZA1CVcqJIpPyi9Bz9kAkwGzbJ1LufcRjMPMaaFrcMtTzyuIIX7GGyf6KbUOPGiWL-KFGh2I6qG7mN5MI92qDOrndBe7rDoXH_S5l6ZPzSbQsgqS7vbtgKCtdx-Hq-gcd-I")',
                  }}
                />
                <div className="mt-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#111813]">
                    Открытие Чарынского каньона
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-[#61896f] mt-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Алматинская область</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>4 дня</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                        <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                        <StarHalf className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                      </div>
                      <span className="text-sm">4.7 (128 отзывов)</span>
                    </div>
                  </div>
                  <div className="mt-8 prose max-w-none text-[#111813]">
                    <h2 className="text-2xl font-bold">Обзор тура</h2>
                    <p className="mt-4">
                      Отправьтесь в незабываемое путешествие в Чарынский каньон, который часто называют «Гранд-Каньон Казахстана». Это захватывающее природное чудо, сформированное рекой Чарын, простирается на 154 километра и поражает своими яркими, красочными скальными образованиями высотой до 300 метров.
                    </p>
                    <p>
                      В нашем ознакомительном туре вы посетите самые живописные части каньона, включая знаменитую «Долину замков». У вас будет достаточно времени для прогулок, захватывающих фотографий и полного погружения в драматические пейзажи. Этот тур идеально подходит для любителей природы, фотографов и всех, кто ищет приключения в одном из самых узнаваемых мест Казахстана.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-[#111813]">
                      Программа тура
                    </h2>
                    <div className="mt-4 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                            1
                          </div>
                          <div className="w-px h-full bg-gray-200" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#111813]">
                            День 1: Отправление и Долина замков
                          </h3>
                          <p className="text-[#61896f] mt-1">
                            Отправление из Алматы и переезд в Чарынский каньон. По прибытии мы начнем поход по невероятной Долине замков. Разобьём лагерь для ночевки под звёздами.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                            2
                          </div>
                          <div className="w-px h-full bg-gray-200" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#111813]">
                            День 2: Исследование каньона
                          </h3>
                          <p className="text-[#61896f] mt-1">
                            Продолжаем исследование каньона, открывая скрытые тропы и уникальные смотровые площадки. Узнаем о геологии и истории местности от нашего опытного гида.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="font-bold text-[#111813]">
                            День 3: Возвращение в Алматы
                          </h3>
                          <p className="text-[#61896f] mt-1">
                            После утренней прогулки и завтрака собираем лагерь и отправляемся в живописный путь обратно в Алматы, прибытие вечером.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-[#111813]">
                      Галерея
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6x2tfEIiUnSHECM-nS4idhPlv_YlzQwWWlvNE4MxE_GqpshbDDucuAYJ-4aOrENPH1swLvLhdokSkN5oNvoWu3qqZTrHQ41dhVkFmCeZVVGSn-s12S93LGxttnPW_nVW6t8ug4MFll7nRnN-TPRfy6BOsrwczLSGiXd3Dhd1RAPk9vn8BYMsuOQ43DkuJzUPxpyaPF5Je_3ppvSHlKzmz-9bA-I3NX62cL7fI-18N8UJE_MOsRQoKAysEgrVVTrc8WFp7saGGTYI")',
                        }}
                      />
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb_7srx9s_sqt30185ObdfziqAyb4M6R6UbfXyRyfcyuhFyb7VU71uG6U7vjYwPTcDCWvSlED4Y_DAFDgmUytBZST31khRXDLKDV-DNdfZLU12sft7jGaYcB4Qe9MTdjs3mQAhBHrhJrid9OKykBHaNF1rY5-N2lB-zmxhb6mDZjCIr17jrhhrKusnikezcRJ7XzRpOwKZIxbVG5xF13wXifqUgSZEKfzZoQ7NbVtwT36XSRLAmBMgynSrpSiykavxDfyPAlDlVKI")',
                        }}
                      />
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb5vbIWmloVaNrheIqJi-uMqdTPjyKy5f1Rp4Z3k_e5PdhfqtkvAiFMJX4IQhxUuYWYAmRCfUonZeTMF0DQBYYXwkV4tQwD7__3W-DjGbB4XGL2Xsm0BzMndr_j23qbq-I1Iil3POptNtyX6YTl7JP2URTyCY_l9_3iwhK73hgv1Pgrp11AFFm_GFl6CRy4UcekX1_7TctbVOeMGDiHTvfofntOT01yBwxmmXHv9B-MVAe8i2CFkTMUkKXze6b0sl0GkkEh3rM1fw")',
                        }}
                      />
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYGVTzjQNv1kXIRpVqyC-Awb3GwdA8oosm7cAIOHzYozf_xMJoIUPKLXrkHQy2a29J-tkEHdj-hMKyaXtVzUfJDhVP_jGlvj1yMsYTGzITDfnAsSVn2aWd2k_DzdQqQfgIVBaSdoXeOoMh6NuLrEEuyH3Zw-gyllLqhTFPMjrfWDioR1NOtZWbOBTfBu63sIGzGUWxh4Qa_8uxaCyrZAXI845X1Y_yS6W7pnRb7uNR0C_p4hYSfDGSC8l5w16A6NWeST38kKwVfaU")',
                        }}
                      />
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApyIJL4-s6xKT8GN9_hjtcQu8zR723UjMzj-0bCyGd8cefNZMLGEEAtg9Ab3hwZLrJR-IDQqIXssh-5F0-beXcTZRh4z4RWvU_XE12GAZFazNR3oJX6zNVeEaVou5-3pDUpAv0TsATXIgcc1XZWKq1cG8xelIWGhD9JNDqNYZuLwwTaOorJHJ52LDSIbiGcdrHR2dM7CObgHiLXHKPWg076UYrsz4jzdseXDBlI4D1fL9gtFlkxclgnLQV7GTm4RCMQNI90Hz8zJ0")',
                        }}
                      />
                      <div className="aspect-square bg-black rounded-lg flex items-center justify-center text-white font-bold">
                        +5 ещё
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-[#111813]">
                      Отзывы клиентов
                    </h2>
                    <div className="flex flex-col gap-6 mt-4">
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                          </div>
                        </div>
                        <p className="mt-2 text-[#111813]">
                          «Абсолютно нереальный опыт! Виды — просто фантастика. Наш гид был очень знающим и сделал поездку интересной и безопасной. Очень рекомендую!»
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#61896f]">
                          - Алекс Джонсон
                        </p>
                      </div>
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            <StarOutline className="w-4 h-4 text-yellow-500" />
                          </div>
                        </div>
                        <p className="mt-2 text-[#111813]">
                          «Каньон величественен. Кемпинг был немного слишком «дикий» для меня, но пейзажи это компенсировали. Обязательно для любителей приключений!»
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#61896f]">
                          - Мария Гарсия
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f0f4f2] flex flex-col gap-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-bold text-[#111813]">
                      $180
                    </span>
                    <span className="text-sm text-[#61896f]">/ человек</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-bold text-[#111813]">
                      Что включено
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-[#61896f]">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Трансфер из Алматы
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Опытный гид
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Всё питание во время тура
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Кемпинговое оборудование
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-gray-400" />
                        Личное туристическое страхование
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-medium text-[#111813]"
                        htmlFor="tour-date"
                      >
                        Выберите дату
                      </label>
                      <input
                        className="form-input w-full rounded-lg border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm"
                        id="tour-date"
                        type="date"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-medium text-[#111813]"
                        htmlFor="tour-guests"
                      >
                        Количество гостей
                      </label>
                      <input
                        className="form-input w-full rounded-lg border-[#e2e8f0] focus:border-primary focus:ring-primary/50 text-sm"
                        id="tour-guests"
                        min={1}
                        type="number"
                        defaultValue={1}
                      />
                    </div>
                  </div> 
                  <Button>
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
