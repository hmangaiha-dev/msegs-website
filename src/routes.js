import { createWebHistory, createRouter } from "vue-router";
// import VueRouter from 'vue-router'
// import Vue from 'vue'
import LandingPage from './components/LandingPage'
import Services from './components/Services'
import Projects from './components/Projects'
import Resources from './components/Resources'
import AboutUs from './components/AboutUs'


import ProjectDetails from './components/Projects/ProjectDetails'




// Vue.use(VueRouter);
const routes =[
        {
            path:'/',
            name:'landingpage',
            component:LandingPage,
        },
        {
            path:'/services',
            name:'services',
            component:Services
        },
        {
            path:'/projects',
            name:'projects',
            component:Projects
        },
        {
            path:'/projectdetails',
            name:'projectdetails',
            component:ProjectDetails
        },
        {
            path:'/resources',
            name:'resources',
            component:Resources
        },
        {
            path:'/aboutus',
            name:'aboutus',
            component:AboutUs
        }
    ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });

// const router = new VueRouter({
//     mode:'history',
//     routes // short for `routes: routes`
//  });

const router = createRouter({ history: createWebHistory(), routes })


export default router




