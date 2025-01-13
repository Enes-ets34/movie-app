FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --ignore-optional

COPY . .

RUN yarn build

CMD ["yarn", "preview"]
