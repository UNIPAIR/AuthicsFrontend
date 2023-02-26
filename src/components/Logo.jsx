
import cover from '@/images/logos/cover.png'
import crest from '@/images/logos/crest.png'
import Image from 'next/image'
export function Logo(props) {
  if (props.is_crest) {
    return (
      <Image
        src = {crest}
        alt=""
        width={800}
        height={800}
      /> )
  }
  return (
    <Image
                            
                            src={cover}
                            alt=""
                            width={200}
                            height={100}
                          />

  )
}
