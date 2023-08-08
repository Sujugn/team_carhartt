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
})({"js/detail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var best = [{
  id: "best_01",
  name: "반팔 타마스 포켓 티셔츠 블랙",
  price: "88,000",
  code: "CA23SSTSSS00002019",
  percent: "",
  mainImg: "./images/best_01.jpg",
  detailImg01: "./images/detail01_1.jpg",
  detailImg02: "./images/detail01_2.jpg",
  detailImg03: "./images/detail01_3.jpg",
  detailImg04: "./images/detail01_4.jpg",
  detailImg05: "./images/detail01_5.jpg",
  colorImg01: "./images/best_02.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_01.jpg",
  relateImghover: "./images/relateimghover_01.jpg",
  relateName: "SINGLE KNEE CHROMO PANT DEARBORN",
  relateColor: "BLACK CHROMO",
  relatePrice: "156,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "S/S TAMAS POCKET T-SHIRT는 오가닉 코튼100% 싱글 저지 소재의 반팔 티셔츠입니다. 루즈 핏이며, 가슴 포켓이 있습니다. 후면에 그래픽 프린트가 있습니다.- 세탁 및 다림 시 그래픽의 손상 및 변형이 생길 수 있으므로, 뒤집어 세탁 및 다림을 권장합니다."
}, {
  id: "best_02",
  name: "반팔 타마스 포켓 티셔츠 화이트",
  price: "88,000",
  code: "CA23SSTSSS00040025",
  percent: "",
  mainImg: "./images/best_02.jpg",
  detailImg01: "./images/detail02_1.jpg",
  detailImg02: "./images/detail02_2.jpg",
  detailImg03: "./images/detail02_3.jpg",
  detailImg04: "./images/detail02_4.jpg",
  detailImg05: "./images/detail02_5.jpg",
  colorImg01: "./images/best_01.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_02.jpg",
  relateImghover: "./images/relateimghover_02.jpg",
  relateName: "DOUBLE KNEE PANT FAIRFIELD",
  relateColor: "BLUE HEAVY STONE WASH",
  relatePrice: "173,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "DOUBLE KNEE PANT는 오가닉 코튼 100% 'FAIRFIELD' 데님 소재의 워크 팬츠입니다. 릴렉스드 스트레이트 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 무릎 부분은 이중으로 덧대어져 있습니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_03",
  name: "싱글 니 쇼츠 스미스 블루 스톤 워시드",
  price: "135,000",
  code: "CA23SSSTWO00760001",
  percent: "",
  mainImg: "./images/mainimg_03.jpg",
  detailImg01: "./images/detail03_1.jpg",
  detailImg02: "./images/detail03_2.jpg",
  detailImg03: "./images/detail03_3.jpg",
  detailImg04: "./images/detail03_4.jpg",
  detailImg05: "./images/detail03_5.jpg",
  colorImg01: "./images/best_04.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_03.jpg",
  relateImghover: "./images/relateimghover_03.jpg",
  relateName: "S/S BLACK JACK SHIRT",
  relateColor: "BLACK JACK, BLACK",
  relatePrice: " 143,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "SINGLE KNEE SHORT는 면100% 'SMITH' 데님 소재의 워크 쇼츠입니다. 릴렉스드 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_04",
  name: "싱글 니 쇼츠 스미스 블루 스톤 블리치드",
  price: "148,000",
  code: "CA23SSSTWO00759001",
  percent: "",
  mainImg: "./images/best_04.jpg",
  detailImg01: "./images/detail04_1.jpg",
  detailImg02: "./images/detail04_2.jpg",
  detailImg03: "./images/detail04_3.jpg",
  detailImg04: "./images/detail04_4.jpg",
  detailImg05: "./images/detail04_5.jpg",
  colorImg01: "./images/best_03.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_04.jpg",
  relateImghover: "./images/relateimghover_04.jpg",
  relateName: "S/S COAST STATE T-SHIRT",
  relateColor: "WHITE",
  relatePrice: "98,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "SINGLE KNEE SHORT는 면100% 'SMITH' 데님 소재의 워크 쇼츠입니다. 릴렉스드 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_05",
  name: "코스탈 자켓 블랙/화이트",
  price: "248,000",
  code: "CA23SSJAJL00358002",
  percent: "",
  mainImg: "./images/best_05.jpg",
  detailImg01: "./images/detail05_1.jpg",
  detailImg02: "./images/detail05_2.jpg",
  detailImg03: "./images/detail05_3.jpg",
  detailImg04: "./images/detail05_4.jpg",
  detailImg05: "./images/detail05_5.jpg",
  colorImg01: "./images/best_07.jpg",
  relateImg: "./images/relateimg_05.jpg",
  relateImghover: "./images/relateimghover_05.jpg",
  relateName: "ISLAND SWIM TRUNKS",
  relateColor: "KIWI/BLACK",
  relatePrice: "108,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
}, {
  id: "best_06",
  name: "아일랜드 스윔 트렁크 마리나 프린트",
  price: "123,000",
  code: "CA23SSSMSS11208001",
  percent: "",
  mainImg: "./images/best_06.jpg",
  detailImg01: "./images/detail06_1.jpg",
  detailImg02: "./images/detail06_2.jpg",
  detailImg03: "./images/detail06_3.jpg",
  detailImg04: "./images/detail06_4.jpg",
  detailImg05: "./images/detail06_5.jpg",
  relateImg: "./images/relateimg_06.jpg",
  relateImghover: "./images/relateimghover_06.jpg",
  relateName: "COAST STATE SWEATER",
  relateColor: "WHITE",
  relatePrice: "185,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COAST STATE SWEATER는 면100% 소재의 스웨터입니다. 솔기 부분들이 오픈되어 있는 디테일이 있으며, 그래픽 자카드가 있습니다."
},
//컬러추가
{
  id: "best_07",
  name: "코스탈 자켓 화이트/블랙",
  price: " 248,000",
  code: "CA23SSJAJL00266002",
  percent: "",
  mainImg: "./images/best_07.jpg",
  detailImg01: "./images/detail07_1.jpg",
  detailImg02: "./images/detail07_2.jpg",
  detailImg03: "./images/detail07_3.jpg",
  detailImg04: "./images/detail07_4.jpg",
  detailImg05: "./images/detail07_5.jpg",
  relateImg: "./images/relateimg_07.jpg",
  relateImghover: "./images/relateimghover_07.jpg",
  relateName: "DOUBLE KNEE PANT FAIRFIELD",
  relateColor: "BLUE STONE WASHED",
  relatePrice: "158,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
},
//컬러추가
{
  id: "best_08",
  name: "콜 카고 쇼츠 모라가 키위 가먼트 다이드",
  price: " 148,000",
  code: "CA23SSSTCA11139001",
  percent: "",
  mainImg: "./images/best_08.jpg",
  detailImg01: "./images/detail08_1.jpg",
  detailImg02: "./images/detail08_2.jpg",
  detailImg03: "./images/detail08_3.jpg",
  detailImg04: "./images/detail08_4.jpg",
  detailImg05: "./images/detail08_5.jpg",
  relateImg: "./images/relateimg_07.jpg",
  relateImghover: "./images/relateimghover_07.jpg",
  relateName: "S/S SOUVENIR VALLEY T-SHIRT",
  relateColor: "NATURAL/BLACK",
  relatePrice: "95,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
}
//컬러추가
]; //BEST
var _default = best;
exports.default = _default;
},{}],"js/detail_import.js":[function(require,module,exports) {
"use strict";

var _detail = _interopRequireDefault(require("./detail.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import best from "./detail.js";

// const prWrap = document.querySelector(".pr_wrap");

// best.forEach((detail) => {
//   let detailProduct = document.createElement("div");
//   detailProduct.setAttribute("class", "detail_goods");
//   detailProduct.innerHTML = `
// <div class="pr_visual">
// <div class="pr_scode">
//     <p>스타일코드</p>
//     <span>${detail.code}</span>
// </div>
// <div class="pr_img">
//     ${detail.mainImg}
// </div>
// <div class="pr_hoverimg">
//     <ul>
//         <li><a href="">${detail.detailImg01}</a></li>
//         <li><a href="">${detail.detailImg02}</a></li>
//         <li><a href="">${detail.detailImg03}</a></li>
//         <li><a href="">${detail.detailImg04}</a></li>
//         <li><a href="">${detail.detailImg05}</a></li>
//     </ul>
// </div><!-- //pr_hoverimg -->

// <div class="wear_product">
//     <div class="wp_title">
//         <p>함께 착용한 상품</p>
//     </div>
//     <div class="wp_img">
//         ${detail.relateImg}
//     </div>
//     <div class="wp_name">
//         <p>${detail.relateName}</p>
//     </div>
//     <div class="wp_color">
//         <p>${detail.relateColor}</p>
//     </div>
//     <div class="wp_price">
//         <p>₩${detail.relatePrice}</p>
//     </div>
// </div><!-- //wear_product -->

// <div class="recently_product">
//     <div class="rv">
//         <div class="rv_title">
//             <p>최근 본 상품</p>
//         </div>
//         <div class="rv_img">
//             ${detail.recentImg}
//         </div>
//         <div class="rv_name">
//             <p> ${detail.recentName}</p>
//         </div>
//         <div class="rv_color">
//             <p${detail.recentColor}</p>
//         </div>
//         <div class="rv_price">
//             <p>${detail.recentPrice}</p>
//         </div>
//     </div><!-- //rv -->
// </div><!-- //recently view -->
// </div><!-- //pr_visual -->

// <div class="pr_option">
// <div class="text_box">
//     <div class="pr_name">
//         <p>${detail.name}</p>
//     </div><!-- //pr_name -->

//     <div class="pr_info pr_detail_goods">
//         <p>detail_goods</p>
//     </div><!-- //pr_detail_goods -->

//     <div class="pr_sns">
//         <div class="rating">
//             <p><i class="fas fa-star"></i></p>
//             <p><i class="fas fa-star"></i></p>
//             <p><i class="fas fa-star"></i></p>
//             <p><i class="fas fa-star"></i></p>
//             <p><i class="fas fa-star"></i></p>
//             <p>5.0</p>
//             <span>/5</span>
//         </div>
//         <div class="sns">
//             <div class="save">
//                 <i class="far fa-heart"></i>
//             </div>
//             <div class="facebook">
//                 <i class="fab fa-facebook-f"></i>
//             </div>
//             <div class="twitter">
//                 <i class="fab fa-twitter"></i>
//             </div>
//         </div>
//     </div><!-- //pr_sns-->

//     <div class="pr_price">
//         <div class="price_orgin">
//             <p>${detail.price}</p>
//         </div>
//         <div class="accumulate">
//             <p>적립 ₩${detail.accumulate}</p>
//             <p>(${detail.percent}%)</p>
//         </div>
//     </div><!-- //pr_price -->

//     <div class="delivery_info">
//         <div class="info_box">
//             <div class="info_title">
//                 <p>배송정보</p>
//             </div>
//             <div class="info_txt">
//                 <p>10만원 이하 3,000원, 10만원 이상 무료배송
//                     <a href=""><i class="far fa-question-circle"></i></a>
//                 </p>
//                 <p><span>2시 이전 주문시 내일(X)도착 예정</span>ㅣ대한통운</p>
//             </div>
//         </div>

//         <div class="credit_box">
//             <div class="credit_title">
//                 <p>무이자할부</p>
//             </div>
//             <div class="credit_txt">
//                 <p>최대 6개월<span>(단, 일시불 할인 및 법인 카드 사용 불가)</span></p>
//             </div>
//         </div>
//     </div><!-- //delivery info -->

// </div><!-- //text_box -->

// <div class="pr_color">
//     <div class="color_title">
//         <p>색상</p>
//     </div>
//     <div class="color_wrapper">
//         <div class="color">
//             <input id="color_pr_01">
//             <label for="color_pr_01">
//                 ${detail.colorImg01}
//             </label>
//         </div><!-- //color -->
//         <div class="color">
//             <input id="color_pr_02">
//             <label for="color_pr_02">
//                 ${detail.colorImg02}
//             </label>
//         </div><!-- //size -->
//         <div class="color">
//             <input id="color_pr_03">
//             <label for="color_pr_03">
//                 ${detail.colorImg03}
//             </label>
//         </div><!-- //color -->
//     </div><!-- //color_wrapper -->
// </div><!-- //pr_color -->

// <div class="pr_size">
//     <div class="size_title">
//         <p>사이즈</p>
//     </div>
//     <div class="size_wrapper">
//         <div class="size">
//             <button class="size_btn">
//                 <p>XS</p>
//             </button>
//         </div>
//         <div class="size">
//             <button class="size_btn">
//                 <p>S</p>
//             </button>
//         </div>
//         <div class="size">
//             <button class="size_btn">
//                 <p>M</p>
//             </button>
//         </div>
//         <div class="size">
//             <button class="size_btn">
//                 <p>L</p>
//             </button>
//         </div>
//         <div class="size">
//             <button class="size_btn last_btn">
//                 <p>XL</p>
//             </button>
//         </div>
//     </div>
// </div><!-- //pr_size -->

// <div class="n_pay">
//     <div class="n_pay_left_area">
//         <div class="n_pay_img">
//             <img src="./images/n_pay_logo.png" alt="네이버페이로고">
//         </div>
//         <p>네이버페이 포인트 혜택</p>
//     </div>
//     <span>최대 3%적립</span>
// </div>

// <div class="pr_buy">
//     <div class="size_box">
//         <button class="size_btn">
//             <i class="ri-t-shirt-line"></i>
//             <i class="fas fa-arrows-alt-v"></i>
//             고객님 사이즈를 찾아보세요</button>
//     </div>
//     <div class="btn_box">
//         <div class="cart_box">
//             <button class="cart_btn">장바구니</button>
//         </div>
//         <div class="buy_box">
//             <button class="buy_btn">구매하기</button>
//         </div>
//     </div>
//     <p class="p_txt">*주문/배송/반품 등 일반 문의는 1:1문의를 이용해 주시기 바랍니다.</p>
// </div><!-- //pr_buy -->
// </div><!-- //pr_option -->
// `;

//   prWrap.appendChild(detailProduct);
// });

var prWrap = document.querySelector(".pr_wrap");
function showDetailPage(productId) {
  var selectedProduct = _detail.default.find(function (detail) {
    return detail.id === productId;
  });
  if (!selectedProduct) {
    // 상품을 찾지 못한 경우 처리
    return;
  }
  prWrap.innerHTML = ""; // 기존 상품 삭제

  var detailProduct = document.createElement("div");
  detailProduct.setAttribute("class", "detail_goods");
  detailProduct.innerHTML = "\n    <div class=\"pr_visual\">\n      <div class=\"pr_scode\">\n        <p>\uC2A4\uD0C0\uC77C\uCF54\uB4DC</p>\n        <span>".concat(detail.code, "</span>\n      </div>\n      <div class=\"pr_img\">\n        <img src=\"").concat(detail.mainImg, "\" alt=\"\uBA54\uC778 \uC774\uBBF8\uC9C0\">\n      </div>\n      <div class=\"pr_hoverimg\">\n        <ul>\n          <li><a href=\"\"><img src=\"").concat(detail.detailImg01, "\" alt=\"\uC0C1\uC138 \uC774\uBBF8\uC9C0 1\"></a></li>\n          <li><a href=\"\"><img src=\"").concat(detail.detailImg02, "\" alt=\"\uC0C1\uC138 \uC774\uBBF8\uC9C0 2\"></a></li>\n          <li><a href=\"\"><img src=\"").concat(detail.detailImg03, "\" alt=\"\uC0C1\uC138 \uC774\uBBF8\uC9C0 3\"></a></li>\n          <li><a href=\"\"><img src=\"").concat(detail.detailImg04, "\" alt=\"\uC0C1\uC138 \uC774\uBBF8\uC9C0 4\"></a></li>\n          <li><a href=\"\"><img src=\"").concat(detail.detailImg05, "\" alt=\"\uC0C1\uC138 \uC774\uBBF8\uC9C0 5\"></a></li>\n        </ul>\n      </div><!-- //pr_hoverimg -->\n\n      <div class=\"wear_product\">\n        <div class=\"wp_title\">\n          <p>\uD568\uAED8 \uCC29\uC6A9\uD55C \uC0C1\uD488</p>\n        </div>\n        <div class=\"wp_img\">\n          <img src=\"").concat(detail.relateImg, "\" alt=\"\uAD00\uB828 \uC0C1\uD488 \uC774\uBBF8\uC9C0\">\n        </div>\n        <div class=\"wp_name\">\n          <p>").concat(detail.relateName, "</p>\n        </div>\n        <div class=\"wp_color\">\n          <p>").concat(detail.relateColor, "</p>\n        </div>\n        <div class=\"wp_price\">\n          <p>\u20A9").concat(detail.relatePrice, "</p>\n        </div>\n      </div><!-- //wear_product -->\n\n      <div class=\"recently_product\">\n        <div class=\"rv\">\n          <div class=\"rv_title\">\n            <p>\uCD5C\uADFC \uBCF8 \uC0C1\uD488</p>\n          </div>\n          <div class=\"rv_img\">\n            <img src=\"").concat(detail.recentImg, "\" alt=\"\uCD5C\uADFC \uBCF8 \uC0C1\uD488 \uC774\uBBF8\uC9C0\">\n          </div>\n          <div class=\"rv_name\">\n            <p>").concat(detail.recentName, "</p>\n          </div>\n          <div class=\"rv_color\">\n            <p>").concat(detail.recentColor, "</p>\n          </div>\n          <div class=\"rv_price\">\n            <p>").concat(detail.recentPrice, "</p>\n          </div>\n        </div><!-- //rv -->\n      </div><!-- //recently view -->\n    </div><!-- //pr_visual -->\n\n    <div class=\"pr_option\">\n      <div class=\"text_box\">\n        <div class=\"pr_name\">\n          <p>").concat(detail.name, "</p>\n        </div><!-- //pr_name -->\n\n        <div>");
  prWrap.appendChild(detailProduct);
}
},{"./detail.js":"js/detail.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _detail_import = _interopRequireDefault(require("./js/detail_import.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener("DOMContentLoaded", function () {
  var topBtn = document.querySelector(".top_btn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      });
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      });
    }
  }); //window_scroll_event

  topBtn.addEventListener("click", function () {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  }); // top버튼 누르면 상단으로 이동

  var filterBtn = document.querySelector(".filter_btn");
  var filterArea = document.querySelector(".filter_area");
  var state = false;
  filterBtn.addEventListener("click", function () {
    if (!state) {
      filterArea.style.display = "block";
      state = true;
    } else {
      filterArea.style.display = "none";
      state = false;
    }
  }); //필터 ON/OFF
}); //DOCUMENT

window.addEventListener("DOMContentLoaded", function () {
  var goods = document.querySelectorAll(".goods");
  goods.forEach(function (value) {});
}); //WINDOW

var prWrap = document.querySelector(".pr_wrap");
function renderProductList() {
  // 상품 목록 생성
  _detail_import.default.forEach(function (detail) {
    var detailProduct = document.createElement("div");
    detailProduct.setAttribute("class", "detail_goods");
    // 상품 정보 표시

    // 클릭 이벤트 추가
    detailProduct.addEventListener("click", function () {
      showDetailPage(detail.id);
    });
    prWrap.appendChild(detailProduct);
  });
}

// 페이지 로드 시 상품 목록 출력
renderProductList();
$(document).ready(function () {
  $(".lookbook_img").click(function () {
    //선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.
    var tab_content = $(this).attr("tab_content");
    $("lookbook_img").removeClass("current"); //선택 되있던 탭의 current css를 제거하고
    $(".tab-content").removeClass("current");
    $(this).addClass("current"); ////선택된 탭에 current class를 삽입해줍니다.
    $("#" + tab_content).addClass("current");
  });
});
},{"./js/detail_import.js":"js/detail_import.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "6161" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map