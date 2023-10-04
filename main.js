let togg = document.getElementById("togg")
let div = document.getElementById("d");



function list_recipe (){
    const recipe = ["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"].sort();
    //let tri = recipe.sort();
    console.log(recipe);
    for(i = 0; i < recipe.length; i++){
        document.getElementsByClassName("ingredient" + (i+1)).textcontent = recipe[i];
    }
    
}

function display_recipe(){
    if(getComputedStyle(div).display != "none"){
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  };
list_recipe();
togg.onclick = display_recipe();