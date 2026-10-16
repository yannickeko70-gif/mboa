const carrousel = document.querySelector("#carrousel");
/*
=========================
DECLARATION DES DONNEES
=========================
*/
const datas_slides= [
    {
        titre :"Le goût du pays, livré chez vous.",
        description : "Epices, cafés, miel, piment."
    },
    {
        titre :"Le café des plus hauts plateaux",
        description : "Epices, cafés, miel, sucre."
    },
    {
        titre :"Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        description : "Quibusdam consectetur doloremque magnam laboriosam corrupti aut"
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
const slide_left = document.querySelector("#carrousel .slide-left");
const slide_right = document.querySelector("#carrousel .slide_right");

//Contient l'indice du slide actuellement affiché.
let slide_courant = 0;