/**
 * 
 */
require('./common.css');
var hello = require('./hello');
var world = require('./world');

document.write(`${hello}, ${world}!`);
//빌드 뒤 결과를 보면 ES5로 컴파일 된것을 볼 수 있다.