function calcular(){
    var n1 = Number(document.querySelector(".n1").value)
    var n2 = Number(document.querySelector(".n2").value)
    var n3 = Number(document.querySelector(".n3").value)
    var resultado = document.querySelector(".resultado")
    var calculo = ((n1+n2+n3)/3)

    if(calculo >= 8 ){
        resultado.innerHTML = `A sua media final é ${((n1+n2+n3)/3)}, muito bom!`
    }
    else if(calculo == 10 ){
        resultado.innerHTML = `A sua media final é ${((n1+n2+n3)/3)}, você é Fera!`
    }
    else if(calculo >= 5 ){
        resultado.innerHTML = `A sua media final é ${((n1+n2+n3)/3)}, você pode melhorar mais um pouco...`
    }
    else if(calculo < 5){
    resultado.innerHTML = `A sua media final foi apenas de ${((n1+n2+n3)/3)}, infelizmente você foi reprovado...`
    }
    if(n1 > 10 || n2 > 10 || n3 > 10 ){
        resultado.innerHTML = `Você colocou um número maior que 10 , corrija!`
        }
    if(n1 < 0 || n2 < 0 || n3 < 0 ){
        resultado.innerHTML = `Você colocou um número menor que 0 , corrija!`
        }
    if(n1 == 0 || n2 == 0 || n3 == 0 ){
        resultado.innerHTML = `Você não preencheu todos os campos!`
        }
}

function limpar(){
    
    
    var n1 =Number(document.querySelector(".n1").value = "")
    var n2 =Number(document.querySelector(".n2").value = "")
    var n3 =Number(document.querySelector(".n3").value = "")
    var resultado = document.querySelector(".resultado")

    resultado.innerHTML = ""

}


