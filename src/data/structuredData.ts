export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deviators Club",
  alternateName: "Code. Create. Deviate.",
  description:
    "Deviators Club empowers coders and innovators to learn, build, and lead with workshops, hackathons, and collaborative tech projects.",
  url: "https://deviatorsclub.tech",
  logo: "https://deviatorsclub.tech/assets/logo/sm.svg",
  image: "https://deviatorsclub.tech/group_pic.jpg",
  sameAs: [
    "https://instagram.com/deviatorsclub",
    "https://linkedin.com/company/deviatorsclub",
    "https://github.com/deviatorsclub",
  ],
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Cybersecurity",
    "Data Structures and Algorithms",
    "Software Engineering",
    "Hackathons",
    "Programming",
    "Technology Innovation",
  ],
  offers: [
    {
      "@type": "Event",
      name: "Web Development Workshop",
      description:
        "Comprehensive web development training and hands-on projects",
      startDate: "2025-01-15T10:00:00+05:30",
      endDate: "2025-01-15T17:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Deviators Club Workshop Hall",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Deviators Club",
        url: "https://deviatorsclub.tech",
      },
      image: "https://deviatorsclub.tech/group_pic.jpg",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://deviatorsclub.tech/learn/web",
      },
    },
    {
      "@type": "Event",
      name: "Cybersecurity Workshop",
      description: "Hands-on cybersecurity training and awareness sessions",
      startDate: "2025-02-15T10:00:00+05:30",
      endDate: "2025-02-15T17:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Deviators Club Workshop Hall",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Deviators Club",
        url: "https://deviatorsclub.tech",
      },
      image: "https://deviatorsclub.tech/group_pic.jpg",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://deviatorsclub.tech/learn/cyber",
      },
    },
    {
      "@type": "Event",
      name: "iOS Development Workshop",
      description: "Mobile app development training for iOS platform",
      startDate: "2025-03-15T10:00:00+05:30",
      endDate: "2025-03-15T17:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Deviators Club Workshop Hall",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Deviators Club",
        url: "https://deviatorsclub.tech",
      },
      image: "https://deviatorsclub.tech/group_pic.jpg",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://deviatorsclub.tech/learn/ios",
      },
    },
    {
      "@type": "Event",
      name: "Data Structures & Algorithms Training",
      description: "Competitive programming and DSA skill development",
      startDate: "2025-04-15T10:00:00+05:30",
      endDate: "2025-04-15T17:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Deviators Club Workshop Hall",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Deviators Club",
        url: "https://deviatorsclub.tech",
      },
      image: "https://deviatorsclub.tech/group_pic.jpg",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://deviatorsclub.tech/learn/dsa",
      },
    },
  ],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Deviators Club",
  alternateName: "Code. Create. Deviate.",
  url: "https://deviatorsclub.tech",
  description:
    "Official website of Deviators Club - Empowering coders and innovators through workshops, hackathons, and collaborative tech projects",
  publisher: {
    "@type": "Organization",
    name: "Deviators Club",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://deviatorsclub.tech/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
