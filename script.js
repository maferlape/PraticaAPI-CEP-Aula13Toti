const cep = document.querySelector("#cep")


cep.addEventListener("blur", (evento)=>{
    let cepValue = cep.value.replace("-","")

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options)
    .then(resp => {resp.json()
        .then(data => formData(data))
    })
    .catch(evento => console.log('Error:'+ evento, message))
})

function formData(result){
    for(campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}