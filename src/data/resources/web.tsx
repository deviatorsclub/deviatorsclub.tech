type Resource = {
  ytSource: string;
  projects: string[];
  resources: { title: string; url: string }[];
};

export const webDevRoadmapData = [
  {
    category: "Fundamentals",
    items: [
      {
        title: "HTML",
        description:
          "Learn HTML tags, attributes, and semantic elements to structure web pages correctly.",
      },
      {
        title: "CSS",
        description:
          "Understand layout concepts like Flexbox and Grid, along with styling basics and CSS animations.",
      },
      {
        title: "JavaScript Basics",
        description:
          "Master variables, data types, operators, loops, functions, and DOM manipulation.",
      },
      {
        title: "Advanced JavaScript",
        description:
          "Dive deeper into ES6+, closures, callbacks, promises, async/await, and fetch API.",
      },
    ],
  },
  {
    category: "Development Tools",
    items: [
      {
        title: "Version Control (Git & GitHub)",
        description:
          "Track code changes, create branches, manage pull requests, and collaborate on projects.",
      },
      {
        title: "Responsive Design & CSS Frameworks",
        description:
          "Use media queries for responsive design and frameworks like Bootstrap or Tailwind for faster styling.",
      },
      {
        title: "Developer Environment Setup",
        description:
          "Set up and configure IDEs like VSCode, extensions, and workspace organization for productivity.",
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        title: "Node.js Basics",
        description:
          "Learn the basics of Node.js, including the event loop, modules, and npm for package management.",
      },
      {
        title: "Express.js",
        description:
          "Build REST APIs using Express, manage routes, middleware, and error handling.",
      },
      {
        title: "Databases (SQL & NoSQL)",
        description:
          "Understand relational (MySQL, PostgreSQL) vs. non-relational databases (MongoDB), CRUD operations, and data modeling.",
      },
      {
        title: "Authentication",
        description:
          "Implement user authentication with JWT, OAuth, and manage sessions securely.",
      },
      {
        title: "API Development & RESTful Principles",
        description:
          "Learn how to structure RESTful APIs, handle HTTP methods, and use Postman for testing.",
      },
    ],
  },
  {
    category: "Frontend Frameworks & Libraries",
    items: [
      {
        title: "React Basics",
        description:
          "Master React fundamentals: components, props, state, and the component lifecycle.",
      },
      {
        title: "Advanced React",
        description:
          "Explore hooks, context API, React Router, and performance optimizations.",
      },
      {
        title: "State Management (Redux or Context)",
        description:
          "Learn to manage global state in complex applications with Redux or React Context.",
      },
      {
        title: "Styling with CSS-in-JS Libraries",
        description:
          "Use libraries like Styled Components or Emotion for CSS-in-JS.",
      },
    ],
  },
  {
    category: "Professional & Production Skills",
    items: [
      {
        title: "Testing (Unit & Integration)",
        description:
          "Write unit tests with Jest and integration tests for APIs and UI components.",
      },
      {
        title: "CI/CD Pipeline Setup",
        description:
          "Automate testing, building, and deployment using CI/CD tools like GitHub Actions or Jenkins.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve website performance through lazy loading, code splitting, and caching.",
      },
      {
        title: "Security Best Practices",
        description:
          "Understand security risks like XSS, CSRF, and implement security headers and SSL.",
      },
      {
        title: "Deployment",
        description:
          "Deploy your application to platforms like Vercel, Netlify, or DigitalOcean. Learn Docker for containerization.",
      },
    ],
  },
];

export const HtmlResources: Resource = {
  ytSource: "https://www.youtube.com/embed/BsDoLVMnmZs?si=noRiGghsE0LPLmIG",
  projects: [
    "Personal Resume: Build a basic resume with HTML only",
    "Document or Report: Create a structured report or article",
    "Newsletter Template: Design an email newsletter template",
    "Survey Form: Create a form with various input types",
    "Wikipedia-style Article: Build a page with proper use of sections and hyperlinks",
    "Simple Blog Page: Construct a basic blog page with multiple articles",
    "Basic Table of Contents: Design a table of contents with anchor links",
  ],
  resources: [
    {
      title:
        "Code With Harry: HTML Tutorial For Beginners In Hindi (With Notes)",
      url: "https://www.youtube.com/watch?v=BsDoLVMnmZs",
    },
    {
      title:
        "Apna College: HTML Tutorial for Beginners | Complete HTML with Notes & Code",
      url: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
    },
    {
      title: "FreeCodeCamp: Learn HTML – Full Tutorial for Beginners (2022)",
      url: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    },
  ],
};

