var username = getvalidiformation(username, 'please enter your name..');

document.write ('<p>' + username + '</p>');
//-----------------
var age = getvalidiformation(age, 'please enter your age..');
    
if (age>=18){
    alert ('WELCOM')
}
else{
    alert('sorry not allowed to rent car')
}
//-----------------
var n = getvalidiformation(n, 'how many pic you want..');
    for(var i = 1 ; i<=n ; i++){
        document.write ('<img src= "https://pngimage.net/wp-content/uploads/2018/06/png-voiture-4.png">')
    }

    function takeuserinput(message){
        return prompt(message);
    }

    function getvalidiformation(userinput, message){
        while( userinput === undefined || userinput === '' || userinput === null ){
            userinput = takeuserinput(message);
        }
        return userinput;
    }

    alert:"welcom"