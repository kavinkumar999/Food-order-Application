import {User} from "./model.js";
import {Item} from "./model.js";
import {order} from "./model.js";

var customerarray = {}
var managerarray = {}

// const orderarray = []




var currentuser;
//customer 
if(JSON.parse(localStorage.getItem("customer")) ){
    console.log("exitst customer");
    customerarray = JSON.parse(localStorage.getItem("customer"))
}
else{
    customerarray["kavin"] = new User("kavin","admin")


}

//manager
if(JSON.parse(localStorage.getItem("manager"))){
    console.log("exist manager");
    managerarray = JSON.parse(localStorage.getItem("manager"))
}
else{
    managerarray["admin"] = new User("admin","admin")

}


const itemarray = {
    "1001" : new Item("1001","Idly",2,"Breakfast",20),
    "1002" : new Item("1002","Pongal",9,"Breakfast",30),
    "1003" : new Item("1003","Dosa",4,"Breakfast",30),
    "1004" : new Item("1004","Vada",7,"Breakfast",10),
    "1005" : new Item("1005","Rice",7,"Lunch",50),
    "1006" : new Item("1006","Noodles",5,"Lunch",70),
    "1007" : new Item("1007","Curd Rice",6,"Lunch",30),
    "1008" : new Item("1008","Parota",7,"Dinner",10),
    "1009" : new Item("1009","Chappathi",4,"Dinner",15),
    "1010" : new Item("10010","Non-parota",2,"Dinner",20),
    "1011" : new Item("10011","Pizza",2,"Breakfast",100),
    "1012" : new Item("10012","Burger",2,"Dinner",100)
}




localStorage.setItem("customer",JSON.stringify(customerarray))
localStorage.setItem("manager",JSON.stringify(managerarray))
localStorage.setItem("item",JSON.stringify(itemarray))
// localStorage.setItem("order",JSON.stringify(orderarray))









document.getElementById("signin").onclick = function(){
    // $('#signin').attr("data-dismiss","modal");  
    console.log(customerarray);
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
        console.log(managerarray);
        console.log(customerarray);
        if(manager){
            console.log("entetr teh manager");
            $.each( managerarray, function( key, value ) {

                if(value.name == name.value && value.pass == pass.value){
                    console.log("matched th manager")
                    token = true;
                }
                
        
        
            });
        }
        else{
            console.log("entetr teh customer    ");
            $.each( customerarray, function( key, value ) {

                if(value.name == name.value && value.pass == pass.value){
                    console.log("matched th manager")
                    token = true;
                }
                
        
        
            });


        }
    }
    if (name.value !=="" && pass.value !==""){
        if(token){
            
            //login into the order page
            localStorage.setItem("currentuser",name.value)
            
            localStorage.setItem("admin",JSON.stringify(manager))

            window.location.href = "menu.html";

            console.log("successfully login")
            name.value = ""
            pass.value = ""

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
            

            if(manager){
                if(managerarray.hasOwnProperty(user.name)){

                    uname.classList.add("is-invalid")
                    $(".invalid-feedback").text("user name is already exist")


                }
                else{
                    uname.value = ""
                    upass.value = ""
                    ucpass.value = ""
                    
                    managerarray[user.name] = user
                    localStorage.setItem("manager",JSON.stringify(managerarray))
                    $('#signup').attr("data-dismiss","modal");    


                }
                
            }
            else{
                if(customerarray.hasOwnProperty(user.name)){
                    uname.classList.add("is-invalid")
                    $(".invalid-feedback").text("user name is already exist")

                }
                else{
                    uname.value = ""
                    upass.value = ""
                    ucpass.value = ""
                    
                    customerarray[user.name] = user

                    localStorage.setItem("customer",JSON.stringify(customerarray))
                    $('#signup').attr("data-dismiss","modal");    


                }

                

            }


        }


    }
    
    

};






