"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _chunkIKUDWDQEjs = require('./__chunk/chunk-IKUDWDQE.js');var h=_chunkIKUDWDQEjs.a.call(void 0, _chunkIKUDWDQEjs.d.call(void 0, ));var _crypto = require('k6/crypto');var _execution = require('k6/execution'); var _execution2 = _interopRequireDefault(_execution);var e={..._chunkIKUDWDQEjs.s.call(void 0, ),testFolder:_chunkIKUDWDQEjs.e.call(void 0, "TEST_FOLDER","oc-share-upload-rename-base"),assets:{size:parseInt(_chunkIKUDWDQEjs.e.call(void 0, "ASSET_SIZE","1000"),10),quantity:parseInt(_chunkIKUDWDQEjs.e.call(void 0, "ASSET_QUANTITY","10"),10)}},D= exports.options ={vus:1,insecureSkipTLSVerify:!0};function q(){let r=_chunkIKUDWDQEjs.t.call(void 0, {userLogin:e.admin.login,userPassword:e.admin.password}),o=r.me.getMyDrives(),[t=e.admin.login]=_chunkIKUDWDQEjs.k.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([o, 'optionalAccess', _ => _.body]));r.resource.createResource({root:t,resourcePath:e.testFolder});let s=(0,h.times)(D.vus||1,()=>{let[n,a]=[_chunkIKUDWDQEjs.f.call(void 0, ),_chunkIKUDWDQEjs.f.call(void 0, )];r.user.createUser({userLogin:n,userPassword:a}),r.user.enableUser({userLogin:n});let i=r.share.createShare({shareResourcePath:e.testFolder,shareReceiver:n,shareType:_chunkIKUDWDQEjs.p.user,shareReceiverPermission:_chunkIKUDWDQEjs.r.all}),[m]=_chunkIKUDWDQEjs.l.call(void 0, "ocs.data.id",i.body),u=_chunkIKUDWDQEjs.t.call(void 0, {userLogin:n,userPassword:a}),p=u.me.getMyDrives(),[T=n]=_chunkIKUDWDQEjs.k.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([p, 'optionalAccess', _2 => _2.body]));return u.share.acceptShare({shareId:m}),{actorLogin:n,actorPassword:a,actorRoot:T}});return{adminData:{adminRoot:t},actorData:s}}async function I({actorData:r}){let{actorLogin:o,actorPassword:t,actorRoot:s}=r[_execution2.default.vu.idInTest-1],a=await _chunkIKUDWDQEjs.m.call(void 0, o).setOrGet("client",async()=>_chunkIKUDWDQEjs.t.call(void 0, {userLogin:o,userPassword:t})),i=[_execution2.default.scenario.iterationInTest,"initial",o].join("-");a.resource.createResource({root:s,resourcePath:i});let m=_crypto.randomBytes.call(void 0, e.assets.size*1e3);(0,h.times)(e.assets.quantity,p=>{a.resource.uploadResource({root:s,resourcePath:[i,p].join("/"),resourceBytes:m})});let u=[_execution2.default.scenario.iterationInTest,"final",o].join("-");a.resource.moveResource({root:s,fromResourcePath:i,toResourcePath:u})}function N({adminData:r,actorData:o}){let t=_chunkIKUDWDQEjs.t.call(void 0, {userLogin:e.admin.login,userPassword:e.admin.password});t.resource.deleteResource({root:r.adminRoot,resourcePath:e.testFolder}),o.forEach(({actorLogin:s})=>{t.user.deleteUser({userLogin:s})})}exports.default = I; exports.options = D; exports.settings = e; exports.setup = q; exports.teardown = N;
