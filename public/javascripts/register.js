const SighUp = React.createClass({
    render: function () {
        return <div>
            <Title/>
            <Bottom/>
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">注册</li>
            </ul>
        </div>
    }
});

const Bottom = React.createClass({
    render:function () {
        return <div id="form-4" className="design">
            <h1 className="col-xs-offset-1 col-xs-10">注册</h1>
            <p className="col-xs-offset-1 col-xs-10">
                <input type="text" name="login" className="form-4" placeholder="用户名" required/>
            </p>
            <p className="col-xs-offset-1 col-xs-10">
                <input type="password" name='password' placeholder="密码" required/>
            </p>
            <p className="col-xs-offset-1 col-xs-10">
                <input type="password" name='password' placeholder="确认密码" required/>
            </p>

            <p className="col-xs-offset-3 col-xs-5">
                <input type="submit" name="submit" value="注册"/>
            </p>
        </div>
    }
})

ReactDOM.render(<SighUp/>, document.getElementById('content'));