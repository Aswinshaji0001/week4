let cover;
let banner;
document.getElementById("addmovie").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const dur=document.getElementById("dur").value;
    const genre=document.getElementById("genre").value;
    const rdate=document.getElementById("rdate").value;
    const lang=document.getElementById("lang").value;
    const cert=document.getElementById("cert").value;
    fetch("http://localhost:3000/api/addshow",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,dur,genre,rdate,lang,cert,cover,banner})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="./movies.html"
        }
        else if(res.status==404){
            alert("error");
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})

document.getElementById("cover").addEventListener('change',async(e)=>{
    console.log(document.getElementById("cover").files[0]);
    cover = await convertTBase64(document.getElementById("cover").files[0])
    console.log(cover)    
})
document.getElementById("banner").addEventListener('change',async(e)=>{
    console.log(document.getElementById("banner").files[0]);
    banner = await convertTBase64(document.getElementById("banner").files[0])
    console.log(cover)
})

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
