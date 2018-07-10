# Get the latest Alpine Image from https://hub.docker.com/
FROM alpine:latest

LABEL version="1.0"
LABEL description="NGINX running on the Alpine image (5MB)"

RUN mkdir -p /run/nginx

# Grab the latest NGINX apk, remove the apk cache, and allow permissions
RUN echo "http://dl-3.alpinelinux.org/alpine/v3.5/main" >> /etc/apk/repositories && \
    apk add --update nginx=1.14.0-r0 && \
    rm -rf /var/cache/apk/* && \
    chown -R nginx:www-data /var/lib/nginx

# Remove the default NGINX configurations
RUN rm -v /etc/nginx/nginx.conf

# Add our custom configuration file to replace the original one
ADD ./config/nginx.conf /etc/nginx/

# "The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime"
# https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 80 443

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]