import {User} from "./model.js";
import {Item} from "./model.js";
import {order} from "./model.js";

var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)


function cardcreation(id,name,price,quantity){
    const card =`
        <div class="card align-item" style="width: 18rem;" id="row-">
            <img class="card-img-top" src="../assest/2.jpg" alt="Card image cap">
            <div class="card-body">
                <h2 style="display: none;">${id}</h2>
                <span class="float-right "><i class="fa fa-edit edit "data-toggle="modal" data-target="#edit"></i></span>
                <h5 class="card-title">${name}</h5>
                <p class="card-text">$<span>${price}</span></p>
                <div class="cal d-flex justify-content-center">
                    <i class="fa fa-industry sub"></i>
                    <span class="quans ml-2">${quantity}</span>
                </div>
            </div>
            <hr>
            <a class="btn btn-danger dbutton float-right mt-3" data-toggle="modal" data-target="#deletemessage"><i class="fas fa-delete"></i> Delete</a>

        </div>
        `
        return card
}

$(document).ready(function(){
    var item = JSON.parse(localStorage.getItem("item"))
    $.each( item, function( key, value ) {
        console.log(value)
        const card = cardcreation(value.id,value.name,value.price,value.quantity)
        $("#dynamic-row").append(card)


    });
    $(".filter").click(function(){
        let item = JSON.parse(localStorage.getItem("item"))

        $(".inside").find(".active").removeClass("active")
        $(this).addClass("active")
        let category = $(this).attr("id")
        $("#dynamic-row").html("")
        if(category == "break"){
            $.each( item, function( key, value ) {
                if(value.category == "Breakfast"){

                    const card = cardcreation(value.id,value.name,value.price,value.quantity)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else if(category == "lunch"){
            $.each( item, function( key, value ) {
                if(value.category == "Lunch"){

                    const card = cardcreation(value.id,value.name,value.price,value.quantity)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else if(category == "dinner"){
            $.each( item, function( key, value ) {
                if(value.category == "Dinner"){

                    const card = cardcreation(value.id,value.name,value.price,value.quantity)
                    $("#dynamic-row").append(card)
                }
            });
        }
        else{
            $.each( item, function( key, value ) {

                    const card = cardcreation(value.id,value.name,value.price,value.quantity)
                    $("#dynamic-row").append(card)
            });

        }
    })
    $(".edit").click(function(){
        $('#save').removeAttr("data-dismiss","modal");  

        $("#itemcode").val($(this).parent().siblings()[0].innerText)
        $("#itemname").val($(this).parent().siblings()[1].innerText)
        $("#quantity").val($(this).parent().siblings()[3].lastElementChild.innerText)
        $("#price").val($(this).parent().siblings()[2].lastElementChild.innerText)

        var currentitem = $(this).parent().siblings()[1] 
        var currenquan = $(this).parent().siblings()[3].lastElementChild 
        var currenprice = $(this).parent().siblings()[2].lastElementChild
        
        $("#save").click(function(){

            let itemcode = $("#itemcode").val()
            let changename = $("#itemname").val()
            let changequan = $("#quantity").val()
            let changeprice = $("#price").val()


            if(changename === ""){
                $("#itemname").addClass("is-invalid")
    
            }
            else{
                $("#itemname").removeClass("is-invalid")
    
    
            }
            if(isNaN(changequan) || changequan <= 0){
                $("#quantity").addClass("is-invalid")
            }
            else{
                $("#quantity").removeClass("is-invalid")
            }
            if(isNaN(changeprice) || changeprice <= 0){
                $("#price").addClass("is-invalid")
            }
            else{
                $("#price").removeClass("is-invalid")
            }

            if(!isNaN(changeprice) && !isNaN(changequan) && changename !== "")
            {
                currentitem.innerText = changename
                currenquan.innerText = changequan
                currenprice.innerText = changeprice
                let cur = item[itemcode]
                cur.name = changename
                cur.quantity = parseInt(changequan)
                cur.price = parseInt(changeprice)
                item[itemcode] = cur
                localStorage.setItem("item",JSON.stringify(item))
                // item[]
                // $('.updated').toast('show');
                $(".updated").removeAttr("style")
                console.log("trigger inside");
                $('#save').attr("data-dismiss","modal");  


            }
            setTimeout(function(){$(".updated").css("display","none")},3000)


            
            

        })

    })
    $("#save").click(function(){
        // let id = $("#itemcode").val()
        // item[]
        console.log("trigger outside");
    })
 
  
  
    $("#additem").click(function(){
        $('#newitem').removeAttr("data-dismiss","modal");    

        
        // $('.toast').toast('show');let itemcode = $("#itemcode").val()
        let item = JSON.parse(localStorage.getItem("item"))
        let code = 1013
        if(localStorage.getItem("lastindex")){
            code = localStorage.getItem("lastindex")
        }
        localStorage.setItem("lastindex",parseInt(code)+1)
            $("#itemcode1").val(code)
            $("#newitem").click(function () {
            let newname = $("#itemname1").val()
            let newqan = $("#quantity1").val()
            let newprice = $("#price1").val()
            let breakf = $("#break").is(":checked")
            let lunch = $("#lunch").is(":checked")
            let dinner = $("#dinner").is(":checked")
            if(newname === ""){
                $("#itemname1").addClass("is-invalid")

            }
            else{
                $("#itemname1").removeClass("is-invalid")


            }
            if(isNaN(newqan) || newqan <= 0){
                $("#quantity1").addClass("is-invalid")
            }
            else{
                $("#quantity1").removeClass("is-invalid")
            }
            if(isNaN(newprice) || newprice <= 0){
                $("#price1").addClass("is-invalid")
            }
            else{
                $("#price1").removeClass("is-invalid")
            }
            console.log(breakf);
            console.log(lunch);
            console.log(dinner);
            console.log(typeof dinner);
            let category = ""
            if(breakf)
            {
            category = "Breakfast"

            }
            else if(lunch){
            category = "Lunch"


            }
            else{
            category = "Dinner"


            }
            if(!isNaN(newprice) && !isNaN(newqan) && newname !== "")
            {
                item[code] = new Item(code.toString(),newname,parseInt(newqan),category,parseInt(newprice))
                localStorage.setItem("item",JSON.stringify(item))
                $('#newitem').attr("data-dismiss","modal");
                // $('.added').toast('show');
                $(".added").removeAttr("style")
                setTimeout(function(){$(".added").css("display","none")},3000)
                const card = cardcreation(code,newname,newprice,newqan)
                $("#dynamic-row").prepend(card)


            }
            
            
        })
            
        
    })

    $(".dbutton").click(function(){
        var item = JSON.parse(localStorage.getItem("item"))
        let code = $(this).prevAll(".card-body").children()[0].innerText
        $("#deleteitem").click(function(){
            delete item[code]
            localStorage.setItem("item",JSON.stringify(item))
            location.reload()

        })
        

    })
    

})