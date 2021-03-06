# create-git-templating-cli
CLI to clone application from git.

# Usage
run below to clone any git repo

npx create-git-templating-cli v2 https://github.com/kolusamkhan/flight-routes-app.git

# publish package
run 'npm publish'

# Best practices in publishing a npm package are
1. Safety Checks:
    git pull
    git status
    npm ci
    npm test
2. Prepare the Release:
    npm run build
   
3. Update the Changelog

4. Update the Version Number:
        npm version (includes commit, and git tag as well)
   Or by hand:
     Update version in package.json & package-lock.json
      git commit -am '2.0.0'
      git tag v2.0.0
5. Publish to npm:
    npm publish
6. Publish to Git:
    git push
    git push --tags
