const data = [
	{id: 0, type: " quote", message: "A vaincre sans péril, on triomphe sans gloire"}, 
	{id: 1, type: "quote", message: "Tout est au mieux dans le meilleur des mondes"}, 
	{id: 2, type: "quote", message: "L'imagination est plus importante que le savoir"}, 
	{id: 3, type: "quote", message: "Un problème sans solution est un problème mal posé"}, 
	{id: 4, type: "proverb", message: "Paix et tranquillité, voilà le bonheur."}, 
	{id: 5, type: "proverb", message: "La patience est un arbre dont la racine est amère, et dont les fruits sont très doux."}, 
	{id: 6, type: "proverb", message: "On apprend peu par la victoire, mais beaucoup par la défaite."},
	{id: 7, type: "proverb", message: "Avec du temps et de la patience, on vient à bout de tout."}
];
// Il aurait mieux valu récupérer chaque radio input séparément
let quotes = document.querySelectorAll('input[name="genre"]');
let button = document.querySelector('#button');
let message = document.querySelector('.Message')
button.addEventListener('click', function () {
    let random_quote = Math.floor( Math.random() * data.length );
    // ok why not pour récupérer la valeur du bouton checké
    let isChecked;
    for ( const check of quotes ) {
        if ( check.checked ){
            isChecked = check.value;
            break;
        }
    }

    // ça ne fonctionne pas pour les proverbes parce que la valeur de l'input ne correspond pas 
    // au type des objets du tableau.
    if (isChecked === data[random_quote].type) {
        message.innerHTML = data[random_quote].message;
    }
    
} )