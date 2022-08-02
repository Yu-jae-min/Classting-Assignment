import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const navigation = (page: string) => {
    navigate(page);
  };

  return { navigation };
};

export default useNavigation;
