/**
 * 公共配置文件
 */
import $config from '../../config'


const configDict = {
	development: {
		baseURL: 'http://10.10.215.109:4000'
	},
	production: {
		baseURL: $config.baseURL
	}
}

const currentConfigKey = process.env.NODE_ENV
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'development'

const configObj = {
	isDevelop: (isDev || isTest),
	...configDict[currentConfigKey],
	// h5模式宽高
	canvasH5Width: 375,
	canvasH5Height: 644,
	pageModeList: [{
		value: 'h5',
		label: '海报创作',
		disabled: false
	}
	// , {
	// 	value: 'longPage',
	// 	label: '长页H5',
	// 	disabled: false
	// }, {
	// 	name: 'relativePage',
	// 	label: '排版图文',
	// 	disabled: true
	// }, {
	// 	value: 'pc',
	// 	label: 'PC页面',
	// 	disabled: true
	// }
	]
}

export default configObj
