document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador");


    contadores.forEach(contador => {
        contador.innerText = "0"
        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText;
            const incremento = alvo / 2000;

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento);
                setTimeout(atualizarContador, 20);

            } else {
                contador.innerText = alvo
            }
        };
        atualizarContador();
    })
})