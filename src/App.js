import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import ShareButton from 'react-social-share-buttons'

const diaB = moment("2016-12-11 18:00:00 PM", "YYYY-MM-DD HH:mm:ss a");
const shareText = 'Tiempo que lleva Boca Juniors siendo puntero';
class App extends Component {
	state = {
		currentTime: moment()
	};

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.setState({
				currentTime: moment()
			})
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src='http://www.bocajuniors.com.ar/css/images/logoBoca.png' alt="logo" className='appLogo' />
					<h1 className="App-title">Tiempo siendo puntero</h1>
				</header>
				<div className="image">
					<div className="caption">
						<p>{this.state.currentTime.diff(diaB, 'seconds')} segundos</p>
						<p>{this.state.currentTime.diff(diaB, 'minutes')} minutos</p>
						<p>{this.state.currentTime.diff(diaB, 'hours')} horas</p>
						<p>{this.state.currentTime.diff(diaB, 'days')} dias</p>
						<p>{this.state.currentTime.diff(diaB, 'months')} meses</p>
						<br></br>
						<span>Hagamos correr la voz!</span>
						<ShareButton
							compact
							socialMedia={'twitter'}
							url={"https://xkcd.com/1024/"}
							media={"https://imgs.xkcd.com/comics/error_code.png"}
							text={shareText}
						/>
						<ShareButton
							compact
							socialMedia={'facebook'}
							url={"https://xkcd.com/1024/"}
							media={"https://imgs.xkcd.com/comics/error_code.png"}
							text={shareText}
						/>
						<ShareButton
							compact
							socialMedia={'pinterest'}
							url={"https://xkcd.com/1024/"}
							media={"https://imgs.xkcd.com/comics/error_code.png"}
							text={shareText}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
