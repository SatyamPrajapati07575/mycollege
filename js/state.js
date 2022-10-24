//Hash Function 
(function(){
    let hash = window.location.hash;
    if(hash == "#log-out"){
        success_alert("Logout Successfully");
    }else if(hash == "#session-expired"){
        error_alert("Harakhoor Phley Login Karo");
    }else if(hash == "#login-success"){
        success_alert("LogIn, Successfully");
    }else if(hash == "#welcome-back"){
        let session = JSON.parse(window.localStorage.getItem('session'));
        let email = session.data.email;
        success_alert(email + ", Welcome Back.");
    }

})();