export const CssResources: Resource = {
  ytSource:
    "https://www.youtube.com/embed/videoseries?si=xIqhL8DW4kVHB5KU&amp;list=PLH8iQ-rTfw2-lp7oienYPq9JT3rc-B_9p",
  resources: [
    {
      title: "Code With Harry: CSS Tutorial In Hindi (With Notes)",
      url: "https://www.youtube.com/watch?v=Edsxf_NBFrw",
    },
    {
      title:
        "Apna College: CSS Tutorial for Beginners | Complete CSS with Project, Notes",
      url: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
    },
    {
      title: "FreeCodeCamp: CSS Tutorial – Full Course for Beginners",
      url: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
    },
  ],
  projects: [
    "Personal Portfolio Website: Create a responsive portfolio",
    "Landing Page: Design a landing page with various sections",
    "Pricing Table: Build an attractive pricing table",
    "Photo Gallery: Develop a responsive image gallery",
    "Form Design: Style a sign-up or login form with modern design",
  ],
};

export const JavaScriptResources: Resource = {
  resources: [
    {
      title: "Chai aur Code: Javascript for beginners | chai aur #javascript",
      url: "https://www.youtube.com/watch?v=sscX432bMZo",
    },
    {
      title:
        "Developed by Ed: Getting Started With Javascript | Javascript Tutorial For Beginners",
      url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    },
    {
      title:
        "Apna College: JavaScript Full Course ❤ | Variables & Data Types | Lecture 1",
      url: "https://www.youtube.com/watch?v=ajdRvxDWH4w",
    },
  ],
  ytSource:
    "https://www.youtube.com/embed/videoseries?si=MIVTlcSU-syPUNT4&amp;list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
  projects: [
    "To-Do List App: Create a simple task management application",
    "Calculator: Build a functional calculator with basic operations",
    "Weather App: Fetch and display weather data from an API",
    "Quiz Game: Develop an interactive quiz with multiple-choice questions",
    "Countdown Timer: Create a timer with start, pause, and reset functionality",
  ],
};

export const FullStackResources: (Omit<Resource, "projects"> & {
  name: string;
  desc: string;
})[] = [
  {
    name: "Mongodb",
    desc: "Learn to work with MongoDB, a popular NoSQL database, and perform CRUD operations. Understand the basics of Mongoose for object modeling.",
    ytSource: "https://www.youtube.com/embed/J6mDkcqU_ZE?si=5MnHU6fe676jl8KJ",
    resources: [
      {
        title: "Net Ninja: Complete MongoDB Tutorial",
        url: "https://www.youtube.com/embed/videoseries?si=i5D8iVvsamYALV4v&amp;list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
      },
      {
        title:
          " Engineering Digest: MongoDB Playlist in Hindi ( Complete Course )",
        url: "https://youtube.com/playlist?list=PLA3GkZPtsafZydhN4nP0h7hw7PQuLsBv1&si=FnQ-4_j4_bxiEXVn",
      },
    ],
  },
  {
    name: "Express.js",
    desc: "Build REST APIs using Express, manage routes, middleware, and error handling.",
    ytSource:
      "https://www.youtube.com/embed/videoseries?si=SWaHw_Cj9NfbIv8F&amp;list=PL_cUvD4qzbkwjmjy-KjbieZ8J9cGwxZpC",
    resources: [
      {
        title:
          "Sheryians Coding School: Master Backend Development Series | NodeJS | MongoDB | Express JS",
        url: "https://youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&si=Wjz3CT06wAMM-7dS",
      },
      {
        title: "Thapa Technical: Express JS Tutorial In Hindi in 2020",
        url: "https://youtube.com/playlist?list=PLwGdqUZWnOp3Vqww2cL5KbDkShj4NMRzk&si=x1uZStIoNsCUvbv4",
      },
    ],
  },
  {
    name: "React.js",
    desc: "Master React fundamentals: components, props, state, and the component lifecycle.",
    ytSource:
      "https://www.youtube.com/embed/videoseries?si=L81Dt-11k3kjciy9&amp;list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
    resources: [
      {
        title: "Chai aur Code: Chai aur react | with projects",
        url: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=6-B8g-e9YtzYsYwn",
      },
      {
        title:
          "Anurag Singh ProCodrr: React.js Full Course in Hindi | Zero to Advanced in 28 Hours",
        url: "https://youtube.com/playlist?list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&si=PbrKZ90rUhekMuU5  ",
      },
    ],
  },
  {
    name: "Node.js",
    desc: "Execute JavaScript code on the server-side, build web servers, and create RESTful APIs.",
    ytSource:
      "https://www.youtube.com/embed/videoseries?si=Jf9i5hWgyr4I_rSR&amp;list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
    resources: [
      {
        title: "Code With Harry: Node.js Tutorial for Beginners in Hindi",
        url: "https://www.youtube.com/watch?v=1OALSkJGsRw",
      },
      {
        title: "Thapa Technical: NodeJS Tutorial in Hindi",
        url: "https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&si=hxtxu98PjDOTAbWj",
      },
    ],
  },
];
