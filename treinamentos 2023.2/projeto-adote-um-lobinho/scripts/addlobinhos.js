const form = document.getElementById('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Recupera os dados do formulário
            const name = document.getElementById('name').value;
            const years = parseInt(document.getElementById('years').value);
            const link = document.getElementById('link').value;
            const description = document.getElementById('description').value;

            // Validação dos dados
            if (!name || name.length < 4 || name.length > 60) {
                alert('O nome do lobinho deve ter entre 4 e 60 caracteres.');
                return;
            }

            if (isNaN(years) || years < 0 || years > 100) {
                alert('A idade do lobinho deve ser um número entre 0 e 100.');
                return;
            }

            if (!link) {
                alert('O link da foto do lobinho não pode ser vazio.');
                return;
            }

            if (!description || description.length < 10 || description.length > 255) {
                alert('A descrição do lobinho deve ter entre 10 e 255 caracteres.');
                return;
            }

            // Cria o objeto JSON com os dados do lobinho
            const wolfData = {
                wolf: {
                    name: name,
                    age: years,
                    image_url: link,
                    description: description,
                    is_for_adoption: true // Flag para adoção
                }
            };

            // Realiza a requisição POST usando fetch
            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(wolfData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                // Lidar com a resposta da API, se necessário
                console.log('Resposta da API:', data);
                // Exibir uma mensagem de sucesso para o usuário
                alert('Lobinho cadastrado com sucesso!');
            })
            .catch(error => {
                // Trata o erro, se ocorrer
                console.error('Erro:', error);
                alert('Ocorreu um erro ao cadastrar o lobinho.');
            });
        });
        