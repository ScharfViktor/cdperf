"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkBLXJI2TNjs = require('./chunk-BLXJI2TN.js');var _chunk5S7KMIVQjs = require('./chunk-5S7KMIVQ.js');var T=_chunk5S7KMIVQjs.a.call(void 0, _chunk5S7KMIVQjs.d.call(void 0, ));var a={...(0,T.omit)(_chunkBLXJI2TNjs.a,"iterations","duration"),scenarios:{add_remove_tag_100:{executor:"ramping-vus",startVUs:0,exec:"add_remove_tag_100",env:{SLEEP_AFTER_ITERATION:_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_SLEEP_AFTER_ITERATION","60s")},stages:[{target:parseInt(_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_VUS","250"),10),duration:_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_VUS","250"),10),duration:_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunk5S7KMIVQjs.e.call(void 0, "TEST_KOKO_PLATFORM_100_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = a;
