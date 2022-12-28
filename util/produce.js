import { enableES5, produce } from 'immer';
// immer의 produce 함수를 확장한다(직접 만든다)
export default (...args) => {
  enableES5(); // enableES5 해준 뒤에
  return produce(...args); // produce 실행
};
