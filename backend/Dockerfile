# Build stage

FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "src/app.js"]


# Production stage
FROM node:18

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3001

USER node

CMD ["node", "src/app.js"]
