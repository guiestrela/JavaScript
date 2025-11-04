function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verificar os dados novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    //res.innerHTML = `Idade calculada: ${idade}`
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homen";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "imagens/crianca-m.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "imagens/jovem-m.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "imagens/adulto-m.png");
      } else {
        //Idoso
        img.setAttribute("src", "imagens/idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "imagens/crianca-f.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "imagens/jovem-f.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "imagens/adulto-f.png");
      } else {
        //Idoso
        img.setAttribute("src", "imagens/idoso-f.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
