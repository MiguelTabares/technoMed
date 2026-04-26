import { collection, addDoc } from "firebase/firestore";
import { db } from "../src/backend/database.js";

const eventsData = [
  {
    id: 1,
    title: "Klockworks Showcase",
    location: "Bodega 01 - Medellín",
    lineup: "Ben Klock, DVS1, Stef Mendesidis (Live)",
    date: "OCT 28 // 23:00 - 10:00",
    img: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 2,
    title: "EXHALE Warehouse",
    location: "Pabellón Amarillo",
    lineup: "Amelie Lens, Farrago, Kobosil",
    date: "NOV 11 // 22:00 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 3,
    title: "Acid Reign Vol. 3",
    location: "Club Subterráneo 1984",
    lineup: "Charlotte de Witte, Alignment",
    date: "NOV 18 // 23:30 - 06:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 4,
    title: "Afterlife Medellín",
    location: "Estadio Cincuentenario",
    lineup: "Tale Of Us, Anyma, MRAK, Kevin de Vries",
    date: "FEB 02 // 18:00 - 04:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Melodic"
  },
  {
    id: 5,
    title: "Vault Sessions X",
    location: "Antigua Estación del Ferrocarril",
    lineup: "SNTS, I Hate Models, Paula Temple",
    date: "DIC 05 // 22:00 - 09:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 6,
    title: "Klangkuenstler All Night Long",
    location: "Terraza Centro",
    lineup: "Klangkuenstler",
    date: "DIC 15 // 23:00 - 07:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Hardcore"
  },
  {
    id: 7,
    title: "Awakenings Connect",
    location: "Plaza Mayor",
    lineup: "Adam Beyer, Joris Voorn, Pan-Pot",
    date: "ENE 14 // 16:00 - 03:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Melodic"
  },
  {
    id: 8,
    title: "Boiler Room Medellín",
    location: "Secret Location",
    lineup: "Deraout, Merino, Verraco, Julianna",
    date: "FEB 20 // 21:00 - 05:00",
    img: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 9,
    title: "Neopop Satellite",
    location: "Teatro al Aire Libre",
    lineup: "Richie Hawtin, Paco Osuna",
    date: "MAR 10 // 20:00 - 04:00",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 10,
    title: "Verknipt Colombia",
    location: "Coliseo Ivan de Bedout",
    lineup: "Sara Landry, Nico Moreno, OGUZ",
    date: "MAR 25 // 21:00 - 06:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 11,
    title: "Anjunadeep Open Air",
    location: "Jardín Botánico",
    lineup: "Ben Böhmer, Eli & Fur, Yotto",
    date: "ABR 05 // 14:00 - 23:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Melodic"
  },
  {
    id: 12,
    title: "Possession Medellín",
    location: "Edificio Fabricato (Sótano)",
    lineup: "Shlømo, Parfait, Héctor Oaks",
    date: "ABR 18 // 23:59 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 13,
    title: "999999999 Live",
    location: "MUTE",
    lineup: "999999999 (Live), Charlie Sparks",
    date: "MAY 01 // 23:00 - 06:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Acid"
  },
  {
    id: 14,
    title: "Teletech Showcase",
    location: "Bodega de los Espejos",
    lineup: "Azyr, BLK., Kettama",
    date: "MAY 15 // 22:00 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Hardcore"
  },
  {
    id: 15,
    title: "Blackout Warehouse",
    location: "Antigua Fábrica de Licores",
    lineup: "Dax J, VTSS, SPFDJ",
    date: "JUN 02 // 23:00 - 08:00",
    img: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Industrial"
  },
  {
    id: 16,
    title: "Synapse Activation",
    location: "Estación Metro Clandestina",
    lineup: "Richie Hawtin, ANNA",
    date: "JUN 10 // 22:00 - 06:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 17,
    title: "Resonance 01",
    location: "Bodega de las Máquinas",
    lineup: "Nina Kraviz, FJAAK",
    date: "JUN 24 // 23:30 - 07:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Hardcore"
  },
  {
    id: 18,
    title: "Neon Pulse",
    location: "Club Subterráneo 1984",
    lineup: "Maceo Plex, Stephan Bodzin (Live)",
    date: "JUL 05 // 21:00 - 04:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Melodic"
  },
  {
    id: 19,
    title: "System Failure",
    location: "Pabellón Amarillo",
    lineup: "Paula Temple, SNTS",
    date: "JUL 15 // 22:00 - 08:00",
    img: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 20,
    title: "Matrix Reloaded",
    location: "MUTE",
    lineup: "Enrico Sangiuliano, Victor Ruiz",
    date: "AGO 04 // 23:00 - 06:00",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Acid"
  },
  {
    id: 21,
    title: "Cybernetic Night",
    location: "Terraza Centro",
    lineup: "Deborah De Luca, Lily Palmer",
    date: "AGO 12 // 20:00 - 04:00",
    img: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Melodic"
  },
  {
    id: 22,
    title: "Void Transmission",
    location: "Bodega 01 - Medellín",
    lineup: "Klangkuenstler, Trym",
    date: "AGO 26 // 23:59 - 09:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 23,
    title: "Acid Protocol",
    location: "Secret Location",
    lineup: "Alignment, Regal",
    date: "SEP 02 // 22:30 - 07:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 24,
    title: "Dark Matter",
    location: "Edificio Fabricato (Sótano)",
    lineup: "I Hate Models, Kobosil",
    date: "SEP 16 // 23:00 - 08:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 25,
    title: "BPM Overload",
    location: "Estadio Cincuentenario",
    lineup: "Nico Moreno, Fatima Hajji",
    date: "OCT 07 // 18:00 - 03:00",
    img: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2874&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 26,
    title: "Neural Network",
    location: "Plaza Mayor",
    lineup: "Tale Of Us, Mind Against",
    date: "OCT 20 // 21:00 - 05:00",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Melodic"
  },
  {
    id: 27,
    title: "Hacker's Paradise",
    location: "Club Subterráneo 1984",
    lineup: "Helena Hauff, DJ Stingray",
    date: "NOV 04 // 23:30 - 06:00",
    img: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 28,
    title: "Zero Day Exploit",
    location: "Bodega de los Espejos",
    lineup: "Cera Khin, Clara Cuvé",
    date: "NOV 18 // 22:00 - 07:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 29,
    title: "Distortion Realm",
    location: "Antigua Estación del Ferrocarril",
    lineup: "Rebekah, Perc",
    date: "DIC 02 // 23:00 - 08:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 30,
    title: "The Grand Reset",
    location: "Secret Location",
    lineup: "Amelie Lens, Charlotte de Witte",
    date: "DIC 31 // 22:00 - 12:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Acid"
  }
];

const seedDatabase = async () => {
  console.log("Iniciando inyección masiva de eventos en Firestore...");
  const eventsRef = collection(db, "events");

  try {
    for (const event of eventsData) {
      // Eliminamos el ID quemado para que Firestore genere IDs alfanuméricos únicos automáticamente
      const { id, ...eventWithoutId } = event; 
      await addDoc(eventsRef, eventWithoutId);
      console.log(`✅ Evento inyectado: ${event.title}`);
    }
    console.log("🎉 Seeding finalizado con éxito! 30 eventos creados en Firestore.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error durante el seeding:", error);
    process.exit(1);
  }
};

seedDatabase();
