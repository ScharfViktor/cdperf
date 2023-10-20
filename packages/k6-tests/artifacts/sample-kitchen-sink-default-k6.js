"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _chunkVGN6T2MUjs = require('./__chunk/chunk-VGN6T2MU.js');var A=_chunkVGN6T2MUjs.a.call(void 0, _chunkVGN6T2MUjs.d.call(void 0, ));var _k6 = require('k6');var _crypto = require('k6/crypto');var _encoding = require('k6/encoding');var _execution = require('k6/execution'); var _execution2 = _interopRequireDefault(_execution);var P={..._chunkVGN6T2MUjs.t.call(void 0, )},z= exports.options ={vus:1,insecureSkipTLSVerify:!0};function ce(){let w=_chunkVGN6T2MUjs.v.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password});return{actorData:(0,A.times)(z.vus||1,()=>{let[m,b]=[_chunkVGN6T2MUjs.f.call(void 0, ),_chunkVGN6T2MUjs.f.call(void 0, )],$=w.user.createUser({userLogin:m,userPassword:b}),[l]=_chunkVGN6T2MUjs.l.call(void 0, "$.id",$.body);w.user.enableUser({userLogin:m});let s=_chunkVGN6T2MUjs.v.call(void 0, {userLogin:m,userPassword:b}).me.getMyDrives({params:{$filter:"driveType eq 'personal'"}}),[O=m]=_chunkVGN6T2MUjs.l.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([s, 'optionalAccess', _2 => _2.body]));return{actorLogin:m,actorPassword:b,actorId:l,actorRoot:O}})}}async function K({actorData:w}){let u={..._chunkVGN6T2MUjs.g.call(void 0, _chunkVGN6T2MUjs.t.call(void 0, ).platform.type)},{actorLogin:m,actorPassword:b,actorId:$,actorRoot:l}=w[_execution2.default.vu.idInTest-1],s=await _chunkVGN6T2MUjs.n.call(void 0, m).setOrGet("client",async()=>_chunkVGN6T2MUjs.v.call(void 0, {userLogin:m,userPassword:b}));_chunkVGN6T2MUjs.j.call(void 0, "client.me.*",()=>{let n=s.me.getMyProfile();_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:n},{"test -> me.getMyProfile - displayName - match":r=>{let[t]=_chunkVGN6T2MUjs.l.call(void 0, "displayName",_optionalChain([r, 'optionalAccess', _3 => _3.body]));return t===m}});let e=s.me.getMyDrives({params:{$filter:"driveType eq 'personal'"}});_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:e},{"test -> me.getMyDrives - personal - match":r=>{let[t]=_chunkVGN6T2MUjs.l.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([r, 'optionalAccess', _4 => _4.body]));return t===l}})});let y=await _chunkVGN6T2MUjs.n.call(void 0, P.admin.login).setOrGet("client",async()=>_chunkVGN6T2MUjs.v.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password})),E=_chunkVGN6T2MUjs.j.call(void 0, "client.group.*",n=>{let e=_chunkVGN6T2MUjs.f.call(void 0, ),r=y.group.createGroup({groupName:e});_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:r},{"test -> group.createGroup - displayName - match":({body:a})=>{let[R]=_chunkVGN6T2MUjs.l.call(void 0, "displayName",a);return R===e}});let[t]=_chunkVGN6T2MUjs.l.call(void 0, "id",r.body),c=t||e,o=_chunkVGN6T2MUjs.p.call(void 0, );return o.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{y.group.deleteGroup({groupIdOrName:c})})}),{defer:o}}),q=_chunkVGN6T2MUjs.j.call(void 0, "client.application.*",()=>{let n=y.application.listApplications(),[e]=_chunkVGN6T2MUjs.l.call(void 0, "$.value[?(@.displayName === 'ownCloud Infinite Scale')].id",_optionalChain([n, 'optionalAccess', _5 => _5.body]));return{applicationId:e}});_chunkVGN6T2MUjs.j.call(void 0, "client.role.*",()=>{let n=y.role.getRoles(),[e]=_chunkVGN6T2MUjs.l.call(void 0, "$.bundles[?(@.name === 'spaceadmin')].id",_optionalChain([n, 'optionalAccess', _6 => _6.body])),r={principalId:$,appRoleId:e,resourceId:q.applicationId},t=y.role.addRoleToUser(r);_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:t},{"test -> role.addRoleToUser - match":c=>{let o=Object.keys(r).map(a=>{let[R]=_chunkVGN6T2MUjs.l.call(void 0, a,_optionalChain([c, 'optionalAccess', _7 => _7.body]));return R===r[a]});return!!o.length&&o.every(Boolean)}})});let _=_chunkVGN6T2MUjs.j.call(void 0, "client.drive.*",n=>{let e=_chunkVGN6T2MUjs.f.call(void 0, ),r=s.drive.createDrive({driveName:e});_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:r},{"test -> resource.createDrive - name - match":o=>{let[a]=_chunkVGN6T2MUjs.l.call(void 0, "name",_optionalChain([o, 'optionalAccess', _8 => _8.body]));return a===e}});let[t]=_chunkVGN6T2MUjs.l.call(void 0, "id",_optionalChain([r, 'optionalAccess', _9 => _9.body])),c=_chunkVGN6T2MUjs.p.call(void 0, );return c.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{s.drive.deactivateDrive({driveId:t}),s.drive.deleteDrive({driveId:t})})}),{defer:c}}),g=_chunkVGN6T2MUjs.j.call(void 0, "client.resource.*",n=>{let e=_chunkVGN6T2MUjs.f.call(void 0, );s.resource.createResource({root:l,resourcePath:e});let r=_chunkVGN6T2MUjs.f.call(void 0, );s.resource.moveResource({root:l,fromResourcePath:e,toResourcePath:r});let t=_chunkVGN6T2MUjs.p.call(void 0, );t.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{s.resource.deleteResource({root:l,resourcePath:r})})});let c=s.resource.getResourceProperties({root:l,resourcePath:r});_chunkVGN6T2MUjs.k.call(void 0, {val:c},{"test -> resource.getResourceProperties - path - match":({body:h})=>{let[S=""]=_chunkVGN6T2MUjs.m.call(void 0, "$..['d:href']",h);return S.endsWith(`${r}/`)}});let o=[r,`${_chunkVGN6T2MUjs.f.call(void 0, )}.txt`].join("/"),a=_crypto.randomBytes.call(void 0, 100);s.resource.uploadResource({root:l,resourceBytes:a,resourcePath:o});let R=s.resource.downloadResource({root:l,resourcePath:o});_chunkVGN6T2MUjs.k.call(void 0, {val:R},{"test -> resource.uploadResource and resource.downloadResource - bytes - match":({body:h})=>_encoding.b64encode.call(void 0, h.toString())===_encoding.b64encode.call(void 0, a)});let[N]=_chunkVGN6T2MUjs.m.call(void 0, "$..['oc:fileid']",c.body);return{defer:t,folderId:N,folderName:r}}),x=_chunkVGN6T2MUjs.j.call(void 0, "client.tag.*",n=>{let e=_chunkVGN6T2MUjs.f.call(void 0, ),r=s.tag.getTags(),[{"oc:id":t}={"oc:id":""}]=_chunkVGN6T2MUjs.m.call(void 0, `$..[?(@['oc:display-name'] === '${e}')]`,_optionalChain([r, 'optionalAccess', _10 => _10.body]));_chunkVGN6T2MUjs.k.call(void 0, {skip:!t,val:void 0},{"test -> tag.getTagsResponse - exists":()=>!!t});let c="";t||(c=(_optionalChain([s, 'access', _11 => _11.tag, 'access', _12 => _12.createTag, 'call', _13 => _13({tagName:e}), 'optionalAccess', _14 => _14.headers, 'access', _15 => _15["Content-Location"]])||"").split("/").pop()||""),_chunkVGN6T2MUjs.k.call(void 0, {skip:!c,val:void 0},{"test -> tag.createTag - created":()=>!!c});let o=t||c||e;s.tag.addTagToResource({tag:o,resourceId:g.folderId});let a=s.tag.getTagsForResource({root:l,resourceId:g.folderId,resourcePath:g.folderName}),R=h=>{let[S]=_chunkVGN6T2MUjs.m.call(void 0, "$..['oc:tags']",h),[j]=_chunkVGN6T2MUjs.m.call(void 0, `$..[?(@['oc:id'] === '${o}')]['oc:display-name']`,h);return S||j};_chunkVGN6T2MUjs.k.call(void 0, {val:R(a.body)},{"test -> tag.getTagsForResource - match":h=>h===e});let N=_chunkVGN6T2MUjs.p.call(void 0, );return N.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{s.tag.removeTagFromResource({resourceId:g.folderId,tag:o});let h=s.tag.getTagsForResource({root:l,resourceId:g.folderId,resourcePath:g.folderName});_chunkVGN6T2MUjs.k.call(void 0, {val:R(h.body)},{"test -> tag.removeTagFromResource - removed":S=>!S}),y.tag.deleteTag({tag:o})})}),{defer:N,tagNameOrId:o}}),F=_chunkVGN6T2MUjs.j.call(void 0, "client.user.*",n=>{let[e,r]=[_chunkVGN6T2MUjs.f.call(void 0, ),_chunkVGN6T2MUjs.f.call(void 0, )];y.user.createUser({userLogin:e,userPassword:r});let t=_chunkVGN6T2MUjs.p.call(void 0, );t.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{y.user.deleteUser({userLogin:e})})}),y.user.enableUser({userLogin:e});let c=_chunkVGN6T2MUjs.v.call(void 0, {userLogin:e,userPassword:r});return{userLogin:e,userClient:c,defer:t}}),W=_chunkVGN6T2MUjs.j.call(void 0, "client.search.*",()=>{let n=s.search.searchForSharees({searchQuery:F.userLogin,searchItemType:_chunkVGN6T2MUjs.r.folder}),[e]=_chunkVGN6T2MUjs.m.call(void 0, "$..shareWith",n.body);_chunkVGN6T2MUjs.k.call(void 0, {val:void 0},{"test -> search.searchForSharees - name - match":()=>e===F.userLogin});let r=(o,a)=>{let R=o.search.searchForResources({root:l,searchQuery:a}),[N]=_chunkVGN6T2MUjs.m.call(void 0, "$..['oc:fileid']",_optionalChain([R, 'optionalAccess', _16 => _16.body]));return!N?(_k6.sleep.call(void 0, 1),r(o,a)):R},t=r(s,g.folderName);_chunkVGN6T2MUjs.k.call(void 0, {val:t},{"test -> search.searchForResources - id - match":({body:o})=>{let[a]=_chunkVGN6T2MUjs.m.call(void 0, "$..['oc:fileid']",o);return a===g.folderId}});let c=s.search.searchForResourcesByTag({tag:x.tagNameOrId,root:l});return _chunkVGN6T2MUjs.k.call(void 0, {val:c},{"test -> search.searchForResourcesByTag - id - match":({body:o})=>{let[a]=_chunkVGN6T2MUjs.m.call(void 0, "$..['oc:fileid']",o);return a===g.folderId}}),{sharee:e}});[_chunkVGN6T2MUjs.j.call(void 0, "client.share.*",n=>{let e=s.share.createShare({shareReceiver:W.sharee,shareResourcePath:g.folderName,shareReceiverPermission:_chunkVGN6T2MUjs.s.all,shareType:_chunkVGN6T2MUjs.q.user}),[r]=_chunkVGN6T2MUjs.m.call(void 0, "ocs.data.id",e.body),t=F.userClient.share.acceptShare({shareId:r});_chunkVGN6T2MUjs.k.call(void 0, {skip:u.isNextcloud,val:t},{"test -> share.acceptShare - displayname_file_owner - match":({body:o})=>{let[a]=_chunkVGN6T2MUjs.m.call(void 0, "ocs.data.element.displayname_file_owner",o);return a===m},"test -> share.acceptShare - path - match":({body:o})=>{let[a=""]=_chunkVGN6T2MUjs.m.call(void 0, "ocs.data.element.path",o);return a.endsWith(g.folderName)}});let c=_chunkVGN6T2MUjs.p.call(void 0, );return c.add(()=>{_chunkVGN6T2MUjs.j.call(void 0, n,()=>{s.share.deleteShare({shareId:r})})}),{defer:c}}),F,x,g,_,E].forEach(({defer:n})=>{n.exec()})}function ie({actorData:w}){let u=_chunkVGN6T2MUjs.v.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password});w.forEach(({actorLogin:m})=>{u.user.deleteUser({userLogin:m})})}exports.default = K; exports.options = z; exports.setup = ce; exports.teardown = ie;
