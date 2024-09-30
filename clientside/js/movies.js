async function getMovies() {
    const res=await fetch("http://localhost:3000/api/getshows");
    const movies=await res.json();
    console.log(movies);
    str=``;
    movies.map((movie)=>{
        console.log(movie._id);        
        str+=`
            <div class="c1">
                <div class="ims">
                        <a href="../pages/movie.html?id=${movie._id}"><img src="${movie.cover}" alt=""></a>
                </div>
                <div class="con">
                    <h3>${movie.name}</h3>
                    <h4>${movie.genre}</h4>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("contents").innerHTML=str;
}
getMovies();
document.getElementById("inp").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch("http://localhost:3000/api/getshows");
        const movie=await res.json();
        console.log(movie);
        str=``;
        movie.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((movie)=>{
            str+=`
            <div class="c1">
                <div class="ims">
                        <a href="../pages/movie.html?id=${movie._id}"><img src="${movie.cover}" alt=""></a>
                </div>
                <div class="con">
                    <h3>${movie.name}</h3>
                    <h4>${movie.genre}</h4>
                </div>
            </div>
        </div>
        `
        });
        document.getElementById("contents").innerHTML=str;
        } catch (error) {
            console.log(error);
        }
})
