# Startup Readme
A boilerplate repo for quick project startups. Just like I like it.

## Get started
1. Download this repository
2. Install Node if not installed already (se below)
5. Run `npm i` in a terminal to install dependencies
6. Run `npm run dev` to start a local web server

## Install dependencies
This you only need to do once on each computer.
1. Install NVM to install Node by running this in a terminal `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`
2. Then install Node by running `nvm install node` and `nvm use node`
3. Make sure the Node you installed has the latest version of NPM by running `npm install npm@latest -g`

## Start working locally
`npm run dev` starts the web server + webpack. Webpack processes Sass + JS. This craft-starter comes ready with [Browser-Sync](http://www.browsersync.io/) – that means that you don't *need* CodeKit.

Go to [localhost:5000](http://localhost:5000/) to work
