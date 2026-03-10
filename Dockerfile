FROM nginx:alpine

# Copiamos el index.html y otros archivos de la raíz de 'src' a la raíz de Nginx
COPY ./src/index.html /usr/share/nginx/html/
COPY ./src/quienes_temp.html /usr/share/nginx/html/

# Copiamos las carpetas que ahora están dentro de 'src'
COPY ./src/assets /usr/share/nginx/html/assets
COPY ./src/css /usr/share/nginx/html/css
COPY ./src/js /usr/share/nginx/html/js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
