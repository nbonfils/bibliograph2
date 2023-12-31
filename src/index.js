import '@ajusa/lit/src/lit.css';
import './index.css';

import Alpine from 'alpinejs';

import { fetchWorks } from './lib/fetch.js';
import { processWorks, getFilters, filterData, generateJSONDataURL } from './lib/processing.js';
import { generateGraph, generateGexfURL } from './lib/graph.js';

window.fetchWorks = fetchWorks;
window.processWorks = processWorks;
window.getFilters = getFilters;
window.filterData = filterData;
window.generateGraph = generateGraph;
window.generateGexfURL = generateGexfURL;
window.generateJSONDataURL = generateJSONDataURL;

Alpine.data('App', () => ({
  query: '',
  queryconcept: '',
  fromYear: 1900,
  toYear: 2100,
  maxWorks: 10000,
  state: 'search',
  nextState: '',
  loadingMsg: '',
  count: 0,
  works: [],
  data: {},
  filters: {},
  filteredData: {},
  graph: null,

  loading(nextState, msg = '') {
    this.state = 'loading';
    this.loadingMsg = msg;
    this.nextState = nextState;
  },
  done() {
    this.state = this.nextState;
  },
}));

window.Alpine = Alpine;
Alpine.start();

if (!window.IS_PRODUCTION)
  new EventSource('/esbuild').addEventListener('change', () => location.reload());
