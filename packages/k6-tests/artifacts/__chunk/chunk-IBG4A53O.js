"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _chunkXKQSPUS3js = require('./chunk-XKQSPUS3.js');var a=e=>({..._chunkXKQSPUS3js.g.call(void 0, e.platform),isSpace:e.resourceType===_chunkXKQSPUS3js.b.space,isDirectory:e.resourceType===_chunkXKQSPUS3js.b.directory,isOwner:!!e.isOwner}),l= exports.a =async e=>{let o={root:"",path:""},r=a(e),t;if(r.isSpace&&(t=`driveAlias === 'project/${e.resourceName}'`),r.isDirectory&&!r.isOwner&&(t=`driveAlias === 'mountpoint/${e.resourceName}'`),r.isDirectory&&r.isOwner&&(t=`driveAlias === 'personal/${e.userLogin}'`),r.isOwnCloudInfiniteScale){let i=await e.client.me.getMyDrives();[o.root]=_chunkXKQSPUS3js.j.call(void 0, `$.value[?(@.${t})].id`,_optionalChain([i, 'optionalAccess', _ => _.body]))}return r.isOwnCloudInfiniteScale||(o.root=e.userLogin),(!r.isOwnCloudInfiniteScale||r.isDirectory&&r.isOwner)&&(o.path=e.resourceName),o},m= exports.b =async e=>{let o={root:"",path:""},r=a(e);if(r.isOwnCloudInfiniteScale&&r.isSpace){let t=await l({...e,isOwner:!0});if(t.root)return t;let i=await e.client.drive.createDrive({driveName:e.resourceName}),[u]=_chunkXKQSPUS3js.j.call(void 0, "$.id",_optionalChain([i, 'optionalAccess', _2 => _2.body]));o.root=u}if(r.isOwnCloudInfiniteScale&&r.isDirectory){let t=e.client.me.getMyDrives(),[i]=_chunkXKQSPUS3js.j.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([t, 'optionalAccess', _3 => _3.body]));o.root=i}return r.isOwnCloudInfiniteScale||(o.root=e.userLogin),r.isDirectory&&(o.path=e.resourceName,await e.client.resource.createResource({root:o.root,resourcePath:e.resourceName})),o},y= exports.c =async e=>{let o=await l({...e,isOwner:!0});if(!o.root&&!o.path)return;let r=a(e);if(r.isOwnCloudInfiniteScale&&r.isSpace){await e.client.drive.deactivateDrive({driveId:o.root}),await e.client.drive.deleteDrive({driveId:o.root});return}e.client.resource.deleteResource({root:o.root,resourcePath:o.path})};exports.a = l; exports.b = m; exports.c = y;
