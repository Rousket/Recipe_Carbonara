let togg = document.getElementById("togg")
let div = document.getElementById("d");//COUOCU



function list_recipe (){
    const recipe = ["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"].sort();//tri par ordre alphabétique avec .sort()
    for(i = 0; i < recipe.length; i++){ //boucle sur le tableau
        document.getElementById("ingredient" + (i+1)).textContent = recipe[i];//ajout des ingrédients dans la liste 
        
    }
    
}

togg.addEventListener("click", () => {
    if(getComputedStyle(div).display != "none"){// obtenir les styles de l'élément(div), ensuite on récupère la valeur de la propriété "display"
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  })
list_recipe();//appel de la function