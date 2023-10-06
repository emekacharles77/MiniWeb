let table=document.querySelector("table")
let total=document.querySelector(".total h3 span")
var remove=document.getElementsByClassName("remove_button")
var totalprice=document.querySelector(".total h1 span")


let items=JSON.parse(localStorage.getItem("myitems"))
let revArr=items.reverse()
let qty=0
total.textContent=revArr.length;

let values=revArr.map(element => {
    return`
    <tr class="row">
    <td><img src=${element.img} alt=""></td>
    <td>${element.name}</td>
    <td class="price">${element.price}</td>
    <td style="display:none" class="id">${element.id}</td>
    <td><input type="number" id="quan" value="1"></td>
    <td><button class="remove_button" id="${element.id}">Remove</button></td>
    </tr>`
})

            
table.innerHTML=`
<tr>
    <th>PRODUCT IMAGE</th>
    <th>PRODUCT NAME</th>
    <th>PRODUCT PRICE</th>
    <th>QUANTITY</th>
    <th>ACTION</th>
</tr>
 ${values.join("")}`


                const individualrow=table.querySelectorAll('.row')
                individualrow.forEach((row, i)=>{
                    const input=row.querySelector('input')
                    
                    input.addEventListener("change", ()=>{
                        var totalitems=0
                        if(input.value<1){
                            input.value=1
                        }
                        var all=input.parentElement.parentElement.parentElement;
                        var allinputs=all.querySelectorAll('input')
                        allinputs.forEach((item, i)=>{
                            totalitems=totalitems+Number(item.value)
                        })
                        total.textContent=totalitems
                        updatePrice()
                    })
                })

                


                const row=document.querySelectorAll(".row")
                function updatePrice(){
                    var amt=0
                    row.forEach((row, i)=>{
                        var quantity=row.querySelector("#quan").value
                        var price=row.querySelector(".price").textContent.slice(3, row.length)
                        // var price=row.querySelector(".price").textContent
                    function re(price){
                        return parseFloat(price.replace(/,/g, ''));
                    }
                           amt=amt + Number(re(price))*Number(quantity)
                           totalprice.textContent="$"+(amt/1000).toLocaleString()
                    })
                }
                updatePrice()
            

// for(var i=0; i<remove.length; i++){
//     var cancel=remove[i]
//     cancel.addEventListener("click", (e)=>{
//        var cancel=e.target
//      var item=cancel.parentElement.parentElement.remove()
//      const remove=item.querySelector(row)
//      const position=row-Number(id)
//        localStorage.removeItem(i)
//     const id=document.querySelector(".id").textContent;
//     let items=JSON.parse(localStorage.getItem("myitems"));
//     const id2=localStorage.length-position

//     function deleteObjectByKey(id){
//     const updatedCart=items.filter(item => item.id !==id);
//     localStorage.setItem("myitems", JSON.stringify(updatedCart));
//     //    total.textContent=revArr.length-=1
//     }
//     deleteObjectByKey(id2)
//     })
// }


var remove=document.querySelectorAll(".remove_button")
remove.forEach((item, i)=>{
    item.addEventListener("click", (e)=>{
        const id = e.target.getAttribute("id")

       var localStorageArr=JSON.parse(localStorage.getItem("myitems"))

        const newArr = localStorageArr.filter((item) => {
            return item.id != id
        })

        localStorage.setItem("myitems", JSON.stringify(newArr))
            window.location.reload()
    })
})