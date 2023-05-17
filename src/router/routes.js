import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Regiseter from "@/pages/Register"
import NotFound from "@/pages/NotFound"
import Detail from "@/pages/Detail"
export default 
    [
        {path:`/home`,
        component:Home
    },
        {name:`search`,
        path:`/search/:keyword?`,
        component:Search
    },
        {name:`detail`,
        path:`/detail/:skuId?`,//这里的 :skuId? 是路由参数，表示在路径中可以匹配一个名为 skuId 的参数。其中 ? 表示这个参数是可选的，如果不提供则会留空。
        component:Detail
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
