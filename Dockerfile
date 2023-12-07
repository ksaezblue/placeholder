FROM node:18-alpine AS development

USER node

ENV NODE_OPTIONS=--max_old_space_size=2048

# Create app directory
WORKDIR /usr/src/app

#Copy package and source code
COPY --chown=node:node package*.json ./
COPY --chown=node:node ./src/  ./src/
COPY --chown=node:node ./oas/  ./
COPY --chown=node:node tsconfig*.json ./

RUN npm ci
RUN npm run build

CMD ["node", "dist/main.js"]