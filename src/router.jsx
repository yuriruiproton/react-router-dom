import { createBrowserRouter } from "react-router-dom"
import Products from "./pages/Products"
import AdminHome from "./pages/admin/adminHome"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        children:[{
            index: true,
            element:<Home/>,
        },
        {
            
            path: "/products",
            element: <Products/>,
        },{
            path:"products/:productId",
            element:<Product/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }]
    },
    {
        path: "/admin",
        element: <AdminHome/>
    }
])

export default router


