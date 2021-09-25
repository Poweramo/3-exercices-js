// 1.  Sélection Sélection Sélection.

const li1 = document.querySelector("#liToDel");
li1.remove();

const li2 = document.getElementById("liToDel");

const theid = "liToDel";
const li3 = document.getElementById(theid);

// Correction :

const child_3 = document.querySelector(".list>li:nth-of-type(3)");

const child_3_id = document.getElementById("liToDel");

const child_3_attribut = document.querySelector("[id= liToDel]");

// 2. Désordre

const data = [
  { id: 5, data: 5124 },
  { id: 4, data: 142 },
  { id: 2, data: 100 },
  { id: 1, data: 4587 },
  { id: 3, data: 158 },
];

// let dataTrans = setInterval(() => {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id < data[i + 1].id) {
//       console.log(data);
//     }

//     if (data[i].id > data[i + 1].id) {
//       [data[i].id, data[i + 1].id] = [data[i + 1].id, data[i].id];
//       console.log(data);
//     }
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(dataTrans);
// }, 3000);

// Correction :

const newData = data.sort((a, b) => a.id - b.id);
console.log(newData);

/* 3. Données JSON et affichage.
Difficulté : Moyenne

Créez une fonction qui transforme des données JSON en JS, 
et qui retourne le nom des pays d'Europe qui ont une population supérieure à 30 millions dans le <p class="info-pays">
Vous pouvez trier les pays en utilisant la solution de l'exercice précédent.

"Les pays Européens qui ont une population de plus de 30 millions d'habitants sont : "
*/

function analyse() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      let countrie = data.pays.filter((element) => element.population > 30);
      let countries = countrie.sort((a, b) => b.population - a.population);
      const infosCountries = document.querySelector(".info-pays");

      infosCountries.innerHTML =
        "<h3>Les pays Européens qui ont une population de plus de 30 millions d'habitants sont :</h3>";

      countries.map((infosCountrie) => {
        infosCountries.innerHTML += `
          <ul class="list">         
            <li>${infosCountrie.nom} (${infosCountrie.population} millions d'habitants)</li>
          </ul>
`;
      });
    });
}

analyse();
