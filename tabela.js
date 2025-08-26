document.addEventListener('DOMContentLoaded', () => {
    const tabelaCorpo = document.getElementById('tabela-corpo');
    const voltarBtn = document.getElementById('voltar-btn');
    const resetBtn = document.getElementById('reset-btn');
    // Adicionar o novo botão e o checkbox "selecionar todos"
    const excluirBtn = document.getElementById('excluir-btn');
    const selecionarTodosCheckbox = document.getElementById('selecionar-todos');

    // Função para carregar os dados do Local Storage
    function carregarDados() {
        const dadosSalvos = localStorage.getItem('registrosPerdas');
        return dadosSalvos ? JSON.parse(dadosSalvos) : {};
    }

    // Função para salvar os dados no Local Storage
    function salvarDados(dados) {
        localStorage.setItem('registrosPerdas', JSON.stringify(dados));
    }

    // Função para renderizar a tabela
    function renderizarTabela() {
        const registros = carregarDados();
        tabelaCorpo.innerHTML = '';

        if (Object.keys(registros).length === 0) {
            tabelaCorpo.innerHTML = '<tr><td colspan="4">Nenhum registro encontrado.</td></tr>';
            excluirBtn.style.display = 'none'; // Esconde o botão se não houver registros
            selecionarTodosCheckbox.checked = false;
            return;
        }

        excluirBtn.style.display = 'block'; // Mostra o botão se houver registros

        for (const chave in registros) {
            const registro = registros[chave];
            const quantidadeFormatada = parseFloat(registro.quantidade).toFixed(2);
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="checkbox" class="linha-checkbox" data-chave="${chave}"></td>
                <td>${registro.produto}</td>
                <td>${quantidadeFormatada}</td>
                <td>${registro.medida}</td>
            `;
            tabelaCorpo.appendChild(tr);
        }
    }

    // Lógica para selecionar todas as linhas
    selecionarTodosCheckbox.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll('.linha-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = selecionarTodosCheckbox.checked;
        });
    });

    // Evento para o novo botão "Excluir Selecionados"
    excluirBtn.addEventListener('click', () => {
        const checkboxesSelecionados = document.querySelectorAll('.linha-checkbox:checked');
        if (checkboxesSelecionados.length === 0) {
            alert('Por favor, selecione pelo menos uma linha para excluir.');
            return;
        }

        const confirmar = confirm(`Tem certeza que deseja excluir ${checkboxesSelecionados.length} registro(s) de perdas?`);
        
        if (confirmar) {
            let registros = carregarDados();
            checkboxesSelecionados.forEach(checkbox => {
                const chave = checkbox.getAttribute('data-chave');
                delete registros[chave]; // Remove o registro do objeto
            });

            salvarDados(registros); // Salva o objeto atualizado no Local Storage
            renderizarTabela(); // Atualiza a tabela na tela
            alert('Registros excluídos com sucesso!');
        }
    });

    // Evento para o botão de reset
    resetBtn.addEventListener('click', () => {
        const confirmar = confirm("Tem certeza que deseja limpar todos os registros de perdas?");
        if (confirmar) {
            localStorage.removeItem('registrosPerdas');
            renderizarTabela();
            alert("Tabela limpa com sucesso!");
        }
    });

    // Evento para o botão de voltar
    voltarBtn.addEventListener('click', () => {
        window.location.href = 'main.html';
    });

    // Renderiza a tabela ao carregar a página
    renderizarTabela();
});