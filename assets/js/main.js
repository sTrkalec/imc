
const form = document.querySelector("form")

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso")
    const inputAltura = event.target.querySelector("#altura")
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        setResultado("Peso Inválido", false) 
        return;
    }

    else if (!altura){
        setResultado("Altura Inválida", false) 
        return;
    }

    else if (peso >= 600 && altura >= 3.0){
        setResultado("Ta tendando trolar o sistema truta?", false) 
        return
    }


    else if (peso >= 598){
        setResultado("Voce é tao pesado que pesou o sistema!", false) 
        return
    }
    else if (altura >= 2.75){
        setResultado("Impossível voce ter essa altura!", false) 
        return
    }
   

    const imc = getImc(peso, altura);
    const nivelImc = getResultImc(imc)
    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;
    
    setResultado(mensagem, true)

});

function getResultImc(imc) {
    const nivel = ["Abaixo do peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    if (imc >= 39.9){
        return nivel[5]
    }
    
    if (imc  >= 34.9){
        return nivel[4]
    }
    
    if (imc  >= 29.9){
        return nivel [3]
    }
    
    if (imc  >= 24.9){
        return nivel [2]
    }
    
    if (imc  >= 18.5){
        return nivel [1]
    }
    
    if (imc < 18.5){
        return nivel [0]
    }
}

function getImc(peso, altura){
    const imc = peso / altura  ** 2;
    return imc.toFixed(2)
    
}

function criaP(className){
    const p = document.createElement('p')    
    p.classList.add(`${className}`)
    return p
}

function setResultado(mensage, isvalid){
    const result = document.querySelector("#resultado");
    result.innerHTML = ""
    const p = criaP("mt-3");
    if (isvalid) {
        p.classList.add("paragrafo-resultado")
    }else{
        p.classList.add("paragrafo-resultado-reprovado")
    }

    p.innerHTML = mensage
    result.appendChild(p)
}