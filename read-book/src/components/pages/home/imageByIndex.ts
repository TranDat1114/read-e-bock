import image1 from '../../../../public/background.png'
import image2 from '../../../../public/bg_1.png'
import image3 from '../../../../public/book.jpg'
import image4 from '../../../../public/background.png'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
