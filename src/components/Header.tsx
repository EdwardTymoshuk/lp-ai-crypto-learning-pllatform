import Logo from '@/components/Logo'
import NavBar from '@/components/NavBar'
import SideNavBar from '@/components/SideNavBar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'

const Header = () => {

	return (
		<header className='fixed flex flex-row bg-background justify-between md:justify-end h-14 items-center gap-4 border-b px-4 w-full z-10'>
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
		</header>
	)
}

export default Header
