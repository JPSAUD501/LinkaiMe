import Link from 'next/link';

export default function User({ params }:{
  params: { user: string }
}) {
  return (
    <div className='bg-black h-screen'>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        {/* Show user */}
        <h1 className='text-8xl font-black text-white'>{params.user}</h1>
      </div>
    </div>
  )
}
