
function gotoPage(pagename,msg){

    if(pagename == 'login'){

        window.location.href = getBaseurl(pagename + '.html');
        return; //code execute stop.
       
    }else if(pagename == 'logout'){

        let status = window.confirm(msg); //ok cancel
        if(status){

            window.localStorage.removeItem('session');
            window.location.href = getBaseurl('login.html#log-out'); //Jis page chahtey logout honey
            //bad jaye 
        }

    }else{
        window.location.href = getBaseurl(pagename + '.html');
        return; //code execute stop.
    }
  
}


//registerUser
function registerUser(e){

    e.preventDefault(); //default behaviour to Stop Kardo.
    let name = $("#name"); //document.getElementById('name');
    //console.log(name.value);
    let email = $("#email"); //document.getElementById('email');
    //console.log(email.value);
    let password = $("#password"); //document.getElementById('password');
    //console.log(password.value);
    let mobile = $("#mobile"); //document.getElementById('mobile');
    //console.log(mobile.value);  


    var collections = JSON.parse(window.localStorage.getItem('user_data')) || [];
   // console.log(collections);

    let users = {
        name:name.value,
        email:email.value,
        password:password.value,
        mobile:mobile.value,
    }

    //JSON.stringify() : JsonObject => JSONString
    //JSON.parse() : JsonString => JsonObject

    //Object and Array of Object.

    collections.push(users);
    window.localStorage.setItem('user_data',JSON.stringify(collections));
    success_alert("Registration Successfull");

}


function contactUser(e){
    
    e.preventDefault(); //default behaviour to Stop Kardo.
    let name = $("#name");
    //console.log(name.value);
    let email = $("#email");
    //console.log(email.value);
    let message = $("#message");
    //console.log(message.value);
    let mobile = $("#mobile");
    //console.log(mobile.value);
    var collections = JSON.parse(window.localStorage.getItem('contact_data')) || [];
    console.log(collections);

    let users = {
        name:name.value,
        email:email.value,
        message:message.value,
        mobile:mobile.value,
    }
    collections.push(users);
    window.localStorage.setItem('contact_data',JSON.stringify(collections));
    success_alert("Thank you for Contacting,Your Enquiry Send Successfully");

}

function loginUser(e){

    e.preventDefault();
    let email  = $("#email");
    let password = $("#password");
    
    let userCollection_str = window.localStorage.getItem('user_data');
    let userCollection_obj = JSON.parse(userCollection_str);
    
    let user_data = findRecord(email,password,userCollection_obj);
    if(user_data){      

        let session = {
            data:user_data,
            is_login:true,
        }
        window.localStorage.setItem('session',JSON.stringify(session));
        window.location.href = getBaseurl('dashboard.html#login-success');

    }else{
        error_alert('Invalid User Name or Password');
    }

}

// how to dynamically attach a event : event loop or event listener 


// let step1_btn = $("#step1_btn");
// let old_pass = $('#old_pass');
// let step1 = $('#step1');

// let step2 = $('#step2');
// let step2_btn = $("#step2_btn");
// let new_pass = $('new_pass');

// step1_btn.addEventListener('click',function(event){
//     // console.log(this);
//     console.log(old_pass.value);
//     let session = JSON.parse(window.localStorage.getItem('session'));
//     // console.log(session.data.password);

//     if(old_pass.value == "" || old_pass.value == null){
//         error_alert("Field is Required");
//         old_pass.style.border="2px solid red";
//         return;
//     }

//     if(old_pass.value == session.data.password){
//         // success_alert("old Password matched");
//         old_pass.style.border= '';
//         step2.style.display = 'block';
//         step1.style.display = 'none';
//     }else{
//         error_alert("old PAssword Does not Matched");
//         old_pass.style.boarder= '';
//         return;
//     }

// });



// step2_btn.addEventListener("click",function(event){
//     if(new_pass.value == "" || new_pass.value == null){
//         error_alert('Naew password is required');
//         new_pass.style.border = '2px solid red';
//         return;
//     }
//     if(new_pass.value == old_pass.value){
//         error_alert('New Pass cannot be same as old pass');
//         new_pass.style.border = '';
//         return;
//     }
//     else{
//         success_alert("new password Matched");
//         new_pass.style.boarder="";
//         step3.style.display="block";
//         step2.style.display="none";
//     }
// });

// back1_btn.addEventListener('click',function(event){
//     if(step2.style.display == 'block'){
//         step2.style.display == 'none';
//         step1.style.display = 'block';
//     }
//     else{
//         step1.style.display = 'block';
//         step1.style.display = 'none';
//     }
// })

let step1_btn = $("#step1_btn");
let old_pass=$("#old_pass");
let step1=$("#step1");

let step2=$("#step2");
let step2_btn = $("#step2_btn");
let new_pass=$("#new_pass");
let back1_btn=$("#back1_btn");
let back2_btn= $("#back2_btn");
let step3=$("#step3");

step1_btn.addEventListener('click',function(event){
    //console.log(old_pass.value);
    //console.log(this);
    let session = JSON.parse(window.localStorage.getItem('session'));
   // console.log(session.data.password);

    if(old_pass.value == "" || old_pass == null ){
        error_alert("Feild is required!")
        old_pass.style.border="2px solid red";
        return;

    }

    if(old_pass.value == session.data.password ){
       // success_alert("Old Password Matched!");
        old_pass.style.border="";
        step2.style.display="block";
        step1.style.display="none";

    }else{
        error_alert("Old Password does not Matched");
        old_pass.style.border="";
        return;
    }


});


step2_btn.addEventListener('click',function(event){

    if(new_pass.value == "" || new_pass.value==null){
        error_alert("New Password is required");
        new_pass.style.border="2px solid red";
        return;

    }
    if(new_pass.value ==old_pass.value ){
        error_alert('New Password does not matched old password!');
        new_pass.style.border="";
        return;
    }
    else{
        //success_alert("New Password Matched!");
         new_pass.style.border="";
         step3.style.display="block";
         step2.style.display="none";
 
     }


});

back1_btn.addEventListener('click',function(event){
    if(step2.style.display=='block'){
        step2.style.display = 'none';
        step1.style.display = 'block';

    }else{
        step2.style.display = 'block';
        step1.style.display = 'none';
    }

});
back2_btn.addEventListener('click',function(event){
    if(step3.style.display=='block'){
        step3.style.display = 'none';
        step2.style.display = 'block';

    }else{
        step3.style.display = 'block';
        step2.style.display = 'none';
    }

});

step3_btn.addEventListener('click',function(event){
    //console.log(cnf_pass.value,this);
    if(cnf_pass.value == "" || cnf_pass.value == null){
        cnf_pass.style.border='2px solid red';
        error_alert('cnf is Required');
        return;
    }

    if(cnf_pass.value == new_pass.value){
        cnf_pass.style.border='';
       // success_alert('Ready to change..');

       // user_data -> password --> change
        let session = JSON.parse(window.localStorage.getItem('session'));
        let email = session.data.email;
        let user_data = JSON.parse(window.localStorage.getItem('user_data'));

        let index = findUser(email,user_data);
        user_data[index].password = cnf_pass.value; //ne pass
        window.localStorage.setItem('user_data',JSON.stringify(user_data));

        window.localStorage.removeItem('session');
        window.location.href = getBaseurl('login.html#log-out');


    }else{
        error_alert('New Pass not Matched with cnf pass');
        return;
    }
})





