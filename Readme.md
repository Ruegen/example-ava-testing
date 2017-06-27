1. Install ava as dev
```
yarn add ava --dev
```

2. Init ava, this adds a script to your *package.json*
```
yarn ava --init
```

3. Add more to your scripts in package.json, this will allow you to test and have a continuously watching test
```
"scripts": {
  "setup": "ava --init",
  "test": "ava",
  "test:watch": "ava --watch"
},
```
4. Create a directory ```/tests```

5. Add test js files appended with ```.test.js```
e.g. ```index.test.js```

6. Because ava doesn't have support out of the box to read es6 syntax like *export default* we want to add babel
```
yarn add babel-preset-es2015 babel-register --dev
```

7. Add to the package.json that babel stuff
```
"babel": {
  "presets": ["es2015"]
}
```

8. So that ava sees the code as es6, add this to package.json
```
"ava": {
  "require": [
    "babel-register"
  ]
}
```

9. run tests
```
yarn test:watch
```
