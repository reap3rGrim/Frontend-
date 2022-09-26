/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: "/app/dashboard", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "Dashboard", // name that appear in Sidebar
    },
    {
        path: "/app/erc20",
        icon: "FormsIcon",
        name: "ERC20",
    },
    {
        path: "/app/lottery",
        icon: "FormsIcon",
        name: "Lottery",
    },

    {
        icon: "PagesIcon",
        name: "NFT Marketplace",
        routes: [
            // submenu
            {
                path: "/app/404",
                name: "404",
            },
            {
                path: "/app/blank",
                name: "Blank",
            },
            {
                path: "/app/nftmarketplace/sellnfts",
                name: "Sell NFTs",
            },
            {
                path: "/app/nftmarketplace/buynfts",
                name: "Buy NFTs",
            },
            {
                path: "/app/nftmarketplace/mintnfts",
                name: "Mint NFTs",
            },
        ],
    },
    {
        icon: "PagesIcon",
        name: "Defi",
        routes: [
            // submenu
            {
                path: "/app/defi/readme",
                name: "Readme",
            },
        ],
    },
]

export default routes
