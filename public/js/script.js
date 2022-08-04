const endPoint = `https://cac-dds-7.herokuapp.com/`;
const endPoint_local = `http://127.0.0.1:8000/`;

function myFunction() {
  location.href = "/atdandamento.html"
}

function iniciarAtendimento() {
  location.href = "/iniciaratendimento.html"
}

function encerrarAtendimento() {
  location.href = "/atendimento.html"
}
function atualizarAatendimentoJS() {
/*  

  const endPoint = 'https://central-atendimento-cliente.herokuapp.com/api';
  const route = '/atendimento/queue_next';


  const initDetails = {
    method: 'get',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    mode: "cors"
  }

  fetch((endPoint + route), initDetails)
    .then(response => {
      document.getElementById("senhaAtual").innerHTML = `${response.numero_atendimento}${response.sufixo_atendimento}`;

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      console.log(response.headers.get("Content-Type"));
      return response.json();
    }
    ).then(myJson => {
      document.getElementById("senhaAtual").innerHTML = `${myJson.numero_atendimento}-${myJson.sufixo_atendimento}`;
      console.log(JSON.stringify(myJson));
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
*/    
}

/*function fila() {
  const primeiraFila = document.getElementById("primeiroFila");
  primeiraFila.innerHTML = `
        <tr>
        <th class="tabela-1">SENHAS ANTERIORES</th>
        <th class="tabela-1"onclick="callNext()">GUICHÊ</strong></th>
        <tr>
        </tr>`

  const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/queue/next`
  fetch(uri).then(r => r.json().then(r => {
    r.forEach(r1 => {

      primeiraFila.innerHTML += `
        <th class="tabela-1">${r1.numero_atendimento}${r1.sufixo_atendimento}</th>` + `<th class="tabela-2">${r1.numero_atendimento}</th>
        </tr>`

    });
  }))
}*/

function callNext() {
  const url = endPoint_local + `api/atendimentos/queue/already_called/`

  last_atendimento = 0;

  fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify({})
    })
    .then(r => r.json().then(r => {
      if (r.success) {
        if (last_atendimento == r.r.id_atendimento) {} else {

          console.log("r.r[0].id_atendimento: " + r.r[0].id_atendimento);
/*
          last_atendimento = r.r.id_atendimento;
          call = document.getElementById("senhaAtual");
          call.innerHTML = "";

          call.innerHTML += `<a id="senhaAtual" class="senhaTelao">${r.r.numero_atendimento}-${r.r.sufixo_atendimento}</a>`  
*/   
        }
      }   
    }))
  }


function teste() {
        const url =  endPoint_local + `api/atendimentos/queue/already_called/`

  const primeiraFila = document.getElementById("primeiroFila");
  primeiraFila.innerHTML = `
        <tr>
        <th class="tabela-1">SENHAS ANTERIORES</th>
        <th class="tabela-1"onclick="callNext()">GUICHÊ</strong></th>
        <tr>
        </tr>`


  fetch(url).then(r => r.json().then(r => {

    document.getElementById("senhaAtual").innerHTML = `${r.r.slice(-1)[0].numero_atendimento} - ${r.r.slice(-1)[0].sufixo_atendimento}`;

    document.getElementById("guicheAtual").innerHTML = `${r.r.slice(-1)[0].user_desk}`;

      primeiraFila.innerHTML +=
        //1°
        `<th class="tabela-1">${r.r.slice(-4)[2].numero_atendimento} - ${r.r.slice(-4)[2].sufixo_atendimento}</th>` + 
        `<th class="tabela-2">${r.r.slice(-4)[2].user_desk}</th> </tr>`
        +//2°
        `<th class="tabela-1">${r.r.slice(-4)[1].numero_atendimento} - ${r.r.slice(-4)[1].sufixo_atendimento}</th>` + 
        `<th class="tabela-2">${r.r.slice(-4)[1].user_desk}</th> </tr>`
        +//3°
        `<th class="tabela-1">${r.r.slice(-4)[0].numero_atendimento} - ${r.r.slice(-4)[0].sufixo_atendimento}</th>` + 
        `<th class="tabela-2">${r.r.slice(-4)[0].user_desk}</th> </tr>`

  }));

/*                  
  fetch(url)
    .then(r =>r.json().then(r =>{
                if(r.success){
                  //console.log(r.r);
                  r.forEach(r1 => {
                    console.log(r1);
                  });
                   r.r.forEach(r1 => {
                        primeiraFila.innerHTML += `<li class="list-group-item"> Senha:  ${r1.numero_atendimento}${r1.sufixo_atendimento}</li>`
                    });
                }else{
                    console.log("falha -> " + r.r[0]);
                }
        })
    )
*/                    
}

function diaHora() {
  data = document.getElementById("data")

  now = new Date
  document.write("Hoje é " + now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear())

  data = now
}

function time() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  document.getElementById('hora').innerHTML = h + ":" + m;

  let data = new Date();
  let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  console.log(dataFormatada);
  document.getElementById("data").innerHTML = dataFormatada



}