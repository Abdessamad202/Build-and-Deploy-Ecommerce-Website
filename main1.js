// let Fitems = document.querySelectorAll(".Fitems");
// let Features = document.querySelector(".a");
// let stayhome = document.querySelector(".stayhome");
//     let proSelected = document.querySelector(".shopp .f .pro");
//     let pros = document.querySelectorAll(".shopp .f .models img");
//     pros.forEach(function(pro){
//         pro.addEventListener("click",()=>{
//             proSelected.src = pro.src;
//         // console.log("abdessamad")
//         })
//         })
//         let select = document.querySelector(".select .ss");
//         let t = document.querySelector(".select .ss .ssz");
//         let i = document.querySelector("#b");
//         let options = document.querySelectorAll(".s div");
//         let s= document.querySelector(".s");
//         select.addEventListener("click",function(){
//             if(s.style.display=="block"){
//                 s.style.display="none";            
//                 i.style.transform = " rotate(0deg) ";

//             }else {
//                 s.style.display="block";
//                 i.style.transform = " rotate(180deg) ";


//         }
//     });
//     options.forEach(function(option){
//         option.addEventListener("click",function(){
//             t.textContent = option.textContent;
//             i.style.transform = " rotate(0deg) ";
//             s.style.display = "none";
//         });
//     })
//         // stayhome.style.display = "none";
        
// let notSelected = document.querySelectorAll(".notselc");
// // let Fitems = document.querySelectorAll(".Fitems");
// let styleElement = document.createElement("style");
// let icn =document.querySelector(".bx-shopping-bag");
// // Select the first element with the class "notselc"
// // let firstNotSelected = Fitems[0];
// for(let i=0 ; i<notSelected.length;i++){
//     notSelected[i].addEventListener("mouseover",function(){
//         styleElement.innerHTML=`
//         header nav ul li .notselc::before{
//             content: "${notSelected[i].textContent}";
//             position: absolute;
//             width: 0%;
//             overflow: hidden;
//             text-transform: capitalize;
//             color: rgb(11, 148, 107) ;
//             // padding: 0px 2px;
//             left: 0;
//             transition: 0.5s;
//         }

//         header nav ul li .notselc:hover::before{
//             width:  100%;
//         }
//     `;
    
// document.head.appendChild(styleElement);
// console.log(styleElement);

//     });
//     notSelected[i].addEventListener("mouseout",function(){
//         notSelected[i].style.color = "black";
//     });
    
// icn.addEventListener("mouseout",function(){
//     icn.style.color="black"
// });
// icn.addEventListener("mouseover",function(){
//     icn.style.color="rgb(11, 148, 107)";
// });
// }
// let In = document.querySelectorAll(".in");
// let b1 = document.getElementById("b1");
// let b2 = document.getElementById("b2");
// for(let i = 0 ; i< In.length;i++){
//     In[i].addEventListener("mouseover",function() {
//         if(i==1){
//             b2.style.backgroundColor = "#108074";
//             // b2.style.border = "none";
//             b2.style.transition = "0.5s";
//         }
//         else{
//             b1.style.backgroundColor = "#108074";
//             // b1.style.border = "none";
//             b1.style.transition = "0.5s";
//         }
//     });
//     In[i].addEventListener("mouseout",function() {
//         if(i==1){
//             b2.style.backgroundColor = "transparent";
//             b2.style.border = "1px solid white";
//             b2.style.transition = "0s";
            
//         }
//         else{
//             b1.style.backgroundColor = "transparent";
//             b1.style.border = "1px solid white";
//             b1.style.transition = "0s";
//         }
//     });
// }
// Fitems.forEach(function(Fitem){
//     let name = Fitem.querySelector(".name");
//     Fitem.addEventListener("mouseover",function(){
//         name.style.color = "rgb(11, 148, 107)";
//         Fitem.style.boxShadow = "1px 1px 5px";
//     })
//     Fitem.addEventListener("mouseout",function(){
//         name.style.color = "black";
//         Fitem.style.boxShadow = "none";

//     })
// })

// let shop = document.querySelectorAll('.shopicon');
// let hoverSrc = 'img/icons/shopwhite.png'; // New image path
// shop.forEach(function(specific){
//     let shopIcon = specific.querySelector('img');
//     let originalSrc = shopIcon.src;
//     specific.addEventListener("mouseenter", () => {
//         shopIcon.src = hoverSrc;
//     });
//     specific.addEventListener('mouseleave', () => {
//         shopIcon.src = originalSrc;
//     });
// })
// window.addEventListener("scroll", function(){
//     let header = document.querySelector("header");
//     header.classList.toggle("Sticky", window.scrollY>0);
//     // header.style.transition= "0s";
//     })
// // console.log(proSelected);


