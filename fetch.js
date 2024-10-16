// On récupère la liste de user de la ressource externe
fetch('https://jsonplaceholder.typicode.com/users')
// Le serveur reçoit la demande et les envoie sous format json
.then((data) => data.json())
// On affiche le rendu dans notre console
.then((json) => console.log(json))
// Si l'on a pas reçu
.catch((err) => console.error("Erreur du fetch"))


// On stocke des informations à partir de ces données
// (//get name, email, adress, company)
// .then((res) => {
    
//     const info = res.data;
//     getElement('name').innerHTML = 'Name:' + data.name
//     getElement('email').innerHTML = 'Email:' + data.email
//     getElement('adress').innerHTML = 'Adress:' + data.adress
//     getElement('company').innerHTML = 'Company:' + data.company
    
// });


// Ensuite(.then) on exploite ces données (data)
// data est le tableau contenant les users
// On va parcourir le tableau data avec forEach pour chaque utiisateur user
// Puis on y insère les éléments HTML que l'on souhaite (createElement et innerText) 



// Partie todos
// On va chercher les 2 objets reponses
// ensuite faire un res.json sur chacune d'entre el le  
// On va créer une copie et
