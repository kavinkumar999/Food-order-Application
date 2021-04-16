function cardcreation(id,name,price){
    const card =`
        <div class="card align-item" style="width: 18rem;" id="row-">
            <img class="card-img-top" src="../assest/2.jpg" alt="Card image cap">
            <div class="card-body">
                <h2 style="display: none;">${id}</h2>
                <h5 class="card-title">${name}</h5>
                <p class="card-text">$${price}</p>
                <div class="cal d-flex justify-content-around">
                    <i class="fa fa-minus sub"></i>
                    <span class="quans">1</span>
                    <i class="fa fa-plus add"></i>
                </div>
                <hr>
                <a class="btn btn-danger cart float-right mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
        `
        return card
}

var currentuser = localStorage.getItem("currentuser")
var json = JSON.parse(localStorage.getItem("order"))
var purchase = {};
let purchaselength = 0;
if(json != null && Object.keys(json).length != 0){
    console.log("object is empty")
    purchaselength = Object.keys(json).length

}

var access = JSON.parse(localStorage.getItem("admin"))
if(access == false){
    $(".access").hide()
}

$(document).ready(function(){
    $(".user").html(currentuser)
    

// if(Object.keys(json).length == 0 || !(localStorage.getItem("order"))){
//     console.log("enete thre asdc")
//     purchase = json;

// }

    $(".pur-badge").html(purchaselength)
    var item = JSON.parse(localStorage.getItem("item"))
    $.each( item, function( key, value ) {
        console.log(value)
        const card = cardcreation(value.id,value.name,value.price)
        $("#dynamic-row").append(card)


    });
    
    $(".add").click(function(){
        let num =$(this).prev(".quans")
        let resulte = parseInt(num.text()) + 1
        num.html(resulte)
    })
    $(".sub").click(function(){
        let num =$(this).next(".quans")
        let resulte = parseInt(num.text()) - 1
        if(resulte >0)
        num.html(resulte)
    })
    $(".filter").click(function(){
        $(".inside").find(".active").removeClass("active")
        $(this).addClass("active")
        let category = $(this).attr("id")
        $("#dynamic-row").html("")
        if(category == "break"){
            $.each( item, function( key, value ) {
                if(value.category == "Breakfast"){

                    const card = cardcreation(value.id,value.name,value.price)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else if(category == "lunch"){
            $.each( item, function( key, value ) {
                if(value.category == "Lunch"){

                    const card = cardcreation(value.id,value.name,value.price)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else if(category == "dinner"){
            $.each( item, function( key, value ) {
                if(value.category == "Dinner"){

                    const card = cardcreation(value.id,value.name,value.price)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else{
            $.each( item, function( key, value ) {

                    const card = cardcreation(value.id,value.name,value.price)
                    $("#dynamic-row").append(card)
            });

        }
        $(".cart").click(function(){
            let item = $(this).prevAll("h5").html();
            let id = $(this).prevAll("h2").html();
            let price = $(this).prevAll("p").html();
            price = price.replace("$"," ")
            let quan = $(this).prevAll("div").find("span").html();
            purchase[id] = [item, quan , parseInt(price),parseInt(price)*parseInt(quan)]
            $(".pur-badge").html(Object.keys(purchase).length)
            // var json = localStorage.getItem("order",JSON.stringify(purchase))
            localStorage.setItem("order",JSON.stringify(purchase))

        })
        $(".add").click(function(){
            let num =$(this).prev(".quans")
            let resulte = parseInt(num.text()) + 1
            num.html(resulte)
        })
        $(".sub").click(function(){
            let num =$(this).next(".quans")
            let resulte = parseInt(num.text()) - 1
            if(resulte >0)
            num.html(resulte)
        })
        
    })
    $(".cart").click(function(){
        $(".added").removeAttr("style")
        setTimeout(function(){$(".added").css("display","none")},1000)
        console.log($(this).prevAll("h5").html());
        console.log($(this).prevAll("div").find("span").html());
        let item = $(this).prevAll("h5").html();
        let id = $(this).prevAll("h2").html();
        let price = $(this).prevAll("p").html();
        price = price.replace("$"," ")
        let quan = $(this).prevAll("div").find("span").html();
        console.log(purchase)
        purchase[id] = [item, quan ,parseInt(price), parseInt(price)*parseInt(quan)]
        $(".pur-badge").html(Object.keys(purchase).length)
        localStorage.setItem("order",JSON.stringify(purchase))
    })
    
});
