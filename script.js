const produtos = [
    { 
        id: 1,
        nome: "Camiseta",
        preco: 25.99,
        categoria: "Vestuário",
        popularidade: 3,
        estoque: 20
    },
    { 
        id: 2,
        nome: "Calça Jeans",
        preco: 49.99,
        categoria: "Vestuário",
        popularidade: 7,
        estoque: 15
    },
    { 
        id: 3,
        nome: "Tênis",
        preco: 79.99,
        categoria: "Calçados",
        popularidade: 10,
        estoque: 2
    },
    { 
        id: 4,
        nome: "Relógio",
        preco: 99.99,
        categoria: "Acessórios",
        popularidade: 2,
        estoque: 5
    },
    { 
        id: 5,
        nome: "Mochila",
        preco: 39.99,
        categoria: "Acessórios",
        popularidade: 1,
        estoque: 24
    },
    { 
        id: 6,
        nome: "Jaqueta",
        preco: 89.99,
        categoria: "Vestuário",
        popularidade: 4,
        estoque: 12
    },
    { 
        id: 7,
        nome: "Óculos de Sol",
        preco: 29.99,
        categoria: "Acessórios",
        popularidade: 5,
        estoque: 15
    }
];

let tbody = document.querySelector('.tbody')

function renderList(){
    tbody.innerHTML = ''

    produtos.sort((a, b) => a.id - b.id)

    for(let i = 0; i<produtos.length; i++){
        let tr = document.createElement('tr')
        tr.innerHTML +=    `<th scope="row">${produtos[i].id}</th>
                            <td>${produtos[i].nome}</td>
                            <td>${produtos[i].preco}</td>
                            <td>${produtos[i].categoria}</td>
                            <td>${produtos[i].popularidade}</td>
                            <td>${produtos[i].estoque}</td>
                            <td><button onclick="updateProduct(${i})" type="button" class="btn btn-warning">Update</button></td>
                            <td><button onclick="deleteProduct(${i})" type="button" class="btn btn-danger">Delete</button></td>`
                            tbody.appendChild(tr)
    }
}

renderList()

function openModal(){
    let modal = document.querySelector('.modal')
    let style = modal.style.display
    if(style === 'block'){
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
}

function closeModal(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none'
}

function pushProduct(){
    let id = parseInt(document.querySelector('.id').value);
    let nome = document.querySelector('.nome').value;
    let preco = parseFloat(document.querySelector('.preco').value);
    let categoria = document.querySelector('.categoria').value;
    let popularidade = parseInt(document.querySelector('.popularidade').value);
    let estoque = parseInt(document.querySelector('.estoque').value);

    let existeProduto = produtos.findIndex(produto => produto.id === id);

    if(isNaN(id) || id <= 0) {
        alert("Por favor, insira um ID válido maior que zero.");
        return;
    }

    if(nome.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if(isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um preço válido maior que zero.");
        return;
    }

    if(categoria.trim() === "") {
        alert("Por favor, insira uma categoria válida.");
        return;
    }

    if(isNaN(popularidade) || popularidade < 0) {
        alert("Por favor, insira uma popularidade válida não negativa.");
        return;
    }

    if(isNaN(estoque) || estoque < 0) {
        alert("Por favor, insira um valor de estoque válido não negativo.");
        return;
    }

    if(existeProduto !== -1){
        produtos[existeProduto] = {
            id: id,
            nome: nome,
            preco: preco,
            categoria: categoria,
            popularidade: popularidade,
            estoque: estoque
        }
    } else {  
        produtos.push(createProduct());
    }
    
    closeModal();
    renderList();
    clearModalFields();
}

function clearModalFields(){
    document.querySelector('.id').value = ''
    document.querySelector('.nome').value = ''
    document.querySelector('.preco').value = ''
    document.querySelector('.categoria').value = ''
    document.querySelector('.popularidade').value = ''
    document.querySelector('.estoque').value = ''
}

function createProduct(){
    let id = document.querySelector('.id').value
    let nome = document.querySelector('.nome').value
    let preco = document.querySelector('.preco').value
    let categoria = document.querySelector('.categoria').value
    let popularidade = document.querySelector('.popularidade').value
    let estoque = document.querySelector('.estoque').value

    return { id, nome, preco, categoria, popularidade, estoque }
}

function updateProduct(id){
    document.querySelector('.id').value = produtos[id].id
    document.querySelector('.nome').value = produtos[id].nome
    document.querySelector('.preco').value = produtos[id].preco
    document.querySelector('.categoria').value = produtos[id].categoria
    document.querySelector('.popularidade').value = produtos[id].popularidade
    document.querySelector('.estoque').value = produtos[id].estoque
    openModal()
}

function deleteProduct(id) {
    if (confirm("Tem certeza de que deseja excluir este produto?")) {
        produtos.splice(id, 1)
        renderList()
    }
}



// function updateProduct(id){
//     let id = document.querySelector('.id').value
//     let nome = document.querySelector('.nome').value
//     let preco = document.querySelector('.preco').value
//     let categoria = document.querySelector('.categoria').value
//     let popularidade = document.querySelector('.popularidade').value
//     let estoque = document.querySelector('.estoque').value
//     openModal()

//     let existeProduto = produtos.findIndex((produto) => produto.id === id)

//     if(existeProduto !== -1){
//         produtos[id] = {
//             id,
//             nome,
//             preco,
//             categoria,
//             popularidade,
//             estoque
//         }
//     } else {
//         produtos.push(createProduct())
//     }

// }