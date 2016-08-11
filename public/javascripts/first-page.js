const App = React.createClass({
    getInitialState: function () {
        return {
            rooms: []
        }
    },

    componentDidMount: function () {
        $.get('/selectRoom', (data)=> {
            this.setState({rooms:data});
            //console.log(this.state.rooms);
        })
    },

    render: function () {
        return <div>
            <Nav/>
            <List rooms={this.state.rooms}/>
        </div>;
    }
});

const Nav = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">洗刷刷</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const List = React.createClass({
    render: function () {
        const rooms = this.props.rooms.map((room,index)=>{
            return <div className="row my-top my-padding  my-write" key={index}>
                <div className="col-xs-6 text-center">{JSON.stringify(room._id)}</div>
                <div className="col-xs-6 text-center">
                    <button className="btn btn-info">预约</button>
                </div>
            </div>
        });
        return <div className="row">
            <div className="row my-bg my-write my-bottom">
                <h4 className="col-xs-6 text-center">房间号</h4>
                <h4 className="col-xs-6 text-center">预约状态</h4>
            </div>
            <div>
                {rooms}
            </div>
        </div>
    }
});

ReactDOM.render(<App />, document.getElementById('content'));