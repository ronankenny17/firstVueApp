function loadPage (component) {
// '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
        `@/pages/${component}.vue`)}
export default [
    { path: '/', component: loadPage('Home') },
   // { path: '/', component: loadPage('Blog') },
    { path: '/home', component: loadPage('Home') },
    { path: '/blog', component: loadPage('Blog') } ,
    { path: '/projects', component: loadPage('Projects') },
    { path: '/calendar', component: loadPage('Calendar') } ,
    { path: '/Timer', component: loadPage('Timer') }
]
