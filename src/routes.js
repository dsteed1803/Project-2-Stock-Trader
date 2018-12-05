//ToDo: Import Home Component
//ToDo: Import portfolio/Portfolio Component
//ToDo: Import stocks/Stocks Component [done3]

import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';


export const routes = [
  { path: '', component: Home },

    //ToDo: Create Route for Home Component with root (/) path done
  { path: '/portfolio', component: Portfolio},
  { path: '/stocks', component: Stocks},

    //ToDo: Create Route for Portfolio Component
    //ToDo: Create Route for Stocks Component [done2]
];