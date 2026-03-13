export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Episodes", path: "/episodes" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "For Entrepreneurs", path: "/services/entrepreneurs", icon: "💼" },
      { name: "For Creators", path: "/services/creators", icon: "🎨" },
      { name: "For Authors", path: "/services/authors", icon: "📚" },
      { name: "For Coaches", path: "/services/coaches", icon: "🎯" },
      { name: "Corporate Leaders", path: "/services/corporate", icon: "🏢" },
    ],
  },
  { name: "Why Me", path: "/why-me" },
  { name: "Reviews", path: "/reviews" },
  { name: "FAQ", path: "/faq" },
];

export const EPISODES = [
  {
    id: 1,
    title: "Exploring Family Lineage and Ancestral Roots with Alyona Kovalova",
    duration: "53m 36s",
    guest: "Alyona Kovalova",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A deep conversation about family history, ancestral connection, identity, and the emotional power of understanding where we come from.",
    date: "2024-03-15",
    category: "Personal Growth",
    thumbnail: "/images/episode1.jpg",
  },
  {
    id: 2,
    title: "Balancing Power, Purpose, and Presence with Mariam Farag",
    duration: "53m 36s",
    guest: "Mariam Farag",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A thoughtful discussion on leadership, authentic presence, and how to stay aligned with purpose while navigating growth.",
    date: "2024-03-10",
    category: "Leadership",
    thumbnail: "/images/episode2.jpg",
  },
  {
    id: 3,
    title: "Episode with Mr. Dean, Senior Vice President of Hospitality",
    duration: "49m 26s",
    guest: "Mr. Dean",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "An inside look into luxury hospitality, leadership, standards, and what excellence looks like behind the scenes.",
    date: "2024-03-05",
    category: "Business",
    thumbnail: "/images/episode3.jpg",
  },
  {
    id: 4,
    title: "Entrepreneur Mindset: Fear, Healing, and Purpose",
    duration: "56m 03s",
    guest: "Sarah Johnson",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A raw and honest conversation about fear, healing, and finding purpose through the emotional reality of entrepreneurship.",
    date: "2024-02-28",
    category: "Entrepreneurship",
    thumbnail: "/images/episode4.jpg",
  },
  {
    id: 5,
    title: "Burnout, Boundaries & Belief: Tania Shin on Redefining Success in Dubai",
    duration: "56m 29s",
    guest: "Tania Shin",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A conversation about burnout, boundaries, ambition, and redefining success in a city that moves fast and demands a lot.",
    date: "2024-02-20",
    category: "Wellness",
    thumbnail: "/images/episode5.jpg",
  },
  {
    id: 6,
    title: "Fitness, No Filter: Elizabeth Novik",
    duration: "38m 43s",
    guest: "Elizabeth Novik",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A clear and unfiltered perspective on fitness, health, body image, and staying honest in an image-driven world.",
    date: "2024-02-15",
    category: "Health",
    thumbnail: "/images/episode6.jpg",
  },
  {
    id: 7,
    title: "CREATIVE MODE: Smart Talks with Nicolas Naim",
    duration: "32m 49s",
    guest: "Nicolas Naim",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A sharp conversation on creativity, originality, idea flow, and how to build work that remains alive and meaningful.",
    date: "2024-02-10",
    category: "Creativity",
    thumbnail: "/images/episode7.jpg",
  },
];

export const SERVICES = [
  {
    id: "anyone",
    title: "Anyone with a story worth sharing",
    icon: "❤️",
    description:
      "Whether you are in transition, building something meaningful, or ready to speak your truth, this platform gives your story the space and dignity it deserves.",
    features: ["Personal storytelling", "Authentic conversation", "Safe environment"],
  },
  {
    id: "creators",
    title: "Creators & Influencers",
    icon: "🎨",
    description:
      "Grow your personal brand, expand your audience, and let people connect with the human voice behind your content.",
    features: ["Brand growth", "Audience expansion", "Content amplification"],
  },
  {
    id: "authors",
    title: "Authors & Speakers",
    icon: "📚",
    description:
      "Talk about your book, ideas, or message in a format that creates stronger emotional resonance and long-form credibility.",
    features: ["Book promotion", "Idea sharing", "Authority building"],
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    icon: "💼",
    description:
      "Promote your product or service, share your journey, and build trust with future clients through authentic storytelling.",
    features: ["Business storytelling", "Journey sharing", "Client connection"],
  },
  {
    id: "coaches",
    title: "Coaches, Mentors & Experts",
    icon: "🎯",
    description:
      "Position yourself as a thought leader, communicate your methods clearly, and inspire others through your experience.",
    features: ["Thought leadership", "Method sharing", "Inspiration"],
  },
  {
    id: "corporate",
    title: "Corporate Leaders & Professionals",
    icon: "🏢",
    description:
      "Humanise your brand, highlight company values, and showcase the people and principles behind the business.",
    features: ["Brand humanisation", "Value highlighting", "Team visibility"],
  },
];

export const WHY_ME_REASONS = [
  {
    id: 1,
    title: "A trusted voice in Dubai",
    description:
      "Anastasiia brings years of experience across digital strategy, branding, and storytelling, giving your message stronger credibility and context.",
    icon: "🎙️",
  },
  {
    id: 2,
    title: "Access to meaningful connections",
    description:
      "By joining Moments with Anastasiia, you are positioned alongside entrepreneurs, creatives, leaders, and public voices within a curated network.",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Storytelling that elevates your brand",
    description:
      "Anastasiia knows how to uncover the strongest parts of your story and present them with clarity, emotional depth, and lasting resonance.",
    icon: "📖",
  },
  {
    id: 4,
    title: "Marketing power behind every episode",
    description:
      "With her background in digital growth and audience strategy, each episode is designed not only to be recorded well, but to travel further and perform better.",
    icon: "📈",
  },
];

