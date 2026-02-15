import React from "react";

function Book(props) {
  return (
    <div>
      <h2>{`이 책의 이름은 ${props.name}.`}</h2>
      <p>{`이 책의 페이지는 ${props.numOfPage} 페이지 입니다.`}</p>
    </div>
  );
}

export default Book;