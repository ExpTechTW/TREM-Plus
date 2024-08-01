/* eslint-disable no-undef */
const constant = {
  WS_CONFIG: {
    type: "start",
    key: "K0Q9Z4BJ23YVGNM7Q0G6D10V5QLFX4",
    service: [
      "trem.rts",
      "websocket.eew",
      "websocket.report",
      "websocket.tsunami",
      "trem.intensity",
      "cwa.intensity",
    ],
    // config  : {
    // 	"eew.cwa": {
    // 		"loc-to-int": false,
    // 	},
    // },
  },

  MAP_LIST: ["TW", "JP", "CN", "KR", "KP"],
  COLOR_PRIORITY: { "#28FF28": 2, "#F9F900": 1, "#FF0000": 0 },

  REGION_CODE: {
    1001: "臺灣東北部海域",
    1002: "臺灣東部海域",
    1003: "臺灣東南部海域",
    1004: "臺灣西北部海域",
    1005: "臺灣西部海域",
    1006: "臺灣西南部海域",
    1007: "臺灣北部海域",
    1008: "臺灣南部海域",

    1101: "石垣島附近海域",
    1102: "宮古島附近海域",
    1111: "東沙群島附近海域",
    1121: "呂宋島北部海域",

    2001: "宜蘭縣近海",
    2002: "花蓮縣近海",
    2003: "臺東縣近海",
    2004: "新北市近海",
    2005: "基隆市近海",
    2006: "桃園市近海",
    2007: "新竹縣近海",
    2008: "新竹市近海",
    2009: "苗栗縣近海",
    2010: "臺中市近海",
    2011: "彰化縣近海",
    2012: "雲林縣近海",
    2013: "嘉義縣近海",
    2014: "臺南市近海",
    2015: "高雄市近海",
    2016: "屏東縣近海",
    2017: "連江縣近海",
    2018: "金門縣近海",
    2019: "澎湖縣近海",

    9999: "未知區域",
  },
  BOX_GEOJSON: {},
  REGION: {},
  TIME_TABLE: {},
  TIME_TABLE_OBJECT: [],

  LANG: {},
  CONFIG_AUTO_SAVE_TIME: 10_000,
  STATION_INFO_FETCH_TIME: 300_000,
  API_HTTP_TIMEOUT: 2_500,
  API_HTTP_RETRY: 5_000,
  API_WEBSOCKET_RETRY: 5_000,
  API_WEBSOCKET_VERIFY: 3_000,
  TAIWAN_BOUNDS: [
    [25.33, 119.31],
    [21.88, 122.18],
  ],
  AUDIO: {
    ALERT: new Audio("../audio/ALERT.wav"),
    EEW: new Audio("../audio/EEW.wav"),
    INTENSITY: new Audio("../audio/INTENSITY.wav"),
    PGA1: new Audio("../audio/PGA1.wav"),
    PGA2: new Audio("../audio/PGA2.wav"),
    REPORT: new Audio("../audio/Report.wav"),
    SHINDO0: new Audio("../audio/Shindo0.wav"),
    SHINDO1: new Audio("../audio/Shindo1.wav"),
    SHINDO2: new Audio("../audio/Shindo2.wav"),
    TSUNAMI: new Audio("../audio/TSUNAMI.wav"),
    UPDATE: new Audio("../audio/update.wav"),
  },
  SETTING: {
    MAP_DISPLAY: {
      "實測震度 + 預估震度": 1,
      "即時加速度 + 預估震度": 2,
      預估震度: 3,
      即時加速度: 4,
      實測震度: 5,
    },
    LOCAL_ARRAY: {
      北部: [
        "臺北市",
        "新北市",
        "基隆市",
        "新竹市",
        "桃園市",
        "新竹縣",
        "宜蘭縣",
      ],
      中部: ["臺中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
      南部: ["高雄市", "臺南市", "嘉義市", "嘉義縣", "屏東縣", "澎湖縣"],
      東部: ["花蓮縣", "臺東縣"],
      外島: ["金門縣", "連江縣"],
      南韓: ["南陽州市"],
      中國: ["重慶市"],
    },
    SPECIAL_LOCAL: {
      南陽州市: ["和道邑"],
      重慶市: ["北碚區"],
    },
    CHECKBOX_DEF: {
      "early-warning-TREM": 0,
      "early-warning-CWA": 1,
      "early-warning-JMA": 1,
      "early-warning-KMA": 1,
      "early-warning-NIED": 1,
      "early-warning-SCDZJ": 1,
      "graphics-block-auto-zoom": 1,
      "graphics-show-fault": 1,
      "other-auto-launch": 1,
      "other-voice": 1,
      "show-window-detect": 1,
      "show-window-eew": 1,
      "show-window-realtime-int": 1,
      "show-window-report": 1,
      "sound-effects-EEW": 1,
      "sound-effects-EEW2": 1,
      "sound-effects-PAlert": 1,
      "sound-effects-PGA1": 1,
      "sound-effects-PGA2": 1,
      "sound-effects-Report": 1,
      "sound-effects-Shindo0": 1,
      "sound-effects-Shindo1": 1,
      "sound-effects-Shindo2": 1,
      "sound-effects-Update": 1,
      "sound-effects-dong": 1,
    },
    LOCALSTORAGE_DEF: {
      location: {
        city: "臺南市",
        town: "歸仁區",
        lat: 22.967286,
        lon: 120.2940045,
      },
      warning: { "realtime-station": "0級", "estimate-int": "0級" },
      "bg-filter": 20,
      "bg-percentage": 100,
      "map-display-effect": 1,
    },
    LOCALFALLBACK: {
      13379360: "重慶市北碚區",
      7735548: "南陽州市和道邑",
    },
    STATION_REGION: [],
    INTENSITY: [
      "0級",
      "1級",
      "2級",
      "3級",
      "4級",
      "5弱",
      "5強",
      "6弱",
      "6強",
      "7級",
    ],
  },
};

const variable = {
  last_map_update: 0,
  time_cache_list: [],
  map: null,
  map_layer: {
    eew: {},
  },
  fault: null,
  subscripted_list: [],
  station_info: null,
  station_icon: {},
  time_offset: 0,
  config: {},
  _config: "",
  replay: 0,
  replay_timestamp: 0,
  replay_list: [],
  ws_connected: false,
  ws_reconnect: true,
  last_get_data_time: 0,
  eew_list: {},
  icon_size: 0,
  intensity_list: {},
  intensity_geojson: null,
  tsunami_geojson: null,
  intensity_time: 0,
  audio: {
    shindo: -1,
    pga: -1,
    status: {
      shindo: 0,
      pga: 0,
    },
    count: {
      pga_1: 0,
      pga_2: 0,
      shindo_1: 0,
      shindo_2: 0,
    },
  },
  focus: {
    bounds: {
      report: null,
      intensity: null,
      tsunami: null,
      eew: null,
      rts: null,
    },
    status: {
      report: 0,
      intensity: 0,
      tsunami: 0,
      eew: 0,
      rts: 0,
    },
  },
  speech_status: 0,
  last_map_hash: "",
  setting: {
    station: [],
  },
  report: {
    last: {},
    more: {},
    data: [],
    check_: 1,
    list_retry: 3,
    survey: null,
    withoutNo: "",
    replay_data: {},
    show_int: null,
    icon: [],
    replay_status: 0,
    circles: [],
    labels: [],
  },
};
