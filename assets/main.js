function mailVisual() {
  let inputMail = document.getElementById("inputMail").value;

  let everyMail = [
    "robertoMaxi@libero.it",
    "ilProcessoChe@gmail.com",
    "haSconfittoMafia@hotmail.it",
  ];

  for (let i = 0; i < everyMail.length; i++) {
    if (inputMail == everyMail) {
      console.log("Questa mail è presente");
    } else if (inputMail !== everyMail) {
      console.log("Questa mail non è presente");
    }
  }
}
