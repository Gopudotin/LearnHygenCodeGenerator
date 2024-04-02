First create  a node set up.Use "npm init -y"

Now install hygen
  On macOS and Homebrew:
    $ brew tap jondot/tap
    $ brew install hygen
  Globally with npm (or yarn):
    $ npm i -g hygen
    
Now initialize hygen using "hygen init self"

Now install generator with prompt using npx hygen generator with-prompt --name 'module-controller-service'
Delete hello.ejs.t which is created by default.Now modify the auto generated prompt.js accordingly.
Now create 3 files service.ejs.t,controller.ejs.t,module.ejs.t and code accordingly.

now run "npx hygen module-controller-service with-prompt"
give names for module,controller,and service
this will create a src folder and inside it,the folder with given module name is created,Now inside that folder,all the fileName.module.ts,fileName.service.ts,fileName.controller.ts will be created.
NB:fileName is the name we given via prompt.


