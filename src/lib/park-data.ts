import deer from "@/assets/animal-deer.jpg";
import wolf from "@/assets/animal-wolf.jpg";
import bison from "@/assets/animal-bison.jpg";

export type Animal = {
  id: string;
  name: string;
  scientific: string;
  image: string;
  habitat: string;
  diet: string;
  status: "Least concern" | "Near threatened" | "Vulnerable";
  distance: string;
  activity: string;
  unlocked: boolean;
};

export const animals: Animal[] = [
  {
    id: "red-deer",
    name: "Red Deer",
    scientific: "Cervus elaphus",
    image: deer,
    habitat: "Mixed woodland clearings",
    diet: "Grasses, shoots, bark",
    status: "Least concern",
    distance: "220 m north",
    activity: "Grazing quietly",
    unlocked: true,
  },
  {
    id: "gray-wolf",
    name: "Gray Wolf",
    scientific: "Canis lupus",
    image: wolf,
    habitat: "Deep forest, protected zone",
    diet: "Carnivore",
    status: "Near threatened",
    distance: "540 m east",
    activity: "Resting in shade",
    unlocked: true,
  },
  {
    id: "european-bison",
    name: "European Bison",
    scientific: "Bison bonasus",
    image: bison,
    habitat: "Open meadow & forest edge",
    diet: "Herbivore",
    status: "Vulnerable",
    distance: "410 m south",
    activity: "Feeding time in 15 min",
    unlocked: false,
  },
];
