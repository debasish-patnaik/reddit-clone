#!/bin/bash

echo What should the version be?
read VERSION

docker build -t lightyagami/lireddit:$VERSION .
docker push lightyagami/lireddit:$VERSION
ssh root@139.59.4.22 -i ~/.ssh/digital_ocean "docker pull lightyagami/lireddit:$VERSION && docker tag lightyagami/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"