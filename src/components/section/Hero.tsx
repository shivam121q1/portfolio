"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Linkedin, Mail, Github, Dribbble, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import neeyatiImage from "../../assets/Neeyati.jpg"

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/USERNAME", icon: Linkedin },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/USERNAME", icon: Github },
  { label: "Dribbble", href: "https://dribbble.com/USERNAME", icon: Dribbble },
  { label: "Portfolio", href: "https://example.com", icon: Globe },
];

export function Hero() {
  return (
    <section
      className={cn(
        "relative isolate",
        // soft vignette background
        "bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(255,255,255,0.10),transparent_60%)]",
        "dark:bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(255,255,255,0.06),transparent_60%)]",
        "px-6 md:px-12 lg:px-20 py-16 lg:py-24"
      )}
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Left: text */}
        <div className="max-w-xl">
          <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold tracking-[-0.02em] text-white">
            Neeyti Khandelwal
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-white">
            UI/UX Designer
          </p>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground text-white">
            Crafting intuitive experiences that solve real problems. As a UI/UX
            designer, I strive to build impactful and effortlessly simple
            solutions. My focus is on understanding user needs and translating
            them into designs that are both effective and a joy to use.
            <span className="ml-1 underline underline-offset-4">About me</span>
          </p>

          <TooltipProvider delayDuration={0}>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full text-white"
                      asChild
                    >
                      <a href={href} aria-label={label} target="_blank" rel="noreferrer">
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="px-2 py-1 text-xs">
                    {label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        {/* Right: circular photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-[1px]" />
            <Image
              src={neeyatiImage}
              alt="Neeyti Khandelwal"
              fill
              className="rounded-full object-cover object-center"
              priority
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 16rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
