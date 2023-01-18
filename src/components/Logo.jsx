
import cover from '@/images/logos/cover.png'
import Image from 'next/image'
export function Logo(props) {
  return (
    <Image
                            
                            src={cover}
                            alt=""
                            width={100}
                            height={50}
                          />

  )
}
