console.log("EXERCICE 1");

// 1. Créer un tableau d'entiers
let tabEntier = [12, 13, 24, 17, 32];
// 2. Ecrire une fonction qui filtre les nombres pairs
let filterPair = tabEntier.filter((p) => p % 2 === 0);
console.log("Les nombres pairs de ce tab sont " + filterPair);
// 3. Ecrire une fonction qui renvoie la somme des carrés des nombres impairs du tableau
function sumCarreOddNum() {
  // Fonction qui renvoie les nombres impairs
  let imp = tabEntier.filter((p) => p % 2 !== 0);
  console.log("Les nombres impairs sont " + imp);
  //   Fonction qui calcule la somme des carrés des nombres impairs
  let sum = imp.reduce((prev, curr) => prev * prev + curr * curr);
  return sum;
}
console.log(
  "La somme des carrés des nombres impairs est de : " + sumCarreOddNum()
);
