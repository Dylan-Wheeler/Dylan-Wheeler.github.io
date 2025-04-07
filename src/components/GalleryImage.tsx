"use client"

import React from 'react'
import Image from 'next/image'
import './ImageGallery.scss'
import { useState } from 'react'

type GalleryImageProps =  {
  imageUrl: string,
  setLightboxImage: (a: string) => void
}

function GalleryImage(props: GalleryImageProps) {
  const [loadingStatus, setLoadingStatus] = useState('loading')

  return (
    <>
      <Image
        className={'gallery-image ' + loadingStatus}
        src={props.imageUrl}
        alt='photography page photo'
        width={500}
        height={500}
        style={{
          width: '24rem',
          height: '24rem',
        }}
        sizes="100vw"
        onLoad={() => setLoadingStatus('loaded')}
        onClick={() => props.setLightboxImage(props.imageUrl)}
        />
    </>
  )
}

export default GalleryImage
