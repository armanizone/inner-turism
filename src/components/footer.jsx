import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
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
              <h2 className="text-white text-xl font-bold">Ozelim</h2>
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
  );
}
