function emailSend(){
  var Nom = document.getElementById('Nom').value;
  var Prenom = document.getElementById('prenom').value;
 // var Email = document.getElementById('email').value;
  var Telephone = document.getElementById('tel').value;
  var whatssapp = document.getElementById('whatssapp').value;
  var Appel = document.getElementById('Appel').value;
  var Date = document.getElementById('date').value;
  var Sex = document.getElementById('sexe').value;
  var Situation = document.getElementById('sm').value;
  var Pays = document.getElementById('pays').value;
  var Ville = document.getElementById('ville').value;
  var Nationalité = document.getElementById('nationalité').value;
  var Tavail = document.getElementById('job').value;
  var Motivation = document.getElementById('motivation').value;
  var faitLe = document.getElementById('Fait').value;

  var messageBody = 
                    "Nom: " + Nom +  
                    "</br> Prenom: " + Prenom + 
                    "<br/> Email: " + Email + 
                    "</br> Telephone: " + Telephone + 
                    "<br/> Whatsapp: " + whatssapp + 
                    "</br> Appel: " + Appel + 
                    "<br/> Date: " + Date + 
                    "</br> Sex: " + Sex + 
                    "<br/> Situation: " + Situation + 
                    "</br> Pays: " + Pays + 
                    "<br/> ville: " + Ville + 
                    "</br> Nationalité: " + Nationalité + 
                    "<br/> Travail: " + Tavail + 
                    "<br/> Movivation: " + Motivation + 
                    "<br/> Fait: " + faitLe;


    

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "djadassemenffa333@gmail.com",
    Password : "6C896868B9165EB0A34561B3BF1DE21576FB",
    To : 'djadassemenffa333@gmail.com',
    From : "djadassemenffa333@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}