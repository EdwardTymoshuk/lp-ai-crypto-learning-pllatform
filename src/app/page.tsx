import RegisterForm from '@/components/RegisterForm'


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[url("/img/bg.svg")]'>
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
