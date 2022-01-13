## Tokensuite Frontend Template for dApps

[![Quality Gate Status](http://142.93.236.90:9000/api/project_badges/measure?project=frontend-template&metric=alert_status&token=8db259c84702bd057c59b16b233ea048c339ec1e)](http://142.93.236.90:9000/dashboard?id=frontend-template)

**Please use yarn as a package manager.**
### Styling Rules

- When organising a theme first colors should be defined under ```src/styles/variables/_colors.scss```
- Then it should be added as a variable to ```src/styles/variables/_themes.scss```
- All the colors in the app should be used with color function as an example: ```color(primary-color)```. ```primary-color``` is derived from src/variables/_theme.scss.
- useEffect hook which is in ```_app.tsx``` should be modified in order to select theme.

### How to send request

- Under ```src/graphql``` there are two folders. One of them is ```generated``` react-query hooks other one is ```operations```.
- All the graphql operation such as queries, mutations should go under here with as ```*.graphql```.
- After all operations are set run ```yarn graphql:codegen``` to generate hooks.
- Everytime creating new operations please consider the example folder structure under ```src/graphql```.
- Note that, client is a parameter of every request hook which we can get from ```src/store/graphql-client```.

### When defining types
- All types should go under ```types``` folder.
- ```types``` should mimic ```src``` folder structure.
- When defining Props for component it should have the following convention: ```ComponentNameProps```.
- Every type or interface or enum etc... should start with a capital letter.

### Modal usage
- Modals are using global store.
- Every modal should be defined under ```components/organisms/ui/modals```.
- When creating new modal all required types should be added to modal store.
- Please follow example modal.

