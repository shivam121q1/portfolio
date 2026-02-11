import { ArrowUpRight } from "lucide-react";

interface ViewButtonProps {
    active?: boolean;
    onClick?: () => void;
}

export function ViewButton({ active = false, onClick }: ViewButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        relative inline-flex items-center gap-2
        mt-2
        px-4 py-1.5
        rounded-full
        text-base 
        backdrop-blur-md
        border border-white/50
        transition-all duration-300 ease-out

        ${active
                    ? `
            text-white bg-white/20 border border-white/30 shadow-lg
          `
                    : `
            text-gray-300 hover:text-white hover:bg-white/10
            
          `
                }

        active:scale-[0.96]
      `}
        >
            <span>View</span>
            <ArrowUpRight className="size-4.5" />
        </button>
    );
}
