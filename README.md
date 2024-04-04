First create  a node set up.Use npm init -y

Now install hygen

  On macOS and Homebrew:
  
    $ brew tap jondot/tap
    $ brew install hygen

  Globally with npm (or yarn):
  
    $ npm i -g hygen
    
Now initialize hygen using 

hygen init self

Now install generator with prompt using

npx hygen generator with-prompt --name 'module-controller-service'


Delete hello.ejs.t which is created by default.Now modify the auto generated prompt.js accordingly.
Now create 3 files service.ejs.t,controller.ejs.t,module.ejs.t and code accordingly.

Now run 

npx hygen module-controller-service with-prompt.

Give names for module,controller,and service.
This will create a src folder and inside it,the folder with given module name is created,Now inside that folder,all the fileName.module.ts,fileName.service.ts,fileName.controller.ts will be created.

NB: fileName is the name we given via prompt.


Now create another generator named new-generator using
npx hygen generator with-prompt --name 'new-generator'

Now create controller.ejs.t,generateModule.js,module,ejs.t,prompt.js,service.ejs.t 
Now run the new generator using
npx hygen new-generator with-prompt and give the names for module,controller and service.

Now open the directory where this generateModule.js file is located,in my case it is
Desktop/Hygen/HygenNew/_templates/new-generator/with-prompt .
Now within that directory,run the js file with the module name that we created from new-generator.
In this case i created test module from new-generator,so i am using the below command.

node generateModule.js test

This will add the testModule into the app module's imports array
