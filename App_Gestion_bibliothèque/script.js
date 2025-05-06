let arret = false;
let livres = [];
let i = 0;

while (!arret) {
  let choix = prompt(
    "Menu principal :\n1. Ajouter un livre\n2. Afficher la bibliothèque\n3. Rechercher par Auteur\n4. Rechercher par Auteur\n5.supprimer un livre\n6. filtrer\n7. Quitter"
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
      let categorie = prompt(
        "catégorie:\n - Romance (1)\n - Policier (2) \n - Science (3)"
      );
      if (categorie == 1) {
        categorie = "Romance";
      } else if (categorie == 2) {
        categorie == "Policier";
      } else if (categorie == 3) {
        categorie == "Science";
      } else {
      }

      let Romance = livres.filter((livres) => livres.categorie === "Romance");
      let Policier = livres.filter((livres) => livres.categorie === "Policier");
      let Science = livres.filter((livres) => livres.categorie === "Science");

      livres[i] = {
        titre: titre,
        auteur: auteur,
        date: date,
        categorie: categorie,
      };
      i++;

      alert("Livre ajouté");
      break;
    case "2":
      if (i == 0) {
        alert("pas de livre enregisté");
      } else {
        let affiche = livres.slice();

        affiche.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });

        let maffiche = "";

        affiche.forEach(function (livre) {
          maffiche += `${livre.date} - "${livre.titre}" par ${livre.auteur}  catégorie : ${livre.categorie}\n`;
        });

        alert(maffiche);
      }
      break;
    case "3":
      let titreRecherche = prompt("Le titre du livre");
      let trouve = livres.find(function (livre) {
        return livre.titre.toLowerCase() === titreRecherche.toLowerCase();
      });

      if (trouve) {
        alert(
          `Livre trouvé: "${trouve.titre}" par ${trouve.auteur}, publié le ${trouve.date}  catégorie : ${trouve.categorie}\n`
        );
      } else {
        alert("Livre non trouvé");
      }
      break;
    case "4":
      let auteurRecherche = prompt("Le titre du livre");
      let trouve2 = livres.find(function (livre) {
        return livre.auteur.toLowerCase() === auteurRecherche.toLowerCase();
      });

      if (trouve2) {
        alert(
          `Livre trouvé: "${trouve2.titre}" par ${trouve2.auteur}, publié le ${trouve2.date}  catégorie : ${trouve2.categorie}\n`
        );
      } else {
        alert("Livre non trouvé");
      }
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
      arret = true;
      alert("Au revoir !");
      break;
    default:
      alert("Option invalide. Choisissez 1, 2 ou 3.");
  }
}
