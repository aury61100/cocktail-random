var obj;

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {
      var image = document.createElement("img")
      var nomeDrink = document.createElement("h1");
      var categoria = document.createElement("h2");
      var tipologia = document.createElement("h3");
      // ingredienti
      var ing1 = document.createElement("p");
      var ing2 = document.createElement("p");
      var ing3 = document.createElement("p");
      var ing4 = document.createElement("p");
      var ing5 = document.createElement("p");

      var istruzioni = document.createElement("p");

      // nome 
      nomeDrink.innerHTML = obj.drinks[0].strDrink;
      document.body.appendChild(nomeDrink);  

      // immagine
      image.src = obj.drinks[0].strDrinkThumb;
      document.body.appendChild(image);

      // categoria 
      categoria.innerHTML = obj.drinks[0].strCategory;
      document.body.appendChild(categoria); 

      // tipologia cocktail
      tipologia.innerHTML = obj.drinks[0].strAlcoholic;
      document.body.appendChild(tipologia); 
      
      // ingredienti
      ing1.innerHTML = obj.drinks[0].strIngredient1;
      document.body.appendChild(ing1);

      ing2.innerHTML = obj.drinks[0].strIngredient2;
      document.body.appendChild(ing2);

      ing3.innerHTML = obj.drinks[0].strIngredient3;
      document.body.appendChild(ing3);

      ing4.innerHTML = obj.drinks[0].strIngredient4;
      document.body.appendChild(ing4);

      ing5.innerHTML = obj.drinks[0].strIngredient5;
      document.body.appendChild(ing5);

      // procedimento
      istruzioni.innerHTML = obj.drinks[0].strInstructionsIT;
      document.body.appendChild(istruzioni);

    })





