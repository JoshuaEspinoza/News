import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/* eslint-disable react/prop-types */
const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia;
	return (
		<Grid
			item
			md={6}
			lg={6}
		>
			{urlToImage && (
				<Card>
					<CardMedia
						component="img"
						alt={`imagen de la noticia ${title}`}
						image={urlToImage}
						height={250}
						sx={{ cursor: 'pointer' }}
					/>
					<CardContent
						sx={{ paddingTop: 4, paddingLeft: 2, paddingRight: 1.4 }}
					>
						<Typography
							variant="body1"
							color="error"
							marginBottom="12px"
						>
							{source.name}
						</Typography>
						<Typography
							variant="h5"
							component="div"
							marginBottom="20px"
							textAlign="left"
						>
							{title}
						</Typography>
						<Typography
							variant="body2"
							marginBottom="20px"
						>
							{description}
						</Typography>
						<CardActions>
							<Link
								href={url}
								target="_blank"
								variant="button"
								width="100%"
								textAlign="center"
								sx={{ textDecoration: 'none' }}
							>
								Leer Noticia
							</Link>
						</CardActions>
					</CardContent>
				</Card>
			)}
		</Grid>
	);
};

export default Noticia;
