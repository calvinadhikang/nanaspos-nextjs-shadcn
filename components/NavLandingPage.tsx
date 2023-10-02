import Link from "next/link";

const route = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/docs',
        label: 'Documentation'
    },
    {
        href: '/price',
        label: 'Pricing'
    },
    {
        href: '/register',
        label: 'Register'
    }
]

const NavLandingPage = () => {
    return(
        <div className="w-full border-b h-12 flex items-center justify-center">
            <div className="w-full max-w-none md:max-w-4xl flex justify-between items-center">
                <h1 className="text-xl font-semibold">Nanas POS</h1>
                <div className="flex items-center justify-center gap-5">
                {route.map(({href, label}) => <Link className="hover:underline text-sm" href={href}>{label}</Link> )}
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-600"></div>
                </div>
            </div>
        </div>
    )
}

export default NavLandingPage;