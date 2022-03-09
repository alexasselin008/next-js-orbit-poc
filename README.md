# Generate tgz from orbit : 

1. increment orbit/components package.json's version

2. navigate in powershell in the packages/components folder and type the following commands:
```
yarn build
yarn pack
```

3. a .tgz as been generated in the current directory

# Consume the tgz in this app :

1. change the path in the package.json to the generated .tgz. 
      * If its copied in this projet, use "file:./orbit-ui-components-v5.1.13.tgz",
      * If you are referencing the tgz in a remote location, such as the orbit repo, use "file://C:/Dev/[rest of the path]/orbit-ui-components-v5.1.13.tgz",

2. run the following command in the app folder:

```
yarn run reset
yarn
```