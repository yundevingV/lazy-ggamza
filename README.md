# Lazy Ggamza

lazy loading 을 활용해 깜자사진 최적화를 할 것 입니다.

# Lazy Loading ?

화면에 보이지 않은 이미지들은 로딩 시점을 뒤로 미룬다.

## 성능향상
이미지 로딩시점을 뒤로 미루기 때문에 성능이 향상

## 비용감소
이미지를 보여주는 수가 줄기 때문에 바이트 용량이 감소

## 결과

실험 환경 : disable cache / slow 4G
lazy loading을 구현하지 않았을 때 모든 컨텐츠를 불러오는데 3.1초 정도 소요 됩니다.

![image](https://github.com/user-attachments/assets/35c97a62-b829-4a8e-b0df-46ed079d714d)

lazy loading을 구현했을 때 모든 컨텐츠를 불러오는데 1.4초 정도 소요 됩니다.
![image](https://github.com/user-attachments/assets/5f8f37d8-1cc3-453f-896f-50894fe3306e)
