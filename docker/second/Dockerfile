FROM node:14

WORKDIR /second/app

COPY . /second/app

RUN chown -R node:node /second/app

USER node

RUN yarn

CMD [ "yarn", "start:dev", "second" ]
