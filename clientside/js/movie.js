async function getMovies() {
    const res=await fetch("http://localhost:3000/api/getshows");
    const movies=await res.json();
    console.log(movies);
    str=``;
    movies.map((movie)=>{
        console.log(movie.cover);
        
        str+=`
       
            <div class="c1">
                <div class="ims">
                    <a href="movie.html"><img src="${movie.cover}" alt=""></a>
                </div>
                <div class="con">
                    <h2>${movie.name}</h2>
                    <h4>${movie.genre}</h4>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("contents").innerHTML=str;
}
getMovies();
