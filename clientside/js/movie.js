const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);


async function getMovie() {
    const res=await fetch(`http://34.237.242.58/api/getshow/${id}`);
    const movie=await res.json();
    
        str=`
            <div class="poster">
             <img src="${movie.cover}"alt="${movie.name}">
        </div>
        <div class="text">
            <h1>${movie.name}</h1>
            <div class="pos1">
                <h2>8.9/10 (52.1K VOTES)</h2>
                <div class="brm">
                    <button class="brn">Rate now</button>
                </div>
            </div>
            <div class="pos2">
                <h3>2D,3D,IMAX 2D,MX4D 3D,4DX 3D,3D SCREEN X,ICE 3D,</h3>
                <h3>IMAX 3D,2D SCREEN X</h3>
            </div>
            <div class="pos3">
                <h3>${movie.lang}</h3>
            </div>
            <div class="pos4">
                <ul>
                    <li>${movie.dur} Minutes</li>
                    <li>${movie.genre}</li>
                    <li>${movie.cert}</li>
                    <li>${movie.rdate}</li>
                </ul>
            </div>
            <div class="pos5">
                <button class="bm">Book Ticket</button>
            
            </div>
             <div class="bs">
                <a href="../pages/edit.html?id=${movie._id}"><button class="editb">Edit</button></a>
                <button class="deleteb" onclick="deleteShow('${movie._id}')">Delete</button>
           </div>
        `
   
    document.getElementById("contents").innerHTML=str;
   
    
}
getMovie();

async function deleteShow(id) {
    fetch(`http://34.237.242.58/api/deleteshow/${id}`,{
      method:"DELETE",
          headers:{"Content-Type":"application/json"}
    }).then((res)=>{
          console.log(res);
          if(res.status==201){
              alert("Deleted")
              window.location.href="../pages/movies.html";
          }else{
              alert("error");
              window.location.href="../pages/movies.html";
          }
      }). catch ((error)=>{
          console.log(error);
          
      })
}
