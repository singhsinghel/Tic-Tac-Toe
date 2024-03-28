let flag=0;
let body=document.querySelector('body');
let boxes=document.querySelectorAll('.box');
let h1=document.querySelector('h1');
let button=document.querySelector('button');
let oScore=document.querySelector('.zero_score');
let xScore=document.querySelector('.cross_score')
let arr=[];
let zero=[];
let cross=[];
let hor1=['a','b','c'];
let hor2=['d','e','f'];
let hor3=['g','h','i'];
let ver1=['a','d','g'];
let ver2=['b','e','h'];
let ver3=['c','f','i'];
let digo1=['a','e','i'];
let digo2=['c','e','g'];
let winningArrays = [hor1, hor2, hor3, ver1, ver2, ver3, digo1, digo2];
let count=0;
let crossWin=0;
let zeroWin=0;
let oWin=0;
let xWin=0;

function handler() {
  let checked=this.getAttribute('id');

        if(arr.indexOf(checked)==-1){
            arr.push(checked);
            let image=document.createElement('img');

            if(flag==0){
              image.setAttribute('src',"./images/cross.png");
              cross.push(checked);
              flag=1;
              count++;
              h1.innerText="O's turn";
            }
            else if(flag==1){
              image.setAttribute('src',"./images/zero.png");
              zero.push(checked);
              flag=0;
              count++;
              h1.innerText="X's turn";
            }
           image.classList.add('img');
           this.append(image);

           for(let i=0;i<winningArrays.length;i++){
            if(winningArrays[i].every(letter=>zero.includes(letter))){
              glow(winningArrays[i]);
              h1.innerText="🎉Player zero wins🎉";
              oWin++;
              remover();
              setTimeout(reset,1000);
           }
           else if(winningArrays[i].every(letter=>cross.includes(letter))){
             h1.innerText="🎉Player cross wins🎉";
             glow(winningArrays[i]);
             xWin++;
             remover();
             setTimeout(reset,1000);
           }
          else if(count==9&&crossWin==0&&zeroWin==0){
            h1.innerText="Game tied";
              setTimeout(reset,1500);
          }
        }
        }
}

function remover() {
  for(let box of boxes){
    box.removeEventListener('click',handler)
  }
}
function adder(){
  for(let box of boxes){
    box.addEventListener('click',handler)
  }
}
adder();                 // to call the functioin initially

function glow(winningArrays){
    for(let i=0;i<winningArrays.length;i++){
      document.getElementById(winningArrays[i]).classList.add('glow');
      setTimeout(function(){
        document.getElementById(winningArrays[i]).classList.remove('glow');
      },300)
   }
}
button.addEventListener('click',reset);
function reset(){
  arr=[];
  zero=[];
  cross=[];
  count=[];
    crossWin=0;
    zeroWin=0;
    flag=0;
    h1.innerText="Cross' turn";
    let images=document.querySelectorAll('img')
    for(let image of images)
    image.remove();
  oScore.innerText=`O's score: ${oWin}`;
  xScore.innerText=`X's score: ${xWin}`; 
  adder();
}
