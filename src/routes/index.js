import { lazy } from "react"

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Forms = lazy(() => import("../pages/Forms"))
const Cards = lazy(() => import("../pages/Cards"))
const Charts = lazy(() => import("../pages/Charts"))
const Buttons = lazy(() => import("../pages/Buttons"))
const Modals = lazy(() => import("../pages/Modals"))
const Page404 = lazy(() => import("../pages/404"))
const Blank = lazy(() => import("../pages/Blank"))
const ERC20 = lazy(() => import("../pages/ERC20"))
const Lottery = lazy(() => import("../pages/Lottery"))
const SellNFT = lazy(() => import("../pages/SellNFT"))
const BuyNFT = lazy(() => import("../pages/BuyNFT"))
const MintNFT = lazy(() => import("../pages/MintNFT"))
const Readme = lazy(() => import("../pages/Readme"))
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
    {
        path: "/dashboard", // the url
        component: Dashboard, // view rendered
    },
    {
        path: "/erc20",
        component: ERC20,
    },
    {
        path: "/lottery",
        component: Lottery,
    },
    {
        path: "/forms",
        component: Forms,
    },
    {
        path: "/cards",
        component: Cards,
    },
    {
        path: "/charts",
        component: Charts,
    },
    {
        path: "/buttons",
        component: Buttons,
    },
    {
        path: "/modals",
        component: Modals,
    },
    {
        path: "/404",
        component: Page404,
    },
    {
        path: "/blank",
        component: Blank,
    },
    {
        path: "/nftmarketplace/sellnfts",
        component: SellNFT,
    },
    {
        path: "/nftmarketplace/buynfts",
        component: BuyNFT,
    },
    {
        path: "/nftmarketplace/mintnfts",
        component: MintNFT,
    },
    {
        path: "/defi/readme",
        component: Readme,
    },
]

export default routes
