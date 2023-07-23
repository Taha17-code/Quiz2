// fetch("https://opentdb.com/api.php?amount=10&category=21")
// .then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data)
// })

import {departments,ItemIndex} from './module.js';

Math.random();
let score=0;
let data;
let qu=0;

let QuestionNumber=document.getElementById("quNumber");
QuestionNumber.innerHTML=qu+1 +"-";
let arr_choices=[]
let chek=[];

let   response;
let MultiChoices=document.getElementsByClassName("multiple");
let depName=document.getElementById('DepName');

let btnn=document.createElement('button');



// window.onload=window.confirm("Quiz finish  ");

let itemStorage= localStorage.getItem('item');







window.onload= async function GetApiData(){
    console.log("item =",itemStorage);



/// -------------------- Check which Department clicked 
   if(itemStorage==0){
    response = await fetch("https://opentdb.com/api.php?amount=20&category=21&type=multiple");
    depName.innerHTML="Sport";
   }
    else if(itemStorage==1){
        response = await fetch("https://opentdb.com/api.php?amount=20&category=19&type=multiple");
    depName.innerHTML="Mathmatics";

   }
   else if(itemStorage==2){
    response = await fetch("https://opentdb.com/api.php?amount=20&category=9&type=multiple");
    depName.innerHTML="Culture";

   }
   else{
    response = await fetch("https://opentdb.com/api.php?amount=20&category=18&type=multiple");
    depName.innerHTML="Computer";

   }

   // ================================================
  
     data =await response.json();


     if(qu>19){
        document.body.innerHTML = "";
        let elh1=document.createElement('h1');
        elh1.innerHTML="Your Score is : "+score+"/200";
      
        btnn.style.backgroundColor="#ff0157";
        btnn.style.padding="10px";
        btnn.style.width="100px";
        btnn.style.height="60px";
        btnn.style.borderRadius="10px";
        btnn.textContent="Back";
        btnn.style.fontSize="30px";
        btnn.style.color="#ffffff";
        btnn.style.cursor="pointer";
        btnn.style.textAlign="center";


        document.body.appendChild(elh1);
        document.body.appendChild(btnn);
        btnn.onclick=function(){
            window.open("index.html","_self","");
            // location.href="index.html";
        }
      
        // btnn.onclick=location.href="index.html";
        
    }

    console.log(data);

    document.querySelector("#question").innerHTML= data.results[qu].question;
  

    //  fill up the the array with elements 
    for(let i=0;i<=2;i++){
        arr_choices.push(data.results[qu].incorrect_answers[i]);
    }

    arr_choices.push(data.results[qu].correct_answer);
     
    console.log(arr_choices)


    // ======put random answers in new list 
    randomChoice();
   // ========= display the list in browser page
    displayAnswers();
    
        
     //==================== check if the answer is correct or not   ===================
     
     for(let p=0;p<MultiChoices.length;p++){
          MultiChoices[p].onclick=function(){
           if(MultiChoices[p].innerHTML==data.results[qu].correct_answer){

            MultiChoices[p].style.backgroundColor ="green";
            qu+=1;
            QuestionNumber.innerHTML=qu+1 +"-";
            score+=10;
            chek=[];
            counter=11;
            /*/ clear interval  عشان العداد لما اجاوب وينتقل للسؤال الثاني دايما العداد يبدا يسرع 
                ف عشان كذا نسوي  كلير ونعيد نسوي سيت مرة ثانية*/
            clearInterval(counterInterval);
            // count.innerHTML=counter;
            GetApiData()
            console.log(MultiChoices[p])
              
           }
        
           else{
            MultiChoices[p].style.backgroundColor ="red";

            qu+=1;
            QuestionNumber.innerHTML=qu+1 +"-";
            chek=[];
            counter=11;
            clearInterval(counterInterval);
            // count.innerHTML=counter;
            GetApiData()
            console.log(MultiChoices[p].innerHTML)
           
           }
       
       }

     
       }
       

    //    counter and Change 
      var counterInterval= setInterval(questionCounter,1000);
      


      function questionCounter(){

        if(counter<=0){
            qu+=1;
            QuestionNumber.innerHTML=qu+1 +"-";
            counter=11;
            chek=[];
            clearInterval(counterInterval);
           return GetApiData();
            // window.location.reload();
          
        }
        else{
            // counter-=1;
            
            count.innerHTML=counter-=1; 
            console.log(counter);
        }
        
    
      
    }
      
      
    }
    console.log(chek)
       
     
       


       




function randomChoice(){
    
    // Add answers randomly to a new list
    var item;
    for(let j=0;j<MultiChoices.length;j++){

        
 
        var item=arr_choices[Math.floor(Math.random()*arr_choices.length)];
        if(!chek.includes(item)){
            chek.push(item);
            arr_choices.splice(arr_choices.indexOf(item),1);
          
        }
    
 
     }
}






function displayAnswers(){
    //  ================ display answers  on page =======================


    for(let p=0;p<MultiChoices.length;p++){
        MultiChoices[p].innerHTML=chek[p];
        MultiChoices[p].style.backgroundColor ="#c6d8ff";
    }
    console.log(chek)
       
     

}





// GetApiData()


let count=document.getElementById("counter");

let counter=11;


   


