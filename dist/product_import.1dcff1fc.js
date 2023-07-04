// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = exports.NEW = void 0;
var products = [{
  name: "반팔 켄웨이 니트 폴로 블랙",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_01.jpg",
  hoverImage: "./images/Top_01_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 네이비",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_02.jpg",
  hoverImage: "./images/Top_02_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 키위",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_03.jpg",
  hoverImage: "./images/Top_03_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 화이트 스완",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_04.jpg",
  hoverImage: "./images/Top_04_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 블랙",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_05.jpg",
  hoverImage: "./images/Top_05_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 테이데",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_06.jpg",
  hoverImage: "./images/Top_06_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 화이트",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_07.jpg",
  hoverImage: "./images/Top_07_hover.jpg"
}, {
  name: "반팔 라이프가즈 티셔츠 블랙",
  engName: "S/S LIFEGUARDS T-SHIRT",
  price: "75,000",
  image: "./images/Top_08.jpg",
  hoverImage: "./images/Top_08_hover.jpg"
}, {
  name: "반팔 타마스 포켓 티셔츠 블랙",
  engName: "S/S TAMAS POCKET T-SHIRT",
  price: "88,000",
  image: "./images/Top_09.jpg",
  hoverImage: "./images/Top_09_hover.jpg"
}, {
  name: "반팔 크래프트 셔츠 제우스 린스드",
  engName: "S/S CRAFT SHIRT",
  price: "123,000",
  image: "./images/Top_10.jpg",
  hoverImage: "./images/Top_10_hover.jpg"
}, {
  name: "반팔 크래프트 셔츠 쥐라 린스드",
  engName: "S/S WYNTON SHIRT",
  price: "123,000",
  image: "./images/Top_11.jpg",
  hoverImage: "./images/Top_11_hover.jpg"
}, {
  name: "반팔 윈튼 셔츠 타마린드/더스티 H",
  engName: "S/S WYNTON SHIRT",
  price: "153,000",
  image: "./images/Top_12.jpg",
  hoverImage: "./images/Top_12_hover.jpg"
}, {
  name: "반팔 유니티 티셔츠 화이트",
  engName: "S/S UNITY T-SHIRT",
  price: "83,000",
  image: "./images/Top_13.jpg",
  hoverImage: "./images/Top_13_hover.jpg"
}, {
  name: "반팔 유니티 티셔츠 블랙",
  engName: "S/S UNITY T-SHIRT",
  price: "83,000",
  image: "./images/Top_14.jpg",
  hoverImage: "./images/Top_14_hover.jpg"
}, {
  name: "반팔 바칸제 티셔츠 피신",
  engName: "S/S VACANZE T-SHIRT",
  price: "78,000",
  image: "./images/Top_15.jpg",
  hoverImage: "./images/Top_15_hover.jpg"
}, {
  name: "반팔 바칸제 티셔츠 시트론",
  engName: "S/S VACANZE T-SHIRT",
  price: "78,000",
  image: "./images/Top_16.jpg",
  hoverImage: "./images/Top_16_hover.jpg"
}, {
  name: "반팔 말린 티셔츠 화이트",
  engName: "S/S MARLIN T-SHIRT",
  price: "78,000",
  image: "./images/Top_17.jpg",
  hoverImage: "./images/Top_17_hover.jpg"
}, {
  name: "반팔 말린 티셔츠 라주라이트",
  engName: "S/S MARLIN T-SHIRT",
  price: "78,000",
  image: "./images/Top_18.jpg",
  hoverImage: "./images/Top_18_hover.jpg"
}, {
  name: "반팔 로커 티셔츠 애쉬 헤더/브라운",
  engName: "S/S LOCKER T-SHIRT",
  price: "62,400",
  image: "./images/Top_19.jpg",
  hoverImage: "./images/Top_19_hover.jpg"
}, {
  name: "반팔 로커 티셔츠 블랙/화이트",
  engName: "S/S LOCKER T-SHIRT",
  price: "62,400",
  image: "./images/Top_20.jpg",
  hoverImage: "./images/Top_20_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 블랙 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_21.jpg",
  hoverImage: "./images/Top_21_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 아말피 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_22.jpg",
  hoverImage: "./images/Top_22_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 트리하우스 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_23.jpg",
  hoverImage: "./images/Top_23_hover.jpg"
}, {
  name: "반팔 넬슨 티셔츠 피신 가먼트 다이드",
  engName: "S/S NELSON T-SHIRT",
  price: "78,000",
  image: "./images/Top_24.jpg",
  hoverImage: "./images/Top_24_hover.jpg"
}, {
  name: "반팔 넬슨 티셔츠 왁스 가먼트 다이드",
  engName: "S/S NELSON T-SHIRT",
  price: "78,000",
  image: "./images/Top_25.jpg",
  hoverImage: "./images/Top_25_hover.jpg"
}, {
  name: "반팔 마스터 셔츠 블랙",
  engName: "S/S MASTER SHIRT",
  price: "113,000",
  image: "./images/Top_26.jpg",
  hoverImage: "./images/Top_26_hover.jpg"
}, {
  name: "반팔 마스터 셔츠 테이데",
  engName: "S/S MASTER nSHIRT",
  price: "113,000",
  image: "./images/Top_27.jpg",
  hoverImage: "./images/Top_27_hover.jpg"
}, {
  name: "디트로이트 자켓 블랙/블랙 린스드",
  engName: "DETROIT JACKET",
  price: "288,000",
  image: "./images/Top_28.jpg",
  hoverImage: "./images/Top_28_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 키위 원 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: "218,000",
  image: "./images/Top_29.jpg",
  hoverImage: "./images/Top_29_hover.jpg"
}, {
  name: "타일러 자켓 블랙",
  engName: "TYLER JACKET",
  price: "254,400",
  image: "./images/Top_30.jpg",
  hoverImage: "./images/Top_30_hover.jpg"
}, {
  name: "타일러 자켓 유카",
  engName: "TYLER JACKET",
  price: "254,400",
  image: "./images/Top_31.jpg",
  hoverImage: "./images/Top_31_hover.jpg"
}, {
  name: "바유 스웻셔츠 블랙 가먼트 다이드",
  engName: "BAYOU SWEATSHIRT",
  price: "158,400",
  image: "./images/Top_32.jpg",
  hoverImage: "./images/Top_32_hover.jpg"
}, {
  name: "로커 스웻셔츠 블랙/화이트",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_33.jpg",
  hoverImage: "./images/Top_33_hover.jpg"
}, {
  name: "로커 스웻셔츠 애쉬 헤더/브라운",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_34.jpg",
  hoverImage: "./images/Top_34_hover.jpg"
}, {
  name: "로커 스웻셔츠 트리하우스/옐로우",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_35.jpg",
  hoverImage: "./images/Top_35_hover.jpg"
}, {
  name: "후디드 크로모 스웻셔츠 블랙 ",
  engName: "HOODED CHROMO SWEATSHIRT",
  price: "166,400",
  image: "./images/Top_36.jpg",
  hoverImage: "./images/Top_36_hover.jpg"
}, {
  name: "후디드 크로모 스웻셔츠 트리하우스",
  engName: "HOODED CHROMO SWEATSHIRT",
  price: "166,400",
  image: "./images/Top_37.jpg",
  hoverImage: "./images/Top_37_hover.jpg"
}, {
  name: "후디드 듀얼 스웻셔츠 애쉬 헤더",
  engName: "HOODED DUEL SWEATSHIRT",
  price: "150,400",
  image: "./images/Top_38.jpg",
  hoverImage: "./images/Top_38_hover.jpg"
}, {
  name: "후디드 듀얼 스웻셔츠 아가베",
  engName: "HOODED DUEL SWEATSHIRT",
  price: " 150,400",
  image: "./images/Top_39.jpg",
  hoverImage: "./images/Top_39_hover.jpg"
}, {
  name: "후디드 엘지 스웻셔츠 블랙/왁스",
  engName: "HOODED ELZY SWEATSHIRT",
  price: "172,000",
  image: "./images/Top_40.jpg",
  hoverImage: "./images/Top_40_hover.jpg"
}, {
  name: "후디드 엘지 스웻셔츠 해밀턴 브라운/토바코",
  engName: "HOODED ELZY SWEATSHIRT",
  price: "172,000",
  image: "./images/Top_41.jpg",
  hoverImage: "./images/Top_41_hover.jpg"
}, {
  name: "알링 자켓 블랙 페이디드",
  engName: "ARLING JACKET",
  price: "368,000",
  image: "./images/Top_42.jpg",
  hoverImage: "./images/Top_42_hover.jpg"
}, {
  name: "스카일러 셔츠 자켓 블랙 가먼트 다이드",
  engName: "SKYLER SHIRT JAC",
  price: "212,000",
  image: "./images/Top_43.jpg",
  hoverImage: "./images/Top_43_hover.jpg"
}, {
  name: "스카일러 셔츠 자켓 스톰 블루 가먼트 다이드",
  engName: "STORM BLUE GARMENT DYED",
  price: "212,000",
  image: "./images/Top_44.jpg",
  hoverImage: "./images/Top_44_hover.jpg"
}, {
  name: "미시건 코트 블랙 가먼트 다이드",
  engName: "BLACK GARMENT DYED",
  price: " 198,000",
  image: "./images/Top_45.jpg",
  hoverImage: "./images/Top_45_hover.jpg"
}, {
  name: "미시건 코트 오프-화이트 린스드",
  engName: "MICHIGAN COAT",
  price: "198,000",
  image: "./images/Top_46.jpg",
  hoverImage: "./images/Top_46_hover.jpg"
}, {
  name: "미시건 코트 라주라이트/블랙 린스드",
  engName: "MICHIGAN COAT",
  price: "228,000",
  image: "./images/Top_47.jpg",
  hoverImage: "./images/Top_47_hover.jpg"
}, {
  name: "어웨이크 뉴욕 어웨이크 뉴욕 블랙 린스드",
  engName: "AWAKE NY OG ACTIVE JACKET",
  price: "388,000",
  image: "./images/Top_48.jpg",
  hoverImage: "./images/Top_48_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 블랙 스톤 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: " 170,400",
  image: "./images/Top_49.jpg",
  hoverImage: "./images/Top_49_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 블루 스톤 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: "170,400",
  image: "./images/Top_50.jpg",
  hoverImage: "./images/Top_50_hover.jpg"
}, {
  name: "아버 베스트 블랙 페이디드",
  engName: "ARBOR VEST",
  price: "202,400",
  image: "./images/Top_51.jpg",
  hoverImage: "./images/Top_51_hover.jpg"
}, {
  name: "아버 베스트 타마린드 페이디드",
  engName: "ARBOR VEST",
  price: "202,400",
  image: "./images/Top_52.jpg",
  hoverImage: "./images/Top_52_hover.jpg"
}, {
  name: "코스탈 자켓 블랙/화이트",
  engName: "COASTAL JACKET",
  price: "248,000",
  image: "./images/Top_53.jpg",
  hoverImage: "./images/Top_53_hover.jpg"
}, {
  name: "코스탈 자켓 화이트/블랙",
  engName: "COASTAL JACKET",
  price: "248,000",
  image: "./images/Top_54.jpg",
  hoverImage: "./images/Top_54_hover.jpg"
}, {
  name: "살레도 자켓 블랙 라이트 유즈드 워시",
  engName: "BLACK LIGHT USED WASH",
  price: "245,000",
  image: "./images/Top_55.jpg",
  hoverImage: "./images/Top_55_hover.jpg"
}, {
  name: "살레도 자켓 블루 스톤 워시드",
  engName: "BLUE STONE WASHED",
  price: "208,000",
  image: "./images/Top_56.jpg",
  hoverImage: "./images/Top_56_hover.jpg"
}, {
  name: "코스트 스테이트 스웻셔츠 애쉬 헤더",
  engName: "COAST STATE SWEATSHIRT",
  price: "145,000",
  image: "./images/Top_57.jpg",
  hoverImage: "./images/Top_57_hover.jpg"
}, {
  name: "넬슨 스웻셔츠 피신 가먼트 다이드",
  engName: "NELSON SWEATSHIRT",
  price: "130,400",
  image: "./images/Top_58.jpg",
  hoverImage: "./images/Top_58_hover.jpg"
}, {
  name: "칼하트 스웨트셔츠 블랙/화이트",
  engName: "CARHARTT SWEATSHIRT",
  price: "138,000",
  image: "./images/Top_59.jpg",
  hoverImage: "./images/Top_59_hover.jpg"
}, {
  name: "칼하트 스웻셔츠 그레이 헤더/블랙",
  engName: "CARHARTT SWEATSHIRT",
  price: "138,000",
  image: "./images/Top_60.jpg",
  hoverImage: "./images/Top_60_hover.jpg"
}, {
  name: "후디드 칼하트 스웻셔츠 제우스/비올란다",
  engName: "HOODED CARHARTT SWEATSHIRT",
  price: "118,400",
  image: "./images/Top_61.jpg",
  hoverImage: "./images/Top_61_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 블랙",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_62.jpg",
  hoverImage: "./images/Top_62_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 그레이 헤더",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_63.jpg",
  hoverImage: "./images/Top_63_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 해밀턴 브라운",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_64.jpg",
  hoverImage: "./images/Top_64_hover.jpg"
}, {
  name: "후디드 매디슨 자켓 블랙/왁스",
  engName: "HOODED MADISON JACKET",
  price: " 153,000",
  image: "./images/Top_65.jpg",
  hoverImage: "./images/Top_65_hover.jpg"
}, {
  name: "알토 자켓 라주라이트",
  engName: "ALTO JACKET",
  price: "286,400",
  image: "./images/Top_66.jpg",
  hoverImage: "./images/Top_66_hover.jpg"
}]; // subpage_top
exports.products = products;
var NEW = [{
  id: "new_01",
  name: "반팔 윈튼 셔츠 쥐라/유카 스톤 워시드",
  price: "153,000",
  code: "CA23SSSHSS11100001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_01.jpg",
  detailImg01: "./images/N_datail01_1.jpg",
  detailImg02: "./images/N_detail01_2.jpg",
  detailImg03: "./images/N_detail01_3.jpg",
  detailImg04: "./images/N_detail01_4.jpg",
  detailImg05: "./images/N_detail01_5.jpg",
  colorImg01: "./images/N_color01_1.jpg",
  colorImg02: "./images/N_color01_2.jpg",
  colorImg03: "",
  relateImg: "./images/N_realate01.jpg",
  relateImghover: "./images/N_relate01_hover.jpg",
  relateName: "LAWTON SHORT VESTAL",
  relateColor: "WALL",
  relatePrice: "148,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "S/S WYNTON SHIRT는 면100% 'COOSA' 립스탑 소재의 반팔 셔츠입니다. 레귤러 핏이며, 두개의 가슴 포켓은 플랩과 벨크로로 여닫을 수 있습니다. 후면에는 슬릿 디테일이 있으며, 정면 가슴 포켓에는 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "new_02",
  name: "윈튼 쇼츠 쿠사 쥐라/유카 스톤 워시드",
  price: "153,000",
  code: "CA23SSSTOT11100001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_02.jpg",
  detailImg01: "./images/N_datail02_1.jpg",
  detailImg02: "./images/N_detail02_2.jpg",
  detailImg03: "./images/N_detail02_3.jpg",
  detailImg04: "./images/N_detail02_4.jpg",
  detailImg05: "./images/N_detail02_5.jpg",
  colorImg01: "./images/N_color02.jpg",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "WYNTON SHORT는 면100% 'COOSA' 립스탑 소재의 카고 반바지입니다. 릴렉스트 핏에 밑위는 레귤러 웨이스트입니다. . 허리 밴드는 신축성이 있으며, 조절식 벨트가 있습니다. 지퍼 플라이 형식입니다. 후면과 측면의 포켓은 플랩과 벨크로로 여닫을 수 있습니다. "
}, {
  id: "new_03",
  name: "베이필드 버킷 햇 블랙 페이디드",
  price: "70,400",
  code: "CA23SSHEBC09320001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_03.jpg",
  detailImg01: "./images/N_datail03_1.jpg",
  detailImg02: "./images/N_detail03_2.jpg",
  detailImg05: "./images/N_detail03_5.jpg",
  colorImg01: "./images/N_color03.jpg",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "S/S WYNTON SHIRT는 면100% 'COOSA' 립스탑 소재의 반팔 셔츠입니다. 레귤러 핏이며, 두개의 가슴 포켓은 플랩과 벨크로로 여닫을 수 있습니다. 후면에는 슬릿 디테일이 있으며, 정면 가슴 포켓에는 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "new_04",
  name: "라운드 카라비너 유카",
  price: "25,000",
  code: "CA23SSACKC11080001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_01.jpg",
  detailImg01: "./images/N_datail04_1.jpg",
  detailImg02: "./images/N_detail04_2.jpg",
  colorImg01: "./images/N_color_04_1.jpg",
  colorImg02: "./images/N_color_04_2.jpg",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "ROUND CARABINER는 아연 합금 소재의 카라비너입니다. 사이즈는 지름 5 CM로, 둥근 형태의 카라비너 입니다. 그래픽이 음각으로 새겨져 있습니다."
}, {
  id: "new_05",
  name: "캔버스 6-패널 캡 블루핀/화이트 스톤 워시드",
  price: "65,000",
  code: "CA23SSHECP11278001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_05.jpg",
  detailImg01: "./images/N_datail05_1.jpg",
  detailImg02: "./images/N_detail05_2.jpg",
  detailImg03: "./images/N_detail05_3.jpg",
  colorImg01: "./images/N_color_05.jpg",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "BAYFIELD BUCKET HAT은 오가닉 코튼100% ;DEARBORN' 캔버스 소재의 버킷햇입니다. 안감이 있으며, 정면에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "new_06",
  name: "베이필드 토트 스톰 블루 페이디드",
  price: "86,400",
  code: "CA23SSBATT11085001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_06.jpg",
  detailImg01: "./images/N_datail06_1.jpg",
  detailImg02: "./images/N_detail06_2.jpg",
  detailImg03: "./images/N_detail06_3.jpg",
  detailImg04: "./images/N_detail06_4.jpg",
  detailImg05: "./images/N_detail06_5.jpg",
  colorImg01: "./images/N_color_06.jpg",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "BAYFIELD TOTE SMALL은 오가닉 코튼100% 'DEARBORN' 캔버스 소재의 토트백입니다. 36 X 34 X 12 CM 크기로 14.6 리터의 수납이 가능합니다. 안감이 없고, 스냅으로 여닫을 수 있습니다. 내부에 지퍼가 달린 포켓이 있으며, 정면에는 스퀘어 라벨이 부착된 포켓이 있습니다."
}, {
  id: "new_07",
  name: "여성 반팔 로빌리아 셔츠 블루 스톤 워시드",
  price: "138,000",
  code: "CA23SSSHSS00760001",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_07.jpg",
  detailImg01: "./images/N_datail07_1.jpg",
  detailImg02: "./images/N_detail07_2.jpg",
  detailImg03: "./images/N_detail07_3.jpg",
  detailImg04: "./images/N_detail07_4.jpg",
  detailImg05: "./images/N_detail07_5.jpg",
  relateImg: "./images/N_realate07.jpg",
  relateImghover: "./images/N_relate07_hover.jpg",
  relateName: "W MASTER SKIRTL",
  relateColor: "BLACK RINSED",
  relatePrice: " 118,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "W S/S LOVILIA SHIRT는 면100% 'PERRY' 데님 소재의 반팔 셔츠입니다. 루즈 핏이며, 가슴 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "new_08",
  name: "여성 알마 팬츠 블루 스톤 워시드",
  price: "155,000",
  code: "CA23SSPAWO00760008",
  accumulate: "",
  percent: "",
  mainImg: "./images/new_01.jpg",
  detailImg01: "./images/N_datail08_1.jpg",
  detailImg02: "./images/N_detail08_2.jpg",
  detailImg03: "./images/N_detail08_3.jpg",
  detailImg04: "./images/N_detail08_4.jpg",
  detailImg05: "./images/N_detail08_5.jpg",
  colorImg01: "./images/N_color01_1.jpg",
  colorImg02: "./images/N_color01_2.jpg",
  colorImg03: "",
  relateImg: "./images/N_realate08.jpg",
  relateImghover: "./images/N_relate08_hover.jpg",
  relateName: "W SALEDO JACKET",
  relateColor: "NATURAL STONE WASHED",
  relatePrice: "218,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "W ALMA PANT는 면100% 'PERRY' 데님 소재의 워크 팬츠입니다. 루즈 테이퍼드 핏에 밑위는 하이 웨이스트입니다. 데님과 립스탑 소재가 믹스되어 있는 디테일이 있습니다. 무릎 부분은 패치로 덧대여져 있습니다. 지퍼 플라이 형식이며, 제품 측면에는 툴 포켓, 해머 루프가 있습니다. 후면 포켓에는 스퀘어 라벨이 부착되어 있습니다. "
}]; //main_page NEW
exports.NEW = NEW;
},{}],"js/product_import.js":[function(require,module,exports) {
"use strict";

var _products = require("./products.js");
var goodsOuter = document.querySelector(".goods_area .goods_outer");
//sub_page TOP 상품목록
var prWrap = document.querySelector(".wrap_ex .pr_wrap");
//detail best상품

console.log(goodsOuter);
console.log(prWrap);
_products.products.forEach(function (product) {
  var element = document.createElement("div");
  element.setAttribute("class", "goods");
  element.innerHTML = "\n            <div class=\"goods\">\n                <div class=\"goods_img\">\n                <img src=\"".concat(product.image, "\">\n                <img src=\"").concat(product.hoverImage, "\">\n                    <div class=\"goods_cart\">\n                        <i class=\"ri-shopping-cart-2-line\"></i>\n                    </div>\n                </div>\n\n                <div class=\"goods_info info_best\">\n                    <p>BEST</p>\n                </div>\n                <div class=\"goods_name\">\n                    <span>").concat(product.name, "</span>\n                </div>\n                <div class=\"goods_season\">\n                    <p>").concat(product.engName, "</p>\n                </div>\n                <div class=\"goods_price\">\n                    <span>\u20A9").concat(product.price, "</span>\n                </div>\n        </div><!-- //goods -->\n    ");
  goodsOuter.appendChild(element);
}); //TOP 상품목록
},{"./products.js":"js/products.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52215" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/product_import.js"], null)
//# sourceMappingURL=/product_import.1dcff1fc.js.map