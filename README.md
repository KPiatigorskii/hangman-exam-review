# Projeto de exemplo

Este é um projeto de exemplo que usa o Docker Compose para executar uma aplicação web com o servidor Nginx.

## Como executar o projeto

Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o comando docker-compose up --build para construir a imagem e iniciar o container.
4. Acesse a aplicação em <http://localhost:8080/> no navegador.

## Estrutura do projeto

O projeto consiste em um arquivo `index.html`, um arquivo `style.css`, um arquivo `app.js`, um arquivo `words.js` e um diretório assets com imagens. Esses arquivos e diretórios são copiados para o diretório `/usr/share/nginx/html` dentro do container Nginx.

## Como funciona

O Docker Compose é usado para orquestrar a construção e execução do container Nginx e definir as portas que devem ser expostas. O Dockerfile é usado para criar a imagem do container Nginx e definir as instruções para copiar os arquivos da aplicação para o diretório correto dentro do container.

## Problemas conhecidos

Se as imagens não estiverem carregando corretamente, verifique as permissões dos arquivos da aplicação no host do Docker. Certifique-se de que o usuário do Docker tenha permissões de leitura para os arquivos.

## Conclusão

Este é um projeto simples de exemplo que demonstra como usar o Docker Compose e o Dockerfile para criar e executar um container com o servidor Nginx. Sinta-se à vontade para modificá-lo e expandi-lo para atender às suas necessidades.
