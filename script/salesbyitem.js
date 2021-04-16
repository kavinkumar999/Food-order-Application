var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)

function addtable(code,item,quantity,price){
    const table = `
    <tr id="${code}">
        <td >${code}</td>
        <td >${item}</td>
        <td>${quantity}</td>
        <td class="price">${price}</td>

    </tr>
    `
    return table

}

$(document).ready(function(){
    let saleorder = JSON.parse(localStorage.getItem("saleorder"))
    $(".salesitem").html("")
    let total = 0
    let totalquan = 0
    let salebyitem = {}
    
    if( saleorder != null &&Object.keys(saleorder).length != 0){
        $.each(saleorder,function(key,value){

            value.forEach(element => {

                if(salebyitem[element.id]){
                    let valuei = salebyitem[element.id]
                    salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity)+ parseInt(valuei[2]) ,parseInt(element.price)+ parseInt(valuei[3])]

                }
                else{
                    salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity) ,parseInt(element.price)]


                }
                
            });
            
    
        })
        $.each(salebyitem,function(key,value){

            const table = addtable(key, value[1],value[2],value[3])
            $(".salesitem").append(table)
            total = total + parseInt(value[3])
            totalquan = totalquan + parseInt(value[2])

        })
        $("#totalvalue").html(total)
        $("#totalquan").html(totalquan)

    }
    $(".filter").click(function(){
        let saleorder = JSON.parse(localStorage.getItem("saleorder"))
        $(".salesitem").html("")
        let total = 0
        let totalquan = 0
        let salebyitem = {}

        let item = JSON.parse(localStorage.getItem("item"))

        $(".inside").find(".active").removeClass("active")
        $(this).addClass("active")
        let category = $(this).attr("id")
        $(".sales").html("")
        if(category == "break"){
            $.each(saleorder,function(key,value){

                value.forEach(element => {

                    if(item[element.id].category == "Breakfast"){

                        if(salebyitem[element.id]){
                            let valuei = salebyitem[element.id]
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity)+ parseInt(valuei[2]) ,parseInt(element.price)+ parseInt(valuei[3])]
        
                        }
                        else{
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity) ,parseInt(element.price)]
        
                        }

                    } 
                });
                
        
            })
        }
        else if(category == "lunch"){
            $.each(saleorder,function(key,value){

                value.forEach(element => {

                    if(item[element.id].category == "Lunch"){

                        if(salebyitem[element.id]){
                            let valuei = salebyitem[element.id]
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity)+ parseInt(valuei[2]) ,parseInt(element.price)+ parseInt(valuei[3])]
        
                        }
                        else{
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity) ,parseInt(element.price)]
        
                        }

                    } 
                });
                
        
            })
        }
        else if(category == "dinner"){
            $.each(saleorder,function(key,value){

                value.forEach(element => {

                    if(item[element.id].category == "Dinner"){

                        if(salebyitem[element.id]){
                            let valuei = salebyitem[element.id]
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity)+ parseInt(valuei[2]) ,parseInt(element.price)+ parseInt(valuei[3])]
        
                        }
                        else{
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity) ,parseInt(element.price)]
        
                        }

                    } 
                });
                
        
            })
        }
        else{
            $.each(saleorder,function(key,value){

                value.forEach(element => {


                        if(salebyitem[element.id]){
                            let valuei = salebyitem[element.id]
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity)+ parseInt(valuei[2]) ,parseInt(element.price)+ parseInt(valuei[3])]
        
                        }
                        else{
                            salebyitem[element.id] = [element.id,element.item,parseInt(element.quantity) ,parseInt(element.price)]
        
                        }

                });
                
        
            })

        }
        $.each(salebyitem,function(key,value){

            const table = addtable(key, value[1],value[2],value[3])
            $(".salesitem").append(table)
            total = total + parseInt(value[3])
            totalquan = totalquan + parseInt(value[2])

        })
        $("#totalquan").html(totalquan)
        $("#totalvalue").html(total)
        
    })


})