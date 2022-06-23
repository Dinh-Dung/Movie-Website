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

const CategoryForm = ({data}) => {
    let formRef = React.createRef()

    CategoryForm.getValues = () => {
        formRef.submit()
        return formRef.validateFields()
    }

    return (
        <Form {...layout}
            ref={(ref) => ref && (formRef = ref)}
            initialValues={{
                Name: '',
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
        </Form>
    );
};

export default CategoryForm;