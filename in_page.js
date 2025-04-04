// this function filters all the books based on the tag selcted
(function() {
    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.book-genre')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach ((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();

// this code updates the year of the footer automatically
window.addEventListener('load', () => {
    const year = document.getElementById('currentYear');
    year.innerHTML = new Date().getFullYear();

});


// this function activate search bar in recensioni page
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); 
    const storeitems = document.getElementById("book-genres");
    const product = document.querySelectorAll(".book-genre");
    const pname = storeitems.getElementsByTagName("p"); 

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('p')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";                
            }else{
                product[i].style.display = "none"; 
            }
        }
    }
}

// this function activate search bar in recensioni page
const searchArticle = () => {
    const searchbox = document.getElementById("search-article").value.toUpperCase(); 
    const storeitems = document.getElementById("card-box-area");
    const product = document.querySelectorAll(".card-box");
    const pname = storeitems.getElementsByTagName("h3"); 

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";                
            }else{
                product[i].style.display = "none"; 
            }
        }
    }
}


// this code enables dark or light mode
var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "Light"){
    icon.src = "../img/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src = "../img/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "../img/sun.png"
        localStorage.setItem("theme", "dark");

    }else{
        icon.src = "../img/moon.png"
        localStorage.setItem("theme", "light");
    }
}
