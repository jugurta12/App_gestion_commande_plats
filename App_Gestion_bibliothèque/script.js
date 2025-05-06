let quitter = false;

while (!quitter) {
  let choix = prompt(
    "Menu principal :\n1. Ajouter un livre\n2. Afficher la bibliothèque\n3. Rechercher par Auteur\n4. Rechercher par Auteur\n5. Quitter"
  );

  switch (choix) {
    case "1":
      alert("Commande ajoutée !");
      // Ici tu peux appeler une fonction pour gérer une commande
      break;
    case "2":
      alert("Ceci est un message.");
      break;
    case "3":
      quitter = true;
      alert("Au revoir !");
      break;
    default:
      alert("Option invalide. Choisissez 1, 2 ou 3.");
  }
}
