import React from 'react';
import { Table, Tag, Button, Popconfirm } from 'antd';

const MovieTable = ({ data = [], handleAdd = () => { }, handleDelete = () => { }, handleEdit = () => { } }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: '',
            dataIndex: 'ImageLink',
            key: 'ImageLink',
            render: (_, record) => (
                <img src={record.ImageLink} alt="" width={100} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            render: (_, record) => record.Name.substring(0, 20) + '...',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
            render: (_, record) => record.Description.substring(0, 50) + '...',
        },
        {
            title: 'VideoLink',
            dataIndex: 'VideoLink',
            key: 'VideoLink',
            render: (_, record) => record.VideoLink.substring(0, 20) + '...',
        },
        {
            title: 'CreatedAt',
            dataIndex: 'CreateAt',
            key: 'CreateAt',
            render: (_, record) => new Date(record.CreateAt).toLocaleString()
        },
        {
            title: 'Director',
            dataIndex: 'Director',
            key: 'Director',
        },
        {
            title: 'Tag',
            dataIndex: 'Tag',
            key: 'Tag',
            render: (_, record) => (<Tag color='error'>{record.Tag}</Tag>)
        },
        {
            title: 'Rate',
            dataIndex: 'Rate',
            key: 'Rate',
        },
        {
            title: 'PublicYear',
            dataIndex: 'PublicYear',
            key: 'PublicYear',
        },
        {
            title: 'Country',
            dataIndex: 'Country',
            key: 'Country',
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
                Add Movie
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}

export default MovieTable;