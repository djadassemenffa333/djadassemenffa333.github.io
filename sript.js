


function emailSend(){


    

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