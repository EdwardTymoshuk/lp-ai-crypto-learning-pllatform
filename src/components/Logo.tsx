import Link from 'next/link'
import { SiStarship } from 'react-icons/si'

const Logo = () => {
	return (
		<Link
			href='#'
			className='flex items-center gap-2 text-lg font-semibold'
		>
			{/* <Image src='/images/logo.png' alt='logo' width={150} height={150} /> */}
			<div className='flex flex-row items-center gap-2'><span className='text-primary'>Astro</span><SiStarship size={24} className='text-primary' /><span className='text-secondary'>Genius.</span></div>
		</Link>
	)
}

export default Logo
