
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Regiseter from "@/pages/Register"
import NotFound from "@/pages/NotFound"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;

//VueRouter.prototype原型对象添加一个方法
//location:路由跳转相关的信息
VueRouter.prototype.push = function (location, resolve, reject) {
    //当前函数this：即为VueRouter类的实例
    //相当于push方法里面this，是windows【完犊子了】
    //利用人家push方法实现路由跳转，保证push里面this,应该vueRouter类的实例

    //面试:函数apply与call区别?
    //相同的地方:都可以篡改函数里面this
    //不同的地方:apply传递参数 数组  call传递参数 逗号分割

    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

const router =  new VueRouter({
    // mode:replace,
    routes:[
        {path:`/home`,
        component:Home
    },
        {name:`search`,
        path:`/search/:keyword?`,
        component:Search
    },
        {path:`/login`,
        component:Login,
        meta:{notShow:true}
    },
        {path:`/register`,       
        component:Regiseter,
        meta:{notShow:true}
    },
        {
            path:`/`,
            redirect:`/home`
        },
        
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
    ]
})
export default router;