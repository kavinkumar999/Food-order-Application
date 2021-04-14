const customerarray = []
const managerarray = []
const itemarray = []
const orderarray = []
class User{
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }

}

class Item{
    constructor(name,quantity,category,price){
        this.name = name
        this.quantity = quantity
        this.category = category
        this.price = price
    }
}

class order{
    constructor(customer,item,quantity,price){
        this.customer = customer
        this.item = item
        this.quantity = quantity
        this.price = price
    }
}


customerarray.push("kavin","admin")
managerarray.push("admin","admin")
orderarray.push(customerarray[0],[itemarray[1],itemarray[3]],[2,2],[60,60])

itemarray.push(new Item("Idly",2,"Breakfast",20))
itemarray.push(new Item("Pongal",9,"Breakfast",30))
itemarray.push(new Item("Dosa",4,"Breakfast",30))
itemarray.push(new Item("Vada",7,"Breakfast",10))

itemarray.push(new Item("Rice",7,"Lunch",50))
itemarray.push(new Item("Noodles",5,"Lunch",70))
itemarray.push(new Item("Curd Rice",6,"Lunch",30))

itemarray.push(new Item("Parota",7,"Dinner",10))
itemarray.push(new Item("Chappathi",4,"Dinner",15))
itemarray.push(new Item("Non-parota",2,"Dinner",20))










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
    if (name.value !=="" && pass.value !==""){
        if(token){
            name.value = ""
            pass.value = ""
            //login into the order page
            window.location.href = "menu.html";


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
            $('#signup').attr("data-dismiss","modal");    


        }


    }
    
    

};






