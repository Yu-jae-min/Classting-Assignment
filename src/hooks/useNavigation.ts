import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const navigation = (page: string) => {
    navigate(page);
  };

  return { navigation };
};

export default useNavigation;

/*
  테스트 케이스
  1) navigation 함수 리턴
  2) 파라미터는 string 타입 전달
*/
