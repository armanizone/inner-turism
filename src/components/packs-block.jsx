"use client";

import React from 'react'

import {clsx} from 'clsx'

import family from '@/assets/pack-family.svg'
import agent from '@/assets/pack-agent.svg'

import company from '@/assets/company.svg'
import companyPlus from '@/assets/company-plus.svg'
import { Pack } from './pack';

const array = [
  {
    type: "family",
    description:
      "Предназначен для покупки туров и путевок в курортные зоны для всей семьи, идеальный вариант для путешествий с семьей.",
    price: 30000,
    image: family,
    people: 2,
    children: 3,
    discount: 30,
    benefits: [
      "трансфер",
      "проживание и питание",
      "страхование",
      "экскурсии",
      "услуги гида-экскурсовода",
      "входные билеты в национальные парки и музеи",
      "информационная поддержка",
    ],
  },
  {
    type: "agent",
    description:
      "Приглашай всех желающих на увлекательные туры и получай бонусы + Семейный пакет",
    price: 45000,
    image: agent,
    people: 2,
    children: 3,
    discount: 30,
    benefits: [
      "Семейный пакет “все включено”",
      "Агентский договор",
      "Реферальная ссылка",
      "Дополнительный доход",
      "Бонусы",
      "Инфотуры по РК",
      "Рейтинги",
    ],
  },
  {
    type: "company",
    description:
      "Предназначен для покупки туров и путевок в курортные зоны для целой орзанизации, экономьте на каждой поездке и получайте лучший сервис.",
    price: 600000,
    image: company,
    people: 20,
    discount: 30,
    benefits: [
      "трансфер",
      "проживание и питание",
      "страхование",
      "экскурсии",
      "услуги гида-экскурсовода",
      "входные билеты в национальные парки и музеи",
      "информационная поддержка",
    ],
  },
  {
    type: "company+",
    description:
      "Предназначен для покупки туров и путевок в курортные зоны для целой орзанизации, экономьте на каждой поездке и получайте лучший сервис.",
    price: 1500000,
    image: companyPlus,
    people: 50,
    discount: 30,
    benefits: [
      "трансфер",
      "проживание и питание",
      "страхование",
      "экскурсии",
      "услуги гида-экскурсовода",
      "входные билеты в национальные парки и музеи",
      "информационная поддержка",
    ],
  },
];
export function PacksBlock() {
  return (
    <div className="px-4 max-w-7xl mx-auto mt-4 lg:mt-8 h-full">
      <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-3 mx-auto gap-y-6">
        {array?.map((q, i) => (
          <div className="h-full mx-auto" key={i}>
            <Pack
              key={q.type}
              {...q}
              onClick={() => {
                // if (q.type === "family" || q.type === "agent") {
                //   navigate("/login");
                //   setSearchParams({
                //     signup: true,
                //     agent: 111924111111111,
                //   });
                //   return;
                // }

                // if (q.type === "company" || q.type === "company+") {
                //   navigate("/company-signup");
                // }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
