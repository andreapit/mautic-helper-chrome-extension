﻿"use strict";
_kangoLoader.add("kango/invoke", function(require, exports, module) {
function invokeModuleMember(e,n){var i=e.split("/"),r=i[i.length-1],o=i.slice(1,i.length-1).join("/"),u=require(o);return func.invoke(u,r,n)}function invoke(e,n){return 0==e.indexOf("modules/")?invokeModuleMember(e,n):func.invoke(backgroundscript_engine.getDOMWindow(),e,n)}var func=require("kango/utils").func,backgroundscript_engine=require("kango/backgroundscript_engine");module.exports=invoke;
});