import React, {SyntheticEvent} from 'react'
import { 
  Form, 
  Icon, 
  Input, 
  Button, 
} from 'antd'

import './login.css'

import {FormComponentProps} from 'antd/lib/form/Form';


class NormalLoginForm extends React.Component<FormComponentProps> {

  handleSubmit (event: SyntheticEvent ) {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      console.log(err)
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className=" article mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black10">
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

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login

