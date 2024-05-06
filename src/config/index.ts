import { IconType } from 'react-icons'
import { GiToken } from "react-icons/gi"
import { MdGridView, MdOutlineHome, MdQuestionAnswer, MdWallet } from 'react-icons/md'
import { RiNftFill } from "react-icons/ri"
import { SiStarship } from "react-icons/si"

export type SUB_MENU_ITEMS_TYPE = {
    name: string,
    icon: IconType,
    path: string,
}

export type MENU_ITEMS_TYPE = {
    name: string,
    icon: IconType,
    path: string,
    sub?: SUB_MENU_ITEMS_TYPE[],
}

export const MENU_ITEMS: MENU_ITEMS_TYPE[] = [
    {
        name: 'Home',
        icon: MdOutlineHome,
        path: '/',
    },
    {
        name: 'Products',
        icon: MdGridView,
        path: '/products',
        sub: [
            {
                name: 'AstroGenius Token',
                icon: GiToken,
                path: '/token',
            },
            {
                name: 'AstroGenius Wallet',
                icon: MdWallet,
                path: '/wallet',
            },
            {
                name: 'AstroGenius NFT',
                icon: RiNftFill,
                path: '/nft',
            },
        ]
    },
    {
        name: 'About',
        icon: SiStarship,
        path: '/about',
    },
    {
        name: 'FAQ',
        icon: MdQuestionAnswer,
        path: '/faq',
    },
]