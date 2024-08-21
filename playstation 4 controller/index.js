

document.addEventListener('DOMContentLoaded', ()=> {
    const purple =document.getElementById('purplemode');
    const pink=document.getElementById('pinkmode');
    const blue=document.getElementById('bluemode');
    const black=document.getElementById('blackmode');
    const animate= document.getElementById('animate');
    const ssLink =document.getElementById('mode-ss');

    const controller= document.getElementById('controller');
    const hideEm= document.getElementById('hideThis');
    const hideE= document.getElementById('hideThi');
    const hide= document.getElementById('hideTh');
     const des= document.getElementById('des');
   
    
    function modeSwitching(mode)
    {
     ssLink.setAttribute('href', `css/${mode}-mode.css`);
    // relaoding animations
    animate.setAttribute('href', ``);
    animate.offsetWidth;
    animate.setAttribute('href',`css/animations.css` )
  
    }
    function flipCard(flip)
    {
        if(des.style.display==='none')
        {
       hideEm.style.display='none';
       hideE.style.display='none';
       hide.style.display='none';
       des.style.display='block';
        }
    else{

        hideEm.style.display='block';
        hideE.style.display='block';
        hide.style.display='block';
        des.style.display='none';
    }
        
} 
    
    controller.addEventListener('click', () => flipCard('controller'));
    purple.addEventListener('click',()=> modeSwitching('purple'));
    pink.addEventListener('click',()=> modeSwitching('pink'));
    blue.addEventListener('click',()=> modeSwitching('blue'));
    black.addEventListener('click',()=> modeSwitching('black'));
 
  
  
   
});