import './signin.css';
import { login } from "../../services/auth";
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';



const Signin = () => {
    const { user, setUser } = useContext(userContext);

    const navigate = useNavigate();


    const onFinish = (values) => {
        const result = login(values.username, values.password);
        if (result) {
            setUser(result);
            // console.log(result.name);
            navigate("/inbox");
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className="container">
           <div className="row justify-content-center">
               <div className="col-12 col-md-6 col-lg-4">
               <Form
                name="basic"
                className="mt-5"
                layout="vertical"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    className="m-auto mt-3"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    className="m-auto mt-3"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="m-auto"
                  
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    className="m-auto text-center py-2"
                >
                    <Button type="primary" htmlType="submit">
                        SIGN IN
                    </Button>
                </Form.Item>
            </Form>
               </div>
           </div>
        </section>
    )
}

export default Signin;