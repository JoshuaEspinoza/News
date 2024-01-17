import { Container, Grid, Typography } from '@mui/material';

import { NoticiasProvider } from './context/NoticiasProvider';
import Form from './components/Form';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
	return (
		<NoticiasProvider>
			<Container>
				<header>
					<Typography
						variant="h1"
						component="h1"
						align="center"
						marginY={5}
						fontSize="4rem"
					>
						Buscador de noticias
					</Typography>
				</header>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignContent="center"
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Form />
					</Grid>
				</Grid>

				<ListadoNoticias />
			</Container>
		</NoticiasProvider>
	);
}

export default App;
