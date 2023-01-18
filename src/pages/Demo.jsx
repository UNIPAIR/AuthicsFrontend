import Head from 'next/head'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { useState } from 'react'


export default function Demo() {
  const [fileName, setFileName] = useState('');
  return (
    
      
    <>
   <AuthLayout>

   <Head>
        <title>Try it out - Waldo</title>
      </Head>
      <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
       </Link>
      <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-red-900 sm:text-7xl">
        Try it out{' '}
        
      </h1>
      </Container>
      <div className="max-w-xl">
      <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-slate-600 border-dashed rounded-md appearance-none cursor-pointer hover:border-slate-900 focus:outline-none mb-7" >
        <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-900 " fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div style={{  maxWidth: "10rem", overflow: 'hidden',  whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
  <input type="file" name="file_upload" className='hidden' onChange={e => setFileName(e.target.files[0].name)}  />
  <span className="font-medium text-slate-900 ">{fileName || 'Drop a file here'}</span>
</div>
        </span>
    </label>
</div>
<TextField
            label="Private Key"
            id="privatekey"
            className = "mb-8"
            required
          />


 <div>
 <Button
 type="submit"
    variant="solid"
    color="blue"
    className="w-full mb-4"
    
      >
    <span>   Endorse this file <span aria-hidden="true">&rarr;</span>
              </span>
         
            </Button>    

 </div>
<div>

<Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
              
            >
              <span>
                See who has endorsed this file<span aria-hidden="true">&rarr;</span>
              </span>
            </Button>

</div>


   </AuthLayout>

            
</>
 
  )
}
