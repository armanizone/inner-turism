"use client"

import { formatNumber } from "@/lib/utils";
import { Button } from "./ui/button";
import {clsx} from 'clsx'
import Image from "next/image";

export const Pack = ({ type, price, image, people, children, discount, benefits, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={
        (type === "family" && "Приобрести пакет для семьи") ||
        (type === "agent" && "Приобрести пакет для агента") ||
        (type === "company" && "Приобрести пакет для компании") ||
        (type === "company+" && "Приобрести пакет для компании +")
      }
      className={clsx(
        "max-w-[313px] bg-white h-full rounded-primary shadow-equal overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all duration-200 focus:scale-105 border rounded-xl"
      )}
    >
      <Image src={image} alt="" className="aspect-video object-contain border-b-black p-1" />
      <div className={clsx("px-6 h-full flex flex-col mt-6")}>
        {/* <p className={clsx("text-center my-4 font-medium")}>1 год</p> */}
        <p className={clsx("text-2xl text-center leading-4 font-bold", {
          "text-green-500": type === "agent",
          "text-orange-500": type === "family",
          "text-rose-500": type === "company",
          "text-blue-500": type === "company+",
        })}>
          {type === "family" && "Семейный"}
          {type === "agent" && "Агентский"}
          {type === "company" && "Корпоративный"}
          {type === "company+" && "Корпоративный +"}
        </p>

        {type === "company" && (
          <>
            <p className="text-center tracking-wide font-medium flex flex-col justify-center mt-4">
              &quot;Все включено&quot;
            </p>
            <ul className="flex flex-col justify-center mt-1">
              {benefits?.map((benefit, i) => (
                <li 
                  key={i} 
                  className="tracking-wide font-medium flex flex-col justify-center"
                >
                • {benefit}
                </li>
              ))}
            </ul>
          </>
        )}

        {type === "company+" && (
          <>
            <p className="text-center tracking-wide font-medium flex flex-col justify-center mt-4">
              &quot;Все включено&quot;
            </p>
            <ul className="flex flex-col justify-center mt-1">
              {benefits?.map((benefit, i) => (
                <li 
                  key={i} 
                  className="tracking-wide font-medium flex flex-col justify-center"
                >
                • {benefit}
                </li>
              ))}
            </ul>
          </>
        )}

        {type === "family" && (
          <>
            <p className="text-center tracking-wide font-medium flex flex-col justify-center mt-4">
              &quot;Все включено&quot;
            </p>
            <ul className="flex flex-col justify-center mt-1">
              {benefits?.map((benefit, i) => (
                <li 
                  key={i} 
                  className="tracking-wide font-medium flex flex-col justify-center"
                >
                • {benefit}
                </li>
              ))}
            </ul>
          </>
        )}

        {type === "agent" && (
          <>
            <ul className="flex flex-col justify-center mt-4">
              {benefits?.map((benefit, i) => (
                <li 
                  key={i} 
                  className="tracking-wide font-medium flex flex-col justify-center"
                >
                • {benefit}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* {(type !== "agent" && type !== "family") && (
          <p className="text-center tracking-wide font-medium flex flex-col justify-center mt-4">
            {description}
          </p>
        )} */}
      </div>
      <p className="text-center font-medium my-4 text-slate-400">Годовая подписка</p>
      <div
        className={clsx(
          "grid grid-cols-3 items-center justify-center text-white font-semibold text-sm border-t",
          {
            "bg-linear-to-l from-orange-400 to-orange-600": type === "family",
            "bg-linear-to-r from-green-400 to-green-600": type === "agent",
            "bg-linear-to-r from-rose-400 to-rose-600": type === "company",
            "bg-linear-to-l from-blue-400 to-blue-600": type === "company+",
          }
        )}
      >
        <div className="grid place-items-center p-4 text-center border-r h-full">
          {children ? (
            <p className="whitespace-nowrap">
              {people} взрослых
              <br />+ {children} детей
            </p>
          ) : (
            <>До {people} человек</>
          )}
        </div>
        <div className="grid place-items-center p-4 text-center border-r whitespace-nowrap h-full">
          {formatNumber(price)} ₸
        </div>
        <div className="grid place-items-center p-4 text-center">Скидки на туры до {discount}%</div>
      </div>
    </button>
  )
}