import React  from 'react';
import useInput from "../hooks/useInput";


function UseInputSample(props) {
  // 글자수 유효성 검증
  const maxLengthValidator = value => value.length <= 10;
  // @ 문자여부 체크하여 이메일 아닌지 여부 확인
  const isNotEmailValidator = value => !value.includes('@');
  // 오직 숫자만 입력 받도록 처리
  const onlyNumberValidator = value => !isNaN(value);
  const input = useInput('');
  return (
    <>
      <h4>useInput hook</h4>
      <input {...input} placeholder="아무거나 입력하세요."/>
      <p>{input.value}</p>
      <hr />
    </>
  );
}

export default UseInputSample;
