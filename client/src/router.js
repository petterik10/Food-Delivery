import Restaurants from './pages/Restaurants.vue';
import Dishes from './pages/Dishes.vue';

const routes = [
    {
        name: 'Restaurants',
        path: '/',
        component: Restaurants
    },

    {
        name: 'Dishes',
        path: '/dishes/:id',
        component: Dishes
    },
];

export default routes;