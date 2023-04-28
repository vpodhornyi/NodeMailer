FROM node:18-alpine
WORKDIR /app
ADD . /app
EXPOSE 8081
EXPOSE 587
CMD ["node", "app.js"]
