FROM node:16.13.1-alpine
WORKDIR /chuoicuahangvai-client
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]