var webpack = require('webpack');

module.exports = {
	/* entry부터 시작하여 다른 의존 파일들을 재귀적으로 호출 */
	entry: './src/index.js',

	/* 불러모은 자바스크립트 파일들을 bundle.js로 합쳐서 저장 */
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	/* 개발 서버 설정 */
	devServer: {
		hot: true, // 파일이 수정될 때 마다 reload
		inline: true, // dev server client를 bundle.js에 같이 넣어줄지
		host: '0.0.0.0', // 개발서버의 주소
		port: 4000, // 개발서버의 포트
		contentBase: __dirname + '/public/', // index 파일의 위치
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}