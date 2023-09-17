let slideimages=document.querySelectorAll(".imagebank");
let buttonright=document.querySelector(".buttonright");
let buttonleft=document.querySelector(".buttonleft");
let dots=document.querySelectorAll(".dot");
let addtocart=document.querySelectorAll(".Add");
let cart=document.querySelector("#carticon")
let cart2=document.querySelectorAll(".div0")[0];
let cart3=document.querySelectorAll(".div0")[1];
let search=document.querySelector(".searchInput");
let search2=document.querySelector(".searchInput2");
let select=document.querySelectorAll("select")[0];
let select2=document.querySelectorAll("select")[1]
let toggle=document.querySelector(".dropdown")
let mobile=document.querySelector(".mobile_div")
const popup=document.querySelector('.popup')
const button=document.querySelector('.btn')
console.log(button)
var counter=0;

buttonright.addEventListener("click", slideright);
function slideright(){
    slideimages[counter].style.animation='buttonright1 0.5s ease-in forwards';
    if(counter >=slideimages.length-1){
        counter=0;
    }else{
        counter++;
    }
    slideimages[counter].style.animation='buttonright2 0.5s ease-in forwards';
    indicator();
}

buttonleft.addEventListener("click", slideleft);
function slideleft(){
    slideimages[counter].style.animation='buttonleft1 0.5s ease-in forwards';
    if(counter==0){
        counter=slideimages.length -1;
    }else{
        counter--;
    }
    slideimages[counter].style.animation='buttonleft2 0.5s ease-in forwards';
    indicator();
}

function autosliding(){
    sliding=setInterval(timer, 3000);
    function timer(){
        slideright();
        indicator();
    }
}
autosliding()


const carouselimage=document.querySelector(".carouselimage");
      carouselimage.addEventListener("mouseover", function(){
        clearInterval(sliding)
      })

      carouselimage.addEventListener("mouseout", autosliding )

      function indicator(){
    for(i=0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active"," ");
    }
    dots[counter].className+='active';
      }

      function switchimage(currentImage){
        currentImage.classList.add('active');
        var imageid=currentImage.getAttribute('attr');
        if(imageid > counter){
            slideimages[counter].style.animation='buttonright1 0.5s ease-in forwards';
            counter=imageid;
            slideimages[counter].style.animation='buttonright2 0.5s ease-in forwards';
        }
        else if(imageid==counter){
            return;
        }
        else{
            slideimages[counter].style.animation='buttonleft1 0.5s ease-in forwards';
            counter=imageid;
            slideimages[counter].style.animation='buttonleft2 0.5s ease-in forwards'; 
        }
        indicator()
        
      }

var arr=[]
var itemcount=0
var itemsArr=[]
var itemid=-1

      addtocart.forEach((items, i)=>{
        items.addEventListener("click", ()=>{
          if(arr.includes(i)){
            // alert("included")
            function open(){
              popup.classList.add('popup-box')
            }
            open()
            return
          }else{
               arr.push(i)
              itemcount++
              cart2.textContent=itemcount
              cart3.textContent=itemcount
              itemid++
          }
          var obj={}
          var itemparent=items.parentElement.parentElement.parentElement
          var itemimg=itemparent.querySelector("img").src
          var itemname=itemparent.querySelector(".name").textContent
          var itemprice=itemparent.querySelector(".localprice").textContent

          // console.log(itemprice)
          obj={
            name:itemname,
            price:itemprice,
            img:itemimg,
            id:itemid
            // img2:itemimg.slice(22, itemimg.length),
          }
          itemsArr.push(obj)
          localStorage.setItem("myitems", JSON.stringify(itemsArr))
          
        })
      })

      button.addEventListener('click', ()=>{
        function close(){
            popup.classList.remove('popup-box')
          }
          close()
    })

      search.addEventListener('input', (e)=>{
        var searchtext=search.value.toLowerCase()
        const items=document.querySelectorAll(".lenovosection, .pixabaysection")
        for(let i=0; i<items.length; i++){
          const list=items[i];
          const text=list.querySelector(".name").textContent.toLowerCase()
          if(text.includes(searchtext)){
            list.style.display='flex';
          }else{
            list.style.display='none'
          }
        }

      })


      search2.addEventListener('input', (e)=>{
        var searchtext=search2.value.toLowerCase()
        const items=document.querySelectorAll(".lenovosection, .pixabaysection")
        for(let i=0; i<items.length; i++){
          const list=items[i];
          const text=list.querySelector(".name").textContent.toLowerCase()
          if(text.includes(searchtext)){
            list.style.display='flex';
          }else{
            list.style.display='none'
          }
        }

      })



      select.addEventListener('change', ()=>{
        var choice=select.value.toLowerCase()
        const items=document.querySelectorAll(".lenovosection, .pixabaysection")
        for(let i=0; i<items.length; i++){
          const list=items[i];
          const text=list.querySelector(".name").textContent.toLowerCase()
          if(text.includes(choice)){
            list.style.display='flex';
          }else{
            list.style.display='none';
          }
        }

      })


      select2.addEventListener('change', ()=>{
        var choice=select2.value.toLowerCase()
        const items=document.querySelectorAll(".lenovosection, .pixabaysection")
        for(let i=0; i<items.length; i++){
          const list=items[i];
          const text=list.querySelector(".name").textContent.toLowerCase()
          if(text.includes(choice)){
            list.style.display='flex';
          }else{
            list.style.display='none';
          }
        }
      }) 


      toggle.addEventListener('click',()=>{
        mobile.classList.toggle("show");
      })
      