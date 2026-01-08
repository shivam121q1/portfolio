import clsx from "clsx";

export default function GlowCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                "relative group rounded-2xl p-[1px]",
                className
            )}
        >
            {/* Vertical glow beam */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute left-1/2 -translate-x-1/2 top-[-120%] h-[300%] w-[2px]  opacity-0 group-hover:opacity-100 animate-pulse-beam" />
            </div>

            {/* Card body */}
            <div className="relative z-10 rounded-2xl  px-6 py-10 flex flex-col items-center text-center transition-all duration-300 ">
                {children}
            </div>
        </div>
    );
}
