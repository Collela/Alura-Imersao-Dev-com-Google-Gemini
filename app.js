function search() {
    let section = document.getElementById("resultado-pesquisa");
    let inputSearch = document.getElementById("input-search").value.toLowerCase();  // Converter para minúsculas para comparação

    let results = "";

    for (let datas of colorScheme) {
        if (datas.name.includes(inputSearch) || datas.hex.includes(inputSearch)) {
            results += `
                <div class="item-resultado">
                    <div class="color-box" style="background-color: ${datas.hex};"></div>
                    <div class="color-name">${datas.name.toUpperCase()}</div>
                    <div class="color-hex">${datas.hex}</div>
                    <div class="color-rgb">RGB: ${datas.rgb.join(", ")}</div>
                </div>
            `;

            // Adiciona as variações
            for (let variation of datas.variations) {
                results += `
                    <div class="item-resultado variation">
                        <div class="color-box" style="background-color: ${variation.hex};"></div>
                        <div class="color-name">${variation.name}</div>
                        <div class="color-hex">${variation.hex}</div>
                        <div class="color-rgb">RGB: ${variation.rgb.join(", ")}</div>
                    </div>
                `;
            }
        }
    }

    // Verifica se a pesquisa não encontrou resultados
    if (results === "") {
        results = "<p>Desculpe, não foi encontrado resultado compatível com a pesquisa.</p>";
    }

    section.innerHTML = results;
}
