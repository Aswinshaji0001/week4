let profile
const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
async function getMovie() {
    const res=await fetch(`http://localhost:3000/api/getshow/${id}`)
    const movie=await res.json();
    document.getElementById("editmovie").innerHTML=`
            <label for="movie-name">Movie Name:</label>
            <input type="text" id="name" name="name" value="${movie.name}"required>

            <label for="duration">Duration (minutes):</label>
            <input type="number" id="dur" name="dur" value="${movie.dur}" required>

            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value="${movie.genre}" required>

            <label for="release-date">Release Date:</label>
            <input type="date" id="rdate" itemid="rdate" value="${movie.rdate}" required>

            <label for="language">Language:</label>
            <input type="text" id="lang" name="lang" value="${movie.lang}" required>

            <label for="certification">Certification:</label>
            <input type="text" id="cert" name="cert" value="${movie.cert}" required>

            <div class="prf" >
                <img src="${movie.cover}" class="prfimg" id="proimg" alt="">
            </div>

            <label for="cover-image">Cover Image </label>
            <input type="file" id="cover" name="cover" onchange="pic()" required>
            <div class="btn">
                <button type="submit" class="add-movies-button" id="submit">Add Movie</button>

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
    fetch(`http://localhost:3000/api/editshow/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,dur,genre,rdate,lang,cert,cover})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="../pages/movies.html"
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
    console.log(profile)
    document.getElementById("proimg").src=profile
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
