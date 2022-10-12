let numeroSecreto = parseInt(Math.random() * 11);
const maximoTentativa = 3;

for (var i = 0; i < maximoTentativa; i++) {
     function Chutar() {
        let resultadoChute = document.getElementById("resultado");
        let chute = parseInt(document.getElementById("valor").value);        

        if (chute == numeroSecreto) {
            resultadoChute.innerHTML = "Acertou! Já pode ajudar a Raven nas suas visões";
        } else if (chute > 10 || chute < 0) {
            alert("Você deve digitar um número de 0 a 10");
            maximoTentativa--;
        } else if (chute > numeroSecreto) {
            resultadoChute.innerHTML = "Tente um número menor";
            maximoTentativa--;
        } else if (chute < numeroSecreto) {
            resultadoChute.innerHTML = "Tente um número maior";
            maximoTentativa--;
        }

            if (maximoTentativa === 0) {
             resultadoChute.innerHTML = "Parece que a Raven precisa de outro assistente, acabaram sua tentativas. O Número secreto era " + numeroSecreto;
            }
    }
}