# WebdriverIO Step by Step Tutorials

## Installation

1. Download & install Microsoft VS Code.

2. Download & install NodeJS.

3. Check if node and npm installed correctly.


In command prompt, type the command
```
node -v
```

![Node version](/images/nodeversion.png)

then type
```
npm -v
```

![NPM version](/images/npmversion.png)



## Create a project in VS Code

1. Click **Add Folder** and select the folder.


2. Open Terminal (Go to View > Terminal). And move to the folder.

![Terminal](/images/vscode_terminal.png)


3. Type
```
npm init
```

![npm init](/images/npm_init.png)

It will ask for some details like, package, version, author, git repo etc. You can leave all default and confirm by typing 'yes' when it prompts.

This will create a **project.json** in **example1** folder

![Porject.json](/images/project_json_after_npm_init.png)


4. Then install WebdriverIO

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
   
   
7. Then install chai using the command

```
	npm install chai --save-dev
```

8. Then install chai-webdriver for chai assertions.

```
	npm install chai-webdriverio --save-dev
```
