'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MENU_ITEMS, MENU_ITEMS_TYPE } from '@/config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
	const currentPath = usePathname()
	return (
		<nav className="flex flex-row text-sm items-center text-text-primary font-medium w-fit">
			<div className="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
					{MENU_ITEMS.map((item: MENU_ITEMS_TYPE, index: number) => (
						!item.sub?.length ?
							<li>
								<Link
									key={index}
									href="#"
									className={cn('flex items-center gap-2 w-full px-6 h-full text-text-primary hover:text-primary transition-all', {
										'text-primary': currentPath === item.path
									})}
								>
									{item.name}
								</Link>
							</li>
							:
							<li>
								<Link
									key={index}
									href="#"
									className="flex items-center gap-2 w-full rounded-lg py-2 text-text-primary hover:text-primary transition-all "
								>
									<Accordion type="single" collapsible>
										<AccordionItem value={`item-${index}`} className='border-none relative'>
											<div className='flex flex-row gap-2'>
												<AccordionTrigger className='gap-1 px-6 hover:no-underline transition-none'>{item.name}</AccordionTrigger>
											</div>
											<AccordionContent className="absolute top-full left-0 bg-background">
												{
													item.sub?.map((subItem, subIndex) => (
														<Link
															key={subIndex}
															href="#"
															className="flex items-center gap-2 w-full rounded-lg py-2 px-6 text-text-primary/80 hover:text-primary transition-all "
														>
															<subItem.icon size={24} /> {subItem.name}
														</Link>
													))
												}
											</AccordionContent>
										</AccordionItem>

									</Accordion>
								</Link>
							</li>

					))}
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
