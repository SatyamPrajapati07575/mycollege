
//This file will contain code for, ReadyMade functions

function getBaseurl(url=''){
    return SERVER_ENV.BASE_URL+url;
}

var thread1;
function success_alert(msg){

    let alert_spn = $("#alert");
    alert_spn.setAttribute('class','success');
    alert_spn.innerHTML = " &check; "+msg;
    alert_spn.style.display = 'block';

    thread1 = setTimeout(function(){
        alert_spn.style.display = 'none';
    }, 3000);

}


function error_alert(msg){

    let alert_spn = $("#alert");
    alert_spn.setAttribute('class','error');
    alert_spn.innerHTML = " &cross; "+msg;
    alert_spn.style.display = 'block';

    thread1 = setTimeout(function(){
        alert_spn.style.display = 'none';
    }, 3000);

}

// a-zA-Z_0-9$
function $(selector){ 
    return document.querySelector(selector); 
}

function findRecord(email,password,userCollection_obj){

    let position = -1;
    var counter = 0;


        try{
            for(;;){ 
                if(userCollection_obj[counter].email == email.value && userCollection_obj[counter].password == password.value){

                    position = counter;
                    break;

                }else{
                    counter =  counter + 1;
                }
                if(counter  ==  userCollection_obj.length){
                    break;
                }                     
            }
        }catch(err){
            console.log("Something went wrong");
        }
        
        if(position == -1){
           return false;
        }else{
           return userCollection_obj[position];  //user_email exist.
        }
}

function findUser(email,userCollection_obj){

    let position = -1;
    var counter = 0;


        try{
            for(;;){ 
                if(userCollection_obj[counter].email == email){

                    position = counter;
                    break;

                }else{
                    counter =  counter + 1;
                }
                if(counter  ==  userCollection_obj.length){
                    break;
                }                     
            }
        }catch(err){
            console.log("Something went wrong");
        }
        
        if(position == -1){
           return false;
        }else{
           return position; //user_email exist.
        }
}
