import express from "express";
import mongoose from "mongoose";
import { UrlShortner, redirectlogic } from "./controllers/urlshortner.js";

const app=express();
const port = process.env.PORT || 1000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// app.set("views", "./temp");
mongoose
  .connect(process.env.MONGO_URL, { dbName: "Node_Mastery" })
  .then(() => {
    console.log("Database id connected sucessfully !");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/",(req,res)=>{
res.render("urlshort", {
  shortUrl:null
});
})
app.post("/shortner", UrlShortner);
app.get("/:shortId", redirectlogic);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})