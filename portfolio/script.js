let expertise = document.getElementById('expertise');
// let array = [E,x,p,e,r,t,i,s,e];
const show = ()=>{ setTimeout(()=>{
expertise.innerText= 'Expertise';
},2000)};

show();

const a = document.getElementById('showImg');
console.log(a)
const showImg = ()=> { setTimeout(()=>{
    a.style.width = '80%';
    },2000)};
    
    showImg();
console.log('Happy')