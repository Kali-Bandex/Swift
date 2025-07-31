import { image, label, path } from "motion/react-client";
import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.png";
import client4 from "../assets/clients/client-4.png";
import client5 from "../assets/clients/client-5.png";
import client6 from "../assets/clients/client-6.png";
import dish from '../assets/dish.svg'
// import logistic from "../assets/Logistics.svg";
import delivery from "../assets/Order Delivered 4.svg";
import order from "../assets/Ordering Groceries Online 1.svg";
import timer from "../assets/Shipping.svg";
import agent from "../assets/Shipping 2.svg";
import people1 from '../assets/peoples/people-1.jpg'
import people2 from '../assets/peoples/people-2.jpg'
import people3 from '../assets/peoples/people-3.jpg'
import people4 from '../assets/peoples/people-4.jpg'
import people5 from '../assets/peoples/people-5.jpg'
import people6 from '../assets/peoples/people-6.jpg'
import drone from "../assets/Drone Delivery.svg";
import time from "../assets/Time Management 1.svg";
import secure from "../assets/Safety.svg";

export const NavItems = [
  { label: "Home", path: "#Home" },
  { label: "About Us", path: "#About" },
  { label: "How it Works", path: "#Steps" },
  { label: "Contact", path: "#Contact" },
];

export const clients = [client1, client2, client3, client4, client5, client6];

export const ourServices = [
  {
    name: "Fast & On-Time Delivery",
    image: drone,
    desc: "The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.",
  },
  {
    name: "Real-Time Tracking",
    image: time,
    desc: "The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.",
  },
  {
    name: "Safe & Secure Handling",
    image: secure,
    desc: "The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.",
  },
];

export const ourSteps = [
  { name: "Place Your Order – Fill the form online", image: order },
  { name: "We Pick It Up – Our agent collects the parcel", image: agent },
  { name: "Real-Time Tracking – Follow your delivery", image: timer },
  { name: "Delivered – Safe and fast", image: delivery },
];


export const Testimonials = [
  {
    name: "Jimmy Bartney",
    jobTitle: "Product Manager at Picko Lab",
    comment: "It's just incredible!",
    desc: "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    image: people1,
  },
  {
    name: "Sarah Johnson",
    jobTitle: "CEO at TechSolutions Inc.",
    comment: "Game-changing solution!",
    desc: "Spend.In has completely transformed how we handle our company finances. The reporting features alone have saved us dozens of hours each month. Highly recommended for any business!",
    image: people2,
  },
  {
    name: "Michael Chen",
    jobTitle: "Financial Director at Global Corp",
    comment: "Worth every penny",
    desc: "After trying several expense management solutions, Spend.In stands out with its intuitive interface and powerful features. Our finance team's efficiency has improved by 40% since implementation.",
    image: people3,
  },
  {
    name: "Emily Rodriguez",
    jobTitle: "Startup Founder at BloomTech",
    comment: "Perfect for small businesses",
    desc: "As a small business owner, I needed something affordable yet powerful. Spend.In gives me enterprise-level features without the enterprise-level price tag. Customer support is exceptional too!",
    image: people4,
  },
  {
    name: "David Wilson",
    jobTitle: "Operations Manager at Swift Logistics",
    comment: "Simplified our processes",
    desc: "The automated expense tracking and approval workflows have reduced our processing time by 60%. The mobile app makes it easy for our field staff to submit expenses on the go.",
    image: people5,
  },
];
