FROM node:22-bullseye AS base_image

WORKDIR /app

COPY package.json ./

FROM base_image AS development_image

COPY backend/package.json ./backend/

RUN npm i

CMD [ "npm", "run", "backend:dev" ]
