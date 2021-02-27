import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd';

export const userModal = (props) => {

    const [form] = Form.useForm();

    // 需要在组件展示出来之后设置表单默认字段, 否则警告更新过早的错误;
    useEffect(() => {
        // 判断是否是空对象;
        if (Object.keys(props.record).length) {
            form.setFieldsValue(props.record);
        } else {
            form.resetFields();
        }
    }, [props.visible])


    const onOk = () => {
        form.submit();
    }

    return (
        <Modal title="Basic Modal"
            visible={props.visible}
            onOk={onOk}
            // onOk={() => {form.submit()}}
            onCancel={props.onCancel}
            // Warning: Instance created by useForm is not connect to any Form element. Forget to pass form prop?
            // 因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 forceRender 将其预渲染
            forceRender
        >
            {JSON.stringify(props.record)}
            <Form
                form={form}
                name="basic"
                initialValues={props.record}
                onFinish={props.onFinish}
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="CreateTime"
                    name="create_time"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default userModal;