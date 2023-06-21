"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _chunkMLV75VTGjs = require('./chunk-MLV75VTG.js');var _chunkS2MM4LIXjs = require('./chunk-S2MM4LIX.js');var v=_chunkS2MM4LIXjs.a.call(void 0, _chunkS2MM4LIXjs.d.call(void 0, ));var _k6 = require('k6');var _execution = require('k6/execution'); var _execution2 = _interopRequireDefault(_execution);var V={vus:1,iterations:1,insecureSkipTLSVerify:!0},o={..._chunkS2MM4LIXjs.s.call(void 0, )},I= exports.b =async()=>{let s=_chunkMLV75VTGjs.d.call(void 0, {pool:_chunkMLV75VTGjs.b,n:_execution2.default.vu.idInTest}),n=_chunkS2MM4LIXjs.m.call(void 0, s.userLogin),e=await n.setOrGet("client",async()=>_chunkS2MM4LIXjs.u.call(void 0, s)),a=await n.setOrGet("root",async()=>{let w=await e.me.getMyDrives({params:{$filter:"driveType eq 'personal'"}}),[S=s.userLogin]=_chunkS2MM4LIXjs.k.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([w, 'optionalAccess', _2 => _2.body]));return _k6.sleep.call(void 0, o.sleep.after_request),S}),t=_chunkS2MM4LIXjs.f.call(void 0, );await e.resource.createResource({root:a,resourcePath:t}),_k6.sleep.call(void 0, o.sleep.after_request);let P=await e.resource.getResourceProperties({root:a,resourcePath:t}),[R]=_chunkS2MM4LIXjs.l.call(void 0, "$..['oc:fileid']",P.body);_k6.sleep.call(void 0, o.sleep.after_request);let _=await e.share.createShare({shareType:_chunkS2MM4LIXjs.p.group,shareReceiver:(0,v.sample)(_chunkMLV75VTGjs.a).groupName,shareReceiverPermission:_chunkS2MM4LIXjs.r.all,shareResourcePath:t,spaceRef:R}),[q]=_chunkS2MM4LIXjs.l.call(void 0, "ocs.data.id",_.body);_k6.sleep.call(void 0, o.sleep.after_request),await e.share.deleteShare({shareId:q}),_k6.sleep.call(void 0, o.sleep.after_request),await e.resource.deleteResource({root:a,resourcePath:t}),_k6.sleep.call(void 0, o.sleep.after_iteration)},k= exports.c =I;exports.a = V; exports.b = I; exports.c = k;
