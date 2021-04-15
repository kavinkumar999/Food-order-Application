var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)


function addtable(code,item,quantity,category, price,total){
    const table = `
    <tr id="${code}">
        <td >${code}</td>
        <td >${item}</td>
        <td>${category}</td>
        <td>${quantity}</td>
        <td class="price">${price}</td>
        <td>${total}</td>
    </tr>
    `
    return table

}

$(document).ready(function(){
    let item = JSON.parse(localStorage.getItem("item"))
    $(".stock").html("")
    let total = 0

    $.each(item,function(key,value){
        console.log(value)
        const table = addtable(key,value.name, value.quantity, value.category, value.price , parseInt(value.quantity)*parseInt(value.price))
        $(".stock").append(table)
        total = total + parseInt(value.quantity)*parseInt(value.price)


    })
    $("#totalstock").html(total)
})