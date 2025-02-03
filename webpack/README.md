# Test Gsap & Emotion
- використовував webpack для збірки та початкової верстки
- gsap та emotion робив import із npm
- по компонентам не розбив крім файлів php секції та елементи
- якщо потрібно використовувати react чи vue тоді логічно розиби по компонентам

## більше детальніше можем зідзвонитися
- t.me/mdweb
- mdweb.com.ua@gmail.com

## бібліотеки
- emotion js
- GSAP
- ScrollTrigger
- SplitText

## REM
для гнучкоскі використовував замість пікселів rem через mixin

## Emotion
- Сайт зараз легенько стилізований через `css`
- анімація вся на `gsap`
- `emotion` - додав для прикладу не на всі елемнти, більше цікавіше реалізація на реальному проекті


## Animation 1
- page/animation-1.php
- src/scripts/section/animation_1.js
- src/styles - файли зі стилями
- emotion стилі без react src/scripts/animation-css.js
- якщо стилі emotion відключити сторінка буде стилізована звичайними стилями
- почав спочатку робити одну анімації, 
більше детальніше переглянув сайт приклад і переробив

## Animation 2
- page/animation-2.php
- src/scripts/section/animation_2.js
- src/styles - файли зі стилями
- emotion стилі без react src/scripts/animation-css.js
- якщо стилі emotion відключити сторінка буде стилізована звичайними стилями
- більш цікавіша анімація як на сайті прикладі

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