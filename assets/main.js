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

    if(emailTrue == true){
      document.getElementById("Risultato").innerHTML = `<div>BENVENUTO</div>` 
    
    }else{
      document.getElementById("Risultato").innerHTML = `<div>REGISTRATI</div>`
    }
  }
