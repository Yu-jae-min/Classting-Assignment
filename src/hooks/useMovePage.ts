import { useNavigate } from 'react-router-dom';

const useMovePage = () => {
  const navigate = useNavigate();

  const moveThePage = (page: string) => {
    navigate(page);
  };

  return { moveThePage };
};

export default useMovePage;
