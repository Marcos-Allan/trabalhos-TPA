let n1 = Number(window.document.querySelector(".n1"))
let n2 = Number(window.document.querySelector(".n2"))

let res =window.document.querySelector("#res")

let soma = window.document.querySelector("#soma")
let subt = window.document.querySelector("#subt")
let divi = window.document.querySelector("#divi")
let mult = window.document.querySelector("#mult")

soma.addEventListener("click", (n1,n2)=>{
    result = Number(n1 + n2)
    console.log(result.value)
    return result
})

subt.addEventListener("click", (n1,n2)=>{
    result =  Number(n1 - n2)
    console.log(result)
    return result
})
divi.addEventListener("click", (n1,n2)=>{
    result =  Number(n1 * n2)
    console.log(result)
    return result
})
mult.addEventListener("click", (n1,n2)=>{
    result =  Number(n1 / n2)
    console.log(result)
    return result
})

