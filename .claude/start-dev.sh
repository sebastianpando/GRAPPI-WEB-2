#!/bin/sh
export PATH="/Users/sebastian/.nvm/versions/node/v24.14.0/bin:$PATH"
cd "/Users/sebastian/Desktop/GRAPPI WEB 2"
exec npm run dev -- --host --port "${PORT:-5173}"
