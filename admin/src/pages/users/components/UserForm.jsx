import React from 'react';
import { Form, Input } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const UserForm = ({data}) => {
    let formRef = React.createRef()

    UserForm.getValues = () => {
        formRef.submit()
        return formRef.validateFields()
    }

    return (
        <Form {...layout}
            ref={(ref) => ref && (formRef = ref)}
            initialValues={{
                Name: '',
                Phone: '',
                Email: '',
                Username: '',
                Pass: '',
                ...data
            }}
            name="nest-messages">
            <Form.Item
                name={'Name'}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Phone'}
                label="Phone"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Email'}
                label="Email"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Pass'}
                label="Pass"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Username'}
                label="Username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
};

export default UserForm;