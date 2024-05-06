import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MENU_ITEMS, MENU_ITEMS_TYPE } from '@/config'
import Link from 'next/link'

const SideNavBar = () => {
	return (
		<nav className="flex flex-col text-xl items-center text-text-primary font-medium w-fit">
			<div className="w-full md:block md:w-auto">
				<ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
					{MENU_ITEMS.map((item: MENU_ITEMS_TYPE, index: number) => (
						!item.sub?.length ?
							<li>
								<Link
									key={index}
									href="#"
									className="flex items-center gap-2 w-full py-2 h-full text-text-primary hover:text-primary transition-all "
								>
									{item.name}
								</Link>
							</li>
							:
							<li>
								<Link
									key={index}
									href="#"
									className="flex items-center gap-2 w-full py-2 text-text-primary hover:text-primary transition-all "
								>
									<Accordion type="single" collapsible >
										<AccordionItem value={`item-${index}`} className='border-none relative'>
											<div className='flex flex-row gap-2'>
												<AccordionTrigger className='gap-1 hover:no-underline transition-none py-0'>{item.name}</AccordionTrigger>
											</div>
											<AccordionContent className="relative top-full left-0 bg-transpapent">
												{
													item.sub?.map((subItem, subIndex) => (
														<Link
															key={subIndex}
															href="#"
															className="flex items-center gap-2 w-full py-2 px-6 text-text-primary/80 hover:text-primary transition-all "
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

export default SideNavBar
