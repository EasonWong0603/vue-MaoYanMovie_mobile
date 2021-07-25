import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import cityModule from "./city/index";
import detailModule from "./detail/index";
import toprateModule from "./toprate/index";

const store = new Vuex.Store({
  modules: {
    city: cityModule,
    detail: detailModule,
    toprate: toprateModule,
  },
});

export default store;
