// css
import { Main, AddBtn } from '../styles/home.styled.component';
// AppLayout
import AppLayout from '../component/AppLayout';

const AddPage = () => {
  const onClickSubmit = (e) => {
    e.preventDefault();

    console.log('click');
  };

  return (
    <AppLayout>
      <Main>
        <form onSubmit={onClickSubmit}>
          <h1>상품추가 페이지</h1>
          <div>
            <h2>상품</h2>
            <div>
              <label>메인 이미지</label>
            </div>
            <div>
              <label>상품명</label>
            </div>
            <div>
              <label>상품가격</label>
            </div>
            <div>
              <label>성별분류</label>
            </div>
            <div>
              <label>카테고리</label>
            </div>
            <div>
              <label>카테고리 상세 분류</label>
            </div>
          </div>

          <div>
            <h2>상품 옵션 추가</h2>
            <div>
              <label>색상별 이미지</label>
            </div>
            <div>
              <label>색상</label>
            </div>
            <div>
              <label>사이즈</label>
            </div>
            <div>
              <label>수량</label>
            </div>
          </div>

          <div>
            <h2>상품 정보</h2>
            <div>
              <label>상품설명</label>
            </div>
            <div>
              <label>소재</label>
            </div>
          </div>
          <AddBtn>상품 추가</AddBtn>
        </form>
      </Main>
    </AppLayout>
  );
};

export default AddPage;
