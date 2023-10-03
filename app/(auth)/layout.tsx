export default function Layout({
    children
}: {
    children: React.ReactNode
}){
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-secondary">
            <div className="w-full max-w-md p-4 rounded-lg shadow-lg bg-background">
                {children}
            </div>
        </div>
    )
}