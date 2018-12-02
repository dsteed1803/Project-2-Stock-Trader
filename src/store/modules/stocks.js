import stocks from '../../data/stocks';

//ToDo: Create const called state that is a data object{}
    //ToDo: Create an array called stocks inside the state object done2
const state = {
    stocks: []
};


//ToDo: Create const called mutations that is a data object{}
    //ToDo: Inside mutations object create a vuex method called 'SET_STOCKS' that takes two parameters (state, stocks)
        //ToDo: Inside 'SET_STOCKS' set state.stocks equal to stocks done3

const mutations = {
    SET_STOCKS(state, stocks) {
      state.stocks=stocks;
    },
    RND_STOCKS(state) {
        state.stocks.forEach(stock);
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    }
};

    //ToDo: Inside mutations object create a vuex method called 'RND_STOCKS' that takes one parameter (state) done
        //ToDo: Inside 'RND_STOCKS' your will create a state.stocks.forEach that is a point function that passes stock
            //ToDo: Set stock.price equal to Math.round() passing stock.price * (1 + Math.random() - 0.5)


const actions = {

    // Note: Use buyStock as reference for the comments below within actions
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },

    //ToDo: Create initStocks that is a pointer function that passes {commit}
        //ToDo: Use the commit method passing 'SET_STOCKS'  and stocks
    initStocks: ({commit}, order) => {
        commit('SET_STOCKS', order);
    },

    //ToDo: Create randomizeStocks that is a pointer function that passes {commit}
        //ToDo: Use the commit method passing 'RND_STOCKS'
    randomizeStocks: ({commit}, order) => {
        commit('RND_STOCKS', order);
    }
};

//ToDo: Create const called getters that is a data object{}
    //ToDo: Inside getters object create stocks that is a pointer function that passes the state
        //ToDo: Return state.stocks

const getters = {
    stocks: ({commit}, state) => {
        return state.stocks
    }

};

export default {
    state,
    mutations,
    actions,
    getters
  //ToDo: Export the const state, mutations, actions, and getters
};