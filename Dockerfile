FROM node:10
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install nodemon
COPY . .
CMD npm run dev
EXPOSE 3000