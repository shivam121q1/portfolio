// components/WavyText.tsx
"use client";
import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a cn utility from shadcn/ui

interface WavyTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export function WavyText({ text, as: Element = 'h2', className, ...props }: WavyTextProps) {
  const letters = text.split('');

  return (
    <Element className={cn("inline-flex", className)} {...props}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:scale-110 hover:-rotate-12"
          style={{ display: 'inline-block' }} // Necessary for transform to work correctly
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Element>
  );
}
