#!/bin/bash

# Your script.sh commands here

#Create Dockerfile

echo "FROM ubuntu:latest" > Dockerfile

echo "COPY package.json ." >> Dockerfile
echo "RUN npm install" >> Dockerfile
echo "COPY index.js ." >> Dockerfile

echo "CMD [\"node\", \"index.js\"]" >> Dockerfile