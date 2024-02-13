# DM Codex Server

https://www.youtube.com/watch?v=4pUBO31nkpk

Goal is to have the express app serve the static build folder from our react app
Then I can use atlas to not have to do all the dev op lifting myself
And I can deploy the app once in one place

Trying to monorepo for simplicity of deployment cuz it's just me and want to make this as easy to maintain as possible since I'm not doing this full time...

This may not play nice either, I don't have my okta auth nor my routing .... damn lol
But a node server does make sense, just may relent and do another repo. which, if that's the case, I may just flip back to python.
It's to be revisited --- Okay so it works but it's reaaaaaaally slow. Which scares me, my app is prob slow af and unoptimized lol. I'm going to separate these though and look at fastapi mongo vs. node mongo


`package.json` allows us to install deps for just our server

## Get Started

1. From this directory (`/server`), run `npm i nodemon -g` to get nodemon globally.
2. Run `npm dev` to start the development server with nodemon!