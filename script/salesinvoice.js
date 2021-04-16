
var currentuser = localStorage.getItem("currentuser")
$(".user").html(currentuser)


function addtable(code,saleorder,customer,amount,status){
    const table = `
    <tr id="${code}">
        <td >${code}</td>
        <td >${saleorder}</td>
        <td>${customer}</td>
        <td class="price">${amount}</td>
        <td class="price">${status}</td>

    </tr>
    `
    return table

}

$(document).ready(function(){
    let invoice = JSON.parse(localStorage.getItem("invoice"))
    $(".invoicevalue").html("")
    let total = 0
    if(invoice != null && Object.keys(invoice).length !=0){
        $.each(invoice,function(key,value){
            const table = addtable(key,value[0],value[1],value[2],value[3])
            $(".invoicevalue").append(table)
            total = total + parseInt(value[2])
        })
        $("#salesinvoicevalue").html(total)
    }



})