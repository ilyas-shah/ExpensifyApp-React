FROM node:latest
RUN npm install
CMD [ "npm start" ]
EXPOSE 3050