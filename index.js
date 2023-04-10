const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Form = require("./schemaModels/modelForm.js");
const Article = require("./schemaModels/modelArticle.js");
const Service = require("./schemaModels/modelService.js");
const Truck = require("./schemaModels/modelTruck.js");
const Invites = require("./schemaModels/modelInvites.js");
const Subscribe = require("./schemaModels/modelSubscribe.js");
const Contacts = require("./schemaModels/modelContacts.js");
const path = require("path");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.LD_DB_URL;
if (!dbUrl) {
  throw new Error(
    'You should specify DB connection string in environment variable "LD_DB_URL"'
  );
}
let db;

const port = 8080;
const host = "0.0.0.0";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("static"));

app.set("view engine", "ejs");

app.use(cookieParser());

app.get("/page/:name", (req, res) => {
  res.render(req.params.name);
});

app.get("/", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const articles = await db.collection("articles").find().toArray();
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("main", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    articles: articles,
    path: path,
  });
});

// about

app.get("/about", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});
app.get("/careers", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/careers", {
    trucks: trucks,
    contacts: contacts,
    services: services,
  });
});
app.get("/stories", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/stories", {
    trucks: trucks,
    contacts: contacts,
    services: services,
  });
});
app.get("/testimonials", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/testimonials", {
    trucks: trucks,
    contacts: contacts,
    services: services,
  });
});
app.get("/program", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/program", {
    trucks: trucks,
    contacts: contacts,
    services: services,
  });
});
app.get("/blog", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const articles = await db.collection("articles").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/blog", {
    trucks: trucks,
    articles: articles,
    contacts: contacts,
    services: services,
  });
});
app.get("/video", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("about/video", {
    trucks: trucks,
    contacts: contacts,
    services: services,
  });
});

//

// services

app.get("/services", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("services", {
    trucks: trucks,
    contacts: contacts,
    path: path,
    services: services,
  });
});

//

// trucks

