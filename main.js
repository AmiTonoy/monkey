// window.addEventListener('keypress',()=>{
//  let x = 'app/both.png';
//  let y = 'app/left.png';
//  let z = 'app/right.png';
// let t = document.querySelector(".image").getAttribute("src")
// let s = document.querySelector(".image");
//  if (t == x){
//     s.setAttribute("src",y)
// }else if(t ==y){
//     s.setAttribute("src",z)
// }else{
//  s.setAttribute("src",x)
// }
// })
let i = 1;
let image = document.querySelector(".image")
window.addEventListener('keypress',()=>{
    i++;
    if(i%2){
        console.log(i%2)
        image.setAttribute("src","app/right.png")
    }else if(i%3){
        image.setAttribute("src","app/left.png")
    }else{
        image.setAttribute("src","app/both.png")
    }
})
