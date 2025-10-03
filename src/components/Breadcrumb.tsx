import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://deviatorsclub.tech${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center space-x-2 text-sm text-gray-400"
      >
        <Link
          href="/"
          className="flex items-center transition-colors hover:text-white"
        >
          <HomeIcon className="mr-1 h-4 w-4" />
          Home
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <ChevronRightIcon className="mx-2 h-4 w-4" />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
