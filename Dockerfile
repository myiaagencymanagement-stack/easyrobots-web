FROM nginx:alpine
# Copiamos todo lo que está en 'src' a la carpeta raíz de Nginx
COPY ./src /usr/share/nginx/html/
# Si necesitas tus assets, css y js, asegúrate de que se copien también
COPY ./assets /usr/share/nginx/html/assets
COPY ./css /usr/share/nginx/html/css
COPY ./js /usr/share/nginx/html/js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
