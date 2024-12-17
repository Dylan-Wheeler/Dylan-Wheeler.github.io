"use client"

import React, { useState } from 'react'
import './ImageGallery.scss'
import GalleryImage from './GalleryImage'
import Image from 'next/image'

type ImageGalleryProps = {
  images: string[]
}

function ImageGallery(props: ImageGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState('')

  return (
    <>
      <ul className='image-gallery slide-enter-content'>
        {props.images.map((image, key) => (
          <li className='gallery-image-item' key={key}>
            <GalleryImage imageUrl={image} setLightboxImage={setLightboxImage} />
          </li>
        ))}
      </ul>
      {
        lightboxImage !== '' && 
        <div className='image-lightbox'>
          <div className='image-lightbox-background' onClick={() => setLightboxImage('')}></div>
          <Image
            className='lightbox-image'
            src={lightboxImage}
            alt='lightbox image'
            width={0}
            height={0}
            sizes="100vw"
            />
        </div>
      }
    </>
  )
}

export default ImageGallery