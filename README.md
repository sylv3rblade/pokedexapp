# How to Run this app

- clone from repo
- make sure yarn is installed (brew install yarn)
- bundle 
- run the rails server using `rails s`
- run the webpack using `./bin/webpack-dev-server`

# known bugs
- viewPokemon still doesn't go through the reducer
- still need a better guard for the reducer on addPokemon

# other notes
- capitalize needs to be moved to a global function or should I just extend it to the String object in js
- add caching to responses from api
