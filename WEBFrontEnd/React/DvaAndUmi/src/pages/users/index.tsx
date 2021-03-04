import React, { useState, FC } from 'react'
import { Table, Tag, Space, Popconfirm, Button } from 'antd';
// type: The dataType of the TypeScript Language is imported
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { connect, Dispatch, UserState, Loading } from 'umi'
import { getRemoteList } from './service';
import type { SingleUserType, FormValues } from './format'
import UserModal from './components/UserModal'

interface UserPageProps {
    users: UserState,
    dispatch: Dispatch,
    userListLoading: boolean,
}
const index: FC<UserPageProps> = ({ users, dispatch, userListLoading }) => {

    const { data } = users;
    const [modalVisible, setModalVisible] = useState(false);
    // hooks函数定义TS类型语法如下 useHooks<类型定义>(), | 代表或;
    const [record, setRecord] = useState<SingleUserType | any>({});

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
            render: (text: string, record: SingleUserType) => (
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
    const confirm = (record: SingleUserType) => {
        dispatch({
            type: 'users/delRecord',
            payload: {
                record,
            }
        })
    }

    const editModalVisible = (record: SingleUserType) => {
        setModalVisible(true);
        setRecord(record);
    }

    // 添加按钮
    const addHandler = () => {
        setModalVisible(true);
        setRecord({});
    }
    // 修改逻辑&添加逻辑;
    const onFinish = (values: FormValues) => {
        console.log(values);
        dispatch({
            type: 'users/addRecord',
            payload: {
                values: values,
            }
        })

        if (record) {
            console.log('users/editRecord');
            dispatch({
                type: 'users/editRecord',
                payload: {
                    values: values,
                    id: record.id
                }
            })
        } else {
            console.log('users/addRecord');
            dispatch({
                type: 'users/addRecord',
                payload: {
                    values: values,
                }
            })
        }
        setModalVisible(false);
    }

    // Pro Table
    const tableRequestHandle = async ({pageSize, current}) => {

        console.log(pageSize, current);

        // Pro Table 的request 有个获取不到数据的坑, 在这个函数体执行前, 会执行subscriptions,
        // 而后会执行 Pro Table 的request 也就是这个函数体, 最后才会执行返回数据的getList;
        // 所以这里数据获取直接从service中导入请求接口, 传入pageSize, current参数进行数据请求;
        
        const users = await getRemoteList({
            page: current,
            per_page: pageSize,
        });

        console.log(users);
        
        return {
            data: users.data,
            success: true,
            total: users.meta.total,
        }
    }

    return (
        <div className="list-table">
            <Button type="primary" onClick={addHandler}>Add</Button>
            {/* rowKey需要定义否则将警告定义key */}
            <ProTable
                columns={columns}
                // dataSource={data}
                rowKey='id'
                loading={userListLoading}
                request={tableRequestHandle}
                search={false}
            />
            <UserModal visible={modalVisible} onFinish={onFinish} onOk={() => { setModalVisible(false) }} onCancel={() => { setModalVisible(false) }} record={record}></UserModal>
        </div>
    )
}

// 这种定义和 FC<UserPageProps> 的泛型定义类似;
const mapStateToProps = ({ users, loading }: { users: UserState, loading: Loading }) => {
    return {
        users,
        userListLoading: loading.models.users
    }
}

export default connect(mapStateToProps)(index);
