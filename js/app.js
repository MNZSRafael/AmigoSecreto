
let amigos = []

function adicionar ()
{
    let amigo = document.getElementById("nome-amigo");
    let listaDeAmigos = document.getElementById ("lista-amigos");

    if (listaDeAmigos.textContent == "")

    {
        listaDeAmigos.textContent = amigo.value;
    }
    else
    {
    listaDeAmigos.textContent = listaDeAmigos.textContent + `, ` + amigo.value;
    }

    amigos.push(amigo.value);
    amigo.value = " ";

}

function sortear()
{
    embaralhar(amigos);
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) 
    { 
        if (i == amigos.length - 1)
        {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + `--> `+ amigos[0] + `<br/>`;
        }
        else
        {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i]+ `--> `+ amigos[i+1] + `<br/>`;
        }
    

    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar()
{
    amigos = [];
    document.getElementById ("lista-amigos").innerHTML = " ";
    document.getElementById("lista-sorteio").innerHTML = " ";
}