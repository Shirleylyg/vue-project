import Vue from 'vue'
import VueRouter from 'vue-router'

import pay from '../components/pay/pay'
import ordersus from '../components/ordersus/ordersus'
import axios from 'axios'
import paysus from '../components/paysus/paysus'
import Login from '../components/login/Login'
import Register from '../components/register/register'
import Users from '../components/users/Users'
import orderPage from '../components/orderPage/orderpage'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'
import News from '../components/news/news'
import Order from '../components/detail/order/order'
import bannerDetail from '../components/homePage/carousel/detail0'
import bannerDetail1 from '../components/homePage/carousel/detail1'
import bannerDetail2 from '../components/homePage/carousel/detail2'
import searchDetail from '../components/homePage/search/searchDetail'
import orderlist from '../components/orderlist/orderlist'

Vue.use(VueRouter);


const router = new VueRouter({
		routes:[
			{
				path:'/Login',
				name:'Login',
				component:Login
			},
			{
				path:'/Register',
				name:'Register',
				component:Register
			},
			{

				path:'/Users',
				name:'Users',
				component:Users
			},
			{
				path:'/',
				name:'HomePage',
				component:HomePage,
			},
			{
				path:'/Detail/:id',
				name:'Detail',
				component:Detail,
			},
			{
				path:'/ListPage/:city',
				name:'ListPage',
				component:ListPage,
			},
			{
				path:'/orderPage',
				name:'orderPage',
				component:orderPage
			},
			{
				path:'/orderlist',
				name:'orederlist',
				component:orderlist
			},
			{

				path:'/pay',
				name:'pay',
				component:pay
			},
			{
				path:'/paysus',
				name:'paysus',
				component:paysus
			},
			{
				path:'/ordersus',
				name:'ordersus',
				component:ordersus
			},
			{
				path:'/carousel/detail0',
				name:'detail',
				component:bannerDetail,
			},
			{

				path:'/carousel/detail1',
				name:'detail1',
				component:bannerDetail1,
			},
			{

				path:'/carousel/detail2',
				name:'detail2',
				component:bannerDetail2,
			},
			{
				path:'/search/searchDetail',
				name:'searchDetail',
				component:searchDetail,
			},
			{
				path:'/News',
				name:'News',
				component:News,
			},
			{
				path:'/Order/:id',
				name:'Order',
				component:Order,
			}
		]
})


export default router;