import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Home'
import SobreMi from './views/AboutMe'
import Contacto from './views/Contact'
import Post from './views/Post'
import Articulo from './views/Article'
import NotFound from './views/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})