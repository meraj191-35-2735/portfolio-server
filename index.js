const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const projects = [
  {
    _id: "BoiExchange1",
    name: "Boi Exchange",
    images: [
      "https://i.ibb.co/L0LJ9B9/Boi-Exchange-1.png",
      "https://i.ibb.co/Sxfz2Ys/Boi-Exchange-6.png",
      "https://i.ibb.co/7YmVBCk/Boi-Exchange-10.png",
      "https://i.ibb.co/s1ww7Zt/Boi-Exchange-14.png",
      "https://i.ibb.co/mSzfxDG/Boi-Exchange-19.png",
    ],
    description:
      "It is a book borrow, return & exchange system where users can also buy books and add or, remove books for exchange or, borrow easily.",
    features: [
      "The User, Admin & Librarian Dashboard is different.",
      "Users can send requests to borrow & exchange books from other users.",
      "Admin can manage librarians & users. Librarians can add & remove books.",
    ],
    liveSite: "https://boi-exchange-web.web.app/",
    clientSite: "https://github.com/meraj191-35-2735/boi-exchange",
    serverSite: "https://github.com/meraj191-35-2735/boi-exchange-server",
    tech: [
      "React.js",
      "Firebase",
      "Tailwind Css",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    _id: "ElectricManufacturer1",
    name: "Electric Manufacturer",
    images: [
      "https://i.ibb.co/tJ1RyhH/1.png",
      "https://i.ibb.co/3rjS1F4/2.png",
      "https://i.ibb.co/WfKLTH7/3.png",
      "https://i.ibb.co/ss2QwqW/4.png",
      "https://i.ibb.co/XFqtDxL/5.png",
    ],
    description:
      "It produces finished goods from raw materials by using various tools and then sells the goods to consumers, wholesalers, distributors, retailers, or other manufacturers to produce more complex goods.",
    features: [
      "The User & Admin Dashboard is different.",
      "Users can book tools & add reviews.",
      "Admin can manage users & make admin and also add & manage tools.",
    ],
    liveSite: "https://electric-manufacturing.web.app/",
    clientSite:
      "https://github.com/meraj191-35-2735/electric-manufacture-client",
    serverSite:
      "https://github.com/meraj191-35-2735/electric-manufacture-server",
    tech: [
      "React.js",
      "Firebase",
      "Tailwind Css",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    _id: "CarStock2",
    name: "Car Stock",
    images: [
      "https://i.ibb.co/Nx5sQBb/1.png",
      "https://i.ibb.co/yyxZHzx/2.png",
      "https://i.ibb.co/nfQ50yk/3.png",
      "https://i.ibb.co/Hdx1QJ2/4.png",
      "https://i.ibb.co/Bw3qFRC/5.png",
    ],
    description:
      "This is a car dealership website where they can do the internal activities of their company.Such as increasing the stock limit, eliminating any car etc.",
    features: [
      "You can update the number of cars.",
      "Can remove cars from inventory.",
      "Can add cars to the inventory.",
    ],
    liveSite: "https://car-stock-meraj.web.app/",
    clientSite: "https://github.com/meraj191-35-2735/car-stock-client",
    serverSite: "https://github.com/meraj191-35-2735/car-stock-server",
    tech: [
      "React.js",
      "Firebase",
      "React-Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    _id: "KiteBD3",
    name: "Kite BD Holidays",
    images: [
      "https://i.ibb.co/TvNc3wY/1.png",
      "https://i.ibb.co/bPSRTh2/2.png",
      "https://i.ibb.co/tJQCTVY/3.png",
      "https://i.ibb.co/LRgMf0f/4.png",
      "https://i.ibb.co/PQXDrvS/5.png",
    ],
    description:
      "This website will show you all the things you need to enjoy the holidays. Such as tour planning, hotel/resort booking, ship ticket booking etc.",
    features: [
      "Users can see the details about the services.",
      "Users can book the services.",
      "Users can not checkout services without creating an account or logging into the website.",
    ],
    liveSite: "https://kite-bd-holidays.web.app/",
    clientSite: "https://github.com/meraj191-35-2735/kite-bangladesh-holidays",
    tech: ["React.js", "Firebase", "React-Bootstrap"],
  },
];

app.get("/", (req, res) => {
  res.send("Server is running");
  res.download("./merajResume.pdf");
});
app.get("/projects", (req, res) => {
  res.send(projects);
});
app.get("/project/:projectId", async (req, res) => {
  const id = req.params.projectId;
  for (const project of projects) {
    if (project._id === id) {
      res.send(project);
    }
  }
});

app.listen(port, () => {
  console.log(`My Portfolio Server is Run On ${port}`);
});
