import deer from "@/assets/animal-deer.jpg";
import wolf from "@/assets/animal-wolf.jpg";
import bison from "@/assets/animal-bison.jpg";

export type ConservationStatus =
  | "Least concern"
  | "Near threatened"
  | "Vulnerable"
  | "Endangered";

export type Animal = {
  id: string;
  name: string;
  scientific: string;
  image: string;
  region: string;
  habitat: string;
  activityWindow: string;
  status: ConservationStatus;
  observedAt?: string;
  observedLocation?: string;
  story: string;
  facts: string[];
  conservation: string;
  related: string[];
  audioMinutes: number;
  inJournal: boolean;
};

export const animals: Animal[] = [
  {
    id: "red-deer",
    name: "Red Deer",
    scientific: "Cervus elaphus",
    image: deer,
    region: "Red deer enclosure",
    habitat: "Mixed woodland and open clearings of the Schorfheide",
    activityWindow: "Most active at dawn and dusk — the rut begins in September",
    status: "Least concern",
    observedAt: "24 October, 07:42",
    observedLocation: "Signpost 04 · Red deer enclosure",
    story:
      "The red deer is native to the Schorfheide Heathland and lives here in spacious enclosures that mirror its natural habitat. In autumn the forest carries the low bellow of the stags — the sound of the rut, a season of display rather than confrontation.",
    facts: [
      "Antlers regrow entirely each spring, sometimes gaining up to 2 cm a day.",
      "A mature stag can weigh over 200 kg yet move almost silently through dense brush.",
      "The rutting call carries more than a kilometre through still morning air.",
    ],
    conservation:
      "Populations across central Europe are stable. Protected forest corridors like the Biosphere Reserve Schorfheide-Chorin allow herds to move freely between feeding grounds.",
    related: ["European Bison", "Fallow Deer"],
    audioMinutes: 3,
    inJournal: true,
  },
  {
    id: "gray-wolf",
    name: "Gray Wolf",
    scientific: "Canis lupus",
    image: wolf,
    region: "Wolf enclosure",
    habitat: "Deep forest — a species extinct in the wild in this region for over a century",
    activityWindow: "Most vocal at dawn; often visible at feedings",
    status: "Near threatened",
    observedAt: "24 October, 09:15",
    observedLocation: "Signpost 11 · Wolf enclosure",
    story:
      "The wolf is one of the park's signature species. Wildpark Schorfheide runs regular themed tours around them — from the guided walk 'The Wolf – an Animal par Excellence' to the Vollmondwolfsnacht (full moon wolf night) and the Wolfsfrühstück (wolf breakfast). Wolves returned to Brandenburg on their own, walking back into forests they had not seen for a century.",
    facts: [
      "A wild pack's territory in Brandenburg can span more than 200 km².",
      "Wolves communicate with subtle facial expressions long before they vocalise.",
      "Pups stay with the family group for up to two years, learning to hunt cooperatively.",
    ],
    conservation:
      "Strict protection across the EU has allowed the German wolf population to recover from zero to more than 1,300 individuals in two decades.",
    related: ["Red Deer"],
    audioMinutes: 4,
    inJournal: true,
  },
  {
    id: "european-bison",
    name: "European Bison (Wisent)",
    scientific: "Bison bonasus",
    image: bison,
    region: "Wisent enclosure",
    habitat: "Open meadow and forest edge",
    activityWindow: "Grazes through the day, rests at midday",
    status: "Vulnerable",
    story:
      "The wisent was once extinct in the wild and survives today only because of a handful of animals kept in reserves such as Wildpark Schorfheide. Every wild bison alive descends from just twelve founders. They are, quietly, a second chance.",
    facts: [
      "The heaviest land mammal in Europe, reaching up to 900 kg.",
      "Prefers a mixed diet of grasses, bark and young shoots — a natural forest gardener.",
      "Reintroduction programmes coordinated across seven countries share the same bloodlines.",
    ],
    conservation:
      "Listed as Vulnerable by the IUCN. Continued survival depends on managed herds and slow release into protected forests across eastern Europe.",
    related: ["Red Deer"],
    audioMinutes: 5,
    inJournal: false,
  },
];

// Other species living in the park — mentioned on the official site.
export const otherSpecies: string[] = [
  "European Otter",
  "Fallow Deer",
  "Wild Boar",
  "Mouflon",
  "European Elk (Moose)",
  "Przewalski's Horse",
];

export type ParkNotice = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
};

export const parkNotices: ParkNotice[] = [
  {
    id: "otter-feeding",
    eyebrow: "Every day · 11:00",
    title: "Otter feeding at the otter enclosure",
    body: "The otters are fed daily at 11 am — the best moment to see them active, close to the underwater viewing window.",
  },
  {
    id: "carriage",
    eyebrow: "Good to know",
    title: "Horse-drawn carriage tours",
    body: "Prefer to rest your feet? A carriage tour crosses the park's 7 km trail network and is fully accessible for wheelchair users.",
  },
  {
    id: "dogs",
    eyebrow: "Please",
    title: "Dogs are welcome — on a lead",
    body: "Well-behaved dogs on a lead are welcome throughout the park. Please give the enclosures space, especially near the wolves.",
  },
];

