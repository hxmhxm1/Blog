import Link from 'next/link'

export function Navbar(){
  return (
    <div className="flex h-16 w-full items-center justify-center">
      <Link href="/" className='mr-[1rem] font-bold'>首页</Link>
      <Link href="/blog" className='font-bold mr-[1rem]'>博客</Link>
      <Link href="/other" className='mr-[1rem] font-bold'>其它</Link>
    </div>
  )
}