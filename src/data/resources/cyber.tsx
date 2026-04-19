export const cyberRoadmapData: {
  category: string;
  desc: string;
  items: {
    title: string;
    topics: string[];
    resources: string[];
  }[];
}[] = [
  {
    category: "Step 1 - (Beginners)",
    desc: "Goal: Understand fundamental cybersecurity concepts and build foundational knowledge. ",
    items: [
      {
        title: "Basics of Computer Networks   ",
        topics: [
          "Network fundamentals",
          "OSI model",
          "TCP/IP",
          "IP addressing",
          "DNS",
          "HTTP/HTTPS",
        ],
        resources: [
          "Cisco Networking Basics (Online course)",
          "Networking for Beginners (YouTube tutorials)",
        ],
      },
      {
        title: "Operating Systems Basics   ",
        topics: [
          "Linux basics",
          "command line",
          "file permissions",
          "Windows architecture",
        ],
        resources: [
          "Linux Basics for Hackers (Book)",
          "TryHackMe - Linux Fundamentals",
        ],
      },
      {
        title: "Introduction to Cybersecurity Concepts   ",
        topics: [
          "CIA Triad (Confidentiality, Integrity, Availability)",
          "risk management",
          "types of attacks",
          "threat actors",
        ],
        resources: [
          "Cybrary - Introduction to IT & Cybersecurity",
          "CompTIA Security+ (Certification or practice materials)",
        ],
      },
    ],
  },
  {
    category: "Step 2 - (Intermediate)",
    desc: "Goal: Begin exploring practical cybersecurity techniques and some defensive strategies. ",
    items: [
      {
        title: "Web Application Security   ",
        topics: [
          "HTTP headers",
          "common vulnerabilities (e.g., SQL Injection, XSS, CSRF)",
          "OWASP Top 10",
        ],
        resources: [
          "PortSwigger Web Security Academy",
          "OWASP Top 10 (Official documentation and practice)",
        ],
      },
      {
        title: "Introduction to Cryptography   ",
        topics: [
          "Symmetric and asymmetric encryption",
          "hashing",
          "digital signatures",
          "SSL/TLS basics",
        ],
        resources: [
          "Coursera - Cryptography I (Stanford)",
          "Cryptography and Network Security: Principles and Practice (Book)",
        ],
      },
      {
        title: "Security Tools   ",
        topics: [
          "Familiarize with tools like Wireshark, Nmap, Burp Suite, Metasploit",
        ],
        resources: [
          "Wireshark 101 (YouTube)",
          "Nmap Network Scanning Basics (YouTube or tutorials)",
        ],
      },
      {
        title: "Basic Vulnerability Scanning and Analysis   ",
        topics: [
          "Vulnerability scanning (Nessus, OpenVAS)",
          "identifying risks",
        ],
        resources: [
          "Nessus Essentials (Free version)",
          "OpenVAS documentation",
        ],
      },
    ],
  },
  {
    category: "Step 3 - (Advanced)",
    desc: "Goal: Master advanced cybersecurity techniques, such as penetration testing and incident response. ",
    items: [
      {
        title: "Penetration Testing & Exploitation   ",
        topics: [
          "Phases of penetration testing",
          "exploit development",
          "buffer overflow basics",
        ],
        resources: [
          "TryHackMe - Complete Beginner Penetration Testing Path",
          "Offensive Security Certified Professional (OSCP materials)",
        ],
      },
      {
        title: "Digital Forensics   ",
        topics: [
          "Incident response",
          "forensic investigation techniques",
          "evidence handling",
          "data recovery",
        ],
        resources: [
          "SANS Digital Forensics and Incident Response (DFIR)",
          "The Art of Memory Forensics (Book)",
        ],
      },
      {
        title: "Advanced Threat Detection & Incident Response   ",
        topics: [
          "Threat intelligence",
          "security monitoring",
          "incident response frameworks",
        ],
        resources: [
          "AlienVault's Open Threat Exchange",
          "MITRE ATT&CK Framework",
        ],
      },
    ],
  },
];

/**
- Cyber Mentor (YouTube): Great for free courses on ethical hacking and cybersecurity.   

- Hacker101 (Web): Practice-based platform to learn web hacking.   

- TryHackMe & Hack The Box (Web): Interactive labs for skill-building and practice. 

Online Resources: 

Cyber Mentor (YouTube): Great for free courses on ethical hacking and cybersecurity. 

URL: https://www.youtube.com/@TCMSecurityAcademy 

Hacker101 (Web): Practice-based platform to learn web hacking. 

URL: https://youtu.be/zPYfT9azdK8?si=Fo_-ukmgNhmUap1n 

TryHackMe & Hack The Box (Web): Interactive labs for skill-building and practice. 

URL: https://www.youtube.com/@RealTryHackMe 

 

Platforms for cybersecurity where you can apply skills hands-on and progress from beginner to advanced levels. 

1. TryHackMe 

Overview: A beginner-friendly platform with interactive labs covering topics from basic networking to complex penetration testing. 

Key Features: Guided learning paths, capture-the-flag (CTF) challenges, and step-by-step tutorials. 

URL: TryHackMe 

2. Hack The Box 

Overview: Designed for intermediate to advanced users, it offers virtual penetration testing labs. 

Key Features: A variety of virtual machines to hack, including real-world challenges, CTFs, and labs focused on specific vulnerabilities. 

URL: Hack The Box 
 */

export const cyberResources: {
  type: string;
  title: string;
  overview?: string;
  features?: string[];
  url: string;
}[] = [
  {
    type: "YouTube",
    title: "Cyber Mentor",
    features: ["Great for free courses on ethical hacking and cybersecurity. "],
    url: "https://www.youtube.com/@TCMSecurityAcademy",
  },
  {
    type: "Web",
    title: "Hacker101",
    features: ["Practice-based platform to learn web hacking. "],
    url: "https://youtu.be/zPYfT9azdK8?si=Fo_-ukmgNhmUap1n",
  },
  {
    type: "Web",
    title: "TryHackMe & Hack The Box",
    features: ["Interactive labs for skill-building and practice. "],
    url: "https://www.youtube.com/@RealTryHackMe",
  },
  {
    type: "Platform",
    title: "TryHackMe",
    overview:
      "A beginner-friendly platform with interactive labs covering topics from basic networking to complex penetration testing.",
    features: [
      "Guided learning paths",
      "Capture-the-flag (CTF) challenges",
      "Step-by-step tutorials",
    ],
    url: "https://tryhackme.com",
  },
  {
    type: "Platform",
    title: "Hack The Box",
    overview:
      "Designed for intermediate to advanced users, it offers virtual penetration testing labs.",
    features: [
      "A variety of virtual machines to hack",
      "Real-world challenges",
      "CTFs",
      "Labs focused on specific vulnerabilities",
    ],
    url: "https://www.hackthebox.com",
  },
];
