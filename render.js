function comprar() {
    const msg = document.getElementById("mensagem");
    const confirmou = confirm("Deseja comprar o Produto Premium da Sosa Cardfy?");
    
    if (confirmou) {
        msg.innerText = "✅ Compra realizada com sucesso!";
        msg.style.color = "#4ade80";
    } else {
        msg.innerText = "❌ Compra cancelada.";
        msg.style.color = "#f87171";
    }
}
