import Image from "../components/Image"

import image1 from "../assets/1.jpeg"
import image2 from "../assets/2.jpeg"
import image3 from "../assets/3.jpeg"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.jpeg"

const imageList = [image1,image2,image3,image4,image5,image6]

const imageBigList = [...imageList, ...imageList, ...imageList, ...imageList, ...imageList, ...imageList, ...imageList]


export default function Album(){
  return(
    <>
      {imageBigList.map((i) => (
        <Image imgSrc={i} />
      ))}
    </>
  )
}