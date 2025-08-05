export const dsaRoadmapData: {
  category: string;
  desc: string | JSX.Element;
  items: {
    title: string;
    link?: string;
  }[];
}[] = [
  {
    category: "Step 1 - (Beginners)",
    desc: (
      <>
        <p>
          The goal here is to familiarise with a language and be able to
          implement your ideas.
        </p>
        <p>Learn basics of a language (Python, C++, Java recommended)</p>
        <p>
          <a
            className="my-1 block underline"
            target="_blank"
            href="https://codeforwin.org/c-programming-examples-exercises-solutions-beginners"
            rel="noreferrer"
          >
            https://codeforwin.org/c-programming-examples-exercises-solutions-beginners
          </a>
          This website has a large number of questions. The answers are in C but
          the logic will be the same. You can code them in your own languages
          and have ChatGPT check for you.
        </p>
      </>
    ),
    items: [
      {
        title: "Python",
        link: "https://www.w3schools.com/python/",
      },
      {
        title: "C++",
        link: "https://www.w3schools.com/cpp/",
      },
      {
        title: "Java",
        link: "https://www.w3schools.com/java/",
      },
    ],
  },
  {
    category: "Step 2 - (Intermediate)",
    desc: "The goal here is to learn basic Data Structures and Algorithms and some theoretical concepts.",
    items: [
      {
        title: "Time & Space Complexity",
      },
      {
        title: "Arrays",
      },
      {
        title: "Searching",
      },
      {
        title: "Sorting",
      },
      {
        title: "Strings",
      },
      {
        title: "Recursion",
      },
      {
        title: "Bit Manipulation & Math",
      },
      {
        title: "OOPs",
      },
      {
        title: "Linked List",
      },
      {
        title: "Stacks & Queues",
      },
      {
        title: "Hashmaps",
      },
    ],
  },
  {
    category: "Step 3 - (Advanced)",
    desc: "The goal is to learn advanced Data structures and Algorithms",
    items: [
      {
        title: "Trees",
      },
      {
        title: "Heaps",
      },
      {
        title: "Graphs",
      },
      {
        title: "DP",
      },
      {
        title: "Tries",
      },
    ],
  },
];

export const dsaResources = [
  {
    title: "Introduction to Algorithms",
    url: "/Introduction_to_Algorithms.pdf",
  },
  {
    title: "Competitive Programmer's Handbook",
    url: "/Competitive_Programmer's_Handbook.pdf",
  },
  {
    title: "Kunal Kushwaha (Java)",
    url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=f0yxaQEZxD-Piz6Q",
  },
  {
    title: "PepCoding (Java)",
    url: "https://www.youtube.com/playlist?list=PL-Jc9J83PIiE-181crLG1xSIWhTGKFiMY",
  },
  {
    title: "Striver (C++)",
    url: "https://youtube.com/playlist?list=PLb3g_Z8nEv1icFN8wZvQcYp8c1T5mQr8P",
  },
];

export const codingPlatforms = [
  {
    title: "LeetCode",
    url: "https://leetcode.com/",
  },
  {
    title: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    title: "CodeChef",
    url: "https://www.codechef.com/",
  },
  {
    title: "Codeforces",
    url: "https://codeforces.com/",
  },
  {
    title: "Cses",
    url: "https://cses.fi/",
  },
];
