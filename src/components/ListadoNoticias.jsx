import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia.jsx';

const ListadoNoticias = () => {
	const { noticias } = useNoticias();

	return (
		<>
			<Typography
				textAlign="center"
				marginY={5}
				variant="h3"
				component="h2"
			>
				últimas noticias
			</Typography>
			<Grid
				container
				spacing={2}
			>
				{noticias.map((noticia) => (
					<Noticia
						key={crypto.randomUUID()}
						noticia={noticia}
					/>
				))}
			</Grid>
		</>
	);
};

export default ListadoNoticias;
