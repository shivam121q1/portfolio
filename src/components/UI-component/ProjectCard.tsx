// app/components/ProjectCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  href?: string;
  className?: string;
  overlayBadge?: string; // e.g., "UI/UX", "Case Study"
  stats?: Array<{ label: string; value: string }>;
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  className,
  overlayBadge,
  stats,
}: ProjectCardProps) {
  const body = (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-zinc-900/40 max-w-[530px]",
        className
      )}
    >
      {/* Content wrapper with consistent padding */}
      <div className="px-9 pt-8">
        {/* Screenshot / cover */}
        <div className="relative aspect-[16/10] border border-white/10 rounded-xl overflow-hidden bg-gradient-to-b from-black/5 via-transparent to-transparent dark:from-white/5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width:1024px) 560px, (min-width:768px) 420px, 100vw"
            className="object-cover"
            priority={false}
          />

          {/* subtle gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

          {/* Optional overlay badge */}
          {/* {overlayBadge ? (
            <div className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
              {overlayBadge}
            </div>
          ) : (
            <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white/70" />
          )} */}
        </div>

        {/* Text content */}
        <CardContent className="px-0 pt-6">
          <h3 className="text-base sm:text-lg font-semibold tracking-[-0.01em] text-white">
            {title}
          </h3>

          <p className="mt-2 line-clamp-3 text-xs text-white text-muted-foreground sm:text-sm">
            {description}
          </p>

  
          

          <div className="mt-4 flex items-center justify-end">
            <Button size="sm" variant="ghost" className="gap-1 text-white">
              Explore
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 " />
            </Button>
          </div>
        </CardContent>
      </div>

      {/* soft outer glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </Card>
  );

  return href ? (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {body}
    </Link>
  ) : (
    body
  );
}
