import Image from "next/image";

interface LogoDividerProps {
  className?: string;
}

export default function LogoDivider({ className = "" }: LogoDividerProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt=""
        width={56}
        height={56}
        className="h-10 sm:h-11 md:h-14 w-auto opacity-[0.27]"
        aria-hidden="true"
      />
    </div>
  );
}
