import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./App.css";

function App() {
	return (
		<Container id='as-text-container'>
			<Row className='justify-content-center'>
				<Col className='text-center animate__animated animate__fadeInLeft px-0' xs='auto'>
					<h1 className='as-text'>[a</h1>
				</Col>
				<Col className='text-center animate__animated animate__fadeInRight px-0' xs='auto'>
					<h1 className='as-text'>s]</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
