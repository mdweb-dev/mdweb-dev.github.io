const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const cheerio = require('cheerio');


const jpgQuality = { quality: [70, 80] };
const pngQuality = { quality: [0.7, 0.8] };
const gifQuality = { optimizationLevel: 3 } //Level 1: This level provides fast compression of GIF images, but with less optimization. This is usually used when processing speed is important, but the final image quality is not so important. Level 2: The default optimization level. It strikes a balance between quality and speed. Generally recommended for most cases. Level 3: This level provides the highest degree of optimization when compressing GIF images. It may give better image quality, but it may take longer.

// Функция для обработки SVG-файла
async function processSVG(filePath) {
	try {
		// Прочитать содержимое SVG-файла
		const svgData = await fs.promises.readFile(filePath, 'utf8');

		// Загрузить SVG в cheerio
		const $ = cheerio.load(svgData, {
			xmlMode: true,
			normalizeWhitespace: true,
		});

		// Найти все дочерние элементы path
		$('path').each((index, element) => {
			const pathElement = $(element);

			// Получить текущие значения атрибутов fill и stroke
			const fillValue = pathElement.attr('fill');
			const strokeValue = pathElement.attr('stroke');

			// Заменить значения атрибутов fill и stroke на 'currentColor', если они существуют и не равны 'none'
			if (fillValue !== undefined && fillValue !== 'none') {
				pathElement.attr('fill', 'currentColor');
			}
			if (strokeValue !== undefined && strokeValue !== 'none') {
				pathElement.attr('stroke', 'currentColor');
			}
		});

		// Преобразовать обновленный SVG-код обратно в строку
		const modifiedSVG = $.xml();

		// Сохранить модифицированный SVG обратно в файл
		await fs.promises.writeFile(filePath, modifiedSVG);

		console.log(`SVG файл ${filePath} обработан успешно.`);
	} catch (error) {
		console.error(`Произошла ошибка при обработке SVG файла ${filePath}:`, error);
	}
}

// Главная функция для обработки всех SVG-файлов в указанной директории
async function processSVGFilesInDirectory(directoryPath) {
	try {
		// Получить список файлов в директории
		const files = await fs.promises.readdir(directoryPath);

		// Отфильтровать только SVG-файлы
		const svgFiles = files.filter(file => file.toLowerCase().endsWith('.svg'));

		// Обработать каждый SVG-файл
		for (const file of svgFiles) {
			const filePath = path.join(directoryPath, file);
			await processSVG(filePath);
		}
	} catch (error) {
		console.error('Произошла ошибка:', error);
	}
}

// Укажите путь к директории, содержащей ваши SVG-файлы
const directoryPath = './src/icons/';

// Обработать все SVG-файлы в указанной директории
processSVGFilesInDirectory(directoryPath);


function fileExists(filePath) {
	try {
		return fs.existsSync(filePath);
	} catch(err) {
		return false;
	}
}

// Search all files in dir
function getFilesFromDir(dir, fileTypes) {
	let filesToReturn = [];

	function walkDir(currentPath, basePath) {
		const files = fs.readdirSync(currentPath);
		for (let i in files) {
			const curFile = path.join(currentPath, files[i]);
			if (fs.statSync(curFile).isFile() && fileTypes.includes(path.extname(curFile)) && !path.basename(curFile).startsWith('_')) {
				filesToReturn.push(curFile.replace(basePath + path.sep, '').replace(path.sep, '-'));
			} else if (fs.statSync(curFile).isDirectory()) {
				walkDir(curFile, basePath);
			}
		}
	}

	walkDir(dir, dir);
	return filesToReturn;
}

const directoryPathStyles = path.join(__dirname, 'src', 'styles');
const directoryPathScripts = path.join(__dirname, 'src', 'scripts');

const scssFiles = getFilesFromDir(directoryPathStyles, ['.scss']);
const jsFiles = getFilesFromDir(directoryPathScripts, ['.js']);

const EntryCss = scssFiles.reduce((entries, file) => {
	const entryKey = file.replace('.scss', '');
	entries[entryKey] = './src/styles/' + file.replace(/-/g, '/');
	return entries;
}, {});
const EntryJs = jsFiles.reduce((entries, file) => {
	const entryKey = file.replace('.js', '');
	entries[entryKey] = './src/scripts/' + file.replace(/-/g, '/');
	return entries;
}, {});



