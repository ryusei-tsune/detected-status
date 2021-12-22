#!/bin/bash

if test "$1" = "up"; then
  U=$(id -u) G=$(id -g) docker-compose up -d
elif test "$1" = "sh"; then
  docker-compose exec node sh
elif test "$1" = "down"; then
  docker-compose down
elif test "$1" = "logs"; then
  docker-compose logs -f
elif test "$1" = "up-prod"; then
  U=$(id -u) G=$(id -g) docker-compose -f docker-compose.gce.yml up -d
elif test "$1" = "down-prod"; then
  docker-compose -f docker-compose.gce.yml down
elif test "$1" = "logs-prod"; then
  docker-compose -f docker-compose.gce.yml logs -f
else
  echo "Usage"
  echo "bash run.sh up"
  echo "bash run.sh sh"
  echo "bash run.sh down"
  echo "bash run.sh logs"
  echo "bash run.sh up-prod"
  echo "bash run.sh down-prod"
  echo "bash run.sh logs-prod"
fi
