class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount() {

        fetch(`https://games-world.herokuapp.com/games/`)
            .then(response => response.json())
            .then(data => this.setState({ games: data })
            );
    }

    render() {
        const { games } = this.state;
        console.log(this.state)

        return (
            <ul>
                {games.map(game => (
                    <li className="list">
                        <h3>{game.title} </h3>
                        <p>{game.description} </p>
                        <img src={game.imageUrl} alt="nu exista imagine" />
                    </li>
                ))}
            </ul>
        );
    }
}

class Games extends React.Component {
    render() {
        return (
            <div >
                <h1 className="titluPagina">GAMES LIST</h1>
                <App />
            </div>
        );
    }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<Games />, appDOM)

