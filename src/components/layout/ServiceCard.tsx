"use client";
import React from "react";
import { BackgroundGradient } from "../UI-component/back-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import UIIcon from "@/assets/serviceIcon/UIIcon";

export default function ServiceCard({ img, title, description, price }: any) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm px-3 sm:px-8 py-12 bg-black dark:bg-zinc-900">
        <div className="flex text-4xl items-center justify-center h-16 w-16 rounded-full text-white transition-all duration-500 bg-[linear-gradient(135deg,#f1f0c8,#d13d4d,#ac0958)]">
          <UIIcon />
        </div>

        <p className="text-base sm:text-xl font-semibold text-white mt-4.5 mb-2.5 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-md text-white dark:text-neutral-400">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
