import React, { useState, useEffect, useRef } from 'react';

const Person = ({
  name = '', lifeSpan = 0, initialAge = 0,
}) => {
  const [age, setAge] = useState(initialAge);
  const [isAlive, setIsAlive] = useState(true);

  const ageAddIntervalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // setAge(age + 1);

      // setState의 사용법이 2가지다 하나는 값, 두번째는 함수. 두 번쨰의 함수는 최신state를 인자로해서 설정해주는거
      setAge((age_) => age_ + 1);
    }, 1000);

    ageAddIntervalRef.current = interval;
  }, []);

  useEffect(() => {
    // console.log('>>>>>>>>>>>>>>', age);
    if ((lifeSpan - age) <= 0) {
      setIsAlive(false);
      clearInterval(ageAddIntervalRef.current);
    } else {
      setIsAlive(true);
    }
  }, [age, lifeSpan]);

  return (
    <div>
      <span>
        생사여부 :
        {isAlive ? 'O' : 'X'}
      </span>
      <span>
        이름 :
        {name}
      </span>
      <br />
      <span>
        수명 :
        {lifeSpan}
      </span>
      <br />
      <span>
        나이 :
        {age}
      </span>
    </div>
  );
};

export default Person;
