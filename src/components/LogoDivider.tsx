import Image from "next/image";

interface LogoDividerProps {
  className?: string;
}

export default function LogoDivider({ className = "" }: LogoDividerProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex-1 h-px bg-charcoal/30" />
      <Image
        src="/images/logo.png"
        alt=""
        width={98}
        height={98}
        className="h-[98px] w-auto opacity-60 flex-shrink-0"
        aria-hidden="true"
      />
      <div className="flex-1 h-px bg-charcoal/30" />
    </div>
  );
}
