import Image from "next/image";

interface LogoDividerProps {
  className?: string;
}

export default function LogoDivider({ className = "" }: LogoDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-charcoal/15" />
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-auto opacity-30 flex-shrink-0"
        aria-hidden="true"
      />
      <div className="flex-1 h-px bg-charcoal/15" />
    </div>
  );
}
