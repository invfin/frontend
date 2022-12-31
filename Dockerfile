FROM node:latest as build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn

# Bundle app source
COPY . .

FROM node:latest as production

# Create app directory
WORKDIR /app

# Copy built code from build stage
COPY --from=build /app .

EXPOSE 7000
CMD ["yarn", "serve"]
