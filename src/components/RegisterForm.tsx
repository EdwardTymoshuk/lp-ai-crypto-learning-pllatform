'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Spinner from './Spinner'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

const formSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email().max(100)
})


const RegisterForm = () => {
	const [toggleSpinner, setToggleSpinner] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: ''
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setToggleSpinner(true)
		console.log(values)
		// setToggleSpinner(false)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4 w-full">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-text-primary'>Username</FormLabel>
							<FormControl>
								<Input placeholder="Username" {...field} className='border-none focus-visible:ring-1 focus-visible:ring-primary' />
							</FormControl>
							<FormMessage className='text-danger' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-text-primary'>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} className='border-none focus-visible:ring-1 focus-visible:ring-primary' />
							</FormControl>
							<FormMessage className='text-danger' />
						</FormItem>
					)}
				/>
				<Button type="submit" className='w-full'>{toggleSpinner ? <Spinner /> : 'Join'}</Button>
			</form>
		</Form>
	)
}

export default RegisterForm
