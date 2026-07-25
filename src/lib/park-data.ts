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
    region: "North meadow",
    habitat: "Mixed woodland clearings",
    activityWindow: "Most active at dawn and dusk",
    status: "Least concern",
    observedAt: "24 October, 07:42",
    observedLocation: "Signpost 04 · North meadow",
    story:
      "In early autumn, the forest carries the low bellow of the stags. It is the sound of the rut — a season of display and quiet competition rather than confrontation. Red deer have shaped these clearings for centuries, moving with the light.",
    facts: [
      "Antlers regrow entirely each spring, sometimes gaining 2 cm a day.",
      "A mature stag can weigh over 200 kg yet move almost silently through dense brush.",
      "Their bugle carries more than a kilometre through still morning air.",
    ],
    conservation:
      "Populations in central Europe are stable thanks to protected woodland corridors like Schorfheide, which allow herds to migrate between feeding grounds.",
    related: ["European Bison"],
    audioMinutes: 3,
    inJournal: true,
  },
  {
    id: "gray-wolf",
    name: "Gray Wolf",
    scientific: "Canis lupus",
    image: wolf,
    region: "Protected forest interior",
    habitat: "Deep forest, protected zone",
    activityWindow: "Crepuscular, mostly heard at night",
    status: "Near threatened",
    observedAt: "24 October, 09:15",
    observedLocation: "Signpost 11 · West ridge",
    story:
      "Wolves returned to Brandenburg on their own — walking back into forests they had not seen for a century. They are cautious neighbours, rarely seen, and their presence is a quiet measure of how healthy this ecosystem has become.",
    facts: [
      "A pack's territory in this region can span more than 200 km².",
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
    name: "European Bison",
    scientific: "Bison bonasus",
    image: bison,
    region: "South meadow enclosure",
    habitat: "Open meadow and forest edge",
    activityWindow: "Grazes through the day, rests at midday",
    status: "Vulnerable",
    story:
      "Once extinct in the wild, the European bison exists today only because of a handful of animals kept in reserves like Schorfheide. Every wild bison alive descends from twelve founders. They are, quietly, a second chance.",
    facts: [
      "The heaviest land mammal in Europe, reaching 900 kg.",
      "Prefers a mixed diet of grasses, bark, and young shoots — a natural forest gardener.",
      "Reintroduction programmes coordinated across seven countries share the same bloodlines.",
    ],
    conservation:
      "Listed as Vulnerable by the IUCN. Continued survival depends on managed herds and slow release into protected forests across eastern Europe.",
    related: ["Red Deer"],
    audioMinutes: 5,
    inJournal: false,
  },
];

export type ParkNotice = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
};

export const parkNotices: ParkNotice[] = [
  {
    id: "rut",
    eyebrow: "This week",
    title: "The red deer rut is in full voice",
    body: "Walk the north meadow between 07:00 and 09:00 for the best chance to hear the stags call across the clearing.",
  },
  {
    id: "quiet",
    eyebrow: "Please",
    title: "Move gently near the wolf enclosure",
    body: "The pack is raising two pups this autumn. Speak softly, avoid sudden movement, and give them time.",
  },
];

export type FeedingSession = {
  id: string;
  time: string;
  title: string;
  place: string;
};

export const feedingSessions: FeedingSession[] = [
  { id: "wolves", time: "11:00", title: "Wolves", place: "West ridge platform" },
  { id: "bison", time: "13:30", title: "European bison", place: "South meadow" },
  { id: "owls", time: "16:00", title: "Owls at dusk", place: "Amphitheatre" },
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
  id: "north-loop",
  name: "The Quiet North Loop",
  distance: "3.2 km",
  duration: "About 90 minutes",
  description:
    "A gentle circuit through mixed pine and beech, passing three educational signposts and two viewing platforms.",
  highlights: ["Red deer meadow", "Old growth pines", "Silent listening bench"],
};

export type MapPoint = {
  id: string;
  label: string;
  kind: "habitat" | "facility" | "signpost" | "you";
  x: number;
  y: number;
};

export const mapPoints: MapPoint[] = [
  { id: "you", label: "You", kind: "you", x: 32, y: 68 },
  { id: "sign-04", label: "04", kind: "signpost", x: 40, y: 52 },
  { id: "sign-07", label: "07", kind: "signpost", x: 58, y: 40 },
  { id: "sign-11", label: "11", kind: "signpost", x: 22, y: 30 },
  { id: "deer", label: "Red deer", kind: "habitat", x: 62, y: 28 },
  { id: "wolf", label: "Wolves", kind: "habitat", x: 20, y: 38 },
  { id: "bison", label: "Bison", kind: "habitat", x: 50, y: 66 },
  { id: "cafe", label: "Café", kind: "facility", x: 78, y: 80 },
  { id: "info", label: "Info", kind: "facility", x: 82, y: 58 },
];
