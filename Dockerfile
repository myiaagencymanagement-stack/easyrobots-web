FROM nginx:alpine

COPY ./src/index.html /usr/share/nginx/html/
COPY ./src/funnel.html /usr/share/nginx/html/
COPY ./src/gracias.html /usr/share/nginx/html/
COPY ./src/privacy.html /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
