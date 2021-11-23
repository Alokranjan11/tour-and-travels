import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Book from "../components/Book.vue";
import Packages from "../components/Packages.vue";
import Services from "../components/Services.vue";
import Gallery from "../components/Gallery.vue";
import Review from "../components/Review.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/book",
    name: "Book",
    component: Book,
  },
  {
    path: "/packages",
    name: "Packages",
    component: Packages,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
