import movieSchema from './models/movies.model.js'

export async function addShow(req,res){
    try{
        const{...movie}=req.body;   
        const{name,dur,genre,rdate,lang,cert,format,cover,banner}=req.body;   
        if(!(name&&dur&&genre&&rdate&&lang&&cert&&format&&cover&&banner))
            return res.status(404).send({msg:"Fields are empty"})
        const data=await movieSchema.create({...movie});
        return res.status(201).send({msg:data})
    }catch(error){
        res.status(404).send({msg:error})
    }
}
export async function getShows(req,res) {
    try {
        const movies=await movieSchema.find();
        res.status(200).send(movies)
        
    } catch (error) {
        res.status(404).send({msg:error})
    }
}
export async function getShow(req,res) {
    try {
        
        const {id}=req.params
        const data=await movieSchema.findOne({_id:id});
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}
export async function deleteShow(req,res) {
    try {
        const {_id}=req.params;
        const data=await movieSchema.deleteOne({_id});
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }   
}
export async function editShow(req,res) {
    try {
        const {_id}=req.params;
    const {...movie}=req.body;
    const data=await movieSchema.updateOne({_id},{$set:{...movie}});
    res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
    
}