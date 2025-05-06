let arret = false;
let livres = [];
let i = 0;

while (!arret) {
  let choix = prompt(
    "Menu principal :\n1. Ajouter un livre\n2. Afficher la bibliothèque\n3. Rechercher par Auteur\n4. Rechercher par Auteur\n5. Quitter"
  );

  switch (choix) {
    case "1":
      let titre = prompt("titre");
      let auteur = prompt("auteur");
      let date = prompt("Date de publication (format yyyy-mm-dd) :");

      while (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        alert("Format de date invalide !");
        date = prompt("Date de publication (format yyyy-mm-dd) :");
      }
      let catégorie = prompt(
        "catégorie:\n - Romance (1)\n - Policier (2) \n - Science"
      );
      if (catégorie == 1) {
        catégorie = "Romance";
      } else if (catégorie == 2) {
        catégorie == "Policier";
      } else if (catégorie == 3) {
        catégorie == "Science";
      } else {
      }

      let Romance = livres.filter((livres) => livres.catego === "Romance");
      let Policier = livres.filter((livres) => livres.catego === "Policier");
      let Science = livres.filter((livres) => livres.catego === "Science");

      Commande[i] = { nom: nom, prix: prix, catego: catego };
      i++;

      alert("Livre ajouté");
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      arret = true;
      alert("Au revoir !");
      break;
    default:
      alert("Option invalide. Choisissez 1, 2 ou 3.");
  }
}
