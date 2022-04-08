# WebdriverIO Step by Step Tutorials



4. 
7. Then install chai using the command

```
	npm install chai --save-dev
```

8. Then install chai-webdriver for chai assertions.

```
	npm install chai-webdriverio --save-dev
```



## 3. PACKAGE.JSON

Now if you open package.json, it should appear like this.

```
{
  "name": "example1",
  "version": "1.0.0",
  "description": "This is our first project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }	1q`,
  "author": "Kamal Girdher",
  "license": "ISC",
  "devDependencies": {
    "@rpii/wdio-html-reporter": "^6.0.6",
    "@wdio/cli": "^6.1.22",
    "@wdio/dot-reporter": "^6.1.14",
    "@wdio/local-runner": "^6.1.22",
    "@wdio/mocha-framework": "^6.1.19",
    "@wdio/selenium-standalone-service": "^6.1.14",
    "@wdio/spec-reporter": "^6.1.14",
    "@wdio/sync": "^6.1.14",
    "chai": "^4.2.0",
    "chai-webdriverio": "^1.0.0",
    "chromedriver": "^83.0.0",
    "wdio-chromedriver-service": "^6.0.3",
    "webdriverio": "^6.1.22"
  }
}

```

To specify the packages your project depends on "dependencies" or "devDependencies". When you run npm install, npm will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each.


    "dependencies": Packages required by your application in production.

    "devDependencies": Packages that are only needed for local development and testing.

To add an entry to the "dependencies" attribute of a package.json file, on the command line, run the following command:

```
npm install <package-name> [--save-prod]
```

To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:

```
npm install <package-name> --save-dev
```

This is what we were doing during installation steps.



## 4. WDIO.CONF.JS

Now, have a look at wdio.conf.js. I have removed all the comments to make is readable. However, you'd see lot of comments in the wdio.conf.js generated in your project.

```
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],   
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',    
    reporters: ['spec','dot','html'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
```

#### Points to note

a. I have changed baseUrl to 'https://the-internet.herokuapp.com/'.
b. Here we are using **mocha** framework.
c. We are using **spec, dot and html** reporters. Later we would see Allure reporter as well. 



## 5. Page Object Model

