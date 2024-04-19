# Build stage
FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build
RUN npm prune --production

# Production stage
FROM node:18

WORKDIR /usr/src/app

# Make sure package.json is available in the final image
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
