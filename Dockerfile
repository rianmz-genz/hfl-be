FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma db push --force-reset

EXPOSE 5000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]