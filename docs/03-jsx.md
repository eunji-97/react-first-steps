# JSX
자바 스크립트의 확장 문법
JavaScript + XML/HTML = JSX이다.

### 예시
`const element = <h1>리액트를 배워보자</h1>`
html 코드를 변수 element에 담아 사용할 수 있다.

## 역할
JSX는 내부적으로 XML/HTML 코드 > JavaScript로 변환하는 과정을 거치게 되는데, 이 역할을 하는 것이 createElement() 함수이다.
(JSX 문법 사용 시 리액트에선 내부적으로 createElement() 함수를 사용되도록 변환함.)

### createElement() 함수 구조
`React.createElement(type, [props], [...children])`
type : 엘리먼트의 타입 (html 태그나 다른 리액트 컴포넌트)
props 
children : 엘리먼트의 자식 엘리먼트

## 장점
간결함, 가독성 : 매번 createElement 함수를 쓰지 않아도 되기 때문에.
보안성 : 기본적으로 ReactDOM은 랜더링 전 임베딩 값을 모두 문자열로 변환하여 Injection Attack(입력창에 소스코드를 입력하여 실행되도록 하는 해킹 방법)에 대비할 수 있음.

## 사용법
`function formatName(user) { return user.firstName + ' ' + user.lastName; }`
`const element = ( <h1> {formatName(user)} </h1>)`
중괄호를 사용해 변수나 함수를 사용한다.
