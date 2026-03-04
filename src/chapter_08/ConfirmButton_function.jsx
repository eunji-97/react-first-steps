import React, { useState } from "react";

//함수 컴포넌트
function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsComfirmed) => !prevIsComfirmed);
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButtonFunction;