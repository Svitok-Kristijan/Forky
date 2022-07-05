import * as model from '.././model';
import resultsView from './resultsView';

class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      resultsView.render(model.getSearchResultsPage(1));
      resultsView.renderSpinner();
      handler();
    });
  }
}
export default new SearchView();
