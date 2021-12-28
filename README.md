## Tokensuite Frontend Template for dApps

### Styling Rules

- When organising a theme first colors should be defined under ```src/styles/variables/_colors.scss```
- Then it should be added as a variable to ```src/styles/variables/_themes.scss```
- All the colors in the app should be used with color function as an example: ```color(primary-color)```. ```primary-color``` is derived from src/variables/_theme.scss.
- useEffect hook which is in ```_app.tsx``` should be modified in order to select theme.
