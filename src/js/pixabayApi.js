import { error } from '@pnotify/core';
import apiSettings from './apiVariables';

const { URL, API_KEY } = apiSettings;

export default class ApiDataService {
  constructor() {
    this.perPage = 12;
    this._page = 1;
    this.searchQuery = '';
  }
  async fetchRequest() {
    console.log(this._page);
    try {
      if (this.searchQuery === '') return;

      const url = `${URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this._page}&per_page=${this.perPage}&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json().then(this.increasePage());
      
      if (data.hits.length === 0) throw error;
      const { hits } = data;
      return hits;
    } catch (error) {
      throw new Error();
    }
  }
  increasePage() {
    this._page += 1;
  }
  resetPage() {
    this._page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
