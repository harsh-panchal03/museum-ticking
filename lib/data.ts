// Update the museums array with Indian cities and pricing in Rupees
export const museums = [
  {
    id: "1",
    name: "National Museum",
    location: "New Delhi, India",
    city: "New Delhi",
    description:
      "The National Museum in New Delhi is one of India's largest museums, housing a diverse collection of artifacts spanning over 5,000 years of Indian cultural heritage, including archaeological finds, sculptures, paintings, and decorative arts.",
    image: "https://thumbs.dreamstime.com/b/british-museum-london-england-988691.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/natural-history-museum-london-interior-36322294.jpg",
      "https://thumbs.dreamstime.com/b/museum-interior-15103642.jpg",
      "https://thumbs.dreamstime.com/b/art-patrons-looks-painting-hanging-wall-historic-louvre-museum-interior-102367654.jpg",
      "https://thumbs.dreamstime.com/b/museum-art-interior-fine-arts-houston-one-larger-museums-united-states-89345627.jpg",
    ],
    hours: "10:00 AM - 6:00 PM, Closed on Mondays",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 500 },
      { id: "senior", name: "Senior (65+)", price: 300 },
      { id: "student", name: "Student", price: 250 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "45 min" },
      { id: "ancient", name: "Ancient Indian Art", duration: "30 min" },
      { id: "medieval", name: "Medieval Sculptures", duration: "60 min" },
    ],
    featured: true,
    categories: ["Art", "History", "Ancient Civilizations"],
  },
  {
    id: "2",
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    location: "Mumbai, India",
    city: "Mumbai",
    description:
      "Formerly known as the Prince of Wales Museum, this is one of India's premier art and history museums. The museum houses approximately 50,000 exhibits of ancient Indian history as well as objects from foreign lands.",
    image: "https://thumbs.dreamstime.com/b/royal-ontario-museum-26713338.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/houston-museum-fine-arts-interior-one-larger-art-museums-united-states-89676527.jpg",
      "https://thumbs.dreamstime.com/b/museum-fine-arts-houston-texas-interior-one-larger-art-museums-united-states-89345566.jpg",
      "https://thumbs.dreamstime.com/b/sphinx-museum-louvre-ancient-egyptian-paris-62434141.jpg",
      "https://thumbs.dreamstime.com/b/montreal-fine-arts-museum-room-editorial-canada-paintings-wall-young-adult-looking-39023360.jpg",
    ],
    hours: "10:15 AM - 6:00 PM, Open Daily",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 650 },
      { id: "senior", name: "Senior (65+)", price: 400 },
      { id: "student", name: "Student", price: 300 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "60 min" },
      { id: "colonial", name: "Colonial History", duration: "45 min" },
      { id: "decorative", name: "Decorative Arts", duration: "50 min" },
    ],
    featured: true,
    categories: ["Art", "History", "Colonial Era"],
  },
  {
    id: "3",
    name: "Indian Museum",
    location: "Kolkata, India",
    city: "Kolkata",
    description:
      "The Indian Museum in Kolkata is the oldest and largest museum in India, and one of the oldest museums in the world. It has rare collections of antiques, armor, ornaments, fossils, skeletons, mummies, and Mughal paintings.",
    image:
      "https://thumbs.dreamstime.com/b/british-museum-exterior-design-dedicated-to-human-history-art-culture-located-bloomsbury-area-london-106879016.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/children-read-mammoth-natural-history-museum-foreground-skeleton-extinct-species-mammal-genus-mammuthus-344342361.jpg",
      "https://thumbs.dreamstime.com/b/birth-venus-sandro-botticelli-uffizi-museum-florence-italy-birth-venus-sandro-botticelli-uffizi-museum-340328832.jpg",
      "https://thumbs.dreamstime.com/b/famous-natural-history-museum-vienna-austria-beautiful-view-park-sculpture-43215525.jpg",
      "https://thumbs.dreamstime.com/b/boy-museum-3348348.jpg",
    ],
    hours: "10:00 AM - 5:00 PM, Closed on Mondays",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 350 },
      { id: "senior", name: "Senior (65+)", price: 200 },
      { id: "student", name: "Student", price: 150 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "60 min" },
      { id: "archaeology", name: "Archaeological Treasures", duration: "30 min" },
      { id: "natural", name: "Natural History", duration: "45 min" },
    ],
    featured: true,
    categories: ["History", "Archaeology", "Natural History"],
  },
  {
    id: "4",
    name: "Salar Jung Museum",
    location: "Hyderabad, India",
    city: "Hyderabad",
    description:
      "The Salar Jung Museum is an art museum located in Hyderabad. It houses the largest one-man collection of antiques in the world, with collections dating back to the 1st century.",
    image: "https://thumbs.dreamstime.com/b/islamic-art-museum-doha-qatar-40940039.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/globe-vatican-museum-17518323.jpg",
      "https://thumbs.dreamstime.com/b/rome-italy-interior-galleria-borghese-museum-nobody-december-339000319.jpg",
      "https://thumbs.dreamstime.com/b/vatican-city-vatican-september-profane-museum-vatican-museums-rome-italy-photo-vatican-city-vatican-september-profane-museum-346099835.jpg",
      "https://thumbs.dreamstime.com/b/crowds-inside-map-room-vatican-museum-city-august-342385712.jpg",
    ],
    hours: "10:00 AM - 5:00 PM, Closed on Fridays",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 400 },
      { id: "senior", name: "Senior (65+)", price: 250 },
      { id: "student", name: "Student", price: 200 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "45 min" },
      { id: "islamic", name: "Islamic Art Collection", duration: "40 min" },
      { id: "european", name: "European Artifacts", duration: "50 min" },
    ],
    featured: false,
    categories: ["Art", "Islamic Art", "European Art"],
  },
  {
    id: "5",
    name: "Government Museum",
    location: "Chennai, India",
    city: "Chennai",
    description:
      "The Government Museum in Chennai is the second oldest museum in India. It has the richest collection of bronze idols in South India, with notable collections from the Chola period.",
    image: "https://thumbs.dreamstime.com/b/ashmolean-museum-facade-oxford-24541283.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/kimbell-art-museum-fort-worth-texas-located-cultural-district-host-european-old-masters-traveling-48967740.jpg",
      "https://thumbs.dreamstime.com/b/philbrook-museum-10890301.jpg",
      "https://thumbs.dreamstime.com/b/philadelphia-art-museum-entrance-pennsylvania-usa-44813756.jpg",
      "https://thumbs.dreamstime.com/b/cleveland-museum-art-near-reflecting-pool-university-circle-31880792.jpg",
    ],
    hours: "9:30 AM - 5:00 PM, Closed on Fridays",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 300 },
      { id: "senior", name: "Senior (65+)", price: 150 },
      { id: "student", name: "Student", price: 100 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "60 min" },
      { id: "bronze", name: "Bronze Gallery", duration: "45 min" },
      { id: "archaeology", name: "Archaeological Section", duration: "40 min" },
    ],
    featured: false,
    categories: ["Art", "South Indian History", "Archaeology"],
  },
  {
    id: "6",
    name: "Albert Hall Museum",
    location: "Jaipur, India",
    city: "Jaipur",
    description:
      "The Albert Hall Museum in Jaipur is the oldest museum in Rajasthan. The building itself is an example of Indo-Saracenic architecture. It houses a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, and metal sculptures.",
    image: "https://thumbs.dreamstime.com/b/altes-museum-berlin-3187389.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/denver-art-museum-colorado-76262518.jpg",
      "https://thumbs.dreamstime.com/b/san-sebastian-spain-jan-octopus-lures-hooks-display-aquarium-museum-359612589.jpg",
      "https://thumbs.dreamstime.com/b/light-inside-museum-fine-arts-houston-work-art-james-turrell-art-texas-89345515.jpg",
      "https://thumbs.dreamstime.com/b/museum-american-indian-washington-dc-massive-smithsonian-showcases-unusual-curved-architecture-stone-building-35775350.jpg",
    ],
    hours: "9:00 AM - 5:00 PM, Open Daily",
    ticketTypes: [
      { id: "adult", name: "Adult", price: 450 },
      { id: "senior", name: "Senior (65+)", price: 250 },
      { id: "student", name: "Student", price: 200 },
      { id: "child", name: "Child (under 12)", price: 0 },
    ],
    audioGuides: [
      { id: "highlights", name: "Museum Highlights", duration: "45 min" },
      { id: "rajasthani", name: "Rajasthani Art", duration: "60 min" },
      { id: "crafts", name: "Traditional Crafts", duration: "30 min" },
    ],
    featured: false,
    categories: ["Art", "Rajasthani Culture", "Architecture"],
  },
]