document.addEventListener("DOMContentLoaded", function() {
    // Function to setup product selection
    function setupProSelection() {
        let proSelected = document.querySelector(".shopp .f .pro");
        let pros = document.querySelectorAll(".shopp .f .models img");
        pros.forEach(function(pro) {
            pro.addEventListener("click", () => {
                proSelected.src = pro.src;
            });
        });
    }

    // Function to setup dropdown functionality
    function setupDropdown() {
        let select = document.querySelector(".select .ss");
        let t = document.querySelector(".select .ss .ssz");
        let i = document.querySelector("#b");
        let options = document.querySelectorAll(".s div");
        let s = document.querySelector(".s");

        select.addEventListener("click", function() {
            if (s.style.display == "block") {
                s.style.display = "none";
                i.style.transform = "rotate(0deg)";
            } else {
                s.style.display = "block";
                i.style.transform = "rotate(180deg)";
            }
        });

        options.forEach(function(option) {
            option.addEventListener("click", function() {
                t.textContent = option.textContent;
                i.style.transform = "rotate(0deg)";
                s.style.display = "none";
            });
        });
    }

    // Function to setup hover effect for not selected items
    function setupNotSelectedHover() {
        let styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        notSelected.forEach(function(item) {
            item.addEventListener("mouseover", function() {
                styleElement.innerHTML = `
                    header nav ul li .notselc::before {
                        content: "${item.textContent}";
                        position: absolute;
                        width: 0%;
                        overflow: hidden;
                        text-transform: capitalize;
                        color: rgb(11, 148, 107);
                        left: 0;
                        transition: 0.5s;
                    }
                    header nav ul li .notselc:hover::before {
                        width: 100%;
                    }
                `;
            });

            item.addEventListener("mouseout", function() {
                item.style.color = "black";
            });
        });
    }

    // Function to setup shopping bag icon hover effect
    function setupShoppingBagHover() {
        icn.addEventListener("mouseover", function() {
            icn.style.color = "rgb(11, 148, 107)";
        });

        icn.addEventListener("mouseout", function() {
            icn.style.color = "black";
        });
    }

    // Function to setup hover effect for elements with class 'in'
    function setupInHover() {
        In.forEach(function(item, index) {
            item.addEventListener("mouseover", function() {
                if (index == 1) {
                    b2.style.backgroundColor = "#108074";
                    b2.style.transition = "0.5s";
                } else {
                    b1.style.backgroundColor = "#108074";
                    b1.style.transition = "0.5s";
                }
            });

            item.addEventListener("mouseout", function() {
                if (index == 1) {
                    b2.style.backgroundColor = "transparent";
                    b2.style.border = "1px solid white";
                    b2.style.transition = "0s";
                } else {
                    b1.style.backgroundColor = "transparent";
                    b1.style.border = "1px solid white";
                    b1.style.transition = "0s";
                }
            });
        });
    }

    // Function to setup hover effect for Fitems
    function setupFitemsHover() {
        Fitems.forEach(function(Fitem) {
            let name = Fitem.querySelector(".name");
            Fitem.addEventListener("mouseover", function() {
                name.style.color = "rgb(11, 148, 107)";
                Fitem.style.boxShadow = "1px 1px 5px";
            });

            Fitem.addEventListener("mouseout", function() {
                name.style.color = "black";
                Fitem.style.boxShadow = "none";
            });
        });
    }

    // Function to setup shop icon hover effect
    function setupShopIconHover() {
        let hoverSrc = 'img/icons/shopwhite.png';
        shop.forEach(function(specific) {
            let shopIcon = specific.querySelector('img');
            let originalSrc = shopIcon.src;

            specific.addEventListener("mouseenter", () => {
                shopIcon.src = hoverSrc;
            });

            specific.addEventListener("mouseleave", () => {
                shopIcon.src = originalSrc;
            });
        });
    }

    // Function to setup sticky header on scroll
    function setupStickyHeader() {
        window.addEventListener("scroll", function() {
            let header = document.querySelector("header");
            header.classList.toggle("Sticky", window.scrollY > 0);
        });
    }

    // Initialize all the event listeners
    function initialize() {
        setupProSelection();
        setupDropdown();
        setupNotSelectedHover();
        setupShoppingBagHover();
        setupInHover();
        setupFitemsHover();
        setupShopIconHover();
        setupStickyHeader();
    }

    // DOM Elements
    let Fitems = document.querySelectorAll(".Fitems");
    let Features = document.querySelector(".a");
    let stayhome = document.querySelector(".stayhome");
    let notSelected = document.querySelectorAll(".notselc");
    let icn = document.querySelector(".bx-shopping-bag");
    let In = document.querySelectorAll(".in");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let shop = document.querySelectorAll('.shopicon');

    // Call initialize to set up everything
    initialize();
});

