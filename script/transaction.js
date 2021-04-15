
function addtable(num,id,name,quantity,price,total){
    const table = `
    <tr id="${id}">
        <td ><a class="btn btn-danger remove">Remove</a></td>
        <td style="display: none;">${id}</td>
        <td style="display: none;">${num}</td>
        <td>${name}</td>
        <td><div class="d-flex justify-content-around">
            <i class="fa fa-minus sub"></i><span class="quan">${quantity}</span><i class="fa fa-plus add"></i>
        </div></td>
        <td class="price">${price}</td>
        <td class="total">${total}</td>

    </tr>
    `
    return table

}
var currentuser = localStorage.getItem("currentuser")

$(document).ready(function(){
    var ordered = JSON.parse(localStorage.getItem("order"));
    $(".user").html(currentuser)

    $(".success").css("display","none")


    var totalamount = 0
    var i = 1
    console.log(ordered)
    $.each(ordered,function(key,value){
        const table = addtable(i,key,value[0],value[1],value[2],value[3])
        $(".bill").append(table)
        i +=1
        console.log(key)
        console.log(value)
        totalamount = totalamount + parseInt(value[3])


    })
    $("#bill").html(totalamount)

    $(".sub").click(function(){
        let num =$(this).next()
        let resulte = parseInt(num.text()) - 1
        let price = $(this).parent().parent().siblings()[4]
        let total = $(this).parent().parent().siblings()[5]
        let ans = parseInt(total.innerHTML) - parseInt(price.innerHTML);
        totalamount = totalamount +  parseInt(price.innerHTML)
        let id = $(this).parent().parent().siblings()[1]

        if(resulte >0){
            $("#bill").html(totalamount)
            ordered[id.innerHTML][1] = resulte
            ordered[id.innerHTML][3] = ans 
            console.log(ordered)

            localStorage.setItem("order",JSON.stringify(ordered))

            num.html(resulte)
            total.innerHTML = ans
        }
    })
    $(".add").click(function(){
        let num =$(this).prev()
        let resulte = parseInt(num.text()) + 1
        let price = $(this).parent().parent().siblings()[4]
        let total = $(this).parent().parent().siblings()[5]
        console.log(price)
        console.log(total.innerHTML)
        let ans = parseInt(total.innerHTML) + parseInt(price.innerHTML);
        totalamount = totalamount +  parseInt(price.innerHTML)
        $("#bill").html(totalamount)
        let id = $(this).parent().parent().siblings()[1]
        ordered[id.innerHTML][1] = resulte
        ordered[id.innerHTML][3] = ans 
        console.log(ordered)
        localStorage.setItem("order",JSON.stringify(ordered))




        total.innerHTML = ans
        
        console.log(resulte)
        if(resulte >0)
        num.html(resulte)
    })
    $(".line1").click(function(){
        
        localStorage.setItem("order",JSON.stringify(ordered))
    })
    $(".remove").click(function(){
        let del = $(this).parent().siblings()[0].innerHTML
        console.log(del)
        delete ordered[del]
        console.log(ordered)
        $(this).parent().parent().remove();
        localStorage.setItem("order",JSON.stringify(ordered))

    })
    $(".order").click(function(){
        var item = JSON.parse(localStorage.getItem("item"))
        // console.log(item[ordered[key]])
        // console.log(item[ordered[key]])
        let token = true
        $.each(ordered,function(key,value){
            console.log(item[key])
            console.log(ordered[key][1])
            console.log(item[key].quantity)
            if(ordered[key][1] > item[key].quantity){
                token = false
                console.log("wrong turn")
                $("#"+key).addClass("wrong")
            }
            else{
                $("#"+key).removeClass("wrong")


            }
    
        })
        if(token){
            //success

            $(".success").removeAttr("style")
        }
        else{
            //fail
            $(".success").css("display","none")

        }
        
    })
})