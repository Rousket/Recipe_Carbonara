let togg = document.getElementById("togg")
let div = document.getElementById("d");



function list_recipe (){
    const recipe = ["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"].sort();
    for(i = 0; i < recipe.length; i++){
        console.log(recipe[i]);
        document.getElementById("ingredient" + (i+1)).textContent = recipe[i];
        
    }
    
}

togg.addEventListener("click", () => {
    if(getComputedStyle(div).display != "none"){
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  })
list_recipe();