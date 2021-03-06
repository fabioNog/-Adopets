import React, { useState, Component} from 'react'
import { 
  Form, 
  Icon, 
  Input, 
  Button, 
} from 'antd'

import './login.css'

import {FormComponentProps} from 'antd/lib/form/Form';

//Store
import  {ApplicationState}  from '../../store';
import { user } from '../../store/ducks/users/types';
import * as UsersActions from '../../store/ducks/users/action';

//Redux
import {connect} from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';

interface StateProps {
  users: user[]
}

interface DispatchProps {
  loadRequest(): void
}


type Props = StateProps & FormComponentProps & DispatchProps



class LoginForm extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
     
  render() {
    const {users} = this.props
    {console.log(users)}
    const { getFieldDecorator } = this.props.form;    
    return (
      <article className=" article mw6 center bg-white shadow-10 br2 pa3 pa4-ns mv3">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);

const mapStateToProps = (state: ApplicationState ) => ({
    users: state.users.data    
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Login)

