import React, { useState} from "react";
export const StoreContext = React.createContext(null);


export default ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const certificateDetails = [
    {
      title: "Twilio Video - Create Zoom Clone Video Conference App",
      company: "Udemy",
      alias: "Twilio Video - Create Zoom Clone Video Conference App.PNG",
      source:
        "https://www.udemy.com/certificate/UC-4ff6fbff-bd45-4da0-b564-7ddaf0cc7969/",
      issueDate: "2022-01-09",
      description:
        "To establish connection with other users and exchange with them media, we will use Twilio Programmable Video. That solution is based on WebRTC and media servers. For creating client side UI we will go for React which is most popular library to creating front-end in JavaScript. Also we will connect with serverless functions which we will host on Twilio Platform. Our created rooms will be able to handle even 50 participants connected to the same room.",
      technology: "React.js, Twilio, Javascript",
      rating: 3.5,
    },
    {
      title: "Next.JS with Sanity CMS - Serverless Blog App (w/ Vercel)",
      company: "Udemy",
      alias: "Sanity CMS - Serverless Blog App.jpg",
      source:
        "https://www.udemy.com/certificate/UC-58c02c24-103a-4800-84b8-151d37f1c6e5/",
      issueDate: "2021-12-15",
      descriptin:
        "Use sanity template to develop personal blog easily, next.js develop single-page web and deploy the web application on vercel platform.",
      technology: "Next.js,Sanity.io, Javascript",
      rating: 5,
    },
    {
      title: "The Ultimate React Js Responsive Portfolio Website",
      company: "Udemy",
      alias: "The Ultimate React Js Responsive Portfolio Website.jpg",
      source:
        "https://www.udemy.com/certificate/UC-4dbdda45-c5f5-456e-8a31-b9b2b7022098/",
      issueDate: "2021-12-15",
      description: "Using React to create responsive Portfolio Website.",
      technology: "React.js, Node.js, Javascript, Nodemailer, CSS, HTML",
      rating: 5,
    },
    {
      title: "SystemExpert",
      company: "algoexpert.io",
      alias: "SystemExpert.png",
      source:
        "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-51843be914",
      issueDate: "2021-11-13",
      description: "Understand the system design and methodology.",
      technology: "Polling, Hearbeat Methodology, Streaming",
      rating: 5,
    },
    {
      title: "AlgoExpert",
      company: "algoexpert.io",
      alias: "algoExpert.png",
      source:
        "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-b7271be7df",
      issueDate: "2021-07-11",
      description:
        "Achieve hundreds of algorithmn Questions, keep optimize the code.",
      technology: "Algorithms Optimization",
      rating: 5,
    },
    {
      title: "MERN eCommerce From Scratch",
      company: "Udemy",
      alias: "MERN eCommerce From Scratch.jpg",
      source:
        "https://www.udemy.com/certificate/UC-2940ee0c-4124-4412-a88f-27d61963e3d1/",
      issueDate: "2021-06-20",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "MERN Stack",
      rating: 5,
    },
    {
      title: "Build UBER Clone App Using Flutter and Firebase (2020) ",
      company: "Udemy",
      alias: "Build UBER Clone App Using Flutter and Firebase.jpg",
      source:
        "https://www.udemy.com/certificate/UC-de97938e-d6f8-4858-892f-d082be5a600d/",
      issueDate: "2021-05-09",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Flutter, Dart, Firebase",
      rating: 4.5,
    },
    {
      title: "High-Performance Computing with Python 3.x",
      company: "Udemy",
      alias: "High-Performance Computing with Python 3.jpg",
      source:
        "https://www.udemy.com/certificate/UC-04c73adb-5bfb-42d7-a04f-5657bc0abbf1/",
      issueDate: "2021-02-22",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python, CPython, Parallel Programming",
      rating: 4.5,
    },
    {
      title: "PHP OOP Complete Online Exam System with PHP jQuery Ajax",
      company: "Udemy",
      alias: "PHP OOP Complete Online Exam System with PHP jQuery Ajax.jpg",
      source:
        "https://www.udemy.com/certificate/UC-f2dca964-5f3f-4241-baaf-37bc5112daa8/",
      issueDate: "2021-02-09",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "PHP, JS, HTML, CSS, PHPMyAdmin, Ajax",
      rating: 3,
    },
    {
      title: "Develop Real Django Project with PostgreSQL & Deploy on Heroku",
      company: "Udemy",
      alias: "Develop Real Django Project with PostgreSQL.jpg",
      source:
        "https://www.udemy.com/certificate/UC-f05d1976-4ad8-4ec2-99d3-2d4448327c26/",
      issueDate: "2021-01-09",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Django, Full Stack, HTML, CSS, PostgreSQL",
      rating: 4,
    },
    {
      title: "Python SDET-Backend/ Rest API Testing with BDD Framework",
      company: "Udemy",
      alias: "Rest API Testing with BDD Framework.jpg",
      source:
        "https://www.udemy.com/certificate/UC-9fb1e1ae-9e50-45c8-9ba0-e7f923f58cae/",
      issueDate: "2020-12-13",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "BDD, API Testing, Python, Appium",
      rating: 2.5,
    },
    {
      title: "Algorithms on Graphs",
      company: "Coursera",
      alias: "Algorithms on Graphs.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/W38AMMFLR3CL",
      issueDate: "2020-11-05",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Algorithms",
      rating: 5,
    },
    {
      title: "Open Source Software Development, Linux and Git Specialization",
      company: "Coursera",
      alias: "Open Source Software Development.png",
      source:
        "https://www.youracclaim.com/badges/ab8682aa-7750-48ad-8255-bda8c1a34f85?source=linked_in_profile",
      issueDate: "2020-11-02",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "VCS, Github",
      rating: 5,
    },
    {
      title: "R Programming",
      company: "Coursera",
      alias: "R Programming.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/FCCMWP9TZ6XC",
      issueDate: "2020-10-04",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "R",
      rating: 3,
    },
    {
      title: "Introduction to GIS Mapping",
      company: "Coursera",
      alias: "Introduction to GIS Mapping.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/UE98H7S9APT5",
      issueDate: "2020-09-28",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "GIS",
      rating: 3,
    },
    {
      title: "Data Engineering with Google Cloud Specialization",
      company: "Coursera",
      alias: "Data Engineering with Google Cloud Specialization.png",
      source:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/CLU47V9JETEB",
      issueDate: "2020-09-23",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Big Query",
      rating: 5,
    },
    {
      title: "AI Capstone Project with Deep Learning",
      company: "Coursera",
      alias: "AI Capstone Project with Deep Learning.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/Q9P59LME266W",
      issueDate: "2020-09-21",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "ML, DL",
      rating: 5,
    },
    {
      title: "Building Resilient Streaming Analytics Systems on GCP",
      company: "Coursera",
      alias: "Building Resilient Streaming Analytics Systems on GCP.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/AG4DWA2WQGQ9",
      issueDate: "2020-09-18",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Big Query",
      rating: 5,
    },
    {
      title: "Building Deep Learning Models with TensorFlow",
      company: "Coursera",
      alias: "Building Deep Learning Models with TensorFlow.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/K2RTEPFBMG5E",
      issueDate: "2020-09-17",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "ML, DL, TensorFlow",
      rating: 5,
    },
    {
      title: "Building Batch Data Pipelines on GCP",
      company: "Coursera",
      alias: "Building Batch Data Pipelines on GCP.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/DW6MGUSMBKTW",
      issueDate: "2020-09-15",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Google Cloud",
      rating: 5,
    },
    {
      title: "Deep Neural Networks with PyTorch",
      company: "Coursera",
      alias: "Deep Neural Networks with PyTorch.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/UKCQM7DSKCAX",
      issueDate: "2020-09-18",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Google Cloud, DL, PyTorch, Python",
      rating: 5,
    },
    {
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      company: "Coursera",
      alias: "Google Cloud Platform Fundamentals.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/UKCQM7DSKCAX",
      issueDate: "2020-09-17",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Google Cloud",
      rating: 5,
    },
    {
      title: "IBM AI Engineering Specialization",
      company: "Coursera",
      alias: "IBM AI Engineering Specialization.png",
      source:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/YQ66WPQJG8YZ",
      issueDate: "2020-09-21",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "AI, ML, DL",
      rating: 5,
    },
    {
      title: "Introduction to Augmented Reality and ARCore",
      company: "Coursera",
      alias: "Introduction to Augmented Reality and ARCore.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/8QDFMTP2Q3A5",
      issueDate: "2020-09-27",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "AR",
      rating: 3,
    },
    {
      title: "Preparing for the Google Cloud Professional Data Engineer Exam",
      company: "Coursera",
      alias:
        "Preparing for the Google Cloud Professional Data Engineer Exam.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/MUZS75C3XP55",
      issueDate: "2020-09-23",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Data Engineer, Google cloud, Big Query",
      rating: 5,
    },
    {
      title: "Scalable Machine Learning on Big Data using Apache Spark",
      company: "Coursera",
      alias: "Scalable Machine Learning on Big Data using Apache Spark.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/LLASXHLHPJ43",
      issueDate: "2020-09-17",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Big Data, ML",
      rating: 5,
    },
    {
      title: "Smart Analytics, Machine Learning, and AI on GCP",
      company: "Coursera",
      alias: "Smart Analytics Machine Learning and AI on GCP.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/6NP4MEKKXBAA",
      issueDate: "2020-09-20",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Big Data, ML",
      rating: 5,
    },
    {
      title: "Open Source Software Development, Linux and Git Specialization",
      company: "Coursera",
      alias:
        "Open Source Software Development Linux and Git Specialization.png",
      source:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/3DM8WFJBMWHR",
      issueDate: "2020-07-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Git, VCS",
      rating: 5,
    },
    {
      title: "Algorithmic Toolbox",
      company: "Coursera",
      alias: "Algorithmic Toolbox.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/KNRRPTM5N8EL",
      issueDate: "2020-08-04",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Algorithm",
      rating: 5,
    },
    {
      title: "Object-Oriented Data Structures in C++",
      company: "Coursera",
      alias: "Object-Oriented Data Structures in C++.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/8TJXDE4ECRQS",
      issueDate: "2020-08-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "C++, Data Structures, OPP",
      rating: 5,
    },
    {
      title: "Modernizing Data Lakes and Data Warehouses with GCP",
      company: "Coursera",
      alias: "Modernizing Data Lakes and Data Warehouses with GCP.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/TWLL7EQMH6FJ",
      issueDate: "2020-07-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Data Warehouses",
      rating: 5,
    },
    {
      title: "Using Git for Distributed Development",
      company: "Coursera",
      alias: "Using Git for Distributed Development.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/BG4A5VLG8MC8",
      issueDate: "2020-07-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Git",
      rating: 5,
    },
    {
      title: "Linux Tools for Developers",
      company: "Coursera",
      alias: "Linux Tools for Developers.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/GB244XRV85PJ",
      issueDate: "2020-07-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Linux Command, Vim",
      rating: 5,
    },
    {
      title: "Linux for Developers",
      company: "Coursera",
      alias: "Linux for Developers.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/N27FLTB2SLVG",
      issueDate: "2020-07-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Linux Command, Vim",
      rating: 5,
    },
    {
      title: "Open Source Software Development Methods",
      company: "Coursera",
      alias: "Open Source Software Development Methods.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/UEA899J4GVS8",
      issueDate: "2020-07-03",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Git",
      rating: 5,
    },
    {
      title: "Introduction to Search Engine Optimization",
      company: "Coursera",
      alias: "Introduction to Search Engine Optimization.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/42C4WQPKRWGA",
      issueDate: "2020-07-22",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "SEO",
      rating: 5,
    },
    {
      title: "Automating Real-World Tasks with Python",
      company: "Coursera",
      alias: "Automating Real-World Tasks with Python.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/QQLQ9U9P7K2B",
      issueDate: "2020-06-04",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python",
      rating: 5,
    },
    {
      title: "Data Science Methodology",
      company: "Coursera",
      alias: "Data Science Methodology.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/SP9PS82NES4X",
      issueDate: "2020-06-27",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Data Science",
      rating: 5,
    },
    {
      title: "Google IT Automation with Python Specialization",
      company: "Coursera",
      alias: "Google IT Automation with Python Specialization.png",
      source:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/UEUR5CFRKUSS",
      issueDate: "2020-06-06",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python",
      rating: 5,
    },
    {
      title: "Internet Connection: How to Get Online?",
      company: "Coursera",
      alias: "Internet Connection How to Get Online.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/YMZEFNG43DPA",
      issueDate: "2020-06-06",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Networking",
      rating: 2,
    },
    {
      title: "Introduction to Cyber Attacks",
      company: "Coursera",
      alias: "Introduction to Cyber Attacks.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/EPYTAYXAXM9J",
      issueDate: "2020-06-09",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Cyber Security",
      rating: 5,
    },
    {
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      company: "Coursera",
      alias: "Introduction to Deep Learning Neural Networks with Keras.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/GNYPQN5MKQ3V",
      issueDate: "2020-06-28",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "DL, CNN, Keras",
      rating: 5,
    },
    {
      title: "Introduction to the Internet of Things and Embedded Systems",
      company: "Coursera",
      alias: "Introduction to the Internet of Things and Embedded Systems.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/KPBBCSYM5JFM",
      issueDate: "2020-06-08",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "IoT",
      rating: 5,
    },
    {
      title: "Machine Learning with Python",
      company: "Coursera",
      alias: "Machine Learning with Python.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/R6PNGUHKLMV4",
      issueDate: "2020-06-07",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "ML, Python",
      rating: 5,
    },
    {
      title: "Python for Data Science and AI",
      company: "Coursera",
      alias: "Python for Data Science and AI.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/VH4TQKZNENEV",
      issueDate: "2020-06-28",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Data Science , AI, Python",
      rating: 5,
    },
    {
      title: "Tools for Data Science",
      company: "Coursera",
      alias: "Tools for Data Science.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/VRH9EXC4FC9U",
      issueDate: "2020-06-27",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Data Science ",
      rating: 5,
    },
    {
      title: "Usable Security",
      company: "Coursera",
      alias: "Usable Security.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/MQCK7JVFQCPP",
      issueDate: "2020-06-07",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Usable Security",
      rating: 5,
    },
    {
      title: "Introduction to Git and GitHub",
      company: "Coursera",
      alias: "Introduction to Git and GitHub.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/2DF5GWR8AS4N",
      issueDate: "2020-05-01",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Git, VCS",
      rating: 5,
    },
    {
      title: "Using Python to Interact with the Operating System",
      company: "Coursera",
      alias: "Using Python to Interact with the Operating System.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/AA3UMASB2MMH",
      issueDate: "2020-05-10",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python",
      rating: 5,
    },
    {
      title: "Configuration Management and the Cloud",
      company: "Coursera",
      alias: "Configuration Management and the Cloud.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/R44FRLKQSFPJ",
      issueDate: "2020-05-03",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Git",
      rating: 5,
    },
    {
      title: "Google Cloud Platform Big Data and Machine Learning Fundamentals",
      company: "Coursera",
      alias:
        "Google Cloud Platform Big Data and Machine Learning Fundamentals.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/JM5VBQNK2HFE",
      issueDate: "2020-05-22",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Big Data, GCP, ML",
      rating: 5,
    },
    {
      title: "Network Protocols and Architecture",
      company: "Coursera",
      alias: "Network Protocols and Architecture.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/R626MJ8LXJ5S",
      issueDate: "2020-05-17",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Networking",
      rating: 5,
    },
    {
      title: "Troubleshooting and Debugging Techniques (Google)",
      company: "Coursera",
      alias: "Troubleshooting and Debugging Techniques (Google).png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/TGZSUTDEBS66",
      issueDate: "2020-05-01",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Troubleshooting",
      rating: 5,
    },
    {
      title: "Crash Course on Python (Google)",
      company: "Coursera",
      alias: "Crash Course on Python (Google).png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/NSEWPDJHXFNW",
      issueDate: "2020-04-12",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python",
      rating: 5,
    },
    {
      title: "Getting Started with SAS Programming",
      company: "Coursera",
      alias: "Getting Started with SAS Programming.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/M4WJBP9TVP58",
      issueDate: "2020-04-26",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "SAS",
      rating: 5,
    },
    {
      title: "Neural Networks and Deep Learning",
      company: "Coursera",
      alias: "Neural Networks and Deep Learning.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/H5AXSF2P2R92",
      issueDate: "2020-04-19",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "CNN, DL",
      rating: 5,
    },
    {
      title:
        "Programming for Everybody (Getting Started with Python) (University of Machigan)",
      company: "Coursera",
      alias:
        "Programming for Everybody (Getting Started with Python) (University of Machigan).png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/C4WAVHJ9PMMN",
      issueDate: "2020-04-14",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "Python",
      rating: 5,
    },
    {
      title: "Machine Learning",
      company: "Coursera",
      alias: "Machine Learning.png",
      source:
        "https://www.coursera.org/account/accomplishments/certificate/URGVQ8EPCJLA",
      issueDate: "2020-03-28",
      description:
        "Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB",
      technology: "ML, Python",
      rating: 5,
    },
  ];
  const [certificates, setCertificates] = useState(certificateDetails);
  const [uuser, setUser] = useState({})
  const [twoFactor, setTwoFactor] =  useState({});

  const store = {
    lang: [language, setLanguage],
    cert: [certificates, setCertificates],
    user: [uuser, setUser],
    rsa: [twoFactor, setTwoFactor]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
