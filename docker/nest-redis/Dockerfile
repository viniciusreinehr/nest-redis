FROM node:14

WORKDIR /nest-redis/app

COPY . /nest-redis/app

RUN chown -R node:node /nest-redis/app

USER node

RUN yarn

CMD [ "yarn", "start:dev", "nest-redis" ]
