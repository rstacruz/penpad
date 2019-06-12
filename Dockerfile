FROM node:10
RUN mkdir -p /app
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.15.2
WORKDIR /app
