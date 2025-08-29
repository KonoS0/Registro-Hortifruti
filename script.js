document.addEventListener('DOMContentLoaded', () => {
    const produtoInput = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const medidaSelect = document.getElementById('medida');
    const adicionarBtn = document.getElementById('adicionar-btn');
    const verTabelaBtn = document.getElementById('ver-tabela-btn');
    const produtosList = document.getElementById('produtos-list');

    // Dados dos produtos
    const produtos = {
        legumes: ["Abóbora Italiana KG",
                "Abóbora Jacaré KG",
                "Abóbora Maranhão KG",
                "Abóbora Menina KG",
                "Abóbora Moranga KG",
                "Abóbora Moranga Japonesa KG",
                "Abobrinha Jacarezinho Redonda KG",
                "Alho Granel KG",
                "Batata Asterix KG",
                "Batata Baroa KG",
                "Batata Bolinha KG",
                "Batata Doce Branca KG",
                "Batata Doce Roxa KG",
                "Batata Inglesa KG",
                "Berinjela KG",
                "Beterraba KG",
                "Cara/Inhame KG",
                "Cebola Amarela KG",
                "Cebola Roxa KG",
                "Cenoura Vermelha KG",
                "Chuchu KG",
                "Couve Flor UN",
                "Gengibre KG",
                "Mandioca KG",
                "Pepino KG",
                "Pepino Japones KG",
                "Pimentão Amarelo/Vermelho KG",
                "Pimentão Verde KG",
                "Tomate Italiano KG",
                "Tomate Longa Vida KG",
            ],
        frutas: ["Abacate Avocado KG",
                "Abacate KG",
                "Abacaxi UN",
                "Ameixa Importada KG",
                "Ameixa Nacional KG",
                "Banana Caturra KG",
                "Banana Maçã KG",
                "Banana Ouro KG",
                "Banana Prata KG",
                "Banana da Terra KG",
                "Caja Manga KG",
                "Caqui Fuiu KG",
                "Caqui Rama Forte KG",
                "Carambola KG",
                "Coco Seco KG",
                "Goiaba Vermelha KG",
                "Kiwi Importado KG",
                "Kiwi Nacional KG",
                "Laranja Bahia KG",
                "Laranja Lima KG",
                "Laranja Pera Rio KG",
                "Limão KG",
                "Maçã Argentina/Chilena KG",
                "Maçã Gran Smith KG",
                "Maçã Nacional Gala KG",
                "Maçã Nacional Fuji KG",
                "Maçã Pink Lady KG",
                "Mamão Formosa KG",
                "Mamão Havai KG",
                "Manga Espada KG",
                "Manga Palmer KG",
                "Manga Rosa KG",
                "Manga Tomy KG",
                "Maracujá Azedo KG",
                "Melancia Baby KG",
                "Melancia KG",
                "Melancia Pingo Doce KG",
                "Melão Amarelo KG",
                "Melão Andino KG",
                "Melão Dino KG",
                "Melão Orange KG",
                "Melão Pele de Sapo KG",
                "Melão Rey KG",
                "Mexerica Carioca KG",
                "Mexerica Murcote KG",
                "Mexerica Ponkan KG",
                "Nectarina Nacional KG",
                "Nectarina Importada KG",
                "Pêra D'anjou KG",
                "Pêra Forelles KG",
                "Pêra Importada KG",
                "Pêra KG",
                "Pêra Portuguesa KG",
                "Pera Williams KG",
                "Pêssego Importado KG",
                "Pêssego Nacional KG",
                "Pitaia KG"
            ],
        verduras:["Repolho Roxo KG",
                "Repolho Verde KG",
            ]
    };

    // Preencher a datalist com os produtos
    function preencherProdutos() {
        produtosList.innerHTML = '';
        const categorias = Object.keys(produtos);
        categorias.forEach(categoria => {
            produtos[categoria].forEach(produto => {
                const option = document.createElement('option');
                option.value = produto;
                produtosList.appendChild(option);
            });
        });
    }

    preencherProdutos();

    // Função para salvar os dados no Local Storage
    function salvarDados(dados) {
        localStorage.setItem('registrosPerdas', JSON.stringify(dados));
    }

    // Função para carregar os dados do Local Storage
    function carregarDados() {
        const dadosSalvos = localStorage.getItem('registrosPerdas');
        return dadosSalvos ? JSON.parse(dadosSalvos) : {};
    }

    adicionarBtn.addEventListener('click', () => {
        const produto = produtoInput.value.trim();
        const quantidade = parseFloat(quantidadeInput.value);
        const medida = medidaSelect.value;

        if (!produto || quantidade <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        let registros = carregarDados();
        // Cria uma chave única para o produto e a medida
        const chave = `${produto}-${medida}`;

        // Lógica para associar a imagem ao produto específico
        let imagem = null;
        if (produto === "Abóbora Italiana KG") {
            imagem = 'abobora-italiana-barcode.png';
        }
        else if(produto === "Abóbora Jacaré KG"){
            imagem = 'abobora-jacare-barcode.png';
        }
        else if(produto === "Abóbora Maranhão KG"){
            imagem = 'abobora-maranhao-barcode.png';
        }
        else if(produto === "Abóbora Menina KG"){
            imagem = 'abobora-menina-barcode.png';
        }
        else if(produto === "Abóbora Moranga KG"){
            imagem = 'abobora-moranga-barcode.png';
        }
        else if(produto === "Abóbora Moranga Japonesa KG"){
            imagem = 'abobora-moranga-japonesa-barcode.png';
        }
        else if(produto === "Abobrinha Jacarezinho Redonda KG"){
            imagem = 'abobrinha-jacarezinho-redonda-barcode.png';
        }
        else if(produto === "Alho Granel KG"){
            imagem = 'alho-granel-barcode.png';
        }
        else if(produto === "Batata Asterix KG"){
            imagem = 'batata-asterix-barcode.png';
        }
        else if(produto === "Batata Baroa KG"){
            imagem = 'batata-baroa-barcode.png';
        }
        else if(produto === "Batata Bolinha KG"){
            imagem = 'batata-bolinha-barcode.png';
        }
        else if(produto === "Batata Doce Branca KG"){
            imagem = 'batata-doce-branca-barcode.png';
        }
        else if(produto === "Batata Doce Roxa KG"){
            imagem = 'batata-doce-roxa-barcode.png';
        }
        else if(produto === "Batata Inglesa KG"){
            imagem = 'batata-inglesa-barcode.png';
        }
        else if(produto === "Berinjela KG"){
            imagem = 'berinjela-barcode.png';
        }
        else if(produto === "Beterraba KG"){
            imagem = 'beterraba-barcode.png';
        }
        else if(produto === "Cara/Inhame KG"){
            imagem = 'cara-inhame-barcode.png';
        }
        else if(produto === "Cebola Amarela KG"){
            imagem = 'cebola-amarela-barcode.png';
        }
        else if(produto === "Cebola Roxa KG"){
            imagem = 'cebola-roxa-barcode.png';
        }
        else if(produto === "Cenoura Vermelha KG"){
            imagem = 'cenoura-vermelha-barcode.png';
        }
        else if(produto === "Chuchu KG"){
            imagem = 'chuchu-barcode.png';
        }
        else if(produto === "Couve Flor UN"){
            imagem = 'couve-flor-barcode.png';
        }
        else if(produto === "Gengibre KG"){
            imagem = 'gengibre-barcode.png';
        }
        else if(produto === "Mandioca KG"){
            imagem = 'mandioca-barcode.png';
        }
        else if(produto === "Pepino KG"){
            imagem = 'pepino-barcode.png';
        }
        else if(produto === "Pepino Japones KG"){
            imagem = 'pepino-japones-barcode.png';
        }
        else if(produto === "Pimentão Amarelo/Vermelho KG"){
            imagem = 'pimentao-colorido-barcode.png';
        }
        else if(produto === "Pimentão Verde KG"){
            imagem = 'pimentao-verde-barcode.png';
        }
        else if(produto === "Tomate Italiano KG"){
            imagem = 'tomate-italiano-barcode.png';
        }
        else if(produto === "Tomate Longa Vida KG"){
            imagem = 'tomate-longa-vida-barcode.png';
        }
        else if(produto === "Abacate Avocado KG"){
            imagem = 'abacate-avocado.png';
        }
        else if(produto === "Abacate KG"){
            imagem = 'abacate-barcode.png';
        }
        else if(produto === "Abacaxi UN"){
            imagem = 'abacaxi-barcode.png';
        }
        else if(produto === "Ameixa Importada KG"){
            imagem = 'ameixa-importada-barcode.png';
        }
        else if(produto === "Ameixa Nacional KG"){
            imagem = 'ameixa-nacional-barcode.png';
        }
        else if(produto === "Banana Caturra KG"){
            imagem = 'banana-caturra-barcode.png';
        }
        else if(produto === "Banana Maçã KG"){
            imagem = 'banana-maca-barcode.png';
        }
        else if(produto === "Banana Ouro KG"){
            imagem = 'banana-ouro-barcode.png';
        }
        else if(produto === "Banana Prata KG"){
            imagem = 'banana-prata-barcode.png';
        }
        else if(produto === "Banana da Terra KG"){
            imagem = 'banana-da-terra-barcode.png';
        }
        else if(produto === "Caja Manga KG"){
            imagem = 'caja-manga-barcode.png';
        }
        else if(produto === "Caqui Fuiu KG"){
            imagem = 'caqui-fuiu-barcode.png';
        }
        else if(produto === "Caqui Rama Forte KG"){
            imagem = 'caqui-rama-forte-barcode.png';
        }
        else if(produto === "Carambola KG"){
            imagem = 'carambola-barcode.png';
        }
        else if(produto === "Coco Seco KG"){
            imagem = 'coco-seco-barcode.png';
        }
        else if(produto === "Goiaba Vermelha KG"){
            imagem = 'goiaba-vermelha-barcode.png';
        }
        else if(produto === "Kiwi Importado KG"){
            imagem = 'kiwi-importado-barcode.png';
        }
        else if(produto === "Kiwi Nacional KG"){
            imagem = 'kiwi-nacional-barcode.png';
        }
        else if(produto === "Laranja Bahia KG"){
            imagem = 'laranja-bahia-barcode.png';
        }
        else if(produto === "Laranja Lima KG"){
            imagem = 'laranja-lima-barcode.png';
        }
        else if(produto === "Laranja Pera Rio KG"){
            imagem = 'laranja-pera-rio-barcode.png';
        }
        else if(produto === "Limão KG"){
            imagem = 'limao-barcode.png';
        }
        else if(produto === "Maçã Argentina/Chilena KG"){
            imagem = 'maca-argentina-barcode.png';
        }
        else if(produto === "Maçã Gran Smith KG"){
            imagem = 'maca-gran-smith-barcode.png';
        }
        else if(produto === "Maçã Nacional Gala KG"){
            imagem = 'maca-gala-barcode.png';
        }
        else if(produto === "Maçã Nacional Fuji KG"){
            imagem = 'maca-nacional-fuji-barcode.png';
        }
        else if(produto === "Maçã Pink Lady KG"){
            imagem = 'maca-pink-lady-barcode.png';
        }
        else if(produto === "Mamão Formosa KG"){
            imagem = 'mamao-formosa-barcode.png';
        }
        else if(produto === "Mamão Havai KG"){
            imagem = 'mamao-havai-barcode.png';
        }
        else if(produto === "Manga Espada KG"){
            imagem = 'manga-espada-barcode.png';
        }
        else if(produto === "Manga Palmer KG"){
            imagem = 'manga-palmer-barcode.png';
        }
        else if(produto === "Manga Rosa KG"){
            imagem = 'manga-rosa-barcode.png';
        }
        else if(produto === "Manga Tomy KG"){
            imagem = 'manga-tomy-barcode.png';
        }
        else if(produto === "Maracujá Azedo KG"){
            imagem = 'maracuja-azedo-barcode.png';
        }
        else if(produto === "Melancia Baby KG"){
            imagem = 'melancia-baby.png';
        }
        else if(produto === "Melancia KG"){
            imagem = 'melancia-barcode.png';
        }
        else if(produto === "Melancia Pingo Doce KG"){
            imagem = 'melancia-pingo-doce.png';
        }
        else if(produto === "Melão Amarelo KG"){
            imagem = 'melao-amarelo-barcode.png';
        }
        else if(produto === "Melão Andino KG"){
            imagem = 'melao-andino-barcode.png';
        }
        else if(produto === "Melão Dino KG"){
            imagem = 'melao-dino-barcode.png';
        }
        else if(produto === "Melão Orange KG"){
            imagem = 'melao-orange-barcode.png';
        }
        else if(produto === "Melão Pele de Sapo KG"){
            imagem = 'melao-pele-de-sapo-barcode.png';
        }
        else if(produto === "Melão Rey KG"){
            imagem = 'melao-rey-barcode.png';
        }
        else if(produto === "Mexerica Carioca KG"){
            imagem = 'mexerica-carioca-barcode.png';
        }
        else if(produto === "Mexerica Murcote KG"){
            imagem = 'mexerica-murcote-barcode.png';
        }
        else if(produto === "Mexerica Ponkan KG"){
            imagem = 'mexerica-ponkan-barcode.png';
        }
        else if(produto === "Nectarina Nacional KG"){
            imagem = 'nectarina-nacional-barcode.png';
        }
        else if(produto === "Nectarina Importada KG"){
            imagem = 'nectarina-importada-barcode.png';
        }
        else if(produto === "Pêra D'anjou KG"){
            imagem = 'pera-danjou-barcode.png';
        }
        else if(produto === "Pêra Forelles KG"){
            imagem = 'pera-forelles-barcode.png';
        }
        else if(produto === "Pêra Importada KG"){
            imagem = 'pera-importada-barcode.png';
        }
        else if(produto === "Pêra KG"){
            imagem = 'pera-barcode.png';
        }
        else if(produto === "Pêra Portuguesa KG"){
            imagem = 'pera-portuguesa-barcode.png';
        }
        else if(produto === "Pera Williams KG"){
            imagem = 'pera-williams-barcode.png';
        }
        else if(produto === "Pêssego Importado KG"){
            imagem = 'pessego-importado-barcode.png';
        }
        else if(produto === "Pêssego Nacional KG"){
            imagem = 'pessego-nacional-barcode.png';
        }
        else if(produto === "Pitaia KG"){
            imagem = 'pitaia-barcode.png';
        }
        else if(produto === "Repolho Roxo KG"){
            imagem = 'repolho-roxo-barcode.png';
        }
        else if(produto === "Repolho Verde KG"){
            imagem = 'repolho-verde-barcode.png';
        }
        else {
            imagem = null; // Imagem padrão se o produto não tiver uma específica
        }

        // Verifica se o produto já existe e soma a quantidade
        if (registros[chave]) {
            registros[chave].quantidade += quantidade;
        } else {
            registros[chave] = {
                produto: produto,
                quantidade: quantidade,
                medida: medida,
                imagem: imagem
            };
        }

        salvarDados(registros);
        alert('Dados adicionados com sucesso!');
        produtoInput.value = '';
        quantidadeInput.value = '1';
    });

    verTabelaBtn.addEventListener('click', () => {
        window.location.href = 'tabela.html';
    });
});

