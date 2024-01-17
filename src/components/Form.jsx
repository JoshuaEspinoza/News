import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Box,
} from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const CATEGORIAS = [
	{ value: 'general', label: 'General' },
	{ value: 'business', label: 'Negocios' },
	{ value: 'entertainment', label: 'Entretenimiento' },
	{ value: 'health', label: 'Salud' },
	{ value: 'science', label: 'Ciencia' },
	{ value: 'sports', label: 'Deportes' },
	{ value: 'technology', label: 'Tecnología' },
];

const Form = () => {
	const { categoria, handleChangeCategoria, handleSubmit } = useNoticias();
	return (
		<form onSubmit={handleSubmit}>
			<FormControl fullWidth>
				<InputLabel>Categoría</InputLabel>
				<Select
					label="Categoría"
					onChange={handleChangeCategoria}
					value={categoria}
				>
					{CATEGORIAS.map((categoria) => (
						<MenuItem
							key={categoria.value}
							value={categoria.value}
						>
							{categoria.label}
						</MenuItem>
					))}
				</Select>
				<Box sx={{ marginTop: 2 }}>
					<Button
						fullWidth
						color="primary"
						type="submit"
					>
						Buscar noticias
					</Button>
				</Box>
			</FormControl>
		</form>
	);
};

export default Form;
