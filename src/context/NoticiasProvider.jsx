import { useState, useEffect, createContext } from 'react';

const noticiasContext = createContext();

// eslint-disable-next-line react/prop-types
const NoticiasProvider = ({ children }) => {
	const [categoria, setCategoria] = useState('general');
	const [noticias, setNoticias] = useState([]);
	const [click, setClick] = useState(false);
	const [pagina, setpagina] = useState(1);
	const [totalNoticias, setTotalNoticias] = useState(0);

	const handleChangeCategoria = (e) => {
		setCategoria(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setClick(true);
	};

	const handleChangePagina = async (e, arrow) => {
		setpagina(arrow);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
				import.meta.env.VITE_API_KEY
			}`;
			const response = await fetch(url);
			const data = await response.json();

			setNoticias(data.articles);
			setTotalNoticias(data.totalResults);
		};

		if (click) {
			consultarAPI();
			setClick(false);
			setpagina(1);
		}
	}, [click, categoria]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
				import.meta.env.VITE_API_KEY
			}`;
			const response = await fetch(url);
			const data = await response.json();

			setNoticias(data.articles);
			setTotalNoticias(data.totalResults);
		};

		consultarAPI();
	}, [pagina]);

	return (
		<noticiasContext.Provider
			value={{
				categoria,
				handleChangeCategoria,
				handleSubmit,
				noticias,
				totalNoticias,
				handleChangePagina,
				pagina,
			}}
		>
			{children}
		</noticiasContext.Provider>
	);
};

export { NoticiasProvider };

export default noticiasContext;
