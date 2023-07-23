
// ==========================try to get index of department 

export let departments=document.getElementsByClassName('deps');
export let ItemIndex;

for(let department=0;department<departments.length;department++){
   console.log(departments[department],department);
  departments[department].onclick=function(){

    ItemIndex=department;
    localStorage.setItem('item', ItemIndex);
    console.log(ItemIndex);

  }
   
  
}
