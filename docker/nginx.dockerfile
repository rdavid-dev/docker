FROM nginx:latest

ARG USER
ARG UID

ENV UID=${USER}
ENV UID=${UID}

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html