FROM node:14

WORKDIR /first/app

COPY . /first/app

RUN chown -R node:node /first/app

USER node

RUN yarn

CMD [ "yarn", "start:dev", "first" ]
