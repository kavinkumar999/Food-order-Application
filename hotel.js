const customerarray = []
const managerarray = []
class User{
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }

}



document.getElementById("signin").onclick = function(){
    // $('#signin').attr("data-dismiss","modal");  
    console.log($('#signin'))
    let name = document.getElementById("input")
    let pass = document.getElementById("password")
    let manager = document.getElementById("manager").checked
    let customer = document.getElementById("customer").checked

    if(name.value ===""){
        name.classList.add("is-invalid")
        $(".invalid-feedback").text("Field cannot be empty")

    }
    else{
        name.classList.add("is-valid")
        name.classList.remove("is-invalid")

    }

    if(pass.value ===""){
        pass.classList.add("is-invalid")
        $(".invalid-feedback").text("Field cannot be empty")

    }
    else{
        pass.classList.remove("is-invalid")

    }
    let token = false;
    if(name.value !== "" && pass.value !== ""){
        if(manager){
            for(var user in managerarray){
                if(managerarray[user].name = name.value && managerarray[user].pass == pass.value){
                    console.log("matched th result")
                    token = true;
                    break;
                }
            }
        }
        else{
            for(var user in customerarray){
                if(customerarray[user].name = name.value && customerarray[user].pass == pass.value){
                    console.log("matched th result")
                    token = true;
                    break;
                }
            }

        }
    }
    // for(var user in managerarray){
    //     console.log(managerarray[user].name)
    //     console.log(managerarray[user].pass)
    // }
    // for(var user in customerarray){
    //     console.log(customerarray[user].name)
    //     console.log(customerarray[user].pass)
    // }
    if (name.value !=="" && pass.value !==""){
        if(token){
            name.value = ""
            pass.value = ""
            //login into the order page

            console.log("successfully login")

        }
        else{
            
            pass.classList.remove("is-valid")
            pass.classList.add("is-invalid")
            $(".invalid-feedback").text("Please check your Credentials")

        }
        
        // $('#signin').removeAttr("data-dismiss","modal");  


    }
    // $('#signin').removeAttr("data-dismiss","modal");  


    
};

document.getElementById("signup").onclick = function(){
    // $('#signup').removeAttr("data-dismiss","modal");  

    let uname = document.getElementById("ninput")
    let upass = document.getElementById("npass")
    let ucpass = document.getElementById("cpass")
    let manager = document.getElementById("nmanager").checked
    let customer = document.getElementById("ncustomer").checked
    console.log(upass.value)
    if(uname.value === "" || uname.value == "" ){
        uname.classList.add("is-invalid")
        $(".invalid-feedback").text("Field cannot be empty")


    }
    else{
        uname.classList.add("is-valid")
        uname.classList.remove("is-invalid")

    }
    if(upass.value === "" ){

        upass.classList.add("is-invalid")

    }
    else{
        upass.classList.add("is-valid")
        upass.classList.remove("is-invalid")

    }
    if(ucpass.value === "" ){

        ucpass.classList.add("is-invalid")

    }
    else{
        ucpass.classList.add("is-valid")
        ucpass.classList.remove("is-invalid")

    }
    if(uname.value !== "" && upass.value !== "" && ucpass.value !== ""){
        if(upass.value !==ucpass.value){
            upass.classList.remove("is-valid")
            ucpass.classList.remove("is-valid")


            upass.classList.add("is-invalid")
            ucpass.classList.add("is-invalid")
            $(".passing").text("password not match")


        }
        else{
            uname.classList.remove("is-valid")

            upass.classList.remove("is-valid")
            ucpass.classList.remove("is-valid")
            upass.classList.remove("is-invalid")
            ucpass.classList.remove("is-invalid")
            var user = new User(uname.value,upass.value)
            uname.value = ""
            upass.value = ""
            ucpass.value = ""

            if(manager){
                managerarray.push(user)
            }
            else{
                customerarray.push(user)
            }
            // $('#signup').attr("data-dismiss","modal");    


        }


    }
    
    

};


