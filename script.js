
document.addEventListener('DOMContentLoaded', function () {

  // DATA
  var liste = document.querySelector("#liste-analogies");
  var numCase = 0;
  data.forEach(function (data) {
    liste.innerHTML += '<section id="' + data.id + '"><img class="url" src="' + data.img + '"><p class="si-jetais">Si j’étais ' + data.analogie + ', je serais ' + data.valeuranalogie + '<p class="text">' + data.text + '</p></p></section>';
  });

  //console.log("Si j'étais " + data.analogie + "(Case " + numCase + ")");


  //POPUP
  const openModalButtons = document.getElementById("OuvrirMentionLégales");
  const closeModalButtons = document.getElementById("FermerMentionLégales");
  const mention = document.getElementById("mention");


  openModalButtons.addEventListener("click", () => {
    mention.classList.add("open");
  });

  closeModalButtons.addEventListener("click", () => {
    mention.classList.remove("open");
  });



  // FORMULAIRE
  document.querySelector("#send").addEventListener("click", function (e) {
    e.preventDefault();

    var analogieValue = document.querySelector("#analogie").value;
    var valeuranalogieValue = document.querySelector("#valeur").value;
    var detailValue = document.querySelector("#detail").value;
    var valeurImage = document.querySelector('#image')


    document.querySelector('#nouvelleanalogie').innerHTML +=
   '<img class="url" src=' + valeurImage + '"><p class="si-jetais">Si j’étais ' + analogieValue + ', je serais ' + valeuranalogieValue + '<p class="text">' + detailValue + '</p></p></section>';


    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=anastasia.gawryluk&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + analogieValue + ", je serais " + valeuranalogieValue + "Parce que " + detailValue)
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data)
          if (data.status == "success") {
            document.querySelector("#confirmation").innerHTML = "Bien reçu ;)";
          } else {
            document.querySelector("#confirmation").innerHTML = "Erreur !";
          }
        })
      });
  });




});



