function calcul(a, b) {
    let reponse = prompt(a + " + " + b + " = ?  (Si vous voulez quitter tapez q)");

    if (reponse == a + b) {
        calcul(Math.floor(Math.random() * 16), Math.floor(Math.random() * 16));
    } else if (reponse =='q') {
        return;
    } else {
        calcul(a, b);
    }
}

let n1 = Math.floor(Math.random() * 16);
let n2 = Math.floor(Math.random() * 16);
calcul(n1, n2);