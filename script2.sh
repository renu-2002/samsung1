# create a directory to work in
mkdir example
cd example

# build an image using the current directory as context, and a Dockerfile passed through stdin
docker build -t sample-app -f- . <<EOF
FROM node:14
COPY package.json .
RUN npm install
COPY connectionStrings.json .
COPY index.js .
CMD ["node", "index.js"]
EOF

docker run -it sample-app node index.js