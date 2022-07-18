const state = () => ({
  cartProducts: [],
  dollarRate: 57,
});

const getters: { [key: string]: any } = {
  cartProducts: (
    state: any,
    getters: { [key: string]: any },
    rootState: any
  ) => {
    return state.cartProducts;
  },
  dollarRate: (state: any, getters: { [key: string]: any }, rootState: any) => {
    return state.dollarRate;
  },
};

const mutations: { [key: string]: any } = {
  setDollarRate(state: any, rate: any) {
    state.dollarRate = rate;
  },
  addProductToCart(state: any, product: any) {
    const exist = state.cartProducts.findIndex(
      (item: { [key: string]: any }) => item._id === product._id
    );
    if (exist === -1) state.cartProducts.push(product);
  },
  deleteProductFromCartByIndex(state: any, product_id: any) {
    const index = state.cartProducts.findIndex(
      (item: { [key: string]: any }) => item._id === product_id
    );
    if (index != -1) state.cartProducts.splice(index, 1);
  },
};

const actions: { [key: string]: any } = {};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
