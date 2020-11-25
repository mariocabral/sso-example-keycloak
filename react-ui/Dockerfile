# pull official base image
FROM node:12.18.3-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"


# add app
COPY . ./

# start app
CMD ["yarn", "start"]