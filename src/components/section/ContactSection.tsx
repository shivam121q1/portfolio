// app/components/ContactSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Mail,
  Linkedin,
  Github,
  Dribbble,
  Globe,
} from "lucide-react";

type Social = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/USERNAME", icon: Linkedin },
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

  return (
    <section
      className={cn(
        "relative isolate text-center",
        // soft vignette like your screenshot
        "bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]",
        "dark:bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]",
        "px-6 py-16 sm:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-5xl font-semibold">Get In Touch!</h2>

        <p className="mt-4 text-sm sm:text-xl text-muted-foreground ">
          Email me at{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium underline underline-offset-4 text-blue-400"
          >
            {email}
          </a>
        </p>

        {/* Social icons row */}
        <div className="mt-5 flex items-center justify-center gap-3">
          {/* Email button (matches icons set) */}
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-full"
            asChild
          >
            <a aria-label="Email" href={`mailto:${email}`}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>

          {socials.map((s) => (
            <Button
              key={s.label}
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-full"
              asChild
            >
              <a
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                <s.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
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
