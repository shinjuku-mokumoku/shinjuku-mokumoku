FROM node:8-alpine

# install entrykit
ENV ENTRYKIT_VERSION 0.4.0
RUN apk add --no-cache --virtual build-dependencies curl tar \
  && curl -SLo entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && tar xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && apk del --purge build-dependencies \
  && mv entrykit /bin/entrykit \
  && chmod +x /bin/entrykit \
  && entrykit --symlink

WORKDIR /app
VOLUME /app/node_modules

ENTRYPOINT [ \
  "prehook", "npm install", "--" \
  ]
