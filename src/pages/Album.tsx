import Image from "../components/Image"

import image0 from "../assets/0.png"
import image1 from "../assets/1.jpeg"
import image2 from "../assets/2.jpeg"
import image3 from "../assets/3.jpeg"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.jpeg"
import image7 from "../assets/7.png"
import image8 from "../assets/8.png"
import image9 from "../assets/9.jpeg"
import image10 from "../assets/9.png"

const imageList = [
                  image0, image1, image2, image3, image4, image5, image6,
                  image7, image8, image9, image10
                  ]

export default function Album(){
  return(
    <>
      {imageList.map((i) => (
        <Image imgSrc={i} />
      ))}
    </>
  )
}