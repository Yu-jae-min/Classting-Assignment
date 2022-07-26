# Classting-Assignment

클래스팅(Classting) 프론트엔드 과제입니다.

<br />

## 🎉 **배포 주소**

- [https://random-quiz-game.netlify.app/](https://random-quiz-game.netlify.app/)

<br />

## 👬 **팀원**

- 개인 프로젝트

<br>

## 📅 **개발 기간**

- 2022년 07월 30일 ~ 2022년 08월 01일

<br />

## 🔧 **기술스택**

- Typescript, React, Sass, recoil

<br />

## 💻 **설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone https://github.com/Yu-jae-min/Classting-Assignment.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

<br />

## 📒 **구현 목록**

|메인|퀴즈 풀기|
|:-:|:-:|
|![메인](https://user-images.githubusercontent.com/85284246/181919905-5dab08bb-6075-4db9-a927-df81d970fc2f.png)|![퀴즈풀기](https://user-images.githubusercontent.com/85284246/181919936-43ed8aaa-f7f4-408e-baff-fa63a842c0b1.png)|
|오답 노트|차트 보기|
|![오답노트](https://user-images.githubusercontent.com/85284246/181919921-43b78bed-3046-4001-b525-5a86735dc2d0.png)|![차트보기](https://user-images.githubusercontent.com/85284246/181919928-db15eeed-c976-4a73-b792-7a59deee58c1.png)|

<br />

### # 필수 구현

- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.

- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.

- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.

  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.

  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.

  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.

- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.

  - [x] 퀴즈를 마칠 때까지 소요된 시간

  - [x] 정답 개수

  - [x] 오답 수

<br>

### # 추가 구현

- [x] 정 오답에 대한 비율을 차트로 표기

- [x] 다시 풀기

- [x] 오답 노트

- [x] 예외 처리

  - [x] API 호출 로딩 혹은 에러 발생 시 해당 문구 노출

  - [x] 틀린 퀴즈가 없거나 완료한 퀴즈가 없는 경우 오답 노트 페이지에 목록 없음 문구 노출

  - [x] 완료한 퀴즈가 없는 경우 차트 보기 페이지에 통계 없음 문구 노출

  - [x] 문제 풀이 시 문항을 선택하지 않은 경우 경고 모달창 노출

<br>

### # 테스트 작성

- [x] 컴포넌트에 대한 테스트를 작성

<br>

### # 배포

- [x] Netlify 배포

<br>

## 🎉 **프로젝트 리뷰**

react testing library를 활용한 컴포넌트 테스트를 처음 시도해보았기 때문에 매우 미흡하다고 느껴 아쉬움이 많이 남습니다.
테스트 코드를 작성해보며 느낀 점은 다양한 테스트 케이스를 미리 작성한 후 해당 테스트 케이스를 참고하여 점진적으로 테스트 코드를 작성해나감으로써 사전에 다양한 예외 사항에 대해 고민하여 처리할 수 있고 이로 인해 프로젝트의 퀄리티가 높아질 수 있다는 것을 알 수 있었습니다.

<br>