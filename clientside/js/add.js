let cover;
document.getElementById("addmovie").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const dur=document.getElementById("dur").value;
    const genre=document.getElementById("genre").value;
    const rdate=document.getElementById("rdate").value;
    const lang=document.getElementById("lang").value;
    const cert=document.getElementById("cert").value;
    fetch("http://34.237.242.58/api/addshow",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,dur,genre,rdate,lang,cert,cover})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="./movies.html"
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
    console.log(profile)
    document.getElementById("proimg").src=profile
    
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
