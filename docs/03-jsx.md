# JSX
자바스크립트의 확장 문법이다.

JavaScript + XML/HTML = JSX

### 예시

```js
const element = <h1>리액트를 배워보자</h1>
```

HTML 코드를 변수 `element`에 담아 사용할 수 있다.

## 역할

JSX는 내부적으로 XML/HTML 코드를 JavaScript로 변환한다. 이 변환을 수행하는 것이 `createElement()` 함수이다.

(JSX 문법을 사용하면 리액트는 내부적으로 `createElement()`를 호출하도록 변환한다.)

### createElement() 함수 구조

```js
React.createElement(type, [props], [...children])
```

- `type`: 엘리먼트의 타입 (HTML 태그나 다른 리액트 컴포넌트)
- `props`: 속성 객체
- `children`: 엘리먼트의 자식 엘리먼트들

## 장점

- 간결함, 가독성: 매번 `createElement`를 직접 작성할 필요가 없다.
- 보안성: 기본적으로 ReactDOM은 렌더링 전에 임베딩 값을 모두 문자열로 변환하여 Injection 공격을 방지한다.

## 사용법

```js
function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const element = (
	<h1>{formatName(user)}</h1>
)
```

중괄호를 사용해 변수나 함수를 넣을 수 있다.
