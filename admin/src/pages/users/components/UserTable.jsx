import React from 'react';
import { Table,  Button, Popconfirm } from 'antd';

const UserTable = ({ data = [], handleAdd = () => { }, handleDelete = () => { }, handleEdit = () => { } }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            render: (_, record) => record.Name.substring(0, 20) + '...',
        },
        {
            title: 'Phone',
            dataIndex: 'Phone',
            key: 'Phone',
            render: (_, record) => record.Phone.substring(0, 50) + '...',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            render: (_, record) => record.Email.substring(0, 20) + '...',
        },
        {
            title: 'Username',
            dataIndex: 'Username',
            key: 'Username',
        },
      
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <div className='d-flex'>
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.ID)}>
                        <Button type="link" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                    <Button type="link" onClick={()=>handleEdit(record)}>
                        Edit
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add Users
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}

export default UserTable;