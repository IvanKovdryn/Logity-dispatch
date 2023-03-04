import express from "express";
import mongoose from "mongoose";
import Form from "./form.js";

const db_url2 = "mongodb://root:password@localhost:27010/";
let db;

const port = 8080;
const host = "0.0.0.0";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("static"));

app.set("view engine", "ejs");

app.get("/page/:name", (req, res) => {
  res.render(req.params.name);
});

app.get("/", (req, res) => {
  res.render("main");
});

// about

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/careers", (req, res) => {
  res.render("about/careers");
});
app.get("/stories", (req, res) => {
  res.render("about/stories");
});
app.get("/testimonials", (req, res) => {
  res.render("about/testimonials");
});
app.get("/program", (req, res) => {
  res.render("about/program");
});
app.get("/blog", (req, res) => {
  res.render("about/blog");
});
app.get("/video", (req, res) => {
  res.render("about/video");
});

// services

app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/dispatch", (req, res) => {
  res.render("services/dispatch");
});
app.get("/billing", (req, res) => {
  res.render("services/billing");
});
app.get("/document-management", (req, res) => {
  res.render("services/document-management");
});
app.get("/factoring-service", (req, res) => {
  res.render("services/factoring-service");
});
app.get("/rate-negotiation", (req, res) => {
  res.render("services/rate-negotiation");
});
app.get("/safety", (req, res) => {
  res.render("services/safety");
});
app.get("/ifta", (req, res) => {
  res.render("services/ifta");
});
app.get("/formation", (req, res) => {
  res.render("services/formation");
});
app.get("/accounting", (req, res) => {
  res.render("services/accounting");
});
app.get("/invoice", (req, res) => {
  res.render("services/invoice");
});
app.get("/truck-doc-management", (req, res) => {
  res.render("services/truck-doc-management");
});
app.get("/truck-doc-dispatch-service", (req, res) => {
  res.render("services/truck-doc-dispatch-service");
});

// trucks

app.get("/trucks", (req, res) => {
  res.render("trucks");
});
app.get("/dry-van", (req, res) => {
  res.render("trucks/dry-van");
});
app.get("/step-deck", (req, res) => {
  res.render("trucks/step-deck");
});
app.get("/reefer", (req, res) => {
  res.render("trucks/reefer");
});
app.get("/flatbed", (req, res) => {
  res.render("trucks/flatbed");
});
app.get("/power-only", (req, res) => {
  res.render("trucks/power-only");
});
app.get("/hotshot", (req, res) => {
  res.render("trucks/hotshot");
});
app.get("/box-truck", (req, res) => {
  res.render("trucks/box-truck");
});
app.get("/straight-truck", (req, res) => {
  res.render("trucks/straight-truck");
});
app.get("/shippers", (req, res) => {
  res.render("shippers");
});

// how to start

app.get("/how-to-start", (req, res) => {
  res.render("how-to-start");
});

// FAQ

app.get("/faq", (req, res) => {
  res.render("faq");
});

// contact us

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

// terms of service

app.get("/terms-of-service", (req, res) => {
  res.render("terms-of-service");
});

// privacy policy

app.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});

// app.get("/admin-test333", (req, res) => {
//   if (req.cookies.get("admin") == "dfggfff") {
//     res.render("admin");
//     return;
//   }
//   res.render("admin-login");
// });

// app.get("/article/:url", (request, response) => {
//   const articleUrl = request.params.url;

//   // search article url in DB
//   if (!articleUrl) {
//     return "not found";
//   }

//   return "found";

//   console.log(articleUrl);
// });

app.post("/contact-us/save", async (req, res) => {
  const { name, phone, email, check } = req.body;
  const form = await Form.create({ name, phone, email, check });
  res.end(JSON.stringify({ status: "ok", result: form }));
});

app.get("/contact-us/get", (req, res) => {
  const data = mongoose.model("contact-us");
  data.find({}).then(function (err, data1) {
    console.log(data1);
  });
});

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
