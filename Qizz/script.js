let prenom = prompt("entré(e) votre prénom");
alert(
  "bienvenue au quiz " +
    prenom +
    ", tape uniquement le numero de la reponse que tu pense bonne"
);
let point = 0;

let q1 = prompt(
  "Question1 : Qu'elle est la capital de la france\n 1. Paris    2. Marseille    3. Lille"
);

if (q1 == "1") {
  point += 1;
  alert("bonne reponse");
} else {
  alert("mauvaise reponse");
}

let q2 = prompt(
  "Question2 : Qu'elle est la capital de la l'algérie\n 1. Constantine    2. Alger    3. Tiziouzou"
);

if (q2 == "2") {
  point += 1;
  alert("bonne reponse");
} else {
  alert("mauvaise reponse");
}

if (point >= 2) {
  alert("Bravo");
} else {
  alert("Courage");
}
