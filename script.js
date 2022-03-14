const fetchConselho = () => {
    const requisicao = fetch(`https://api.adviceslip.com/advice`)
        .then(response =>{
            return response.json();
        }).then(jsonBody => {
            document.getElementById("conselho_id").innerHTML = jsonBody.slip.id;
            document.getElementById("conselho_frase").innerHTML = jsonBody.slip.advice;
            console.log(jsonBody.slip.id)
        })
};
fetchConselho();