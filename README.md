## Tokensuite Frontend Template for dApps

[![Quality Gate Status](http://142.93.236.90:9000/api/project_badges/measure?project=frontend-template&metric=alert_status&token=8db259c84702bd057c59b16b233ea048c339ec1e)](http://142.93.236.90:9000/dashboard?kid=frontend-template)

**Please use yarn as a package manager.**

# Tokensuite Frontend Guideline

### Naming conventions

- Each file and folder should be named as kebab case.
- Under each folder there should be a root file called index
- Enums should be written with uppercase letters and words in enums should be separated with an underscore such as: ```PROCESS_TYPE```.
- Interfaces which are not component props should have I letter in the beginning. E.g. ```IProcess[]```.
- Types should have letter T in the beginning. E.g. ```TStatus```
- When defining Props for component it should have the following convention: ```ComponentNameProps```.
- Every scss module under dedicated component should have the parent folders name. E.g. ```button/index.tsx``` styles file should be named as ```button.module.scss```.

### Folder structure

- Beside next.js default folder structure in our app there is 2 main folders: types and src.
- types folder should mimic src and every single type or enum should go under dedicated folder for that type.
- Since we follow atomic design system under components there are 2 main folders called: templates and ui. Under ui there are atoms, molecules and organisms.
- Modals and Forms should have their own dedicated folder under ```organisms/modals``` and ```organisms/forms```.

### Styling Rules

- When organising a theme first colors should be defined under ```src/styles/variables/_colors.scss```
- Then it should be added as a variable to ```src/styles/variables/_themes.scss```
- All the colors in the app should be used with color function as an example: ```color(primary-color)```. ```primary-color``` is derived from src/variables/_theme.scss.

### How to send request

- Since we use graphql on backend we have a npm command callded ```codegen:graphql``` in ```package.json``` to generate hooks for fetching data.
- Under the hood we are using ```graphql-request``` and ```react-query```.
- Note that, client is a parameter of every request hook which we can get from ```src/store/graphql-client```.


### Store

- To manage global data we are using ```zustand```. 
- For each global state a new store is created unlike typical flux architecture. 
- Store should be only used for global data.

### Modal usage
- Modals are using global store.
- Every modal should be defined under ```components/organisms/ui/modals```.
- When creating new modal all required types should be added to modal store.
- Please follow example modal.

