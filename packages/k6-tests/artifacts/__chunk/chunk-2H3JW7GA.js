"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkHPQNNCJQjs = require('./chunk-HPQNNCJQ.js');var _chunkVGN6T2MUjs = require('./chunk-VGN6T2MU.js');var t=_chunkVGN6T2MUjs.a.call(void 0, _chunkVGN6T2MUjs.d.call(void 0, ));var A={...(0,t.omit)(_chunkHPQNNCJQjs.a,"iterations","duration"),scenarios:{create_upload_rename_delete_folder_and_file_040:{executor:"ramping-vus",startVUs:0,exec:"create_upload_rename_delete_folder_and_file_040",env:{SLEEP_AFTER_ITERATION:_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_SLEEP_AFTER_ITERATION","60s")},stages:[{target:parseInt(_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_STAGES_VUS","500"),10),duration:_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_STAGES_VUS","500"),10),duration:_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunkVGN6T2MUjs.e.call(void 0, "TEST_KOKO_PLATFORM_040_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = A;
