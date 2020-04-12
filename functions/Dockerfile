FROM node:10-alpine

# Install entrykit
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
VOLUME /app/functions/node_modules

RUN npm install -g npm

ENTRYPOINT [ \
  "prehook", "npm --prefix functions audit fix", "--", \
  "prehook", "npm --prefix functions i", "--" \
  ]
