#!/bin/bash

aws --endpoint-url=https://storage.yandexcloud.net s3 cp --recursive ./dist/ s3://xn--90abrpkdo9fd.xn--p1ai/$1
