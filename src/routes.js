import App from "./App";
import Alphabet from "./content/Alphabet";
import Lesson1 from "./content/Lesson1";

export const routes = [
  { path: "/", component: App },
  { path: "/alphabet", component: Alphabet },
  { path: "/lesson1", component: Lesson1 }
];
