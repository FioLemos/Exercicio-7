function validarFormulario() {
    // Obtém os valores dos campos de entrada
    var numeroA = parseFloat(document.getElementById("CampoA").value);
    var numeroB = parseFloat(document.getElementById("CampoB").value);

    var mensagemValidacao = document.getElementById("mensagemValidacao");

    // Verifica se o número B é maior que o número A
    if (numeroB > numeroA) {
      // Formulário é válido, exibe mensagem positiva
      mensagemValidacao.textContent = "Formulário válido! Número B é maior que o número A.";
      mensagemValidacao.style.color = "green";
    } else {
      // Formulário é inválido, exibe mensagem negativa
      mensagemValidacao.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
      mensagemValidacao.style.color = "red";
    }
  }