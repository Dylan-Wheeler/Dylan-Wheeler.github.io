import path from 'path'
import fs from 'fs'

export const getPhotos = () => {
  const folder = path.join(process.cwd(), 'public/photos')
  const photos = fs.readdirSync(folder)

  return photos.map(photo => {
    return path.join("/photos", photo)
  })
}