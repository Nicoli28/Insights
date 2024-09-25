document.addEventListener('DOMContentLoaded', function() {
    // Esconde todas as seções de conteúdo inicialmente
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a primeira aba por padrão
    document.getElementById('chat-livre').style.display = 'block';

    // Adiciona eventos de clique aos links das abas
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Esconde todas as seções de conteúdo
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra a seção de conteúdo correspondente
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).style.display = 'block';
        });
    });

    // Adiciona evento de clique ao botão "Enviar" do Chat Livre
    const chatButton = document.querySelector('.chat-input button');
    chatButton.addEventListener('click', function() {
        // Implemente a lógica para enviar a mensagem para a IA
        // Aqui você pode usar JavaScript para enviar a mensagem para o backend Python
    });

    // Adiciona evento de clique ao botão "Enviar" da Área de Upload
    const uploadButton = document.getElementById('upload-button');
    uploadButton.addEventListener('click', function() {
        const fileInput = document.getElementById('upload-input');
        const file = fileInput.files[0];

        // Implemente a lógica para enviar o arquivo para a IA
        // Aqui você pode usar JavaScript para enviar o arquivo para o backend Python
    });

    // Adiciona evento de clique ao botão "Gerar Proposta"
    const gerarPropostaButton = document.getElementById('gerar-proposta'); 
    gerarPropostaButton.addEventListener('click', function() {
        // Implemente a lógica para gerar a proposta
        // Aqui você pode usar JavaScript para enviar o edital para o backend Python
    });

    // Adiciona evento de envio ao Formulário de Contato
    const contatoForm = document.getElementById('contato-form');
    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtenha os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Implemente a lógica para enviar os dados do formulário
        // Aqui você pode usar JavaScript para enviar os dados para o backend Python
    });
});