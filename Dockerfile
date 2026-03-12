FROM nginx:alpine

# Copiamos el index.html autocontenido (CSS, JS e imágenes ya incrustados)
COPY ./src/index.html /usr/share/nginx/html/
COPY ./src/funnel.html /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
