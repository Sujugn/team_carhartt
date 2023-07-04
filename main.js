import best from "./js/detail_import.js";
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".top_btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      gsap.to(topBtn, 0.3, {
        opacity: 1,
      });
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 0,
      });
    }
  }); //window_scroll_event

  topBtn.addEventListener("click", () => {
    gsap.to(window, 0.5, {
      scrollTo: 0,
    });
  }); // top버튼 누르면 상단으로 이동

  const filterBtn = document.querySelector(".filter_btn");
  const filterArea = document.querySelector(".filter_area");

  let state = false;

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
  const goods = document.querySelectorAll(".goods");
  goods.forEach((value) => {});
}); //WINDOW

const prWrap = document.querySelector(".pr_wrap");

function renderProductList() {
  // 상품 목록 생성
  best.forEach((detail) => {
    let detailProduct = document.createElement("div");
    detailProduct.setAttribute("class", "detail_goods");
    // 상품 정보 표시

    // 클릭 이벤트 추가
    detailProduct.addEventListener("click", () => {
      showDetailPage(detail.id);
    });

    prWrap.appendChild(detailProduct);
  });
}

// 페이지 로드 시 상품 목록 출력
renderProductList();
