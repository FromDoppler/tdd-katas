FROM koalaman/shellcheck-alpine:v0.10.0 AS verify-sh
WORKDIR /src
COPY ./*.sh ./
RUN shellcheck -e SC1091,SC1090 ./*.sh

FROM node:20.17.0 AS restore
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM restore AS verify-format
RUN npm run verify-format

FROM restore AS test
RUN npm test
