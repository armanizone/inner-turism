import React from "react";
import Image from "next/image";

// All image URLs in the project (from context):

// Resorts page (src/app/resorts/page.js)



export default function page() {
  return (
    <section className="relative py-20 bg-[#f8fafc] min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            О нас
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#61896f] leading-relaxed">
            Добро пожаловать на наш портал — вашу путеводную звезду по лучшим
            курортам и природным жемчужинам Казахстана! Мы страстные любители
            путешествий, которые хотят делиться с вами открытиями удивительных
            локаций, чтобы ваш отдых был наполнен вдохновением, комфортом и
            незабываемыми впечатлениями.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <svg
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m4 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <h2 className="text-xl font-semibold mb-2 text-[#111813]">
              Наша миссия
            </h2>
            <p className="text-[#61896f]">
              Сделать поиск идеального отдыха легким и вдохновляющим, помогая
              каждому открыть свой уголок Казахстана для уникального путешествия
              и гармонии.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <svg
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <h2 className="text-xl font-semibold mb-2 text-[#111813]">
              Наше видение
            </h2>
            <p className="text-[#61896f]">
              Объединять путешественников и местные курорты для насыщенного,
              безопасного и культурного отдыха, поддерживая развитие внутреннего
              туризма.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-5 text-center">
            Наши ключевые ценности
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow px-6 py-8 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">🤝</span>
              <h4 className="font-semibold text-lg mb-2 text-[#111813]">
                Доверие
              </h4>
              <p className="text-[#61896f] text-sm">
                Мы тщательно проверяем каждый курорт и собираем отзывы, чтобы
                ваш выбор был спокойным и уверенным.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow px-6 py-8 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">🌱</span>
              <h4 className="font-semibold text-lg mb-2 text-[#111813]">
                Осознанность
              </h4>
              <p className="text-[#61896f] text-sm">
                Мы поддерживаем экологичный и ответственный туризм, ценим
                природу и культурное наследие.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow px-6 py-8 flex flex-col items-center text-center">
              <span className="text-3xl mb-3">✨</span>
              <h4 className="font-semibold text-lg mb-2 text-[#111813]">
                Вдохновение
              </h4>
              <p className="text-[#61896f] text-sm">
                Мы стремимся вдохновлять на новые открытия и делать ваш отдых
                по-настоящему особенным.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-7 text-center">
            Наша команда
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60">
              <Image
                src="https://randomuser.me/api/portraits/men/20.jpg"
                alt="Команда"
                className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-primary/20"
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
              <div className="font-semibold text-[#111813] text-lg">
                Айдос Сулейменов
              </div>
              <p className="text-[#61896f] text-sm mb-1">
                Сооснователь, главный редактор
              </p>
              <div className="flex gap-2 mt-1">
                <a
                  href="#"
                  title="Instagram"
                  className="text-primary hover:underline text-xl"
                >
                  ⓘ
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-primary hover:underline text-xl"
                >
                  ✉
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60">
              <Image
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Команда"
                className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-primary/20"
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
              <div className="font-semibold text-[#111813] text-lg">
                Мадина Курманова
              </div>
              <p className="text-[#61896f] text-sm mb-1">
                UI/UX дизайнер, копирайтер
              </p>
              <div className="flex gap-2 mt-1">
                <a
                  href="#"
                  title="Instagram"
                  className="text-primary hover:underline text-xl"
                >
                  ⓘ
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-primary hover:underline text-xl"
                >
                  ✉
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60">
              <Image
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Команда"
                className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-primary/20"
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
              <div className="font-semibold text-[#111813] text-lg">
                Ержан Калиев
              </div>
              <p className="text-[#61896f] text-sm mb-1">
                Fullstack разработчик
              </p>
              <div className="flex gap-2 mt-1">
                <a
                  href="#"
                  title="Instagram"
                  className="text-primary hover:underline text-xl"
                >
                  ⓘ
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-primary hover:underline text-xl"
                >
                  ✉
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl py-8 px-6 text-center shadow-inner">
          <h4 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Присоединяйтесь к нам!
          </h4>
          <p className="text-[#61896f] mb-4">
            Подписывайтесь на наши обновления в соцсетях, делитесь отзывами,
            вдохновляйтесь новыми маршрутами и давайте сделаем отдых
            по-настоящему незабываемым вместе!
          </p>
          <button className="rounded-full bg-primary text-white font-semibold py-3 px-8 text-base transition hover:bg-primary/90 shadow">
            Найти свой идеальный курорт
          </button>
        </div>
      </div>
      {/* Decorative background shapes */}
      <div className="absolute left-0 top-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute right-0 bottom-0 w-52 h-52 bg-primary/20 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
}
