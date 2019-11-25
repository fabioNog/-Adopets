import React from 'react'
import { 
  Form, 
  Icon, 
  Input, 
  Button, 
} from 'antd'

import './login.css'

import {FormComponentProps} from 'antd/lib/form/Form';


class LoginForm extends React.Component<FormComponentProps> {
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className=" article mw6 center bg-white shadow-10 br2 pa3 pa4-ns mv3">
        <Form  className="login-form">
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

export default Login

