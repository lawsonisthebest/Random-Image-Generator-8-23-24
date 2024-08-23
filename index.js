const body = document.getElementById("body");
var w = window.innerWidth;
var h = window.innerHeight;
var count = 0;

document.addEventListener("click", ()=>{
    const url = "https://picsum.photos/"+w+"/"+h+"?random="+count;
    document.body.removeChild(body.firstElementChild);
    
    var img = document.createElement("img");
    img.src = url;

    body.appendChild(img);

    count++;
});