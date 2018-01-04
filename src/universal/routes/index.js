import * as RouteMap from '../routes/static.js'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: RouteMap.Page,
  },
  {
    path: '/:name',
    name: 'page',
    component: RouteMap.Page,
  },
  {
    path: '/post',
    name: 'post',
    component: RouteMap.Post,
  },
  {
    path: '/category/:id',
    name: 'category',
    component: RouteMap.Category,
  }
];

export default routes;