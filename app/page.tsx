import Image from 'next/image'
import NavLandingPage from '@/components/NavLandingPage'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <NavLandingPage/>
            <Container>
                <div className="bg-gray-500 w-full h-60 rounded-lg mt-5 flex items-center justify-center bg-opacity-40">
                    <Button asChild>
                        <Link href={'/login'}>Join Now</Link>
                    </Button>     
                </div>
            </Container>
        </>        
    )
}
