import express from "express";
import mongoose from "mongoose";
import { UrlShortner, redirectlogic } from "./controllers/urlshortner.js";

const app=express();
const port=1000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// app.set("views", "./temp");
mongoose.connect(
  "mongodb+srv://shivamswaraj0510_db_user:guQbvb2qXK6E6Ae8@cluster0.groawnc.mongodb.net/myDatabase?retryWrites=true&w=majority",
  { dbName: "Node_Mastery" },
).then(()=>{console.log("Database id connected sucessfully !")}).catch((error)=>{console.log(error)});

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