import { useState, useEffect, createContext } from 'react';

const noticiasContext = createContext();

// eslint-disable-next-line react/prop-types
const NoticiasProvider = ({ children }) => {
	const [categoria, setCategoria] = useState('general');
	const [noticias, setNoticias] = useState([]);
	const handleChangeCategoria = (e) => {
		setCategoria(e.target.value);
	};

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
				import.meta.env.VITE_API_KEY
			}`;
			const response = await fetch(url);
			const data = await response.json();

			setNoticias(data.articles);
		};
		consultarAPI();
	}, [categoria]);

	return (
		<noticiasContext.Provider
			value={{ categoria, handleChangeCategoria, noticias }}
		>
			{children}
		</noticiasContext.Provider>
	);
};

export { NoticiasProvider };

export default noticiasContext;
