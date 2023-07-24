
let dep=document.getElementById('dep');

// console.log(dep.childNodes[1].nodeName);
// let clon=dep.firstElementChild.cloneNode(false);
// console.log(clon);
// dep.appendChild(clon)
// var headerr=document.getElementById('header');
// var headerBackground=headerr.style.backgroundColor='#407bff';

let headerBackground=document.getElementById("header");

let colrChange= document.getElementsByClassName("colr");
window.onscroll = function() {myScrollFunction()};
let menu=document.getElementById('menuToggle');
let navigationToggle=document.getElementById('navigationID');






 ///////////////////////////////////////////////////  menu Toggle
menu.onclick= function(){
 
  const menuToggle= document.querySelector('.menuToggle');
  const navigation= document.querySelector('.navigation');
  menuToggle.classList.toggle('active');

  navigation.classList.toggle('active');




        // if ($('.navigation').is('active'))
        // {
        //   // $("body").css("overflow", "hidden"); 
        //   $('body').addClass('stop-scrolling')
        // }
        // else
        // {
        //   $("body").css("overflow", "scroll"); 
        // }
            


 }

 
 ///////////////////////////////////////////////////  menu Toggle
 navigationToggle.onclick= function(){
 
  const mToggle= document.querySelector('.menuToggle');
  const nToggle= document.querySelector('.navigation');
  mToggle.classList.toggle('active');

  nToggle.classList.toggle('active');

 


 }


// ================================== on Scroll========================================

function myScrollFunction() {
  "use strict";
 
  // =============================>300

if(document.documentElement.scrollTop>300){

    document.getElementById("AboutUsImage").className = "AboutUsAnimation";
    
  
  }
else{
    document.getElementById("AboutUsImage").className = "";
  }



  // =======================>200


 
if (document.documentElement.scrollTop > 150 ) {
    document.getElementById("header").className = "test";
   
    document.getElementById("nonscroll").style.display='none';
    document.getElementById("onscroll").style.display='inline';
    document.getElementById("menuToggle").style.filter = "brightness(80%)";
    document.getElementById('arow').style.display='inline';

     
    
    


    if(window.innerWidth>800){
    
      
      for(let item=0;item<colrChange.length;item++){
      colrChange[item].style.color="whitesmoke";
      // colrChange[item].style.color="#3967ca";
      
    }
    }
   
      
     }
   
      
     

      
     else {
      document.getElementById("header").className = "";

     

   
        for(let item=0;item<colrChange.length;item++){
          colrChange[item].style.color="#407bff";
          
        }
    
      document.getElementById("nonscroll").style.display='inline';
      document.getElementById("onscroll").style.display='none';
      // document.getElementById("menuToggle").style.backgroundImage = "url('Image/menuNonScroll)";
      document.getElementById("menuToggle").style.filter = "brightness(100%)";
      document.getElementById('arow').style.display='none';

    

     
      
    }


  }

  let gouparrow=document.getElementById("GoUp");

  gouparrow.onclick= function(){
    // (X position , Y position)
    window.scrollTo(0,0);
  }









