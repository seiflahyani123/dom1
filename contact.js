
var Plus = document.querySelectorAll('.btnPlus')
var Moins = document.querySelectorAll('.btnMoins')
var heart =document.querySelectorAll('.fa-heart')
var xmark= document.querySelectorAll('.fa-circle-xmark')

for(let i = 0; i < Plus.length; i ++){
    Plus[i].addEventListener('click',function(){
        Plus[i].previousElementSibling.innerText++  
        sommeTotal()
    })
}
for(let i = 0; i<Moins.length; i++){
    Moins[i].addEventListener('click',function(){
        if (Moins[i].nextElementSibling.innerText > 0) {
            Moins[i].nextElementSibling.innerText--  
            sommeTotal()
            
        }
    })
}
for(let i = 0; i < heart.length; i ++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('saif')
    })
}
for (let i = 0; i < xmark.length; i++) {
    xmark[i].addEventListener('click',function(){
        xmark[i].parentElement.parentElement.remove()
        sommeTotal()
    })
}


function sommeTotal () {
    var prix = document.querySelectorAll('.card-text')
    console.log(prix)
    var nombre = document.querySelectorAll('.ad')
    console.log(nombre)
    var total = document.querySelector('#total')
    console.log(total)

    var sum = 0
    for (let i = 0; i < prix.length; i++) {
            sum=sum + prix[i].innerText*nombre[i].innerText
    

}

total.innerText = sum
}





// for (let i = 0; i < heart.length; i++) {
//     heart[i].addEventListener('click',function(){
//         heart[i].parentElement.remove()
//     })
// }
// for (let i = 0; index <xmark .length; index++) {
//     xmark[i].addEventListener('click',function(){
//         xmark[i].classList.toggle('saif')
//     })
// }











