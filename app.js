

 let celcius = document.getElementById("celcius")
 let farenheit = document.getElementById("farenheit")

const convert = () => {
     let answer = (celcius.value * 9 / 5) + 32
     farenheit.value = answer
 }