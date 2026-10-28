const carrousel = document.querySelector("#carrousel");
/*
=========================
DECLARATION DES DONNEES
=========================
*/
const datas_slides= [
    {
        titre :"Le goût du pays, livré chez vous dans une atmosphère idéal.",
        description : "Epices, cafés, miel, piment, poivre noir."
    },
    {
        titre :"Le café des plus hauts plateaux",
        description : "Le meilleur de toute sa génération avec un taux de caféine adapter à un expérience conviviale et parfaite."
    },
    {
        titre :"Le meilleur market de toute la région, pour vous !",
        description : "Sur plusieurs kilomètre, vous ne trouverez pas meilleur que nous, sa je vous l'assure."
    }
]

carrousel.innerHTML = "";
for (let i = 0; i < datas_slides.length; i++){  // Boucle sur les données des slides : Permet de créer dynamiquement les slides en fonction des données fournies dans le tableau datas_slides.
    const data = datas_slides[i];   // Récupère les données du slide actuel à partir du tableau datas_slides.

    // Ajoute le code HTML pour chaque slide dans le carrousel en utilisant les données du slide actuel.
    carrousel.innerHTML += `    
        <div class="slide" style="background-image: url(img/slide${i+1}.jpg);">
            <div class="slide_conteneur">
                <div class="slide_text">
                    <h2>${data.titre}</h2>
                    <p>${data.description}</p>
                    <div class="buttons">
                        <a href="#">En savoir plus <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

//img/slide${i+1}.jpg permet d'ajoute les boutons de navigation du carrousel (flèches gauche et droite) après la création des slides.
// ${data.titre} permet de récupérer dynamiquement le titre du slide actuel à partir des données fournies dans le tableau datas_slides.
//{data.description} permet de récupérer dynamiquement la description du slide actuel à partir des données fournies dans le tableau datas_slides.
carrousel.innerHTML += `
    <!-- DÉPLACE LES BOUTONS ICI -->
    <div class="slide_options">
        <span class="slide_left"><i class="fa-solid fa-chevron-left"></i></span>
        <span class="slide_right"><i class="fa-solid fa-chevron-right"></i></span>
    </div>
`;

/*
=========================
DECLARATION DES VARIABLES
=========================
*/
const slide = document.querySelectorAll("#carrousel .slide");
const slide_left  = document.querySelector("#carrousel .slide_left");
const slide_right = document.querySelector("#carrousel .slide_right");

//Contient l'indice du slide actuellement affiché.
let slide_courant = 0;

/*
=========================
MASQUER TOUS LES SLIDES SAUF LE PREMIER
=========================
*/
for(let i = 1; i < slide.length; i++){
    slide[i].classList.add('hide');
}

/*
=========================
QUELQUES FONCTIONS UTILES
=========================
*/
//Fonction permettant d'afficher un slide en fonction de son indice.
function showSlide(index, direction){
    //On masque le slide actuellement affiché (courant).
    slide[slide_courant].classList.add('hide');

    //On cherche l'indice du nouveau slide à afficher en fonction de la direction (gauche ou droite).
    //trim permet de supprimer les espaces au début et à la fin de la chaîne de caractères.
    //toLowerCase permet de convertir la chaîne de caractères en minuscules.
    if(direction.trim().toLowerCase() == 'right'){
        if(index >= slide.length ){
            slide_courant = 0;
        }
        else{
            slide_courant = index;
        }
    }
    else if(direction.trim().toLowerCase() == 'left'){
        if(index < 0){
            slide_courant = slide.length - 1;
        }
        else{
            slide_courant = index;
        }
    }

    //On affiche le slide courant.
    slide[slide_courant].classList.remove('hide');
}

/*
=========================
ON LANCE LE SLIDE
=========================
*/
slide_left.addEventListener("click", function(e){
    showSlide(slide_courant - 1, 'left');
});

slide_right.addEventListener("click", function(e){
    showSlide(slide_courant + 1, 'right');
});