import { useLazyLoad } from "../hooks/useLazyLoad";

interface ImageProps {
  imgSrc: string;
  lazy?: boolean; // lazy는 boolean 타입으로 변경
}

export default function Image({ imgSrc, lazy }: ImageProps) {
  const { ref, isVisible } = useLazyLoad();

  return (
    <div ref={ref}>

      {isVisible ? (
        <img src={imgSrc} alt={'imgSrc'} />
      ) : (
        <div style={{ height: '200px', background: '#f0f0f0' }}>Loading...</div>
      )}
    </div>
  );
}
