import React, { useState, useRef, FC } from 'react'
import { Table, Tag, Space, Popconfirm, Button, Pagination, message } from 'antd';
// type: The dataType of the TypeScript Language is imported
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { connect, Dispatch, UserState, Loading } from 'umi'
import { getRemoteList, addRecordList, editRecordList } from './service';
import type { SingleUserType, FormValues } from './format'
import UserModal from './components/UserModal'

interface UserPageProps {
    users: UserState,
    dispatch: Dispatch,
    userListLoading: boolean,
}
interface ActionType {
    reload: (resetPageIndex?: boolean) => void;
    reloadAndRest: () => void;
    reset: () => void;
    clearSelected?: () => void;
    // startEditable: (rowKey: Key) => boolean;
    // cancelEditable: (rowKey: Key) => boolean;
}

const index: FC<UserPageProps> = ({ users, dispatch, userListLoading }) => {

    const { data, meta } = users;
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // hooks函数定义TS类型语法如下 useHooks<类型定义>(), | 代表或;
    const [record, setRecord] = useState<SingleUserType | any>({});
    const proTableRef = useRef<ActionType>();

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
    // 重载按钮
    const reloadHandler = () => {
        proTableRef.current.reload();
    }

    // 修改逻辑&添加逻辑;
    const onFinish = async (values: FormValues) => {
        dispatch({
            type: 'users/addRecord',
            payload: {
                values: values,
            }
        })
        setConfirmLoading(true);
        if (Object.keys(record).length) {
            // 编辑;
            let id = record.id;
            const result = await editRecordList({ id, values });
            if (result) {
                await dispatch({
                    type: 'users/getRemote',
                    payload: {
                        page: meta.page,
                        per_page: meta.per_page,
                    }
                })
                await setModalVisible(false);
                await message.success('Edit Success')

            } else {
                setModalVisible(true);
                message.error('Edit Error');
            }
            setConfirmLoading(false);
            // dispatch({
            //     type: 'users/editRecord',
            //     payload: {
            //         values: values,
            //         id: record.id
            //     }
            // })
        } else {
            // 添加
            let id = record.id;
            const result = await addRecordList({ id, values });
            if (result) {
                await dispatch({
                    type: 'users/getRemote',
                    payload: {
                        page: meta.page,
                        per_page: meta.per_page,
                    }
                })
                await setModalVisible(false);
                await message.success('Add Success')

            } else {
                setModalVisible(true);
                message.error('Add Error');
            }
            setConfirmLoading(false);
            // dispatch({
            //     type: 'users/addRecord',
            //     payload: {
            //         values: values,
            //     }
            // })
        }
        setModalVisible(false);
    }

    // Pro Table
    const tableRequestHandle = async ({ pageSize, current }) => {

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

    const paginationHandle = (page, pageSize) => {
        dispatch({
            type: 'users/getRemote',
            payload: {
                page,
                per_page: pageSize,
            }
        })
    }

    const pageSizeHandle = (current, size) => {
        dispatch({
            type: 'users/getRemote',
            payload: {
                page: current,
                per_page: size,
            }
        })
    }

    return (
        <div className="list-table">
            {/* <Button type="primary" onClick={reloadHandler}>Reload</Button> */}
            {/* rowKey需要定义否则将警告定义key */}
            <ProTable
                columns={columns}
                dataSource={data}
                rowKey='id'
                loading={userListLoading}
                // request={tableRequestHandle}
                search={false}
                actionRef={proTableRef}
                pagination={false}
                options={{
                    density: true,
                    fullScreen: true,
                    reload: () => {
                        dispatch({
                            type: 'users/getRemote',
                            payload: {
                                page: meta.page,
                                per_page: meta.per_page,
                            }
                        })
                    },
                    setting: true,
                }}
                toolBarRender={() => [
                    <Button type="primary" onClick={addHandler}>Add</Button>
                ]}
                headerTitle='User List'
            />
            <Pagination
                className="pagination"
                total={meta.total}
                current={meta.page}
                pageSize={meta.per_page}
                pageSizeOptions={['5', '10', '15', '20']}
                onChange={paginationHandle}
                onShowSizeChange={pageSizeHandle}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
            />
            <UserModal visible={modalVisible}
                onFinish={onFinish}
                onOk={() => { setModalVisible(false) }}
                onCancel={() => { setModalVisible(false) }}
                record={record}
                confirmLoading={confirmLoading}
            />
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
