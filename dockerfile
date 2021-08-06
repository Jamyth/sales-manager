FROM nginx:alpine

ARG MERCHANT=default

COPY ./build/dist /usr/share/nginx/html
COPY ./nginx/${MERCHANT}.conf /etc/nginx/conf.d/default.conf