#!/bin/bach

#downloading latest version of node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#create a new directory for the application
DIR="/home/ec2-user/node-mongo"
if [ -d "$DIR" ]; then
  echo "Directory $DIR exists"
else
  echo "Creating directory $DIR"
  mkdir $DIR
fi