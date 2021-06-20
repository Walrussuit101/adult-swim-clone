import { useEffect, useState } from 'react';
import "react-circular-progressbar/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

import "./App.css";

function App() {
	const [loaderVal, setLoaderVal] = useState(0);
	const [loaderFadeClass, setLoaderFadeClass] = useState('');

	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		if(loaderVal < 100){
			setTimeout(() => {
				setLoaderVal(loaderVal+1);
			}, 10)
		}else{
			setLoaderFadeClass('animate__animated animate__fadeOut');

			setTimeout(() => {
				setShowLoader(false);
				document.title = "[as]";
			}, 1200)
		}
	}, [loaderVal])

	if(showLoader){
		return(
			<Container>
				<Row id='loader-row' className='justify-content-center'>
					<Col xs='6'>
						<CircularProgressbar 
							value={loaderVal} 
							text={`${loaderVal}%`}
							styles={buildStyles({
								textColor: 'black',
								pathColor: 'black'
							})}
							className={loaderFadeClass}
						/>
					</Col>
				</Row>
			</Container>
		)
	}else{
		return(
			<Container>
				<Row id='as-text-row' className='justify-content-center'>
					<Col className='text-center animate__animated animate__fadeInLeft px-0' xs='auto'>
						<h1 className='as-text'>[a</h1>
					</Col>
					<Col className='text-center animate__animated animate__fadeInRight px-0' xs='auto'>
						<h1 className='as-text'>s]</h1>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App;
