
const form = document.querySelector('form');

function emailSend(){
  var langue = document.getElementById('langue').value;
  var Nom = document.getElementById('Nom').value;
  var Prénom = document.getElementById('prenom'.value);
  var Email = document.getElementById('email').value;
  var Telephone = document.getElementById('tel').value;
  var whatssapp = document.getElementById('whatssapp').value;
  var Appel = document.getElementById('Appel').value;
  var NAissance = document.getElementById('date').value;
  var Sexe = document.getElementById('sexe').value;
  var Situation  = document.getElementById('sm').value;
  var Pays = document.getElementById('pays');
  var Ville = document.getElementById('ville');
  var nationalité = document.getElementById('nationalité').value;
  var Travail = document.getElementById('job').value;
  var Motivation = document.getElementById('motivation').value;
  var Fait = document.getElementById('Fait').value;




  var messageBody = "langue: " + langue +
                    "</br> Nom: " + Nom + 
                    "</br> prenom: " + Prénom + 
                    "</br> email: " + Email + 
                    "</br> tel: " + Telephone + 
                    "</br>  whatssapp: " + whatssapp + 
                    "</br> Appel: " + Appel + 
                    "</br> date: " + NAissance + 
                    "</br> sexe: " + Sexe + 
                    "</br> sm: " + Situation + 
                    "</br> pays: " + Pays + 
                    "</br> ville: " + Ville + 
                    "</br> nationalité: " + nationalité + 
                    "</br> job: " + Travail + 
                    "</br> motivation: " + Motivation + 
                    "</br> Fait: " + Fait; 
                    




  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "djadassemenffa333@gmail.com",
      Password : "6C896868B9165EB0A34561B3BF1DE21576FB",
      To : 'djadassemenffa333@gmail.com',
      From : "djadassemenffa333@gmail.com",
      Subject : "This is the subject",
      Body :"Hello",
  }).then(
    message => alert(message)
  );
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

 emailSend();
} )


