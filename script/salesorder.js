var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)


function addtable(saleno,code,item,user,quantity,price){
    const table = `
    <tr id="${code}">
        <td >${saleno}</td>
        <td >${code}</td>
        <td >${item}</td>
        <td>${user}</td>
        <td>${quantity}</td>
        <td class="price">${price}</td>

    </tr>
    `
    return table

}


$(document).ready(function(){
    var salesorder = JSON.parse(localStorage.getItem("saleorder"))
    $(".sales").html("")
    let total = 0
    
    if(Object.keys(salesorder).length != 0){
        $.each(salesorder,function(key,value){
            value.forEach(element => {
                const table = addtable(key,element.id,element.item,element.customer,element.quantity,element.price)
                $(".sales").append(table)
                total = total + parseInt(element.price)
            });
            
    
        })
        $("#totalsales").html(total)

    }
    $(".filter").click(function(){
        let total = 0
        let saleorder = JSON.parse(localStorage.getItem("saleorder"))

        let item = JSON.parse(localStorage.getItem("item"))

        $(".inside").find(".active").removeClass("active")
        $(this).addClass("active")
        let category = $(this).attr("id")
        $(".sales").html("")
        if(category == "break"){
            $.each(salesorder,function(key,value){
                
                value.forEach(element => {
                    if(item[element.id].category == "Breakfast")
                    {
                        const table = addtable(key,element.id,element.item,element.customer,element.quantity,element.price)
                        $(".sales").append(table)
                        total = total + parseInt(element.price)
                    }
                    
                });
                
        
            })
        }
        else if(category == "lunch"){
            $.each(salesorder,function(key,value){
                
                value.forEach(element => {
                    if(item[element.id].category == "Lunch")
                    {
                        const table = addtable(key,element.id,element.item,element.customer,element.quantity,element.price)
                        $(".sales").append(table)
                        total = total + parseInt(element.price)
                    }
                    
                });
                
        
            })
        }
        else if(category == "dinner"){
            $.each(salesorder,function(key,value){
                
                value.forEach(element => {
                    if(item[element.id].category == "Dinner")
                    {
                        const table = addtable(key,element.id,element.item,element.customer,element.quantity,element.price)
                        $(".sales").append(table)
                        total = total + parseInt(element.price)
                    }
                    
                });
                
        
            })
        }
        else{
            $.each(salesorder,function(key,value){
                value.forEach(element => {
                    const table = addtable(key,element.id,element.item,element.customer,element.quantity,element.price)
                    $(".sales").append(table)
                    total = total + parseInt(element.price)
                });
                
        
            })

        }
        $("#totalsales").html(total)
        
    })

})