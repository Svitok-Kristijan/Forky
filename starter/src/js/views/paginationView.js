import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next" data-goto="${
        curPage + 1
      }">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    if (curPage === numPages && numPages > 1) {
      return `
       <button  class="btn--inline pagination__btn--prev" data-goto="${
         curPage - 1
       }">
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-left"></use>
         </svg>
         <span>Page ${curPage - 1}</span>
      </button>
      `;
    }

    if (curPage < numPages) {
      return `
      <button  class="btn--inline pagination__btn--prev" data-goto="${
        curPage - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
   </button>
   <button class="btn--inline pagination__btn--next" data-goto="${curPage + 1}">
   <span>Page ${curPage + 1}</span>
   <svg class="search__icon">
     <use href="${icons}#icon-arrow-right"></use>
   </svg>
 </button>
      `;
    }
    return '';
  }
}

export default new PaginationView();
