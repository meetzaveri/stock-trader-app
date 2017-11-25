import home from './components/home.vue';
import portfolio from './components/Portfolio/portfolio.vue';
import stocks from './components/Stocks/stocks.vue';

export const routes =[
    {path:'/',component:home},
    {path:'/portfolio',component:portfolio},
    {path:'/stocks',component:stocks}
];