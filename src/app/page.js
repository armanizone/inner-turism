import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Mountain,
  Users,
  Footprints,
  MapPin,
  Hiking,
  Landmark,
  Landmark as Fort,
  Utensils,
  BookOpenCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden font-display">
      <main className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="py-10">
            <div className="w-full @container">
              <div className="@[480px]:p-0">
                <div
                  className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-start justify-end p-8 md:p-12 text-left"
                  data-alt="Потрясающий вид на Кольсайское озеро в Казахстане, окружённое густыми зелёными лесами и горами."
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC296WHsrpuf2v9F9keGzQdWU2fJgzS69fDeqr2yo_8vsvJqBVyboUyODW44ZF8x4joTYQJu5tp5wTZO5s9-3rHX1sisPg1OBdiJGdkdVZikcWhG_YX4qobSAtuJT4lL6k0YHgw43xMvEikeTPJ9M6I0lB_yxrIamikKiw5o9aDwgMasr9oVKADtah_bKsyC46W0cY3jlmjr_7WsTT6Wjixa2xevqrwc1l1clK9PguLinRyF8-hbA7hg7V8lgdI_BQ2xWnO_wq9B7c")',
                  }}
                >
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                      Казахстан: страна чудес
                    </h1>
                    <h2 className="text-white/90 text-base font-normal leading-relaxed sm:text-lg">
                      Здесь встречаются древняя история и футуристические города
                      среди эпических пейзажей. Ваше путешествие в сердце
                      Евразии начинается сейчас.
                    </h2>
                  </div>
                  <Button>
                    <span>Начать исследование</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 text-center">
            <h2 className="text-charcoal-gray dark:text-background-light text-3xl md:text-4xl font-bold tracking-tight">
              Добро пожаловать в страну Великой степи
            </h2>
            <p className="text-charcoal-gray/80 dark:text-background-light/80 text-lg font-normal leading-relaxed mt-4 max-w-4xl mx-auto">
              Казахстан — страна разительных контрастов и бескрайних
              приключений. От заснеженных вершин Тянь-Шаня до бескрайних золотых
              равнин, от следов Великого шёлкового пути до сверкающих
              небоскрёбов современных городов — эта страна покорит ваше
              воображение. Откройте для себя богатую культуру, тёплое
              гостеприимство и пейзажи, которые необходимо увидеть своими
              глазами!
            </p>
          </section>
          <section className="py-16 bg-sandy-beige/30 dark:bg-charcoal-gray/10 rounded-xl">
            <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight text-center">
              За что вы полюбите Казахстан
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-12">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Mountain className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-charcoal-gray dark:text-background-light">
                  Разнообразие природы
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Исследуйте каньоны, пустыни, горные озёра и бескрайние степи —
                  всё внутри одной страны.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-charcoal-gray dark:text-background-light">
                  Богатая культура и история
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Следуйте путём купцов Великого шёлкового пути и откройте для
                  себя уникальные традиции кочевников.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Footprints className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-charcoal-gray dark:text-background-light">
                  Незабываемые приключения
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  От охоты с орлами до пеших походов в нетронутых горах —
                  приключения ждут везде!
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight text-center">
              Популярные направления
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-charcoal-gray/20 rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <Image
                  className="w-full h-56 object-cover"
                  alt="Просторный вид на Чарынский каньон с красными скальными образованиями"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNT0DmmLaa_v_4SAnjW1kkiRTdJPqqtd-bxKOXZeknmXZySaG2HHkOZJdWfIoFPH7_xDFzn0pnoVJNxYN60k2Zi5C-ZPv8P1ebmHzY5YaasY2i-L0nYNLS1P_zvsfRjROCtBZkqN2z2oXL2GoJq_OEkcUSgIBA707sA5GdIO7_LJh40NNaitnVxkZ-QNDNv1tflfNbnkrECiwhjFYnI4j0znmnkBsLrx7HdQ8_Z-pgQfUFsYcT_DbdjUInCDutUPaeiAaW2eDu3L4"
                  width={600}
                  height={224}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-gray dark:text-background-light">
                    Чарынский каньон
                  </h3>
                  <p className="mt-2 text-charcoal-gray/80 dark:text-background-light/80">
                    Часто сравниваемый с Гранд-Каньоном, этот природный памятник
                    поражает воображение уникальными скалами, сформированными
                    миллионами лет.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-charcoal-gray/20 rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <Image
                  className="w-full h-56 object-cover"
                  alt="Кристально чистая бирюзовая вода Кольсайских озёр"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbCfgGhvjZ4Uh_wJkvPMG1nQ3wx8ec9PfftEvU2A9v2oKVrd_9vuYDdVe1y5MzYhNeZTc15VOIt_45z9fqmzF2-_04t-NOUH73fupmVNqjTxG3JJdg3vdFobl8_UEoL7-3bJuhppBlIBn2R8KMCSmkXBZmjGyYJkl61CYV2RpjtW9CFblT875wVT1Fg_GsOgmlNO7ZJ2pkTEGCPT9t_qbimMeWVANuF7-j7u9RxdTP0Gb9LQUVujUlyYF6zNznTPd3S0WYS3tcIbU"
                  width={600}
                  height={224}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-gray dark:text-background-light">
                    Кольсайские озёра
                  </h3>
                  <p className="mt-2 text-charcoal-gray/80 dark:text-background-light/80">
                    Восхитительная система из трёх альпийских озёр — «Жемчужины
                    Северного Тянь-Шаня». Идеально для пешеходных прогулок,
                    кемпинга и фотографии.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-charcoal-gray/20 rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <Image
                  className="w-full h-56 object-cover"
                  alt="Футуристический силуэт города Нур-Султан (Астана) на закате"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Trz3s68PZDPOynYF-DvHe2se28Ts6RyjHmCSMe-vEgqjeypXI1bA8VbOvpuEJgnnUk8cXgo0Rk7-Klr6LoKKN-hvWqFgsNCu3D0xIDPDw6VWl9DE9TuU3TwI819NfPBAhBXx0XLFXIyyT7Nrb-T12UYHBPG16_BrBqYGsY4TwRAnNtjviooacHLd8z30FOP-2oB4kcfCTQJrW3nDijCbrMjY18GoVuF-SJM36gFA9CPfIGcQZdUkY_K77mPoZFAgqTTyHv4lLug"
                  width={600}
                  height={224}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-gray dark:text-background-light">
                    Нур-Султан (Астана)
                  </h3>
                  <p className="mt-2 text-charcoal-gray/80 dark:text-background-light/80">
                    Познакомьтесь с будущим: столица Казахстана — город
                    поражающей архитектуры от всемирно известных архитекторов.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center">
              <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight">
                Сезонные особенности
              </h2>
              <p className="text-charcoal-gray/80 dark:text-background-light/80 text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
                Казахстан прекрасен в любое время года — каждый сезон здесь
                уникален и волшебен.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Заснеженные горы на горнолыжном курорте Шымбулак зимой."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwynlS6suSuifanQ2H9AOvOS7MZ0OtKTTeGm6fSQe_PMBCOKMnfdFZhDf0LLxqJSEXXbeVCzUsM8q3gR9KjVaW53NrkjzYr77ldGDFBp6En5efsCMZYUKQ-eTbSx3CH1-2Ix0n3K1_qSVJBm3-d7CAWS1e1w3gE2cEDZUqAzLCOQe4jM6AapuUkiJ19FMDYUk_ZDi9LUmVytuTwa5MPspbcTEFaBE6TWcKWt8tCTCLvZTcC1kmaUdJOa7WQgAjAfqPGXTOe83gGN0"
                  width={600}
                  height={384}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Зима</h3>
                  <p className="text-white/90 mt-1">
                    Покоряйте склоны мирового уровня или насладитесь волшебными
                    видами замёрзшего Большого Алматинского озера.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Ярко-красные тюльпаны цветут в Аксусском заповеднике весной."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCloEoPhd4hXf9tKQ-mOidrLyjW2HOhwqg1fgLQYxvA3iKdltdoqGQdF-KI0E_9QILRGOL73TH2UT0lIwfPcAputDF4Gwq91c0LhPAG57Mb_dD_rn3JfGLtFn8oulS2cRK9VZwOIpISB-6MTM6BFLnygO_21eEUkKNnrO_0VyvC407BwlhtjQUhG08ZvppBt4Uf9ySYHnAlKQEU-9fbtWFxEafBRp4eMj-LvKwHQ33QCTwTjiJnulu-DKJQigNTkoY399iSiGMRZXY"
                  width={600}
                  height={384}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Весна</h3>
                  <p className="text-white/90 mt-1">
                    Степи расцвечиваются ковром диких тюльпанов, отмечайте яркий
                    праздник Наурыз!
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Солнечный день на озере Каинды с его знаменитым затопленным лесом."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-JaklhyYmHxS9JrXeHmb7Jf6y4nzj_ZOwQPhA1vEDoCazSkVAkWmEcbdFXgQ2VhQ6r_tIEy8aL1Zulh-UmNwc1k8tVBkURqMcxwuX7LFe7JwpBK0xHRoL_GTkDMFHK9RNk56woN7Gw83KKIZDuBMnjtpGJ2QrbLaIlDxHVWFB4HkoIhTxTKYfhHO738OtJLwL1xtGY4escTqCWGZJE4n4Rf8-sZ0xtTkNoUVwfbsNPO2iKVSkGxAoE6zJvMkz1Wmy2rsXhhOYU4"
                  width={600}
                  height={384}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Лето</h3>
                  <p className="text-white/90 mt-1">
                    Ходите пешком к Кольсайским озёрам, ночуйте под звёздами и
                    наслаждайтесь продолжительностью дня!
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Золотая осенняя листва у тихого озера в Бурабайском заповеднике."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZrvKlvxknW81qVkbspE1d1ynkJIYg8yLbZXTuG7BXsi4iDCngTBa1FsQCTuVstjB0RQbLGUUJJTtIcBhtNtZvfaHJSfs4rk6VJau3jRntrPkVsCOwDthFVtHB-NBzHGIRme92-Iu7feYrjLr3N3VzM1dVEhKj-C4fwxlZTJByKSzxiNFOY7HqYOuL_pafLzK00E8nlHhy5ZauMjuafNoAz4pmw23X6JmahuGD_rjf7pyCA-1APm32sjEFMiSTdvC25baQnQ6cTc"
                  width={600}
                  height={384}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Осень</h3>
                  <p className="text-white/90 mt-1">
                    Ощутите золотые просторы Бурабая и наслаждайтесь прохладными
                    и чистыми днями для новых открытий.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-sandy-beige/30 dark:bg-charcoal-gray/10 rounded-xl">
            <div className="text-center">
              <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight">
                Истории путешественников
              </h2>
              <p className="text-charcoal-gray/80 dark:text-background-light/80 text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
                Не верьте нам на слово — прочитайте истории тех, кто испытал
                волшебство Казахстана лично!
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
              <div className="bg-background-light dark:bg-charcoal-gray/40 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Портрет девушки-путешественницы."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbDoTD7Myd9NXnqMzJfy1M33fcdojKwxutK1wNDy9wBjaqZe3OGF5EwmgTjAbs-puPEqmrXo1OAIpbnY5KXOhPKyh0t4yP7Yh1kvnmhkauY0HPNhTYiP0DMObDOr19FzjzbddKl9qMWSXMAcXTboXXMzFJsIrp8XK9sM-QqBJTl8eBWj4uR2RpJroZ3q7ihtxnQM4DWzYS-AYnzQpdIPeZRgGEGdDeT5DOGkcWqTqC2LB3h35DcbjAnqASIfx-BYYqO4cGhbQJKI"
                    width={56}
                    height={56}
                    style={{ objectFit: "cover" }}
                    sizes="56px"
                    priority
                  />
                  <div>
                    <h4 className="font-bold text-charcoal-gray dark:text-background-light">
                      Елена Петрова
                    </h4>
                    <p className="text-sm text-charcoal-gray/70 dark:text-background-light/70">
                      Любитель приключений
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-charcoal-gray/80 dark:text-background-light/80 italic">
                  «Размах казахских ландшафтов просто ошеломляет. Стоя на краю
                  Чарынского каньона, чувствуешь себя на другой планете. А
                  гостеприимство местных — самое тёплое, что я встречала!»
                </p>
              </div>
              <div className="bg-background-light dark:bg-charcoal-gray/40 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Портрет мужчины-путешественника."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA36ZFe4m54QHJ4FK562C7tVuObYL9qfUxknNQ-PO8EHEeUUV-UTiXm-Uui-ufpgGfDEYxDEibrrQ9ZZNoHpnH9zqSEoPs2JCUoHPQIbuPq2PNE65IhNiTMXakH9qy5XaBjVU6d8rxPE84pwpWKpTzL5jGxjgJH0SlftwS7ngKjsqfg73nVBvMWXBnqvAwGYM7CQuReKIztAP5ntnER2NNrkDh_XnaImH4fVkjbv-eSt1pwGnWfTRRdybdy0MuBguJtlbR4MeeHkjs"
                    width={56}
                    height={56}
                    style={{ objectFit: "cover" }}
                    sizes="56px"
                    priority
                  />
                  <div>
                    <h4 className="font-bold text-charcoal-gray dark:text-background-light">
                      Марк Чен
                    </h4>
                    <p className="text-sm text-charcoal-gray/70 dark:text-background-light/70">
                      Любит культуру
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-charcoal-gray/80 dark:text-background-light/80 italic">
                  «Меня поразило сочетание древних традиций и современной жизни.
                  Видеть беркутчи было честью, а футуристическая архитектура
                  Нур-Султана — полным удивлением. Страна волшебных контрастов!»
                </p>
              </div>
              <div className="bg-background-light dark:bg-charcoal-gray/40 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Портрет путешествующей пары."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv7XkRiuQtIyFsnPw6DW787SZlFjc3lUF-kp8g4FbSVQF15tutZPr5Ty0aKNkcco3N3nsrgopmHFrevTnqEci57OYPhLJLQcxUnHgXjGOidAmvieYn3y5Dksj3nOPkzB8m9vm4WH37ISAs4WoHaMqlyHgmL81Yvd9N0dhORoOkB2bo5IGzO8KatGHZOltjjHaQyppOTJAcsHWzRvFiT3PglPQ_g0GmTVd8gYASABPzeNBy55o68YspbslZHJs-jvDeljTPYHnXxhI"
                    width={56}
                    height={56}
                    style={{ objectFit: "cover" }}
                    sizes="56px"
                    priority
                  />
                  <div>
                    <h4 className="font-bold text-charcoal-gray dark:text-background-light">
                      Пара Wanderlust
                    </h4>
                    <p className="text-sm text-charcoal-gray/70 dark:text-background-light/70">
                      Путешественники-блогеры
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-charcoal-gray/80 dark:text-background-light/80 italic">
                  «Казахстан — это скрытая жемчужина! Мы ходили в поход к
                  Кольсайским озёрам, и виды были невероятны. Край очень
                  недооценён для любителей природы. Уже планируем вернуться!»
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center">
              <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight">
                Интерактивная карта Казахстана
              </h2>
              <p className="text-charcoal-gray/80 dark:text-background-light/80 text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
                Кликайте по меткам, чтобы узнать о главных
                достопримечательностях и спланировать свой маршрут по уникальной
                и прекрасной стране.
              </p>
            </div>
            <div className="mt-12 w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden relative shadow-lg dark:shadow-black/20">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                alt="Стилизованная карта Казахстана с ключевыми локациями."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzgzZey0thLVW1sbMlUxLVF63CwB2JTACeeYnAEVporJf3HvfUNnB__caYC5EuwR2u9vEJ3u8PDhY6GCKGTRWLWScxtEUBzaZELdMXByZU5fh1okqQ_jHrrJ3dyB1CUEJ4z2y9nVOIQTtqtQ4nDHjxmmHRLfPs-IbE1w9qCqSkU1FlrjKYaPn5v2xmAkLvTCqprcJbrjy4GMtZVROVCEXTEQHcccunoxlFphkfwZKd3sxoW3Nnd19cyJU9Tn8r5nPI87dIFNJH76E"
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
                priority
              />
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <MapPin className="w-10 h-10 text-primary drop-shadow-lg" />
                <div className="absolute bottom-full mb-2 w-48 bg-white dark:bg-charcoal-gray p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-bold">Нур-Султан</h4>
                  <p className="text-sm">Футуристическая столица.</p>
                </div>
              </div>
              <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <MapPin className="w-10 h-10 text-primary drop-shadow-lg" />
                <div className="absolute bottom-full mb-2 w-48 bg-white dark:bg-charcoal-gray p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-bold">Алматы</h4>
                  <p className="text-sm">Культурная столица и ворота в горы.</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <MapPin className="w-10 h-10 text-primary drop-shadow-lg" />
                <div className="absolute bottom-full mb-2 w-48 bg-white dark:bg-charcoal-gray p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-bold">Чарынский Каньон</h4>
                  <p className="text-sm">Казахстанский «Гранд-Каньон».</p>
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <MapPin className="w-10 h-10 text-primary drop-shadow-lg" />
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-charcoal-gray p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-bold">Туркестан</h4>
                  <p className="text-sm">
                    Исторический город Великого Шёлкового пути.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight text-center">
              Незабываемые впечатления
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-6">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Mountain className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-gray dark:text-background-light">
                  Приключения
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Походы в горы, прогулки верхом по степи и исследование
                  пустынь.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Landmark className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-gray dark:text-background-light">
                  Культура
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Погрузитесь в кочевые традиции, яркую музыку и местное
                  искусство.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Fort className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-gray dark:text-background-light">
                  История
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Путешествуйте по древнему Шёлковому пути и открывайте
                  наскальные рисунки.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Utensils className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-gray dark:text-background-light">
                  Кухня
                </h3>
                <p className="mt-1 text-charcoal-gray/80 dark:text-background-light/80">
                  Попробуйте традиционные блюда, такие как бешпармак и баурсаки
                  — настоящий вкус традиций!
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center">
              <h2 className="text-charcoal-gray dark:text-background-light text-3xl font-bold tracking-tight">
                Откройте для себя яркую культуру
              </h2>
              <p className="text-charcoal-gray/80 dark:text-background-light/80 text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
                Познакомьтесь с душой Казахстана через его людей, традиции и
                искусство. Культура, сформированная тысячелетиями кочевой жизни
                и обменом на Шёлковом пути.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Казахский беркутчи с золотым орлом."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi5Lzmb7iC6j5aIbQmCp3om7dlsd9AHRct8F6xniomvJKjVlWs8iQ61kYl7CtbM-X1AZ4BxZPYrce7pnCA67rZR2iVknGhYlD_BoK9H0rND9RlBnIMcUImbzWsTS77x1OFXraBx0QshnoBW3mgQ86YyFZS4k_FR_gnWYnEgQurF2aNsNLLPRkWjYUuJueYfpt7HHs0wGRxPcPIneZhS4IDZaPm4GOxyVO2K1y-TL9beWWYYAT1NJl5glitvw77PJj9hRQXAlsQCTc"
                  width={600}
                  height={320}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Беркутчи</h3>
                  <p className="text-white/90 mt-1">
                    Станьте свидетелями древнего искусства соколиной охоты с
                    легендарными беркутчи.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Яркая экспозиция традиционных казахских войлочных ковров и тканей."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIA9nrStoUDCuEc0A_sJCl-VJokrkJKU0-wa2epnmLYX_BjjzE993EeZArXCmeT--f_BtMZosiFkBJAPAUZfneds1PtjedSayEFoFpEvwfbRA5tAQBYdjxRYRNUgfNqzCaAHv-_50RjwRKSn0CyJ5vJqUDv-x504Pi7h_jh4I2SLJf7l96Su56ppvJJbh3qI4EWT4jzLJT9aNd12HA9361V09Z5TCQiBFQroimXAPO5_mS02hYEUgVf4Ag89S4GtAB2x9pZ0UGwSM"
                  width={600}
                  height={320}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">
                    Кочевые ремёсла
                  </h3>
                  <p className="text-white/90 mt-1">
                    Изучайте изысканные узоры и яркие цвета традиционных
                    казахских изделий ручной работы.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="Музыкант играет на домбре - казахском двухструнном инструменте."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChdhiy3H6xw-VhNzDm5nI4Sw7B9DhW5cj88ixMcCzQaniukv2IiBWpZf6qRrEOaBH_ZfcJonxZlhxVDiqjTOBLooWy7UrI9v6ng47VQToA4rjBsknc74iYWjwm7poYNdJelbVFrqIVT_3dy37ttNxh4WPZmYQVSePH7PUWKNrIXcm9Xb5XmJV2ctpYL6BWCkmCbFLyn1df9KM68OeL4_ZTHZA2d1SDNxnsQ4BOXoZS2pxwmFk8_lnT64Q9HZIJjdSigk15ykpK9zs"
                  width={600}
                  height={320}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">
                    Традиционная музыка
                  </h3>
                  <p className="text-white/90 mt-1">
                    Вдохновитесь завораживающим звучанием домбры — окунитесь в
                    казахский фольклор.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-charcoal-gray bg-black/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  {/* You can replace this logo with a Lucide icon if you have a matching one, but as it's a custom SVG logo, we'll keep it. */}
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-white text-xl font-bold">
                  Ozelim
                </h2>
              </div>
              <p className="mt-4 text-white/70 text-sm">
                Ваше приключение в сердце Евразии начинается здесь!
              </p>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase text-white/90">
                Исследовать
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Направления
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Туры
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Блог
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Галерея
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase text-white/90">
                Компания
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    О нас
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Вопросы и ответы
                  </a>
                </li>
                <li>
                  <a className="text-white/70 hover:text-primary" href="#">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-2">
              <h3 className="font-bold tracking-wider uppercase text-white/90">
                Подпишитесь на новости
              </h3>
              <p className="mt-4 text-white/70">
                Получайте лучшие советы и предложения по путешествиям прямо на
                вашу почту.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  className="w-full rounded-md border-gray-600 bg-charcoal-gray/50 text-white focus:ring-primary focus:border-primary"
                  placeholder="Введите ваш email"
                  type="email"
                />
                <Button
                  className="px-5 py-2.5 bg-primary text-white font-bold rounded-md"
                  type="submit"
                >
                  Подписаться
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© 2025 Ozelim. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a className="hover:text-primary" href="#">
                Инстаграм
              </a>
              <a className="hover:text-primary" href="#">
                Фейсбук
              </a>
              <a className="hover:text-primary" href="#">
                Ютуб
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
