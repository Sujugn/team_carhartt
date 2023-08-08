import { products } from './products.js';

document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 6;
  const pagesPerSet = 5; 
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const totalSets = Math.ceil(totalPages / pagesPerSet); 
  let currentSet = 1;

  function createPagination() {
    const pageDiv = document.querySelector('.pagination');
    const paginationHTML = `
      <ul>
        <li class="prev-btn"><span><i class="fas fa-angle-left"></i>Prev</span></li>
        ${generatePageNumbers()}
        <li class="next-btn"><span>Next<i class="fas fa-angle-right"></i></span></li>
      </ul>
    `;
    pageDiv.innerHTML = paginationHTML;

    const pageLinks = pageDiv.querySelectorAll('.numb');
    pageLinks.forEach((link, index) => {
      link.addEventListener('click', () => showPage(index + (currentSet - 1) * pagesPerSet + 1));
    });

    const prevBtn = pageDiv.querySelector('.prev-btn');
    const nextBtn = pageDiv.querySelector('.next-btn');
    prevBtn.addEventListener('click', () => showPrevSet());
    nextBtn.addEventListener('click', () => showNextSet());
  }

  function generatePageNumbers() {
    let pageNumbersHTML = '';

    const startPage = (currentSet - 1) * pagesPerSet + 1;
    const endPage = Math.min(startPage + pagesPerSet - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbersHTML += `<li class="numb"><span>${i}</span></li>`;
    }

    return pageNumbersHTML;
  }

  function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = products.slice(startIndex, endIndex);

    const goodsOuter = document.querySelector('.goods_outer');
    goodsOuter.innerHTML = '';

    currentPageData.forEach((value) => {
      const element = document.createElement('div');
      element.setAttribute('class', 'goods');

      element.innerHTML = `
        <div class="goods_img">
          <img src="${value.image}">
          <img src="${value.hoverImage}">
          <div class="goods_cart">
            <i class="ri-shopping-cart-2-line"></i>
          </div>
        </div>
        <div class="goods_info info_best">
          <p>BEST</p>
        </div>
        <div class="goods_name">
          <span>${value.name}</span>
        </div>
        <div class="goods_season">
          <p>${value.engName}</p>
        </div>
        <div class="goods_price">
          <span>₩${value.price}</span>
        </div>
      `;

      goodsOuter.appendChild(element);
    });
  }

  function showPrevSet() {
    if (currentSet > 1) {
      currentSet--;
      createPagination();
      showPage((currentSet - 1) * pagesPerSet + 1);
    }
  }

  function showNextSet() {
    if (currentSet < totalSets) {
      currentSet++;
      createPagination();
      showPage((currentSet - 1) * pagesPerSet + 1);
    }
  }


  
  createPagination();
  showPage(1);
});