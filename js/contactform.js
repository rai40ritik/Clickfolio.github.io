
function contactForm() {
    var P_name = document.forms["contact_form"]["person_name"].value;
    var email = document.forms["contact_form"]["email_id"].value;
    var mob = document.forms["contact_form"]["person_mobile"].value;
    var massage = document.forms["contact_form"]["msg"].value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let valstatus = true;
    if (P_name.trim() =="") {
        var element1 = document.getElementById("myDIV1");
         element1.classList.add("mystyle");
         valstatus = false;
      }
    else {
        var element1 = document.getElementById("myDIV1");
        element1.classList.remove("mystyle");
     }
     if (email.trim()=="") {
               var element2= document.getElementById("myDIV2");
               element2.classList.add("mystyle");
               valstatus = false;
             }
             else if(!emailReg.test(email.trim())){
              var element2= document.getElementById("myDIV2");
               element2.classList.add("mystyle");
               valstatus = false;
             }
             else {
               var element = document.getElementById("myDIV2");
               element.classList.remove("mystyle");
             }
             if (mob.trim().length == 10 && !mob.startsWith("9") && !mob.startsWith("8") && !mob.startsWith("7") && !mob.startsWith("6")) {
                      var element1 = document.getElementById("myDIV3");
                      element1.classList.add("mystyle");
                      valstatus = false;
                      }
                  else if (mob.trim().length < 10) {
                    var element1 = document.getElementById("myDIV3");
                    element1.classList.add("mystyle");
                    valstatus = false;
                      }
                
                    else {
                      var element = document.getElementById("myDIV3");
                      element.classList.remove("mystyle");
                    }

                    if (massage.trim() =="") {
                        var element1 = document.getElementById("myDIV4");
                         element1.classList.add("mystyle");
                         valstatus = false;
                      }
                
                    else {
                        var element1 = document.getElementById("myDIV4");
                        element1.classList.remove("mystyle");
                     }
                 return valstatus;
                }