// Update the events array with Indian cities and pricing in Rupees
export const events = [
  {
    id: "1",
    title: "Classical Indian Art Exhibition",
    date: "2023-12-15",
    time: "10:00 AM - 6:00 PM",
    location: "National Museum",
    city: "New Delhi",
    description:
      "A special exhibition featuring masterpieces from classical Indian art periods, including Gupta, Chola, and Pala dynasties.",
    image:
      "https://thumbs.dreamstime.com/b/art-appreciators-view-paintings-museum-de-prado-prado-museum-madrid-spain-52319523.jpg",
    price: 800,
    featured: true,
  },
  {
    id: "2",
    title: "Contemporary Indian Art Symposium",
    date: "2023-12-20",
    time: "2:00 PM - 5:00 PM",
    location: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    city: "Mumbai",
    description:
      "Join leading Indian artists and critics for a symposium on the evolution and impact of contemporary Indian art movements.",
    image:
      "https://thumbs.dreamstime.com/b/museum-modern-art-nyc-new-york-city-march-street-view-manhattan-moma-was-founded-39570959.jpg",
    price: 600,
    featured: true,
  },
  {
    id: "3",
    title: "Treasures of Ancient India",
    date: "2024-01-10",
    time: "11:00 AM - 4:00 PM",
    location: "Indian Museum",
    city: "Kolkata",
    description:
      "Explore recent archaeological discoveries from ancient Indian civilizations, featuring newly excavated artifacts and interactive displays.",
    image:
      "https://thumbs.dreamstime.com/b/grand-egyptian-museum-gem-giza-egypt-archeological-museum-ancient-egyptian-civilization-giza-egypt-grand-egyptian-museum-gem-362028869.jpg",
    price: 550,
    featured: true,
  },
  {
    id: "4",
    title: "Photography Through Indian Eyes",
    date: "2024-01-15",
    time: "10:00 AM - 8:00 PM",
    location: "Salar Jung Museum",
    city: "Hyderabad",
    description:
      "A comprehensive exhibition tracing the evolution of photography in India from its earliest days to contemporary digital innovations.",
    image:
      "https://thumbs.dreamstime.com/b/van-gogh-museum-amsterdam-netherlands-crowd-front-new-wing-sunflowers-foreground-67959862.jpg",
    price: 450,
    featured: false,
  },
  {
    id: "5",
    title: "South Indian Bronze Masterpieces",
    date: "2024-01-25",
    time: "9:00 AM - 6:00 PM",
    location: "Government Museum",
    city: "Chennai",
    description:
      "An exhibition showcasing the finest bronze sculptures from South India, with a focus on Chola period masterpieces.",
    image: "https://thumbs.dreamstime.com/b/philadelphia-museum-art-25314455.jpg",
    price: 500,
    featured: false,
  },
  {
    id: "6",
    title: "Rajasthani Miniature Paintings",
    date: "2024-02-05",
    time: "10:00 AM - 5:00 PM",
    location: "Albert Hall Museum",
    city: "Jaipur",
    description:
      "Discover the intricate art of Rajasthani miniature paintings, featuring works from various schools including Bundi, Kishangarh, and Mewar.",
    image:
      "https://thumbs.dreamstime.com/b/museum-anthropology-ubc-vancouver-bc-university-british-columbia-32268303.jpg",
    price: 600,
    featured: false,
  },
  {
    id: "7",
    title: "Modern Sculpture Showcase",
    date: "2024-02-15",
    time: "11:00 AM - 7:00 PM",
    location: "National Museum",
    city: "New Delhi",
    description:
      "A showcase of groundbreaking contemporary sculpture from artists across India, pushing the boundaries of form and material.",
    image: "https://thumbs.dreamstime.com/b/dinosaur-creation-museum-skeleton-florence-kentucky-92079466.jpg",
    price: 700,
    featured: false,
  },
  {
    id: "8",
    title: "Textile Traditions of India",
    date: "2024-02-28",
    time: "9:00 AM - 6:00 PM",
    location: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    city: "Mumbai",
    description:
      "Explore the rich textile heritage of India, from ancient weaving techniques to contemporary fashion innovations.",
    image:
      "https://thumbs.dreamstime.com/b/cruise-ship-sailing-near-attractive-cathedral-berliner-dom-museum-island-berlin-germany-cruise-ship-sailing-near-346958958.jpg",
    price: 650,
    featured: false,
  },
]

