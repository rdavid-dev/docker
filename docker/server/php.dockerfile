FROM php:8.1-fpm-alpine

# Arguments defined in docker-compose.yml
ARG USER
ARG UID

# Set working directory
WORKDIR /var/www/html

# Install dependencies
RUN set -xe \
  && apk add --no-cache \
  c-client \
  ca-certificates \
  freetds \
  freetype \
  gettext \
  gmp \
  icu-libs \
  imap \
  libffi \
  libgmpxx \
  libintl \
  libjpeg-turbo \
  libpng \
  libpq \
  libssh2 \
  libstdc++ \
  libtool \
  libxpm \
  libxslt \
  libzip \
  make \
  tidyhtml \
  tzdata \
  vips \
  yaml

#############################################
### Install and enable PHP extensions
#############################################

# Development dependencies
RUN set -xe \
  && apk add --no-cache --virtual .build-deps \
  autoconf \
  bzip2-dev \
  cmake \
  curl-dev \
  freetds-dev \
  freetype-dev \
  gcc \
  gettext-dev \
  git \
  gmp-dev \
  icu-dev \
  imap-dev \
  krb5-dev \
  libc-dev \
  libjpeg-turbo-dev \
  libpng-dev \
  libssh2-dev \
  libwebp-dev \
  libsodium-dev \
  libxml2-dev \
  libxpm-dev \
  libxslt-dev \
  libzip-dev \
  openssl-dev \
  pcre-dev \
  pkgconf \
  tidyhtml-dev \
  vips-dev \
  yaml-dev \
  zlib-dev

RUN ln -s /usr/bin/php8 /usr/bin/php

# Installing composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN rm -rf composer-setup.php

# Install the Oracle Instant Client
ADD ./server/oracle_client/instantclient-basiclite-linux.x64-19.14.0.0.0dbru.zip /tmp
ADD ./server/oracle_client/instantclient-sdk-linux.x64-19.14.0.0.0dbru.zip /tmp

RUN apk update && apk --no-cache add libaio libnsl libc6-compat\
  && unzip /tmp/instantclient-basiclite-linux.x64-19.14.0.0.0dbru.zip -d /usr/local/ \
  && unzip /tmp/instantclient-sdk-linux.x64-19.14.0.0.0dbru.zip -d /usr/local/ \
  && rm /tmp/instantclient-basiclite-linux.x64-19.14.0.0.0dbru.zip \
  && rm /tmp/instantclient-sdk-linux.x64-19.14.0.0.0dbru.zip \
  && mv /usr/local/instantclient_19_14 /usr/local/instantclient \
  && ln -sf /usr/local/instantclient/libclntsh.so.19.1 /usr/lib/libclntsh.so \
  && ln -sf /usr/local/instantclient/libocci.so.19.1 /usr/lib/libocci.so \
  && ln -s /usr/local/instantclient/libociicus.so /usr/lib/libociicus.so \
  && ln -s /usr/local/instantclient/libnnz19.so /usr/lib/libnnz19.so \
  && ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1 \
  && ln -s /lib/libc.so.6 /usr/lib/libresolv.so.2 \
  && ln -s /lib64/ld-linux-x86-64.so.2 /usr/lib/ld-linux-x86-64.so.2

RUN echo 'instantclient,/usr/local/instantclient/' | pecl install oci8 \
  && docker-php-ext-enable oci8 \
  && docker-php-ext-configure pdo_oci --with-pdo-oci=instantclient,/usr/local/instantclient \
  && docker-php-ext-install pdo_oci

ENV LD_LIBRARY_PATH /usr/local/instantclient

EXPOSE 9000

CMD ["php-fpm"]