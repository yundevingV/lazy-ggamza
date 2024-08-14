
interface ImageProps {
  imgSrc : string;
}

export default function Image({imgSrc} : ImageProps) {
  return(
    <>
      <img src={imgSrc} alt='x' />
    </>
  )
}