//Change 'webpack' name in the proxy settings to your folder name
const settings = {
	host: 'localhost',
	port: 5500,
	proxy: 'http://localhost:81/chatStop/'
};

module.exports = (env) => [
	{
		mode: 'development',
		entry: EntryCss,
		output: {
			filename: './node_modules/[name].log',
			path: path.resolve(__dirname),
			// assetModuleFilename: "[name][ext]",
		},
		module: {
			rules: [
				{
					test: /\.(css|sass|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader", options: { sourceMap: true, url: false } },
						{ loader: "sass-loader", options: { sourceMap: true} },
						"postcss-loader",
					],
					sideEffects: true
				},
				{
					test: /\.(woff(2)?|ttf|eot)$/,
					type: 'asset/resource',
					generator: {
						filename: './assets/fonts/[name][ext][query]',
					}
				},
			],
		},
		plugins: [
			new SVGSpritemapPlugin('./src/icons/**/*.svg', {
				output: {
					filename: './assets/icons/sprite.svg',
					svg: {
						attributes: {
							fill: 'currentColor',
							stroke: 'currentColor',
						}
					}
				},
				sprite: {
					prefix: false,
				},

			}),
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ['./assets/css/*']
			}),
			new MiniCssExtractPlugin({
				filename: './assets/css/[name].css',
			}),
			new MiniCssExtractPlugin({
				filename: './assets/css/[name].min.css',
			}),
			new BrowserSyncPlugin({
				host: settings.host,
				port: settings.port,
				proxy: settings.proxy,
				files: ['./**/*', '!./node_modules', '!./package.json'],
				notify: false,
				injectCss: true,
				reloadDelay: 0
			}),
			new webpack.SourceMapDevToolPlugin({
				filename: '[file].map[query]',
				exclude: /\.min\.css$/i
			}),
			new CopyPlugin({
				patterns: [
					{
						from: 'src/img/*',
						to: 'assets/img/[name][ext]',
						filter: async (resourcePath) => {
							const outputPath = path.join(__dirname, 'dest', path.basename(resourcePath));
							// Копируем файл только если его ещё нет в папке dest
							return !fileExists(outputPath);
						},
					},
				],
			}),
		],
		optimization: {
			minimizer: [
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: ['default', { discardComments: { removeAll: true }, mergeRules: true }],
					},
					include: /\.min\.css$/i,
					exclude: './assets/css/[name].css',
				}),
				new ImageMinimizerPlugin({
					loader: true,
					deleteOriginalAssets: false,
					minimizer: {
						implementation: ImageMinimizerPlugin.imageminMinify,
						options: {
							plugins: [
								["imagemin-gifsicle", gifQuality],
								["imagemin-mozjpeg", jpgQuality],
								["imagemin-pngquant", pngQuality],
								["imagemin-svgo", { }]
							],
						},
					},
					generator: [
						{
							type: "asset",
							implementation: ImageMinimizerPlugin.imageminGenerate,
							options: {
								plugins: [
									"imagemin-gifsicle",
									"imagemin-mozjpeg",
									"imagemin-pngquant",
									"imagemin-svgo",
								],
							},
						},
					],
				}),
			],

			minimize: true,
		},
	},
	{
		entry: EntryJs,
		output: {
			filename: './assets/js/[name].js',
			path: path.resolve(__dirname),
			assetModuleFilename: "./assets/img/[name][ext]",
		},
		devtool: false,
		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ['./assets/js/*']
			}),
		],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
			]
		}
	},
	{
		entry: EntryJs,
		output: {
			filename: './assets/js/[name].min.js',
			path: path.resolve(__dirname),
			assetModuleFilename: "./assets/img/[name][ext]",
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					}
				},
			]
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						format: {
							comments: false,
						},
						compress: {
							drop_console: true,
						},
					},
					extractComments: false,
				}),
			],
			minimize: true,
		}
	}

];


//Update dependency
// npm i -g npm-check-updates
// ncu -u
// npm install
