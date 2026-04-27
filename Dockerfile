FROM node:22 as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
RUN npm prune --production

FROM node:22

WORKDIR /app

COPY --from=builder server.js ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules