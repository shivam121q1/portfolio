// app/components/ContactSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, Dribbble, Globe } from "lucide-react";
import { WavyText } from "../Effect/WavyText";
import { AuroraText } from "../magicui/aurora-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type Social = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  {
    label: "Mail",
    href: "mailto:neeytikhandelwal7@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/USERNAME",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/USERNAME", icon: Github },
  { label: "Dribbble", href: "https://dribbble.com/USERNAME", icon: Dribbble },
  { label: "Portfolio", href: "https://example.com", icon: Globe },
];

export function ContactSection({
  className,
  email = "neeytikhandelwal@gmail.com",
  name = "Neeyti Khandelwal",
}: {
  className?: string;
  email?: string;
  name?: string;
}) {
  const year = new Date().getFullYear();
  const iconGradientId = "aurora-icon-gradient";

  return (
    <section
      className={cn(
        "relative isolate text-center",
        // soft vignette like your screenshot
        "bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]",
        "dark:bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]",
        "px-6 py-16 sm:py-20 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center items-center ">
          <WavyText
            text="Get In Touch!"
            className="text-5xl font-bold tracking-wide"
          ></WavyText>
        </div>

        <p className="mt-6  text-sm sm:text-xl text-white ">
          Email me at{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium underline underline-offset-4 "
          >
            <AuroraText colors={["#f1f0c8", "#d13d4d", "#ac0958"]}>
              {email}
            </AuroraText>
          </a>
        </p>

        {/* Social icons row */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <TooltipProvider delayDuration={0}>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full text-white hover:bg-white/40"
                      asChild
                    >
                      <a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          className="h-4 w-4"
                          style={{ stroke: `url(#${iconGradientId})` }}
                        />
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

        {/* Divider-ish subtle fade */}
        <div className="mx-auto mt-8 h-px w-40 bg-white/10" />

        <p className="mt-6 text-xs text-muted-foreground">
          Copyright © {year} {name}
        </p>
      </div>
    </section>
  );
}
