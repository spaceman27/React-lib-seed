### HOW TO USE

- react-lib-seed: basic need for reusable component library which can reuse in any js framework like angular, react, vue
- angular-poc: for testing purpose, to consume react component library

### react-lib-seed
Dependency:
Bootstrap 4, React CSS Modular, Kendo UI, webpack script

for dev: run 
    npm run start
for production: run 
    npm run build
which actually run below script to build and pack the library to a (local) package. not intened to publish on npm
    "node scripts/build.js && cd ./build && npm pack"

