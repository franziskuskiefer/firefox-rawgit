var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.github.com",
  contentScriptWhen: "ready",
  contentScriptFile: [self.data.url("contentScript.js")]
});