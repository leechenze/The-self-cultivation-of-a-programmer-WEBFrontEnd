import React, { useState } from 'react'
import { Table, Tag, Space, Popconfirm, Button } from 'antd';
import { connect } from 'umi'
import UserModal from './components/UserModal'

const index = ({ users, dispatch }) => {

    const { data } = users;
    const [modalVisible, setModalVisible] = useState(false);
    const [record, setRecord]: any = useState({});

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Create_Time',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {/* 此处注意使用函数的方式,来执行 editModalVisible */}
                    <a onClick={() => { editModalVisible(record) }}>Edit</a>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => {
                            confirm(record);
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    // 删除逻辑
    const confirm = (record) => {
        console.log(record);
        dispatch({
            type: 'users/delRecord',
            payload: {
                record,
            }
        })
    }

    const editModalVisible = (record) => {
        setModalVisible(true);
        setRecord(record);
    }

    // 添加按钮
    const addHandler = () => {
        setModalVisible(true);
        setRecord({});
    }
    // 修改逻辑&添加逻辑;
    const onFinish = values => {

        if (record) {
            dispatch({
                type: 'users/editRecord',
                payload: {
                    values: values,
                    id: record.id
                }
            })
        } else {
            dispatch({
                type: 'users/addRecord',
                payload: {
                    values: values,
                }
            })
        }
        setModalVisible(false);
    }


    return (
        <div className="list-table">
            <Button type="primary" onClick={addHandler}>Add</Button>
            {/* rowKey需要定义否则将警告定义key */}
            <Table columns={columns} dataSource={data} rowKey='id' />
            <UserModal visible={modalVisible} onFinish={onFinish} onOk={() => { setModalVisible(false) }} onCancel={() => { setModalVisible(false) }} record={record}></UserModal>
        </div>
    )
}
const mapStateToProps = ({ users }) => {
    return {
        users,
    }
}

export default connect(mapStateToProps)(index);
