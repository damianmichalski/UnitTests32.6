import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
	constructor() {
		super();

		this.state = {
			players: [
				{
					name: 'Kunegunda',
					score: 5,
				},
				{
					name: 'Antoś',
					score: 0,
				}
			]
		}
	}

	onPlayerAdd = (playerName) => {
		const newPlayer = {
			name: playerName,
			score: 0,
		}
		this.setState({
			players: [...this.state.players, newPlayer]
		})
	}

	onScoreUpdate = (playerIndex, scoreChange) => {
		this.setState({
			players: this.state.players.map((player, index) => {
				if (index === playerIndex) {
					return { ...player, score: player.score + scoreChange };
				}
				return player;
			})
		})
	}

	onPlayerRemove = (playerIndex) => {
		this.setState({
			players: this.state.players.filter((value, index) => {
				return index !== playerIndex;
			})
		})
	};

	render() {
		return (
			<div className="app">
				<h1 class="app__header">Scorekeeper</h1>
				<AddPlayer onPlayerAdd={this.onPlayerAdd} />
				<PlayersList id="playersList" players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
			</div>
		);
	}
}

export default App;