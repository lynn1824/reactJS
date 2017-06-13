class Count extends React.Component {
    constructor() {
        super();
        this.state = { count:1 };
    }
    update() {
        this.setState({ count: ++ this.state.count });
    }
    render() {
        return (
            <div>
                <h1>Count</h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

window.countObj = ReactDOM.render(
    <Count/>,
    document.getElementById('content')
);