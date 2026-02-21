import Image from "next/image";
import {
  InstagramIcon,
  ShopeeIcon,
  TiktokIcon,
  TokopediaIcon,
} from "@/assets/icons";
import { Link } from "@/libs/utils";
import { BRAND, IMAGE, SEO, URL } from "@/libs/consts";

const SOCIAL_LINKS = [
  { href: URL.TIKTOK, label: "TikTok", Icon: TiktokIcon },
  { href: URL.INSTAGRAM, label: "Instagram", Icon: InstagramIcon },
  { href: URL.SHOPEE, label: "Shopee", Icon: ShopeeIcon },
  { href: URL.TOKOPEDIA, label: "Tokopedia", Icon: TokopediaIcon },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mb-12 transition-transform duration-200 hover:scale-105">
          <Image
            src={IMAGE.CRMAX_LOGO}
            alt={`${BRAND.NAME} logo`}
            width={180}
            height={180}
            priority
          />
        </div>

        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {SEO.DEFAULT_TITLE}
          </h1>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-[#F86800]" />
          <p className="mt-3 font-semibold leading-relaxed text-stone-600 sm:text-lg">
            We{"'"}re building something new. Follow us on social media.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
              Our social media
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <span className="inline-flex rounded-full p-2 transition-colors duration-200 hover:bg-stone-200/70">
                    <Link href={href} label={label}>
                      <Icon size={24} />
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
