import './signin.css';
import { login } from "../../services/auth";
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';



const Signin = () => {
    const { userName, setUserName } = useContext(userContext);

    const navigate = useNavigate();


    const onFinish = (values) => {
        const result = login(values.username, values.password);
        if (result) {
            setUserName(result.name);
            // console.log(result.name);
            navigate("/inbox");
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section>
            <Form
                name="basic"
                className="mt-5"
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
                    className="w-25 m-auto mt-3"
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
                    className="w-25 m-auto mt-3"
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
                    className="m-auto w-25"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    className="m-auto w-25 px-4 py-2"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        SIGN IN
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )
}

export default Signin;