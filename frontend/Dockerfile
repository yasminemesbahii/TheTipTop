FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --save --legacy-peer-deps
COPY . /usr/src/app
EXPOSE 4100
CMD ["npm", "start"]
