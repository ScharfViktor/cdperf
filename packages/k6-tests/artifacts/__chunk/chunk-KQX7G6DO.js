"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkJTN3ISLQjs = require('./chunk-JTN3ISLQ.js');var _chunkLUUD3A4Qjs = require('./chunk-LUUD3A4Q.js');var T=_chunkLUUD3A4Qjs.a.call(void 0, _chunkLUUD3A4Qjs.d.call(void 0, ));var a={...(0,T.omit)(_chunkJTN3ISLQjs.a,"iterations","duration"),scenarios:{add_remove_tag_100:{executor:"ramping-vus",startVUs:0,exec:"add_remove_tag_100",env:{SLEEP_AFTER_ITERATION:_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_SLEEP_AFTER_ITERATION","60s")},stages:[{target:parseInt(_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_VUS","250"),10),duration:_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_VUS","250"),10),duration:_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunkLUUD3A4Qjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = a;
