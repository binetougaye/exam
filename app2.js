console.log("EXERCICE 2");

// EXERCICE 2
// VARIABLES
// 1. Créer un objet avec les propriétés
const tabStudents = [
  {
    id: 1,
    prenom: "Mouhamed",
    nom: "Sarr",
    notes: [17, 19, 13, 15],
    age: 23,
  },
];
// console.log(tabStudents[0].notes);
// 2. Calculer la somme des notes de l'étudiant

// Recuperer le tableau de notes
let sumNotes = tabStudents.map((m) => m.notes);
// console.log(sumNotes);
let moyenne = sumNotes.reduce((prev, curr) => prev + curr);
// console.log(moyenne);
let sommeDesNotes = moyenne.reduce((prev, curr) => prev + curr);
console.log("La somme des notes de l'étudiant est de " + sommeDesNotes);

// 3. Créer un tableau d'étudiants et effectuer les opérations suivantes
const tabUser = [
  {
    prenom: "Abou",
    nom: "Sow",
    age: 23,
  },
  {
    prenom: "Fatou Moctar",
    nom: "Ndiaye",
    age: 25,
  },
  {
    prenom: "Soukeyna",
    nom: "Beye",
    age: 13,
  },
];

// 4. Lister les étudiants par ordre alphabétique à partir de leur nom
// Recupérer le tableau de noms
let tabNom = tabUser.map((p) => p.nom);
console.log(tabNom);
// Liste par ordre alphabétique
let listes = tabNom.sort();
console.log("La liste des étudiants par ordre alphabétique est: " + listes);
// 5. Lister les étudiants qui ont plus de 18 ans
let majeur = tabUser.filter((m) => m.age > 18);
console.log("Voici les étudiants qui ont plus de 18 ans ", majeur);
