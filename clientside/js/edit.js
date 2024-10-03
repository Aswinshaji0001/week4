let cover;
let banner;
const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
async function getMovie() {
    const res=await fetch(`http://localhost:3000/api/getshow/${id}`)
    const movie=await res.json();
    cover=movie.cover;
    banner=movie.banner;
    document.getElementById("editmovie").innerHTML=`
            <label for="movie-name">Movie Name:</label>
            <input type="text" id="name" name="name" value="${movie.name}">

            <label for="duration">Duration (minutes):</label>
            <input type="number" id="dur" name="dur" value="${movie.dur}">

            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value="${movie.genre}">

            <label for="release-date">Release Date:</label>
            <input type="date" id="rdate" itemid="rdate" value="${movie.rdate}">

            <label for="language">Language:</label>
            <input type="text" id="lang" name="lang" value="${movie.lang}">

            <label for="certification">Certification:</label>
            <input type="text" id="cert" name="cert" value="${movie.cert}">

            
            <label for="format">Format:</label>
            <input type="text" id="format" name="format" value="${movie.format}">


            <label for="cover-image">Cover Image </label>
            <input type="file" id="cover" name="cover" onchange="pic()" value="${movie.cover}">

            <label for="banner">Banner </label>
            <input type="file" id="banner" name="banner" onchange="ban()" value="${movie.banner}">
            <div class="btn">
                <button type="submit" class="add-movies-button" id="submit">Submit</button>

            </div>
    `
}
getMovie();
document.getElementById("editmovie").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const dur=document.getElementById("dur").value;
    const genre=document.getElementById("genre").value;
    const rdate=document.getElementById("rdate").value;
    const lang=document.getElementById("lang").value;
    const cert=document.getElementById("cert").value;
    const format=document.getElementById("format").value;
    fetch(`http://localhost:3000/api/editshow/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,dur,genre,rdate,lang,cert,format,cover,banner})
    }).then(async(res)=>{
        console.log(res);

        if(res.status==201){
            alert("success");
            window.location.href="../pages/movies.html"
        }
        else if(res.status==404){
            const data=await res.json();
            alert(data.msg)
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})

async function pic() {
    console.log(document.getElementById("cover").files[0]);
    cover = await convertTBase64(document.getElementById("cover").files[0])
}
async function ban() {
    console.log(document.getElementById("banner").files[0]);
     banner = await convertTBase64(document.getElementById("banner").files[0])
}

function convertTBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    });
}
