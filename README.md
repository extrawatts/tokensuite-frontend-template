## Tokensuite Frontend Template for dApps

### Styling Rules

1- When organising a theme first colors should be defined under ```src/styles/variables/_colors.scss```
2- Then it should be added as a variable to ```src/styles/variables/_themes.scss```
3- All the colors in the app should be used with color function as an example: ```color(primary-color)```. ```primary-color``` is derived from src/variables/_theme.scss.
4- useEffect hook which is in ```_app.tsx``` should be modified in order to select theme.
