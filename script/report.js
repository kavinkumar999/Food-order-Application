var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)


function addtable(code,item,user,quantity,price){
    const table = `
    <tr id="${code}">
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
    var sales = JSON.parse(localStorage.getItem("purchased"))
    $(".sales").html("")
    let total = 0
    if(sales.length !=0){
        sales.forEach(element => {
            const table = addtable(element.id,element.item,element.customer,element.quantity,element.price)
            $(".sales").append(table)
            total = total + parseInt(element.price)



            
        });
        $("#totalsales").html(total)

    }

})