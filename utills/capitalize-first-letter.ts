// 첫 글자를 대문자로 변환하는 함수
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
