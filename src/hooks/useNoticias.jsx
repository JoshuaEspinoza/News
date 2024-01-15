import { useContext } from 'react';
import noticiasContext from '../context/NoticiasProvider';

const useNoticias = () => {
	return useContext(noticiasContext);
};

export default useNoticias;
