//Javascript File for Landing and Abous Us Page
// Classes must be built at the top!

let links = document.querySelectorAll('a');
console.log(links);
links.forEach(function(links){
    links.addEventListener("mouseover",function(links){
        links.target.style.color = "gold";
    });
});
links.forEach(function(links){
    links.addEventListener("mouseout",function(links){
        links.target.style.color = "";
    });
});
