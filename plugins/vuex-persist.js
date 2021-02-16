import VuexPersistence from 'vuex-persist'

export default ({
  store
}) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
        storage: window.localStorage
        //TODO causes slow down
        //storage: window.sessionStorage
    }).plugin(store);
  });
}

