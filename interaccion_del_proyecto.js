var anime="";

function buscar(){
    var element = document.getElementById("elem");
    element.innerHTML="";

    anime=document.getElementById("nameAnime").value;
    console.log("anime:"+anime);
        

    const url = "https://api.jikan.moe/v3/search/anime?q=";

    fetch(url+anime)
    .then(function(response){
        return response.json();    
    })


    .then(function(data){
        long=data.results.length;
        console.log("lenght:"+ long);
        console.log(data.results);

        for (i = 0; i < long; i++) {
            var div=crearNodo("div");
            var div2=crearNodo("div");
            var id=crearNodo("p");
            var poster=crearNodo("img");
            var blog=crearNodo("a");
            
            id.innerHTML=" ["+data.results[i].mal_id+ "]:";
            poster.src=data.results[i].image_url;
            blog.innerHTML=" Blog ";
            blog.setAttribute("href",data.results[i].url);
            blog.target="_blanck";
            
            adjuntar(div,poster);
            adjuntar(div,div2)
            adjuntar(div2,id);
            adjuntar(div2,blog);
            adjuntar(element,div); 
        }
    })

    .catch(function(error){
        console.log(error);           
    });

    function crearNodo(elemento){
        return document.createElement(elemento);
    }

    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);
    }    

}