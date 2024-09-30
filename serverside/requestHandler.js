import movieSchema from './models/movies.model.js'

export async function addShow(req,res){
    try{
        const{...movie}=req.body;
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
export async function deleteShow(req,res) {
    try {
        const {_id}=req.params;
        console.log(_id);
        const data=await employSchema.deleteOne({_id});
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }   
}