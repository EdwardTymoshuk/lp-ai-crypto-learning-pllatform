const Header = ({ children }: { children: React.ReactNode }) => {

	return (
		<header className='fixed flex flex-row bg-background justify-between md:justify-end h-14 items-center gap-4 border-b px-4 w-full z-10'>
			{children}
		</header>
	)
}

export default Header
