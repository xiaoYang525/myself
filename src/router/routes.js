import Home from '@/pages/Home'
import Serach from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/search',
        component:Serach
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    }
]