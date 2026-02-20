import Image from "next/image";

function GearIcon({
  className,
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 font-sans">
      <main className="flex flex-col items-center gap-16 text-center">
        <div className="flex h-[200px] w-[200px] items-center justify-center overflow-hidden sm:h-[240px] sm:w-[240px]">
          <Image
            src="https://api.minio.runeforge.tech/crmax-assets/crmax-logo.jpeg"
            alt="CRMax"
            width={200}
            height={200}
            className="scale-125 object-contain"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-medium tracking-tight text-zinc-800 sm:text-2xl">
            Coming soon
          </h1>
          <p className="max-w-xs text-sm text-zinc-500">
            We’re working on something. Check back later.
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <span className="animate-gear-spin-slow text-[#F86800]">
            <GearIcon size={44} />
          </span>
          <span className="-ml-2 animate-gear-spin-reverse text-zinc-400">
            <GearIcon size={28} />
          </span>
        </div>
      </main>
    </div>
  );
}
