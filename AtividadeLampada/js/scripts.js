
let contador = 0;
const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let lampada = document.getElementById("lampada");

  if (contador == 0) {
    //  lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    lampada.src = "img/apagada.jpg";
    lampada.alt = "imagem de lampada acesa";
    btnEnviar.innerHTML = "apagar";
    contador++;
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    lampada.src = "img/acesa.jpg";
    btnEnviar.innerHTML = "acender";
    lampada.alt = "imagem de lampada apagada";
    contador--;
  }
};

const gerarImagem = () => {
  let qutnimage = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  console.log(qutnimage);

  canvas.innerHTML = "";
  for (let i = 1; i <= qutnimage; i++) {
    canvas.innerHTML += `<img class="imagens" id="lampada" src="./img/acesa.jpg" alt="Lâmpada">`;
  }
};
calcular = () => {
  let valorDoPedido = document.getElementById("inValorPedido").value;
  let percentualDeped = document.getElementById("inPercDesc");
  let valordesx = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  switch (true) {
    case valorDoPedido >= 500 && valorDoPedido < 1000:
      percentualDeped.value = 0.5;
      break;
    case valorDoPedido >= 1000 && valorDoPedido < 1500:
      percentualDeped.value = 0.8;
      break;
    case valorDoPedido >= 1500 && valorDoPedido < 2000:
      percentualDeped.value = 1;
      break;
    case valorDoPedido >= 2000:
      percentualDeped.value = 1.5;
      break;
    default:
      break;
  }
  valordesx.value = (percentualDeped.value / 100) * valorDoPedido;
  inValFinal.value = valorDoPedido - valordesx.value;
};

validaForm = () => {
  // dados coletados
  let data = document.getElementById("inData").value;
  let nome = document.getElementById("inCli").value;
  let tel = document.getElementById("inFone").value;
  let email = document.getElementById("inMail").value;
  let noProd = document.getElementById("inProd").value;
  let quant = document.getElementById("inQtd").value;
  let valor = document.getElementById("inVal").value;
  let menssag = document.getElementById("mensagem-erro");
  menssag.innerText = "";
  // validando dados
  data == "" && (menssag.innerHTML += "Data inválida <br>");
  nome == "" && (menssag.innerHTML += "Nome inválido <br>");
  tel == "" && (menssag.innerHTML += "Telefone inválido <br>");
  email == "" && (menssag.innerHTML += "Email inválido <br>");
  noProd == "" && (menssag.innerHTML += "Nome do produto inválido <br>");
  quant == "" && (menssag.innerHTML += "Quantidade inválida <br>");
  quant < 0 && (menssag.innerHTML += "Quantidade negativa<br>");
  valor == "" && (menssag.innerHTML += "Valor inválido <br>");
  valor < 0 && (menssag.innerHTML += "Valor negativo <br>");
  //mostrar | ocultar erro

  menssag.innerText == ""
    ? ((menssag.style.display = "none"), (menssag.innerText = "enviado!"))
    : ((menssag.style.display = "block"), menssag.classList.remove("verde"));

  menssag.innerText == "enviado!" &&
    ((menssag.style.display = "block"),
    (menssag.innerText = "Formulário enviado com sucesso!"),
    (menssag.classList.add("verde")));
};
