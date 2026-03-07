# shared state
공유된 state.  
어떤 컴포넌트의 state에 있는 데이터를 여러개의 하위 컴포넌트에서 공통적으로 사용하는 경우를 의미한다.

## 하위 컴포넌트에서 state 공유하기
```js
    function BoilingVerdict(props) {
        if(props.celsius >= 100)
    } ...

    //부모 컴포넌트
    ...
    return (
        <BoilingVerdict celsius={parseFloat(temperature)} /> //해당 값이 자식 컴포넌트 props에 전달된다.
    )
```