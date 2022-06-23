import React from 'react';
import axios from 'axios';
import { Form, Input, Select } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const MovieForm = ({ data }) => {
    let formRef = React.createRef()
    const [navList, setNavList] = React.useState([])
    MovieForm.getValues = () => {
        formRef.submit()
        return formRef.validateFields()
    }

    React.useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get('/api/nav/category').then(({ data }) => {
            console.log(data)
            setNavList(data)
        }).catch(console.log)
    }

    return (
        <Form {...layout}
            ref={(ref) => ref && (formRef = ref)}
            initialValues={{
                Name: '',
                Description: '',
                VideoLink: '',
                ImageLink: '',
                Director: '',
                Tag: '',
                Rate: '1',
                PublicYear: new Date().getFullYear(),
                Category: 1,
                ...data
            }}
            name="nest-messages">
            <Form.Item
                name={'VideoLink'}
                label="VideoLink"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'ImageLink'}
                label="ImageLink"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
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
                name={'Duration'}
                label="Duration"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Country'}
                label="Country"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'PublicYear'}
                label="PublicYear"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Tag'}
                label="Tag"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Director'}
                label="Director"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Rate'}
                label="Rate"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                >
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                    <Select.Option value="6">6</Select.Option>
                    <Select.Option value="7">7</Select.Option>
                    <Select.Option value="8">8</Select.Option>
                    <Select.Option value="9">9</Select.Option>
                    <Select.Option value="10">10</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name={'Category'}
                label="Category"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                >

                    {navList.map((nav) => {
                        return (<Select.Option value={nav.ID} key={nav.ID}>{nav.CateName}</Select.Option>)
                    })}
                </Select>
            </Form.Item>
            <Form.Item name={"Description"} label="Description">
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default MovieForm;