export type FeedingSession = {
  id: string;
  time: string;
  title: string;
  place: string;
};

export const feedingSessions: FeedingSession[] = [
  { id: "otters", time: "11:00", title: "Otter feeding", place: "Otter enclosure" },
  { id: "guided", time: "13:00", title: "Guided park walk (90 min)", place: "Meets at the visitors' centre" },
  { id: "wolves", time: "15:00", title: "Wolf presentation", place: "Wolf enclosure viewing platform" },
];

export type SeasonalEvent = {
  id: string;
  date: string;
  time: string;
  title: string;
  place: string;
  description: string;
};

export const seasonalEvents: SeasonalEvent[] = [
  {
    id: "vollmondwolfsnacht",
    date: "29 Aug",
    time: "19:00 – 23:00",
    title: "Vollmondwolfsnacht",
    place: "Wolf enclosure",
    description: "A full-moon evening walk with the park team, listening for the wolves after sunset.",
  },
  {
    id: "wolfsfruehstueck",
    date: "12 Sep",
    time: "08:00 – 12:00",
    title: "Wolfsfrühstück",
    place: "Visitors' centre",
    description: "'Wolf breakfast': a morning at the wolf enclosure with a shared meal and a keeper's talk.",
  },
];

export type TrailRecommendation = {
  id: string;
  name: string;
  distance: string;
  duration: string;
  description: string;
  highlights: string[];
};

export const recommendedTrail: TrailRecommendation = {
  id: "main-loop",
  name: "The Main Park Loop",
  distance: "7 km",
  duration: "About 2.5 hours on foot",
  description:
    "The full network of walking trails through the 100 ha (250 acres) park, passing every enclosure. Fully paved sections make the loop accessible for wheelchairs and strollers.",
  highlights: ["Wolf enclosure", "Wisent meadow", "Otter viewing window", "Little Village with field oven"],
};

export type MapPoint = {
  id: string;
  label: string;
  kind: "habitat" | "facility" | "signpost" | "you";
  x: number;
  y: number;
};

// Points reflect the real facilities described on wildpark-schorfheide.de:
// enclosures for the signature species, plus visitors' centre, playground,
// petting area, "Little Village", picnic areas and parking.
export const mapPoints: MapPoint[] = [
  { id: "you", label: "You", kind: "you", x: 32, y: 68 },
  { id: "sign-01", label: "01", kind: "signpost", x: 40, y: 52 },
  { id: "sign-04", label: "04", kind: "signpost", x: 58, y: 40 },
  { id: "sign-07", label: "07", kind: "signpost", x: 22, y: 30 },
  { id: "deer", label: "Red deer", kind: "habitat", x: 62, y: 28 },
  { id: "wolf", label: "Wolves", kind: "habitat", x: 20, y: 38 },
  { id: "bison", label: "Wisent", kind: "habitat", x: 50, y: 66 },
  { id: "otter", label: "Otters", kind: "habitat", x: 72, y: 50 },
  { id: "entrance", label: "Entrance", kind: "facility", x: 15, y: 88 },
  { id: "parking", label: "Parking", kind: "facility", x: 8, y: 78 },
  { id: "centre", label: "Visitors' centre", kind: "facility", x: 30, y: 82 },
  { id: "playground", label: "Playground", kind: "facility", x: 44, y: 84 },
  { id: "village", label: "Little Village", kind: "facility", x: 58, y: 74 },
  { id: "picnic", label: "Picnic", kind: "facility", x: 82, y: 68 },
];

export const parkInfo = {
  name: "Wildpark Schorfheide",
  location: "Groß Schönebeck, Brandenburg",
  phone: "033393-65855",
  email: "info@wildpark-schorfheide.de",
  size: "100 ha (250 acres)",
  trails: "7 km walking trail network",
  hours: "09:00 – 18:00",
  tickets: [
    { label: "Adults", price: "€ 11.00" },
    { label: "Reduced", price: "€ 8.00" },
    { label: "Group (10+ adults)", price: "€ 10.00" },
    { label: "Annual pass · Adults", price: "€ 50.00" },
    { label: "Annual pass · Reduced", price: "€ 30.00" },
    { label: "Guided tour (up to 25)", price: "€ 40.00" },
  ],
  carriage: [
    { label: "Adults · 30 min", price: "€ 4.00" },
    { label: "Adults · 1 hour", price: "€ 6.00" },
    { label: "Children · 30 min", price: "€ 2.00" },
    { label: "Family (up to 4) · 30 min", price: "€ 11.00" },
  ],
};
