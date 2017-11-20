FROM node:carbon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 3000

CMD ["pm2-dev", "--raw", "process.yml"]