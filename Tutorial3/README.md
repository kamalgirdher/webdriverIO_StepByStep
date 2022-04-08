# Wdio.conf.js 

Then install WebdriverIO

```
npm install webdriverio --save-dev
```
This will install all the required packages. And you'd see under node_modules.

![Porject.json](/images/project_json_after_npm_install_webdriverio.png)

5.  Then install wdio cli (testrunner)
```
npm install @wdio/cli --save-dev
```
      
6. Generate the config file
   
```
   npx wdio config
```
   
```
	? Where is your automation backend located? On my local machine
	? Which framework do you want to use? mocha
	? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
	? Where are your test specs located? ./test/specs/**/*.js
	? Are you using a compiler? No!
	? Which reporter do you want to use? spec, dot, html
	? Do you want to add a service to your test setup? selenium-standalone
	? What is the base url? https://www.extremeExcel.com/
```
   
   you'd see wdio.config.js in the folder.