// Update the cities array with Indian cities
export const cities = ["All Cities", "New Delhi", "Mumbai", "Kolkata", "Hyderabad", "Chennai", "Jaipur"]

// Update the categories array with relevant Indian art categories
export const categories = [
  "All Categories",
  "Art",
  "History",
  "Ancient Civilizations",
  "South Indian History",
  "Rajasthani Culture",
  "Islamic Art",
  "Colonial Era",
  "Architecture",
  "Archaeology",
  "Natural History",
]

export type Museum = (typeof museums)[0]
export type Event = (typeof events)[0]
export type TicketType = (typeof museums)[0]["ticketTypes"][0]
export type AudioGuide = (typeof museums)[0]["audioGuides"][0]

export function getMuseum(id: string): Museum | undefined {
  return museums.find((museum) => museum.id === id)
}

export function getEvent(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getFeaturedMuseums(limit?: number): Museum[] {
  const featured = museums.filter((museum) => museum.featured)
  return limit ? featured.slice(0, limit) : featured
}

export function getFeaturedEvents(limit?: number): Event[] {
  const featured = events.filter((event) => event.featured)
  return limit ? featured.slice(0, limit) : featured
}

export function getEventsByCity(city: string): Event[] {
  if (city === "All Cities") {
    return events
  }
  return events.filter((event) => event.city === city)
}

export function getMuseumsByCategory(category: string): Museum[] {
  if (category === "All Categories") {
    return museums
  }
  return museums.filter((museum) => museum.categories.includes(category))
}

export function searchMuseums(query: string): Museum[] {
  const lowercaseQuery = query.toLowerCase()
  return museums.filter(
    (museum) =>
      museum.name.toLowerCase().includes(lowercaseQuery) ||
      museum.description.toLowerCase().includes(lowercaseQuery) ||
      museum.location.toLowerCase().includes(lowercaseQuery) ||
      museum.categories.some((category) => category.toLowerCase().includes(lowercaseQuery)),
  )
}
