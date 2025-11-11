FROM node:22-bullseye AS base_image

WORKDIR /app

COPY package.json ./

FROM base_image AS development_image

COPY ./frontend/package.json ./frontend/

RUN npm i

CMD [ "npm", "run", "frontend:dev" , "--", "--", "--no-open"]
