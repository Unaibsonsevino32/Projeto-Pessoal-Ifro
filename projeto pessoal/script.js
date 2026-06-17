const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;

  const mensagem = document.getElementById("mensagem").value;

  if (nome.length < 3) {
    alert("Nome inválido");
    return;
  }

  if (mensagem.length < 10) {
    alert("Mensagem muito curta");
    return;
  }

  alert("Formulário validado com sucesso!");
});
