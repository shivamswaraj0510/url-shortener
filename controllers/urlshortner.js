import Url from "../models/url.js";
import { nanoid } from "nanoid";

export const UrlShortner=async (req,res)=>{
try {
  const longurl = await req.body.url;
   console.log(longurl);
  if (!longurl) {
    return res.status(400).send("URL is required");
  }

  const shortId = nanoid(6);
  const newUrl = Url.create({
    fullUrl: longurl,
    shortId: shortId,
  });
  res.render("urlshort.ejs", {
    shortUrl: shortId,
  });
} catch (error) {
  console.error(error);
  res.status(500).send("Server Error");
}
};

export const redirectlogic=async( req,res)=>{
    const id=  req.params;
    
    const { fullUrl } = await Url.findOne(id);
    // console.log(original);
    if (fullUrl){
        res.redirect(fullUrl);
    }
    else{
        res.send("not found");
    }
  

};