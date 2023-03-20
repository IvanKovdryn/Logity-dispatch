import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import Form from "./schemaModels/modelForm.js";
import Article from "./schemaModels/modelArticle.js";
import Truck from "./schemaModels/modelTruck.js";
import Invites from "./schemaModels/modelInvites.js";
import Subscribe from "./schemaModels/modelSubscribe.js";
import Contacts from "./schemaModels/modelContacts.js";

const db_url2 = "mongodb://root:password@localhost:27010/";
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
  const trucks = await db.collection("trucks").find().toArray();
  res.render("main", { trucks: trucks });
});

// about

app.get("/about", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about", { trucks: trucks });
});
app.get("/careers", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/careers", { trucks: trucks });
});
app.get("/stories", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/stories", { trucks: trucks });
});
app.get("/testimonials", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/testimonials", { trucks: trucks });
});
app.get("/program", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/program", { trucks: trucks });
});
app.get("/blog", async (req, res) => {
  const articles = await db.collection("articles").find().toArray();
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/blog", { trucks: trucks, articles: articles });
});
app.get("/video", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("about/video", { trucks: trucks });
});

//

// services

app.get("/services", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services", { trucks: trucks });
});
app.get("/dispatch", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/dispatch", { trucks: trucks });
});
app.get("/billing", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/billing", { trucks: trucks });
});
app.get("/document-management", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/document-management", { trucks: trucks });
});
app.get("/factoring-service", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/factoring-service", { trucks: trucks });
});
app.get("/rate-negotiation", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/rate-negotiation", { trucks: trucks });
});
app.get("/safety", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/safety", { trucks: trucks });
});
app.get("/ifta", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/ifta", { trucks: trucks });
});
app.get("/formation", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/formation", { trucks: trucks });
});
app.get("/accounting", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/accounting", { trucks: trucks });
});
app.get("/invoice", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/invoice", { trucks: trucks });
});
app.get("/truck-doc-management", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/truck-doc-management", { trucks: trucks });
});
app.get("/truck-doc-dispatch-service", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("services/truck-doc-dispatch-service", { trucks: trucks });
});

//

// trucks

app.get("/trucks", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("trucks", { trucks: trucks });
});
app.get("/dry-van", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("/trucks/truck", { trucks: trucks });
});
app.get("/step-deck", async (req, res) => {
  res.render("trucks/step-deck");
});
app.get("/reefer", async (req, res) => {
  res.render("trucks/reefer");
});
app.get("/flatbed", async (req, res) => {
  res.render("trucks/flatbed");
});
app.get("/power-only", async (req, res) => {
  res.render("trucks/power-only");
});
app.get("/hotshot", async (req, res) => {
  res.render("trucks/hotshot");
});
app.get("/box-truck", async (req, res) => {
  res.render("trucks/box-truck");
});
app.get("/straight-truck", async (req, res) => {
  res.render("trucks/straight-truck");
});

//

// how to start

app.get("/how-to-start", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("how-to-start", { trucks: trucks });
});

// shippers

app.get("/shippers", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("shippers", { trucks: trucks });
});

//

// FAQ

app.get("/faq", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("faq", { trucks: trucks });
});

// contact us

app.get("/contact-us", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("contact-us", { trucks: trucks });
});

// terms of service

app.get("/terms-of-service", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("terms-of-service", { trucks: trucks });
});

// privacy policy

app.get("/privacy-policy", async (req, res) => {
  const trucks = await db.collection("trucks").find().toArray();
  res.render("privacy-policy", { trucks: trucks });
});

//

// auth/admin/add user in admin

app.get("/admin", async (req, res) => {
  if (req.cookies.name == "Ivan" && req.cookies.password == "12345") {
    const trucks = await db.collection("trucks").find().toArray();
    const users = await db.collection("contact-us").find().toArray();
    const invites = await db.collection("invites").find().toArray();
    const subscribe = await db.collection("subscribes").find().toArray();
    const contacts = await db.collection("contacts").findOne();

    if (users) {
      res.render("admin", {
        users: users,
        trucks: trucks,
        invites: invites,
        subscribe: subscribe,
        contacts: contacts,
      });
    } else {
      console.log("Fail");
    }
    return;
  }
  res.render("auth");
});

//

// add/delete users in/from data base

app.post("/contact-us/save", async (req, res) => {
  const { name, phone, email, check } = req.body;
  const form = await Form.create({ name, phone, email, check });
  res.end(JSON.stringify({ status: "ok", result: form }));
});
app.post("/invites/save", async (req, res) => {
  const {
    referrer_name,
    referrer_email,
    invite_name,
    invite_phone,
    invite_email,
    check,
  } = req.body;
  const invite = await Invites.create({
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
  const subscribe = await Subscribe.create({ email });
  res.end(JSON.stringify({ status: "ok", result: subscribe }));
});

app.delete("/delete-user/:email", (req, res) => {
  const email = req.params.email;
  const users = db.collection("contact-us").deleteOne({ email: email });
  res.end();
});
app.delete("/delete-invited/:email", (req, res) => {
  const email = req.params.email;
  const invites = db.collection("invites").deleteOne({ invite_email: email });
  res.end();
});
app.delete("/delete-subscribed/:email", (req, res) => {
  const email = req.params.email;
  const subscribes = db.collection("subscribes").deleteOne({ email: email });
  res.end();
});

//

// edit phone in data base

app.put("/contacts/edit", async (req, res) => {
  const { tel, email } = req.body;
  const contacts = await Contacts.updateOne({ tel, email });

  res.end(JSON.stringify({ status: "ok", result: contacts }));
});

//

// add/get article in/from data base

app.post("/article/save", async (req, res) => {
  const { id, name, url, image, text, when_created, content } = req.body;
  const article = await Article.create({
    id,
    name,
    url,
    image,
    text,
    when_created,
    content,
  });
  res.end(JSON.stringify({ status: "ok", result: article }));
});
app.get("/blog/:article", async (req, res) => {
  const articleUrl = req.params.article;

  const articles = await db
    .collection("articles")
    .find({ url: articleUrl })
    .toArray();

  console.log(articles);
  if (articles) {
    res.render("about/blog/article", { articles: articles });
    return;
  }
  res.send("article-not-found");
});

//

// add/get/delete/edit truck in/from data base

app.post("/truck/save", async (req, res) => {
  const { id, name, url, image, description, text, content } = req.body;
  const truck = await Truck.create({
    id,
    name,
    url,
    image,
    description,
    text,
    content,
  });
  res.end(JSON.stringify({ status: "ok", result: truck }));
});
app.get("/trucks/:truck", async (req, res) => {
  const truckUrl = req.params.truck;

  const trucks = await db.collection("trucks").find().toArray();
  const truck = await db.collection("trucks").find({ url: truckUrl }).toArray();

  if (trucks) {
    res.render("trucks/truck", { truck: truck, trucks: trucks });
    return;
  }
  res.send("article-not-found");
});
app.delete("/delete-truck/:name", (req, res) => {
  const name = req.params.name;
  const users = db.collection("trucks").deleteOne({ name: name });
  res.end();
});
app.put("/edit-truck/:id", async (req, res) => {
  const id = req.body.id;
  const truck = await db.collection("trucks").updateOne(
    { id: id },
    {
      $set: {
        id: req.body.id,
        name: req.body.name,
        url: req.body.url,
        image: req.body.image,
        description: req.body.description,
        text: req.body.text,
        content: req.body.content,
      },
    }
  );
  res.end(JSON.stringify({ status: "ok", result: truck }));
});

// start app

async function start() {
  try {
    await mongoose.connect(db_url2, {
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
