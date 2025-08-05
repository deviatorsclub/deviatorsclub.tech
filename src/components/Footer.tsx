import Link from "next/link";
import socials from "@/data/socials";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-[#000000] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <Link
              href="/"
              className="font-pixelify text-2xl font-bold text-white"
            >
              Deviators Club
            </Link>
            <p className="opacity-80">estd: 2024</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="group flex items-center gap-2 text-sm text-white transition-colors hover:text-[#0047AB]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition group-hover:bg-[#0047AB]/30">
                  <social.icon
                    className="h-5 w-5 text-white transition-colors group-hover:text-white"
                    title={social.name}
                  />
                </div>
                <span className="hidden sm:inline">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
