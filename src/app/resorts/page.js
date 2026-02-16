import { ResortsList } from "./resorts-list"
import { getResorts } from "./resort-store"
import { TreePine, ArrowDown } from "lucide-react"

export default function ResortsPage() {
  const resorts = getResorts()

  return (
    <div className="min-h-screen">
      <h1 className='text-center text-3xl font-semibold mt-6'>
        Санатории
      </h1>
      {/* <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/resort-4.jpg"
          alt="Санатории Казахстана"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10" />


        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-card/15 backdrop-blur-md rounded-xl border border-card/20">
                <TreePine className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Ozelim</span>
            </div>
          </div>
        </header>


        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-widest uppercase mb-3">
            Каталог санаториев
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance max-w-3xl leading-tight">
            Санатории и курорты Казахстана
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-6">
            Найдите идеальный санаторий для лечения и оздоровления среди лучших курортов страны
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Листайте вниз для просмотра каталога
          </div>
        </div>
      </section> */}

      <main className="max-w-6xl mx-auto px-4 py-12">
        <ResortsList resorts={resorts} />
      </main>
    </div>
  )
}
