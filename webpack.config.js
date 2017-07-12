/**
 * 웹팩의 설정 파일 셋팅 방법.
 */
/**
 * entry: {
			'entry': './entry.js'
		},
		output: {
			filename: 'bundle.js'
		},
 * 이렇게 해놓으면 webpack이라는 명령어만 쳐도 entry.js 파일을 번들링 할 수 있다.
 */
/**
 * test: /\.css$/,
 * .css 확장자로 끝나는 파일을 로드 하는 경우 
 * 
 * 
 * use: [
		'style-loader',
		'css-loader'
	]
 * 
 * css-loader와 style-loader를 거치도록 하겠다는 의미다.
 */

/**
 * IE환경을 지원하면서도 ES2015를 쓰기 위해서는 babel 같은 트랜스파일러(Transpiler)가 필수다.
 * babel을 사용하기 위해서는 preset을 설치해야 한다. 그 중 babel-preset-env는 설정된 환경에 알맞게 preset을 자동으로 설정해준다.
 * 이 라이브러리를 사용하기 위해서 presets라는 속성을 사용해서 환경을 설정할 수 잇다.
 * targets: {
		browsers: ['last 2 versions']
	}
 * 위의 파일에서 설정된 환경은 브라우저 별로 최신의 두개 버전만 고려한다.
 * babel-preset-env
 */
module.exports = {
		entry: {
			'entry': './entry.js'
		},
		output: {
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets:[[
							'env', {
								targets: {
									browsers: ['last 2 versions']
								}
							}
						]]
					}
					
				}
			]
		}
};
