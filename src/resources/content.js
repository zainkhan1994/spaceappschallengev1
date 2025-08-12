const about = {
  headerStrip: {
    city: "Houston, TX",
    timeZone: "America/Chicago",
    localTimeToggle: true,
    registerLabel: "Register",
    registerHref: "https://www.spaceappschallenge.org/2025/",
  },

  hero: {
    title: "NASA Space Apps Houston 2025",
    subtitle: "Learn, Launch, Lead on October 4–5. Build solutions with NASA and partner agency data.",
    primaryCTA: {
      label: "Register",
      href: "https://www.spaceappschallenge.org/2025/",
      analyticsId: "about-hero-register",
      external: true,
    },
    secondaryCTA: {
      label: "Join the Houston Discord",
      href: "#", // Replace with your Discord invite link
      analyticsId: "about-hero-discord",
      external: true,
    },
    backgroundImage: "/spaceapps-hero.png",
    logo: "/spaceapps-logo.png",
    alt: "NASA Space Apps Houston 2025",
  },

  whatIs: {
    heading: "What is NASA Space Apps",
    bodyRich:
      "NASA Space Apps is the world’s largest annual global hackathon. Anyone can join. Teams use free and open NASA data to solve real problems on Earth and in space across two days.",
    externalLink: {
      label: "About NASA Space Apps",
      href: "https://www.spaceappschallenge.org/about/",
      external: true,
    },
  },

  houstonLocal: {
    heading: "Houston local event",
    bullets: [
      "In-person in Houston",
      "Two-day build and submit",
      "Mentors and volunteers on site",
      "Sponsors and community partners welcome",
    ],
    mapEmbed:
      "<iframe src='https://www.google.com/maps?q=Houston,+TX&output=embed' width='100%' height='200' style='border:0' allowFullScreen='' loading='lazy'></iframe>",
    CTA: {
      label: "Register for Houston",
      href: "https://www.spaceappschallenge.org/2025/", // Replace with Houston deep link if available
      analyticsId: "about-houston-register",
      external: true,
    },
  },

  organizer: {
    name: "Zain Khan",
    role: "Local Lead, NASA Space Apps Houston 2025",
    photo: "/organizer-zainkhan.jpg", // Your headshot
    bio:
      "Community builder focused on STEM access, design engineering practices, and AI literacy. Leads outreach, sponsors, and day-of operations with a volunteer team.",
    social: [
      {
        label: "LinkedIn",
        href: "#", // Replace with LinkedIn URL
        icon: "linkedin",
      },
      {
        label: "X (Twitter)",
        href: "#", // Replace with X/Twitter URL
        icon: "twitter",
      },
    ],
  },

  howTo: {
    heading: "How to participate",
    steps: [
      "Create your account on SpaceAppsChallenge.org",
      "Select the Houston local event when you register",
      "Form or join a team",
      "Pick a challenge",
      "Submit by the deadline on October 5",
    ],
  },

  sponsors: {
    heading: "Sponsors and partners",
    pitch:
      "Support Houston talent with mentorship, prizes, food, or venue resources. Reach students, engineers, designers, and founders.",
    benefits: [
      "Brand visibility to students and professionals",
      "Local and global impact",
      "Network with NASA and partner agencies",
      "Contribute to STEM education and innovation",
    ],
    sponsorCTA: {
      label: "Sponsor Houston",
      href: "#", // Add sponsor form or email here
      analyticsId: "about-sponsor",
      external: true,
    },
    logos: [
      "/spaceapps-logo.png",
      "/spaceapps-prior.png",
    ],
  },

  resources: {
    heading: "Resources",
    links: [
      {
        label: "Participant FAQ",
        href: "https://www.spaceappschallenge.org/faq/",
        external: true,
      },
      {
        label: "Brand Guidelines",
        href: "https://www.spaceappschallenge.org/brand/",
        external: true,
      },
      {
        label: "Awards",
        href: "https://www.spaceappschallenge.org/awards/",
        external: true,
      },
      {
        label: "Global Blog",
        href: "https://www.spaceappschallenge.org/blog/",
        external: true,
      },
    ],
  },

  galleryStrip: {
    galleryRef: "/gallery",
    showRecent: true,
  },

  blogStrip: {
    postsRef: "/blog",
    tagFilter: null,
  },

  footer: {
    contactCTA: "Contact",
    email: "houston-spaceapps@placeholder.com", // Replace with real email
    codeOfConduct: {
      label: "Code of Conduct",
      href: "https://www.spaceappschallenge.org/code-of-conduct/",
      external: true,
    },
    brandNotes: "NASA Space Apps Houston is a locally organized event and not directly affiliated with NASA.",
  },
};

module.exports = {
  about,
};
