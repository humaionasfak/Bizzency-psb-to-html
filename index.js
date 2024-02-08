let btn = document.querySelector('#btn')
btn.onclick = function(){
    alert('hello me h2')
}

let button = document.querySelector('#botton')
button.addEventListener('click',function (e3){
   let good = prompt('Number')
   let plus = prompt('Number2')
   good = parseFloat(good)
   plus = parseFloat(plus)
   let total = good + plus

   document.getElementById('demo').innerHTML = total
})