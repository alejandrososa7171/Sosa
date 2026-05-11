function comprar() {
    const msg = document.getElementById("mensagem");
    const confirmou = confirm("Confirmar aquisição com Alejandro Sosa no valor de R$ 171,00?");
    
    if (confirmou) {
        msg.innerText = "SISTEMA: ACESSO LIBERADO.";
        msg.style.color = "#ffffff";
    } else {
        msg.innerText = "SISTEMA: OPERAÇÃO CANCELADA.";
        msg.style.color = "#444";
    }
}
 