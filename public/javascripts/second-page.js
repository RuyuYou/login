const App = React.createClass({
    render: function () {
        return <div>
            <Header/>
            <Middle/>
            <List/>
        </div>
    }
});

const Header = React.createClass({
    render: function () {
        return  <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">2号房</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const Middle = React.createClass({
    render: function () {
        return <div className="row middle my-write">
            <h4 className="col-xs-6 text-center">时间段</h4>
            <h4 className="col-xs-6 text-center">状态</h4>
        </div>

    }
});
const List = React.createClass({
    render: function () {
        return <div>
            <div className="row list">
                <ul className="col-xs-6 text-center">17：00-18：00</ul>
                <div className="col-xs-6 text-center ">
                    <button className=" btn btn-info">预约</button>
                </div>
            </div>
            <div className="row list">
                <ul className="col-xs-6 text-center">18：00-19：00</ul>
                <div className="col-xs-6 text-center ">
                    <button className=" btn btn-info">预约</button>
                </div>
            </div>
            <div className="row list">
                <ul className="col-xs-6 text-center">19：00-20：00</ul>
                <div className="col-xs-6 text-center ">
                    <button className=" btn btn-info">预约</button>
                </div>
            </div>
        </div>
    }
});
ReactDOM.render(<App/>, document.getElementById('content'));