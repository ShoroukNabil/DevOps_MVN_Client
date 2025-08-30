FROM nginx:alpine
COPY dist/angularclient /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY config.template.json /usr/share/nginx/html/assets/config.json
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
