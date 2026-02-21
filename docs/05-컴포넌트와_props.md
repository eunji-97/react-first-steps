# 컴포넌트
리액트는 컴포넌트 기반의 구조이다.

작은 컴포넌트들의 조합으로 하나의 페이지를 구성한다.

## 리액트 컴포넌트
어떠한 속성들을 (props) 입력으로 받아 리액트 엘리먼트를 생성해 출력하는 역할을 한다.

## props
리액트 컴포넌트의 속성을 의미한다.

컴포넌트 속 재료로, 컴포넌트에 전달할 자바스크립트 객체이다.

### 사용법
```js
    function App(props) {
        return (
            <Profile name="이름" viewCount={1500} />
        );
    }
```

중괄호를 사용한 viewCount는 무조건 자바스크립트 코드로 들어가게 된다.

모든 속성은 Profile 컴포넌트에 props로 전달된다.

## 컴포넌트 만들기
### 컴포넌트 종류
- 클래스 컴포넌트
```js
class Welcome extends React.Component{
    render() {
        return <h1>안녕, {this.props.name}</h1>
    }
}
```
React.Component를 상속받아 리액트 컴포넌트가 된 Welcome 클래스


- 함수 컴포넌트 > Hook (훅)
```js
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>
}
```
컴포넌트를 일종의 함수처럼 생각한다. (여기서 발전된게 Hook)

### 컴포넌트 렌더링
```js
function Welcome(props){
    return <h1>안녕, {props.name}</h1>
}

const element = <Welcome name='이름'/>;
const root = ReactDom.createElement(document.getElementId('root'));
root.render(element) //렌더링
```

## 컴포넌트 합셩
여러개의 컴포넌트를 합쳐 하나로 만드는 것

## 컴포넌트 추출
큰 컴포넌트 중 기능 단위로 일부를 추출해 새로운 컴포넌트를 만드는 것