let notSelected = document.querySelectorAll(".notselc");
let Fitems = document.querySelectorAll(".Fitems");
let styleElement = document.createElement("style");
let icn =document.querySelector(".bx-shopping-bag");
// Select the first element with the class "notselc"
// let firstNotSelected = Fitems[0];

// // Access a specific child element within this element
// // For example, to find the first element with the class "child-class" within firstNotSelected
// let childElement = firstNotSelected.querySelector(".fprod");

// console.log(childElement);

// let name = document.
for(let i=0 ; i<notSelected.length;i++){
    notSelected[i].addEventListener("mouseover",function(){
        styleElement.innerHTML=`
        header nav ul li .notselc::before{
            content: "${notSelected[i].textContent}";
            position: absolute;
            width: 0%;
            overflow: hidden;
            text-transform: capitalize;
            color: rgb(11, 148, 107) ;
            // padding: 0px 2px;
            left: 0;
            transition: 0.5s;
        }

        header nav ul li .notselc:hover::before{
            width:  100%;
        }
    `;
    
document.head.appendChild(styleElement);
console.log(styleElement);

    });
    notSelected[i].addEventListener("mouseout",function(){
        notSelected[i].style.color = "black";
    });
    
}
icn.addEventListener("mouseout",function(){
    icn.style.color="black";
});
icn.addEventListener("mouseover",function(){
    icn.style.color="rgb(11, 148, 107)";
});
let In = document.querySelectorAll(".in");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
for(let i = 0 ; i< In.length;i++){
    In[i].addEventListener("mouseover",function() {
        if(i==1){
            b2.style.backgroundColor = "#108074";
            // b2.style.border = "none";
            b2.style.transition = "0.5s";
        }
        else{
            b1.style.backgroundColor = "#108074";
            // b1.style.border = "none";
            b1.style.transition = "0.5s";
        }
    });
    In[i].addEventListener("mouseout",function() {
        if(i==1){
            b2.style.backgroundColor = "transparent";
            b2.style.border = "1px solid white";
            b2.style.transition = "0s";
            
        }
        else{
            b1.style.backgroundColor = "transparent";
            b1.style.border = "1px solid white";
            b1.style.transition = "0s";
        }
    });
}
function goToPage() {
    window.location.href = 'productdetails.html';
}
Fitems.forEach(function(Fitem){
    let name = Fitem.querySelector(".name");
    Fitem.addEventListener("mouseover",function(){
        name.style.color = "rgb(11, 148, 107)";
        Fitem.style.boxShadow = "0px 0px 3px";
        Fitem.style.cursor = "pointer";
    })
    Fitem.addEventListener("mouseout",function(){
        name.style.color = "black";
        Fitem.style.boxShadow = "none";

    })
    Fitem.addEventListener("click",goToPage);


})
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY>0);
    // header.style.transition= "0s";
    })
let shop = document.querySelectorAll('.shopicon');
let hoverSrc = 'img/icons/shopwhite.png'; // New image path
shop.forEach(function(specific){
    let shopIcon = specific.querySelector('img');
    let originalSrc = shopIcon.src;
    specific.addEventListener("mouseenter", () => {
        shopIcon.src = hoverSrc;
        // console.log(shopIcon);
    });
    specific.addEventListener('mouseleave', () => {
        shopIcon.src = originalSrc;
    });
})

let button = document.querySelector("button");

