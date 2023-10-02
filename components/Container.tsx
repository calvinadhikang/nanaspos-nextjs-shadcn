export default function Container({
    children
}: {
    children: React.ReactNode
}){
    return(
        <div className="w-screen flex justify-center">
            <div className="max-w-4xl w-full">
                {children}
            </div>
        </div>
    )
}