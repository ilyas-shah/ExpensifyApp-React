FROM node:latest
RUN npm install
CMD [ "node", "server/server.js" ]
EXPOSE 3050