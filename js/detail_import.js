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

import best from "./detail.js";

const prWrap = document.querySelector(".pr_wrap");

function showDetailPage(productId) {
  const selectedProduct = best.find((detail) => detail.id === productId);

  if (!selectedProduct) {
    // 상품을 찾지 못한 경우 처리
    return;
  }

  prWrap.innerHTML = ""; // 기존 상품 삭제

  let detailProduct = document.createElement("div");
  detailProduct.setAttribute("class", "detail_goods");
  detailProduct.innerHTML = `
    <div class="pr_visual">
      <div class="pr_scode">
        <p>스타일코드</p>
        <span>${detail.code}</span>
      </div>
      <div class="pr_img">
        <img src="${detail.mainImg}" alt="메인 이미지">
      </div>
      <div class="pr_hoverimg">
        <ul>
          <li><a href=""><img src="${detail.detailImg01}" alt="상세 이미지 1"></a></li>
          <li><a href=""><img src="${detail.detailImg02}" alt="상세 이미지 2"></a></li>
          <li><a href=""><img src="${detail.detailImg03}" alt="상세 이미지 3"></a></li>
          <li><a href=""><img src="${detail.detailImg04}" alt="상세 이미지 4"></a></li>
          <li><a href=""><img src="${detail.detailImg05}" alt="상세 이미지 5"></a></li>
        </ul>
      </div><!-- //pr_hoverimg -->

      <div class="wear_product">
        <div class="wp_title">
          <p>함께 착용한 상품</p>
        </div>
        <div class="wp_img">
          <img src="${detail.relateImg}" alt="관련 상품 이미지">
        </div>
        <div class="wp_name">
          <p>${detail.relateName}</p>
        </div>
        <div class="wp_color">
          <p>${detail.relateColor}</p>
        </div>
        <div class="wp_price">
          <p>₩${detail.relatePrice}</p>
        </div>
      </div><!-- //wear_product -->

      <div class="recently_product">
        <div class="rv">
          <div class="rv_title">
            <p>최근 본 상품</p>
          </div>
          <div class="rv_img">
            <img src="${detail.recentImg}" alt="최근 본 상품 이미지">
          </div>
          <div class="rv_name">
            <p>${detail.recentName}</p>
          </div>
          <div class="rv_color">
            <p>${detail.recentColor}</p>
          </div>
          <div class="rv_price">
            <p>${detail.recentPrice}</p>
          </div>
        </div><!-- //rv -->
      </div><!-- //recently view -->
    </div><!-- //pr_visual -->

    <div class="pr_option">
      <div class="text_box">
        <div class="pr_name">
          <p>${detail.name}</p>
        </div><!-- //pr_name -->

        <div>`;

  prWrap.appendChild(detailProduct);
}
