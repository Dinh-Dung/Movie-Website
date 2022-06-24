import React from 'react';
import { Table,  Button, Popconfirm } from 'antd';

const CategoryTable = ({ data = [], handleAdd = () => { }, handleDelete = () => { }, handleEdit = () => { } }) => {
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
                Add Category
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}

export default CategoryTable;