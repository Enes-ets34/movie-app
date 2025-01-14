FROM node:20 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:stable-alpine

ENV VITE_PUBLIC_BASE_URL=http://localhost:3000

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
