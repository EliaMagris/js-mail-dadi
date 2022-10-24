function mailVisual() {
  let inputMail = document.getElementById("inputMail").value;

  let everyMail = [
    "robertoMaxi@libero.it",
    "ilProcessoChe@gmail.com",
    "haSconfittoMafia@hotmail.it",
  ];

  let emailTrue = false;

  for (let i = 0; i < everyMail.length; i++) {
    if (inputMail == everyMail[i]) {
      emailTrue = true;
    }
  }

  if (emailTrue == true) {
    document.getElementById("Risultato").innerHTML = `<div>BENVENUTO</div>`;
  } else {
    document.getElementById("Risultato").innerHTML = `<div>REGISTRATI</div>`;
  }
}

// -------------------------------------------------------------

function numberVisual() {
  let giocatore = (document.getElementById("playerNumber").innerHTML = Math.round(Math.random() * 6));

  let pc = (document.getElementById("pcNumber").innerHTML = Math.round(Math.random() * 6));

  if (giocatore > pc) {
    console.log("vince il giocatore");
    document.getElementById("numberResult").innerHTML = `<div>VINCE IL GIOCATORE</div>`;
  } else if (giocatore < pc) {
    console.log("vince il PC");
    document.getElementById("numberResult").innerHTML = `<div>VINCE IL PC</div>`;
  } else {
    console.log("pareggio");
    document.getElementById("numberResult").innerHTML = `<div>BRUTTO STO PAREGGIO</div>`;
  }
}


