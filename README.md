# Webpack starter

## Instruction

1. Install and run Open server;
2. Update **'webpack'** name in the proxy settings to your folder name. Open `webpack.config.js` change the `proxy` in the `settings`.
3. for image-minimizer-webpack-plugin we need node >=18.12.0
4. Run `npm install`

### Commands
- `npm run watch` to start the development server with browsersync.

### Files structure
1. Working files for _styles_ and _scripts_ are in the `src` folder.
2. _Fonts_ are in the `assets/fonts` folder.
3. _Images_ are in the `assets/img` folder.
4. Third party _libraries (css/js)_ are in the `assets/libs` folder.
5. Output _styles_ are in the `assets/css` folder (`app.css` for frontend, `app.min.css` for backend).
6. Output _styles_ for WP admin panel in the `assets/css` folder (`admin.css` for frontend, `admin.min.css` for backend).
7. Output _scripts_ are in the `assets/js` folder (`common.js` for frontend, `app.min.js` for backend).
7. UI components are in the `ui-library` folder.

### Routing styles and scripts to website
1. Open `bs-config.js` and update settings: change `siteUrl` and `themeName`.
2. Put correct name for the css and js files on the site.
3. `npm run route` to start proxy the website.
4. `npm run watch` to start the development server with browsersync.