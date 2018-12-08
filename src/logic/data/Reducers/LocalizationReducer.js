import ActionTypes from '../ActionTypes';
import AppLocalization from '../AppLocalization';
import Immutable from 'immutable';

const key = 'lp-lang';

/**
 * Get language from sessionStorage
 */
function getLang() {
  return window.localStorage.getItem(key);
}

/**
 * Set language to sessionStorage
 */
function setLang(lang) {
  window.localStorage.setItem(key, lang);
}

function getInitialState(){
  const lang = getLang();
  if(lang)
    AppLocalization.setLanguage(lang);
  return Immutable.Map({
    lang: AppLocalization.getLanguage(),
    localization: AppLocalization,
  });
}

/**
 * Reducer for cart data (using sessionStorage)
 * @param {Immutable} state 
 * @param {{type, payload}} action 
 */
function reducer(state, action) {
  switch (action.type) {
      
    case ActionTypes.LANG_CHANGED:
      state.get('localization').setLanguage(action.payload);
      setLang(action.payload);
      return state.update('lang', () => action.payload);
    default:
      return state;
  }
}

export default { reducer, getInitialState };