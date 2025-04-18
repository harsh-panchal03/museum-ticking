// Fallback data for museums
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
    ticketPrice: 500,
    highlights: [
      "Ancient Indian Art Collection",
      "Harappan Civilization Gallery",
      "Buddhist Art Exhibition",
      "Medieval Sculptures",
      "Miniature Paintings",
    ],
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
      "https://thumbs.dreamstime.com/b/houston-museum-fine-arts-interior-one-larger-museums-united-states-89676527.jpg",
      "https://thumbs.dreamstime.com/b/museum-fine-arts-houston-texas-interior-one-larger-art-museums-united-states-89345566.jpg",
      "https://thumbs.dreamstime.com/b/sphinx-museum-louvre-ancient-egyptian-paris-62434141.jpg",
      "https://thumbs.dreamstime.com/b/montreal-fine-arts-museum-room-editorial-canada-paintings-wall-young-adult-looking-39023360.jpg",
    ],
    hours: "10:15 AM - 6:00 PM, Open Daily",
    ticketPrice: 650,
    highlights: [
      "European Paintings Gallery",
      "Indian Miniature Paintings",
      "Decorative Arts Collection",
      "Sculpture Gallery",
      "Natural History Section",
    ],
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
    ticketPrice: 350,
    highlights: [
      "Archaeological Gallery",
      "Art Collection",
      "Egyptian Mummy",
      "Geological Specimens",
      "Zoological Specimens",
    ],
  },
]

// Fallback data for events
export const events = [
  {
    id: "1",
    name: "Classical Indian Art Exhibition",
    date: "2023-12-15",
    time: "10:00 AM - 6:00 PM",
    location: "National Museum",
    city: "New Delhi",
    description:
      "A special exhibition featuring masterpieces from classical Indian art periods, including Gupta, Chola, and Pala dynasties.",
    image:
      "https://thumbs.dreamstime.com/b/art-appreciators-view-paintings-museum-de-prado-prado-museum-madrid-spain-52319523.jpg",
    price: 800,
  },
  {
    id: "2",
    name: "Contemporary Indian Art Symposium",
    date: "2023-12-20",
    time: "2:00 PM - 5:00 PM",
    location: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    city: "Mumbai",
    description:
      "Join leading Indian artists and critics for a symposium on the evolution and impact of contemporary Indian art movements.",
    image:
      "https://thumbs.dreamstime.com/b/museum-modern-art-nyc-new-york-city-march-street-view-manhattan-moma-was-founded-39570959.jpg",
    price: 600,
  },
  {
    id: "3",
    name: "Treasures of Ancient India",
    date: "2024-01-10",
    time: "11:00 AM - 4:00 PM",
    location: "Indian Museum",
    city: "Kolkata",
    description:
      "Explore recent archaeological discoveries from ancient Indian civilizations, featuring newly excavated artifacts and interactive displays.",
    image:
      "https://thumbs.dreamstime.com/b/grand-egyptian-museum-gem-giza-egypt-archeological-museum-ancient-egyptian-civilization-giza-egypt-grand-egyptian-museum-gem-362028869.jpg",
    price: 550,
  },
  {
    id: "4",
    name: "Photography Through Indian Eyes",
    date: "2024-01-15",
    time: "10:00 AM - 8:00 PM",
    location: "Salar Jung Museum",
    city: "Hyderabad",
    description:
      "A comprehensive exhibition tracing the evolution of photography in India from its earliest days to contemporary digital innovations.",
    image:
      "https://thumbs.dreamstime.com/b/van-gogh-museum-amsterdam-netherlands-crowd-front-new-wing-sunflowers-foreground-67959862.jpg",
    price: 450,
  },
]

// List of cities for filtering
export const cities = ["New Delhi", "Mumbai", "Kolkata", "Hyderabad", "Chennai", "Jaipur"]

// Create an AudioGuidePlayer component
