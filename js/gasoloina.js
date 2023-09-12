//dom

const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const button = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//eventos

button.addEventListener('click', calcularGasolina)

//funções

function calcularGasolina(){
    event.preventDefault()

    //
        let valor1 = distancia.value
        let valor2 = rendimento.value
        let valor3 = preco.value
    
    //calculo do valor gasto
    
    let valorFinal = ((valor1/valor2)*valor3).toFixed(2)
    
    resultado.innerHTML = `<h1> O custo total da viagem será de R$${valorFinal}</h1>` 
}