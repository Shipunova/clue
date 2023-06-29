import { ADMIN_ROUTE, HOME_ROUTE, ARTICLES_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, WISHLIST_ROUTE } from "./utils/consts"
import ProductPage from "./Pages/ProductPage/ProductPage"
import Auth from "./Pages/Auth/Auth"
import Catalog from "./Pages/Catalog/Catalog"
import WishList from "./Pages/WishList/WishList"
import AdminPanel from "./Pages/AdminPanel/AdminPanel"
import Articles from "./Pages/Articles/Articles"
import Contacts from "./Pages/Contacts/Contacts"
import Home from "./Pages/Home/Home"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: WISHLIST_ROUTE,
        Component: WishList
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: WISHLIST_ROUTE,
        Component: WishList
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    
]