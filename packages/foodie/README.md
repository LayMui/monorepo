## Getting started with webdriverio cucumber framework

1. npm init to create the package.json
2. npm i @wdio/cli
3. Setup:

```
npx wdio config
```

Ask a series of questions/options to config the webdriverio

4. To run

```
npx wdio run ./config/wdio.ios.app.conf.ts
```

it will install the dependencies and create the wdio.conf.ts

5. create a file tsconfig.json with the content copied

```
{
  "compilerOptions": {
    "types": ["node", "webdriverio/async", "@wdio/cucumber-framework", "expect-webdriverio"]
  }
}
```

6. run the test using the command:

```
npx wdio wdio.ios.conf.ts
```

7. Add npm i @wdio/appium-service --save-dev

```
Such a service eliminates the need to start appium manually before starting your tests. We should install this as a dev dependency:
```


8. To update dependencies version, run 
```
npm update
```




tested on xcode 12.5.1
and node 16.3.0
appium v.1.22.0

