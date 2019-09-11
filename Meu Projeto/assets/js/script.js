// função calcula.
function calcula(){
  var produtos = $(".pecorre");
  var total = 0;
  for(var i = 0; i < produtos.length; i++){
      var valor = $(produtos[i]).find(".diaria").text();
      valor = textoParaReal(valor);
      var quantidade = $(produtos[i]).find(".dias")[0].value;
      var subTotal = valor * quantidade;
  $(produtos[i]).find(".subtotal").text(realParaTexto(subTotal));
  total += subTotal;
  }
  $("#total").text(realParaTexto(total));
  console.log(subTotal);
}

function textoParaReal(texto) {
  var textoLimpo = texto.replace("R$ ", "");
  textoLimpo = textoLimpo.replace(".", "");
  textoLimpo = textoLimpo.replace(",", ".");

  return parseFloat(textoLimpo);
}

function realParaTexto(valorReal){
  var texto = ""+valorReal;
  var textoVetor = [];
  textoVetor = texto.split(".");
  if(!textoVetor[1]){
      textoVetor[1] = "00";
  }else{
      textoVetor[1] = textoVetor[1].substring(0, 2);
  }
   if(textoVetor[1].length == 1){
       textoVetor[1] += "0";
   }
  var formatado = formataMilhar(textoVetor[0]);
  var textoCompleto = "R$ "+formatado+","+textoVetor[1];
  return textoCompleto;
}


function formataMilhar(valor){
  var textoReverso = valor.split("").reverse().join("");
  var textoFormatado = ""; 
  for(var i = 0; i < textoReverso.length; i++){
      if(i%3 == 0 && i != 0){
          textoFormatado += "."+textoReverso[i];
      }else{
          textoFormatado += textoReverso[i];
      }
  }
  return textoFormatado.split("").reverse().join("");
  
}

calcula();
$(".dias").change(function(){
  calcula();
});

// funçao muda logo

function mudalogo(tipo){
    if(tipo == 1){
        arquivo = "assets/img/philips2.jpg";
    }
    if(tipo == 2){
        arquivo = "assets/img/positivo.png";
        
    } 
    document.getElementById("logo").src = arquivo;
}
    function mudalogo2(tipo){
    if(tipo == 1){
        arquivo = "assets/img/samsung22.jpg";
    }
    if(tipo == 2){
        arquivo = "assets/img/samsung.jpg";
        
    }
    document.getElementById("logo2").src = arquivo;
}
    function mudalogo3(tipo){
        if(tipo == 1){
            arquivo = "assets/img/cce2.jpg";
        }
        if(tipo == 2){
            arquivo = "assets/img/images.jpg";
        }
        document.getElementById("logo3").src = arquivo;
    }
    function mudalogo4(tipo){
        if(tipo == 1){
            arquivo = "assets/img/asus2.jpg";
        }
        if(tipo == 2){
            arquivo = "assets/img/hp.jpg";
        }
        document.getElementById("logo4").src = arquivo;
    }
    function mudalogo5(tipo){
        if(tipo == 1){
            arquivo = "assets/img/hp2.jpg";
        }
        if(tipo == 2){
            arquivo = "assets/img/cce.png";
        }
        document.getElementById("logo5").src = arquivo;
    }
    function mudalogo6(tipo){
        if(tipo == 1){
            arquivo = "assets/img/dell2.jpg";
        }
        if(tipo == 2){
            arquivo = "assets/img/p.jpg";
        }
        document.getElementById("logo6").src = arquivo;
    }
    function mudalogo7(tipo){
        if(tipo == 1){
            arquivo = "assets/img/sim+.jpg";
        }
        if(tipo == 2){
            arquivo = "assets/img/asus.jpg";
        }
        document.getElementById("logo7").src = arquivo;
    }






// função Ocultar

function Ocultar() {
    document.getElementById('aparece').style.display = 'block';
 }

//$(".bekaps").hide();
 //var aparece = $(".bekaps");
 //var click = $(".oculta");
// click = false;
 //aparece = false;
 //if(click == true){
 //    aparece = true;
// }





