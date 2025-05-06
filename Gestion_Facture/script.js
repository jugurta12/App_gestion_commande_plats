let nbrCommande = Number(prompt("combien de plats tu as commandé ?"));
console.log(nbrCommande + " plat(s) commandés(s)");
let Commande = [];
let facture = 0;

for (i = 0; i < nbrCommande; i++) {
  let nom = prompt("Nom du plat");
  let prix = Number(prompt("prix du plat"));
  let catego = Number(
    prompt("choisir la catégorie : Entrée(1); Plat(2); Dessert(3)")
  );

  if (catego == 1) {
    catego = "Entrée";
  } else if (catego == 2) {
    catego = "Plat";
  } else if (catego == 3) {
    catego = "Dessert";
  } else {
    console.log("Arrêt du programme !");
  }
  Commande[i] = { nom: nom, prix: prix, catego: catego };
  facture += prix;
}

let Entrée = Commande.filter((Commande) => Commande.catego === "Entrée");
let Plat = Commande.filter((Commande) => Commande.catego === "Plat");
let Dessert = Commande.filter((Commande) => Commande.catego === "Dessert");

if (facture >= 150) {
  facture *= 0.85;
  console.log(
    "La facture total excède 150€, la réduction de 15% est appliquée ! La facture est de : " +
      facture +
      "€"
  );
} else {
  console.log("La facture est de : " + facture + "€");
}

console.log("\nEntrée(s) :");
Entrée.forEach((item) => console.log(`${item.nom} - ${item.prix}€`));

console.log("\nPlat(s) :");
Plat.forEach((item) => console.log(`${item.nom} - ${item.prix}€`));

console.log("\nDessert(s) :");
Dessert.forEach((item) => console.log(`${item.nom} - ${item.prix}€`));
