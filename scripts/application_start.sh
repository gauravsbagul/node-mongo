#!/bin/bash

sudo chmod -R 777 /home/ec2-user/node-mongo

#navigate to the directory

cd /home/ec2-user/node-mongo

#add npm to the path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/.nvm.sh" ] && \. "$NVM_DIR/.nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

#install nodemodules
npm install

#start the application
node server/server.js > app.out.log 2> app.err.log < /dev/null &