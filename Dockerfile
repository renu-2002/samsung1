FROM ubuntu:latest
COPY package.json .
RUN npm install
COPY index.js .
CMD ["node", "index.js"]
