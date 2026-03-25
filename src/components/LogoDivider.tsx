import Image from "next/image";

interface LogoDividerProps {
  className?: string;
}

export default function LogoDivider({ className = "" }: LogoDividerProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-px bg-charcoal/30" />
      <Image
        src="/images/logo.png"
        alt=""
        width={56}
        height={56}
        className="h-14 w-auto opacity-60 flex-shrink-0"
        aria-hidden="true"
      />
      <div className="flex-1 h-px bg-charcoal/30" />
    </div>
  );
}
