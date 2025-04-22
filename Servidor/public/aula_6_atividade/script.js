let numeroAleatorio = Math.floor(Math.random() * 100);
        
    function verificarNumero(){
        let inputUsuario = parseInt(document.getElementById("userInput").value);
        let resultado = document.getElementById("resultado");
        if (isNaN(inputUsuario) || inputUsuario < 0 || inputUsuario > 99) {
            resultado.textContent = "Número inválido!";
            resultado.style.setProperty("background-color", "yellow");
                return;
            }
            
        if (inputUsuario > numeroAleatorio) {
            resultado.textContent = "O número digitado é maior.";
            resultado.style.setProperty("background-color", "red");

        } else if (inputUsuario < numeroAleatorio) {
            resultado.textContent = "O número digitado é menor.";
            resultado.style.setProperty("background-color", "red");

        } else {
            resultado.textContent = "Número igual!";
            resultado.style.setProperty("background-color", "green");
            }
        }