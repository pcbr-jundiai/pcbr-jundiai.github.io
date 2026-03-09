/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// Carregar produtos do JSON e preencher a página
document.addEventListener('DOMContentLoaded', function() {
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            produtos.forEach(produto => {
                const colDiv = document.createElement('div');
                colDiv.className = 'col mb-5';

                let badgeHTML = '';
                if (produto.sale) {
                    badgeHTML = '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>';
                }

                let estrelasHTML = '';
                if (produto.estrelas > 0) {
                    estrelasHTML = '<div class="d-flex justify-content-center small text-warning mb-2">';
                    for (let i = 0; i < produto.estrelas; i++) {
                        estrelasHTML += '<div class="bi-star-fill"></div>';
                    }
                    estrelasHTML += '</div>';
                }

                let precoHTML = produto.preco;
                if (produto.precoAntigo) {
                    precoHTML = `<span class="text-muted text-decoration-line-through">${produto.precoAntigo}</span> ${produto.preco}`;
                }

                colDiv.innerHTML = `
                    <div class="card h-100">
                        ${badgeHTML}
                        <!-- Product image-->
                        <img class="card-img-top" src="${produto.imagem}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${produto.nome}</h5>
                                ${estrelasHTML}
                                <!-- Product price-->
                                ${precoHTML}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${produto.link}">${produto.acao}</a></div>
                        </div>
                    </div>
                `;

                container.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});