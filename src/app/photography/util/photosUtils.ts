import path from 'path'
import fs from 'fs'

export const getPhotos: () => string[] = () => {
  const folder = path.join(process.cwd(), 'public/photos/compressed')
  const photos = fs.readdirSync(folder)

  return photos.map(photo => {
    return path.join("/photos/compressed", photo)
  })
}