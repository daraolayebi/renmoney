import Vue from 'vue'
import Router from 'vue-router'
import PaymentForm from '@/views/PaymentForm'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'PaymentForm',
            component: PaymentForm
        }
    ]
})
