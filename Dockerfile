FROM nginx:alpine

COPY . /usr/share/nginx/html

# Adiciona o comando 'chmod' para definir as permissões corretas dos arquivos
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
