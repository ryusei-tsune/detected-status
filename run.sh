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
  U=$(id -u) G=$(id -g) docker-compose -f docker-compose.gce-prod.yml up -d
elif test "$1" = "down-prod"; then
  docker-compose -f docker-compose.gce-prod.yml down
elif test "$1" = "logs-prod"; then
  docker-compose -f docker-compose.gce-prod.yml logs -f

elif test "$1" = "up-local"; then
  U=$(id -u) G=$(id -g) docker-compose -f docker-compose.gce-local.yml up -d
elif test "$1" = "down-local"; then
  docker-compose -f docker-compose.gce-local.yml down
elif test "$1" = "logs-local"; then
  docker-compose -f docker-compose.gce-local.yml logs -f

else
  echo "Usage"
  echo "bash run.sh up"
  echo "bash run.sh sh"
  echo "bash run.sh down"
  echo "bash run.sh logs"
  echo "bash run.sh up-prod"
  echo "bash run.sh down-prod"
  echo "bash run.sh logs-prod"
  echo "bash run.sh up-local"
  echo "bash run.sh down-local"
  echo "bash run.sh logs-local"
fi
