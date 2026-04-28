FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN echo "legacy-peer-deps=true" > .npmrc

RUN npm ci --prefer-offline --no-audit || npm install --legacy-peer-deps --prefer-offline --no-audit

COPY . .

RUN npm run build
RUN npm prune --production

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
