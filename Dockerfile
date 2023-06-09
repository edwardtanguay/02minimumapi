FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5300

CMD ["npm", "start"]