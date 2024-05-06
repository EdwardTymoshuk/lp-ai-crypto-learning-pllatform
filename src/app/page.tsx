import Header from '@/components/Header'
import Logo from '@/components/Logo'
import NavBar from '@/components/NavBar'
import RegisterForm from '@/components/RegisterForm'
import SideNavBar from '@/components/SideNavBar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[url("/img/bg.svg")]'>
      <Header>
        <div className='flex flex-row justify-between w-full h-full'>
          <div className='flex flex-1'>
            <Logo />
          </div>
          <div className='flex flex-1 justify-end'>
            <NavBar />
          </div>
          <div className='flex flex-1 justify-end items-center md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='transparent'
                  size='icon'
                  className='text-text-primary hover:text-primary shrink-0 md:hidden border-0 transition-all hover:bg-transparent'
                >
                  <MdMenu className='h-5 w-5' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='flex flex-col'>
                <Link
                  href='#'
                  className='flex items-center gap-2 text-lg font-semibold'
                >
                  <Logo />
                </Link>
                <SideNavBar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Header>
      <div className='flex flex-col justify-center items-center min-h-screen w-full md:w-3/4 px-4'>
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Join the waitlist for the <span className='text-primary'>Astro Genius</span>
        </h1>
        <div className='w-full sm:w-3/4 lg:w-1/3'>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}
