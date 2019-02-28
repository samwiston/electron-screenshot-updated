module.exports = screenshot

function screenshot (opt, cb) {
  cb = cb || function () {}
  var remote
  try {
    remote = require('' + 'electron').remote
  } catch (e) {
    remote = require('' + 'remote')
  }
  setTimeout(function () {
    remote.getCurrentWindow().capturePage(function handleCapture (img) {
		if(opt.crop!==undefined){
			img = img.crop(opt.crop);
		}
      remote.require('fs').writeFile(opt.filename, img.toPNG(), cb)
    })
  }, opt.delay)
  return 0;
}
