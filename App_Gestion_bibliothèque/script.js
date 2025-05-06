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
      let categorie;
      while (true) {
        categorie = prompt(
          "catégorie:\n - Romance (1)\n - Policier (2) \n - Science (3)"
        );
        if (categorie == 1) {
          categorie = "Romance";
          break;
        } else if (categorie == 2) {
          categorie == "Policier";
          break;
        } else if (categorie == 3) {
          categorie == "Science";
          break;
        } else {
          alert("erreur");
        }
      }

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
      let supprimerLivre = prompt("Le titre du livre à supprimer");
      let sup = livres.findIndex(function (livre) {
        return livre.titre.toLowerCase() === supprimerLivre.toLowerCase();
      });
      if (sup !== -1) {
        livres.splice(sup, 1);
        alert("Livre supprimé");
      } else {
        alert("Livre non trouvé");
      }
      break;
    case "6":
    case "6":
      let filtre = prompt(
        "Filtrer :\n(1). Romance \n(2). Policier\n(3). Science"
      );

      let categorieFiltre;

      if (filtre === "1") {
        categorieFiltre = "Romance";
      } else if (filtre === "2") {
        categorieFiltre = "Policier";
      } else if (filtre === "3") {
        categorieFiltre = "Science";
      } else {
        alert("Erreur : choix invalide.");
        break;
      }

      let listeFiltree = livres.filter(
        (livre) => livre.categorie === categorieFiltre
      );

      if (listeFiltree.length === 0) {
        alert("Aucun livre trouvé dans cette catégorie.");
      } else {
        let message = `Livres en catégorie "${categorieFiltre}" :\n\n`;

        listeFiltree.forEach((livre, i) => {
          message += ` Livre ${i + 1} :\n`;
          message += `Titre : ${livre.titre}\n`;
          message += `Auteur : ${livre.auteur}\n`;
          message += `Date : ${livre.date}\n\n`;
        });

        alert(message);
      }
      break;

    case "7":
      arret = true;
      alert("Au revoir !");
      break;
    default:
      alert("Option invalide. Choisissez 1, 2 ou 3.");
  }
}
