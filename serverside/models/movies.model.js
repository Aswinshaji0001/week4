import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    name:{type:String},
    dur:{type:String},
    genre:{type:String},
    rdate:{type:String},
    lang:{type:String},
    cert:{type:String},
    format:{type:String},
    cover:{type:String},
    banner:{type:String}
})
export default mongoose.model.Users||mongoose.model("Movies",movieSchema)