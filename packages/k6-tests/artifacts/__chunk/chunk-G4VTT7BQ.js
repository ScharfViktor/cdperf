"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chunkIBG4A53Ojs = require('./chunk-IBG4A53O.js');var _chunkPICCHWHVjs = require('./chunk-PICCHWHV.js');var _chunkXKQSPUS3js = require('./chunk-XKQSPUS3.js');var _k6 = require('k6');var _execution = require('k6/execution'); var _execution2 = _interopRequireDefault(_execution);var P={vus:1,iterations:1,insecureSkipTLSVerify:!0},e={..._chunkXKQSPUS3js.r.call(void 0, )},g= exports.b =async()=>{let r=_chunkPICCHWHVjs.d.call(void 0, {pool:_chunkPICCHWHVjs.b,n:_execution2.default.vu.idInTest}),s=_chunkXKQSPUS3js.l.call(void 0, r.userLogin),i=await s.setOrGet("client",async()=>_chunkXKQSPUS3js.s.call(void 0, r)),d=await s.setOrGet("root",async()=>{let n=await _chunkIBG4A53Ojs.a.call(void 0, {client:i,userLogin:r.userLogin,platform:e.platform.type,resourceName:e.seed.container.name,resourceType:e.seed.container.type,isOwner:!1});return _k6.sleep.call(void 0, e.sleep.after_request),[n.root,n.path].filter(Boolean).join("/")}),o;_execution2.default.scenario.iterationInTest%10===0?o={...e.seed.resource.large}:_execution2.default.scenario.iterationInTest%10<=3?o={...e.seed.resource.medium}:o={...e.seed.resource.small},await i.resource.downloadResource({root:d,resourcePath:[e.seed.resource.root,o.name].join("/")}),_k6.sleep.call(void 0, e.sleep.after_iteration)},R= exports.c =g;exports.a = P; exports.b = g; exports.c = R;
