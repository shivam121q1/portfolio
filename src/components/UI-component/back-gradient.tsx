import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
  };

  return (
    <div className={cn("relative group", containerClassName)}>
      {/* --- The Gradient Glow --- */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: "400% 400%",
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-0 transition duration-500",
          "bg-[linear-gradient(90deg,#f1f0c8,#d13d4d,#ac0958)] blur-2xl",
          
          // --- CHANGE IS HERE ---
          // It now has a base opacity and becomes fully opaque on hover.
          "opacity-60 group-hover:opacity-100" 
        )}
      />

      {/* --- The Solid Card Content --- */}
      <div
        className={cn(
          "relative z-10 rounded-3xl bg-black text-white p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
