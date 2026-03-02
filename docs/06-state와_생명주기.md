# State
리액트 컴포넌트에서의 상태, 리액트 컴포넌트의 변경 가능한 데이터를 의미한다.

정의 시 꼭 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다. (성능 상의 이점으로)

### 특징
state는 하나의 자바스크립트 객체.

직접 수정해서는 안되며, 꼭 setState() 함수를 통해서만 수정해야 한다.

```js
    this.setState({
        name : 'Inje'
    })
```

## 생명주기
### 생성 (Mount)
컴포넌트의 생성자가 실행되며, 생성자에서 컴포넌트의 state를 정의하게 된다.

렌더링 후에는 componentDidMount() 함수가 호출된다.

### 업데이트
컴포넌트의 props 변경, setState()에 의한 state 변경, forceUpdate() (강제 업데이트) 함수 호출로 인해 다시 렌더링하는 것을 의미한다.

렌더링 후에는 componentDidUpdate() 함수가 호출된다.

### 죽음 (Unmount)
상위 컴포넌트에서 더 이상 컴포넌트가 화면에 표시되지 않을 때를 의미한다.

언마운트 직전, componentWillUnmount() 함수가 호출된다.

