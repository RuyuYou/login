const SighUp = React.createClass({
    getInitialState: function () {
        return {
            user: []
        }
    },

    target: function () {
        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        let surepassword = $("input[name=password-sure]").val();
        if (surepassword === password) {
            $.post('/insertUser', {name: username, password});
        }
        else {
            alert("两次输入密码不相同，请重新输入");
        }

    },

    render: function () {
        return <div>
            <Title/>
            <Bottom target={this.target}/>
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
    render: function () {
        return <div id="form-4" className="design">
            <h1 className="col-xs-offset-1 col-xs-10">注册</h1>
            <form>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="text" name="username" placeholder="用户名"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password' placeholder="密码"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password-sure' placeholder="确认密码"/>
                </p>

            </form>
            <p className="col-xs-offset-3 col-xs-5">
                <button className="btn btn-primary" onClick={this.props.target}>注册</button>
            </p>
        </div>
    }
})

ReactDOM.render(<SighUp/>, document.getElementById('content'));