export const FAQS = [
  {
    id: 1,
    question: "How do I prepare for a podcast episode?",
    answer:
      "Once your spot is confirmed, we align on the topic and talking points in advance. You receive guiding questions and simple preparation tips so you feel confident and relaxed. We handle the rest, from recording to editing and publishing.",
    category: "Preparation",
  },
  {
    id: 2,
    question: "What is your podcast about?",
    answer:
      "The podcast features authentic conversations around self-growth, entrepreneurship, creativity, wellness, and personal transformation. Each episode is designed to inspire, uplift, and empower listeners.",
    category: "About",
  },
  {
    id: 3,
    question: "What makes your podcast unique in the Dubai scene?",
    answer:
      "Unlike standard interview-style formats, the podcast creates space for deeper, more human conversations with a strong focus on emotional intelligence, mindset, creativity, and confidence.",
    category: "About",
  },
  {
    id: 4,
    question: "How long does the podcast recording usually take?",
    answer:
      "Most recording sessions last between 45 and 60 minutes, including setup, a short warm-up conversation, and the actual recording.",
    category: "Recording",
  },
  {
    id: 5,
    question: "What should I wear for the podcast recording?",
    answer:
      "Wear something that makes you feel confident and comfortable. Neutral tones and solid colours usually work very well on camera, especially for video content.",
    category: "Recording",
  },
  {
    id: 6,
    question: "Do I need to be a public speaker or influencer to be on the podcast?",
    answer:
      "Not at all. This platform is for real people with real stories, whether you are a founder, coach, creative, professional, or someone with a meaningful message.",
    category: "Eligibility",
  },
  {
    id: 7,
    question: "Why is podcasting a powerful method of communication today?",
    answer:
      "Podcasting creates space for deeper and more meaningful conversations. It helps build trust, emotional connection, and thought leadership in a way short-form content often cannot.",
    category: "General",
  },
];

export const JOURNEY_STORY = {
  title: "From Ukraine to Dubai: A Journey Fueled by Purpose",
  paragraphs: [
    "Anastasiia Solodovnyk's journey began in Ukraine, where she made the courageous decision to leave her comfort zone and begin a new chapter in Dubai. The move demanded patience, resilience, and self-belief.",
    "Rather than letting uncertainty define her, she used those challenges as stepping stones. She trusted herself, embraced change, and began building a future shaped by vision and determination.",
    "From an early age, Anastasiia was drawn to people and their stories. Digital marketing later gave her the perfect meeting point between strategy, creativity, and meaningful connection.",
    "Over time, that path evolved into something larger than a profession. It became a platform for helping ideas travel, stories resonate, and people feel seen.",
  ],
};

export const PODCAST_STORY = {
  title: "The Birth of Moments with Anastasiia",
  paragraphs: [
    "Moments with Anastasiia was created as a platform where entrepreneurs, creatives, leaders, and everyday voices could share honest stories of resilience, growth, and transformation.",
    "What makes the podcast stand out is its commitment to authenticity. It is not built on polished façades, but on real experiences, meaningful reflection, and conversations with depth.",
    "The platform has grown into more than a podcast. It has become a space where ideas, emotion, and lived experience meet, creating both practical value and genuine inspiration.",
    "For Anastasiia, the podcast is a natural extension of her work: combining communication, emotional intelligence, and personal brand storytelling in a way that feels human and lasting.",
  ],
};

export const VISION_STORY = {
  title: "Vision for the Future",
  paragraphs: [
    "Anastasiia’s ambitions extend far beyond personal success. Her long-term vision is to build a platform that inspires confidence, growth, and individuality.",
    "Moments with Anastasiia is not just content. It is a movement shaped around the belief that people can thrive when they are equipped with the right mindset, message, and platform.",
    "By combining digital expertise with storytelling and personal development, she creates work that delivers both results and emotional resonance.",
    "Her vision is rooted in one idea: that people grow most powerfully when they are encouraged to trust themselves, embrace challenge, and move forward with courage.",
  ],
};

export const LEGACY_STORY = {
  title: "Building a Legacy of Authenticity",
  paragraphs: [
    "Anastasiia hopes to be remembered as someone who combined strategy with heart, and ambition with authenticity.",
    "Through her podcast and professional work, she continues to inspire people to believe in themselves, embrace challenge, and create opportunity out of uncertainty.",
    "At the centre of her philosophy is storytelling. She believes stories connect people, inspire action, and create change in ways that numbers alone never can.",
    "Her journey from Ukraine to Dubai reflects the very lessons she shares: resilience, adaptability, courage, and growth. That is the legacy she continues to build.",
  ],
};

export const CONTACT_INFO = {
  name: "Anastasiia Solodovnyk",
  email: "anastasiya.solodovnyk@gmail.com",
  phone: "+971 55 706 5616",
  instagram: "@anastasia.solodovnyk",
  location: "Dubai, UAE",
};

export const COMPANY_INFO = {
  name: "Anastasiia Solodovnyk",
  registration: "United Arab Emirates",
  license: "Individual",
  workingHours: "Business days and hours",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/anastasia.solodovnyk",
  linkedin: "https://linkedin.com/in/anastasiia-solodovnyk",
  youtube: "https://youtube.com/@momentswithanastasia",
};

export default {
  NAV_ITEMS,
  EPISODES,
  SERVICES,
  WHY_ME_REASONS,
  FAQS,
  JOURNEY_STORY,
  PODCAST_STORY,
  VISION_STORY,
  LEGACY_STORY,
  CONTACT_INFO,
  COMPANY_INFO,
  SOCIAL_LINKS,
};