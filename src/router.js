import Index from './pages/index';
import Create from './pages/create';

export default [
    { path: '/', component: Index },
    { path: '/create', component: Create, props: (route) => ({ category: route.query.category }) },
];