app.get("/trucks", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("trucks", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

//

// how to start

app.get("/how-to-start", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("how-to-start", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

// shippers

app.get("/shippers", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const articles = await db.collection("articles").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("shippers", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    articles: articles,
    path: path,
  });
});

//

// FAQ

app.get("/faq", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("faq", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

// contact us

app.get("/contact-us", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("contact-us", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

// terms of service

app.get("/terms-of-service", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("terms-of-service", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

// privacy policy

app.get("/privacy-policy", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const services = await db.collection("services").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  res.render("privacy-policy", {
    trucks: trucks,
    contacts: contacts,
    services: services,
    path: path,
  });
});

//

// auth/admin/add user in admin

app.get("/admin", async (req, res) => {
  if (req.cookies.name == "Ivan" && req.cookies.password == "12345") {
    const users = await db.collection("contact-us").find().toArray();
    const invites = await db.collection("invites").find().toArray();
    const subscribe = await db.collection("subscribes").find().toArray();
    if (users) {
      res.render("admin/admin-users", {
        users: users,
        invites: invites,
        subscribe: subscribe,
      });
    } else {
      console.log("Fail");
    }
    return;
  }
  res.render("auth");
});
app.get("/admin-services", async (req, res) => {
  const services = await db.collection("services").find().toArray();
  res.render("admin/admin-services", { services: services });
});
app.get("/admin-trucks", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("admin/admin-trucks", { trucks: trucks });
});
app.get("/admin-users", async (req, res) => {
  const users = await db.collection("contact-us").find().toArray();
  const invites = await db.collection("invites").find().toArray();
  const subscribe = await db.collection("subscribes").find().toArray();
  res.render("admin/admin-users", {
    users: users,
    invites: invites,
    subscribe: subscribe,
  });
});
app.get("/admin-articles", async (req, res) => {
  const articles = await db.collection("articles").find().toArray();
  res.render("admin/admin-articles", { articles: articles });
});
app.get("/admin-contacts", async (req, res) => {
  const contacts = await db.collection("contacts").findOne();
  res.render("admin/admin-contacts", { contacts: contacts });
});

//

// add/delete users in/from data base

app.post("/contact-us/save", async (req, res) => {
  const fileName = await create("blacklist_the_beatles");
  console.log("Created:", fileName);
  let id = Date.now();
  const { name, phone, email, check } = req.body;
  const form = await Form.create({ id, name, phone, email, check });
  res.end(JSON.stringify({ status: "ok", result: form }));
});
app.post("/invites/save", async (req, res) => {
  let id = Date.now();
  const {
    referrer_name,
    referrer_email,
    invite_name,
    invite_phone,
    invite_email,
    check,
  } = req.body;
  const invite = await Invites.create({
    id,
    referrer_name,
    referrer_email,
    invite_name,
    invite_phone,
    invite_email,
    check,
  });
  res.end(JSON.stringify({ status: "ok", result: invite }));
});
app.post("/subscribe/save", async (req, res) => {
  const { email } = req.body;
  let id = Date.now();
  const subscribe = await Subscribe.create({ id, email });
  res.end(JSON.stringify({ status: "ok", result: subscribe }));
});

app.delete("/delete-user/:id", (req, res) => {
  const id = req.params.id;
  const users = db.collection("contact-us").deleteOne({ id: id });
  res.end();
});
app.delete("/delete-invited/:id", (req, res) => {
  const id = req.params.id;
  const invites = db.collection("invites").deleteOne({ id: id });
  res.end();
});
app.delete("/delete-subscribed/:id", (req, res) => {
  const id = req.params.id;
  const subscribes = db.collection("subscribes").deleteOne({ id: id });
  res.end();
});

//

// edit phone in data base

app.put("/contacts/edit", async (req, res) => {
  const { tel, email, location } = req.body;
  const contacts = await Contacts.updateOne({ tel, email, location });

  res.end(JSON.stringify({ status: "ok", result: contacts }));
});

//

// set storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

//

// add/get article in/from data base

app.post("/articles/save", upload.single("image"), async (req, res) => {
  const { name, when_created, content } = req.body;
  let id = Date.now();
  let url = name
    .toLowerCase()
    .replace(/[^\w]/g, " ")
    .trim()
    .split(" ")
    .join("-");
  console.log(url);
  if (req.file) {
    const image = req.file.filename;
    const article = await Article.create({
      id,
      name,
      url,
      image,
      when_created,
      content,
    });
  }
  console.log("Saved To database");
  res.redirect("/admin-articles");
});

app.get("/blog/:article", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const articleUrl = req.params.article;
  const trucks = await db.collection("trucks").find().toArray();
  const services = await db.collection("services").find().toArray();
  const articles = await db.collection("articles").find().toArray();
  const contacts = await db.collection("contacts").findOne();
  const article = await db
    .collection("articles")
    .find({ url: articleUrl })
    .toArray();

  if (articles) {
    res.render("about/blog/article", {
      article: article,
      articles: articles,
      contacts: contacts,
      trucks: trucks,
      services: services,
      path: path,
    });
    return;
  }
  res.send("article-not-found");
});
app.delete("/delete-article/:id", (req, res) => {
  const id = req.params.id;
  const article = db.collection("articles").deleteOne({ id: id });
  res.end();
});
app.put("/edit-article/:id", upload.single("image"), async (req, res) => {
  const id = req.body.id;
  console.log(req.file);
  const article = await db.collection("articles").updateOne(
    { id: id },
    {
      $set: {
        id: id,
        name: req.body.name,
        url: req.body.name
          .toLowerCase()
          .replace(/[^\w]/g, " ")
          .trim()
          .split(" ")
          .join("-"),
        image: req.file.filename,
        when_created: req.body.when_created,
        content: req.body.content,
      },
    }
  );
  res.redirect("/admin-articles");
});

//

// add/get/delete/edit service in/from data base

app.post("/service/save", upload.single("image"), async (req, res) => {
  const { name, description, checks, text, content } = req.body;
  let url = name
    .toLowerCase()
    .replace(/[^\w]/g, " ")
    .trim()
    .split(" ")
    .join("-");
  const image = req.file.filename;
  let id = Date.now();
  const service = await Service.create({
    id,
    name,
    url,
    image,
    description,
    checks,
    text,
    content,
  });
  res.end(JSON.stringify({ status: "ok", result: service }));
});
app.get("/services/:service", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const serviceUrl = req.params.service;
  const trucks = await db.collection("trucks").find().toArray();
  const services = await db.collection("services").find().toArray();
  const articles = await db.collection("articles").find().toArray();
  const service = await db
    .collection("services")
    .find({ url: serviceUrl })
    .toArray();
  const contacts = await db.collection("contacts").findOne();

  if (services) {
    res.render("services/service", {
      service: service,
      services: services,
      trucks: trucks,
      contacts: contacts,
      articles: articles,
      path: path,
    });
    return;
  }
  res.send("service-not-found");
});
app.delete("/delete-service/:id", (req, res) => {
  const id = req.params.id;
  const users = db.collection("services").deleteOne({ id: id });
  res.end();
});
app.put("/edit-service/:id", upload.single("image"), async (req, res) => {
  const id = req.body.id;
  const service = await db.collection("services").updateOne(
    { id: id },
    {
      $set: {
        id: req.body.id,
        name: req.body.name,
        url: req.body.name
          .toLowerCase()
          .replace(/[^\w]/g, " ")
          .trim()
          .split(" ")
          .join("-"),
        image: req.file.filename,
        description: req.body.description,
        text: req.body.text,
        content: req.body.content,
      },
    }
  );
  res.end(JSON.stringify({ status: "ok", result: service }));
});

//

// add/get/delete/edit truck in/from data base

app.post("/truck/save", upload.single("image"), async (req, res) => {
  const { name, description, checks, text, content } = req.body;
  let url = name
    .toLowerCase()
    .replace(/[^\w]/g, " ")
    .trim()
    .split(" ")
    .join("-");
  let id = Date.now();
  const image = req.file.filename;
  const truck = await Truck.create({
    id,
    name,
    url,
    image,
    description,
    checks,
    text,
    content,
  });
  res.end(JSON.stringify({ status: "ok", result: truck }));
});
app.get("/trucks/:truck", async (req, res) => {
  const path = req.path.replace(/[^\w]/g, " ").trim().split(" ").join("-");
  const truckUrl = req.params.truck;
  const services = await db.collection("services").find().toArray();
  const articles = await db.collection("articles").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  const truck = await db.collection("trucks").find({ url: truckUrl }).toArray();
  const contacts = await db.collection("contacts").findOne();

  if (trucks) {
    res.render("trucks/truck", {
      truck: truck,
      trucks: trucks,
      contacts: contacts,
      services: services,
      articles: articles,
      path: path,
    });
    return;
  }
  res.send("article-not-found");
});
app.delete("/delete-truck/:id", (req, res) => {
  const id = req.params.id;
  const users = db.collection("trucks").deleteOne({ id: id });
  res.end();
});
app.put("/edit-truck/:id", upload.single("image"), async (req, res) => {
  const id = req.body.id;
  const truck = await db.collection("trucks").updateOne(
    { id: id },
    {
      $set: {
        id: req.body.id,
        name: req.body.name,
        url: req.body.name
          .toLowerCase()
          .replace(/[^\w]/g, " ")
          .trim()
          .split(" ")
          .join("-"),
        image: req.file.filename,
        description: req.body.description,
        text: req.body.text,
        content: req.body.content,
      },
    }
  );
  res.end(JSON.stringify({ status: "ok", result: truck }));
});

//

// start app

async function start() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });
    db = mongoose.connection;
    app.listen(port, host, () => {
      console.log(`Running on http://${host}:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}
start();

//
