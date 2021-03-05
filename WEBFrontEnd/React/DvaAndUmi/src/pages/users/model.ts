import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecordList, delRecordList, addRecordList } from './service';
import { message } from 'antd';
import { SingleUserType } from './format'


// 将接口导出后可以直接在 umi 模块中导入使用: (import { connect, Dispatch, UserState} from 'umi')
export interface UserState {
    data: SingleUserType[],
    meta: {
        total: number,
        per_page: number,
        page: number,
    }
}

interface UserModelType {
    namespace: 'users',
    state: UserState,
    reducers: {
        getList: Reducer,
    },
    effects: {
        getRemote: Effect,
        editRecord: Effect,
        addRecord: Effect,
        delRecord: Effect
    },
    subscriptions: {
        setup: Subscription
    },
}

const UserModel: UserModelType = {
    namespace: 'users',
    state: {
        data: [],
        meta: {
            total: 0,
            per_page: 10,
            page: 1
        }
    },
    reducers: {
        getList(state, { type, payload }) {
            return payload.data;
        }
    },
    effects: {
        *getRemote({ type, payload: { page, per_page } }, { put, call }) {
            // 在effects中找services时使用call;
            const data = yield call(getRemoteList, {page, per_page});
            if (data) {
                yield put({
                    type: 'getList',
                    payload: {
                        data: data
                    },
                })
            }
        },
        *editRecord({ payload: { id, values } }, { put, call }) {
            const data = yield call(editRecordList, { id, values })
            if (data) {
                const { page, per_page } = yield select(state => state.users.meta);
                yield put({
                    type: 'getRemote',
                    payload: {
                        page,
                        per_page
                    }
                })
                message.success("Edit successfully");
            } else {
                message.error("Edit Failed");
            }
        },
        *delRecord({ payload: { record } }, { put, call, select }) {
            const data = yield call(delRecordList, record);
            if (data) {
                const { page, per_page } = yield select(state => state.users.meta);
                yield put({
                    type: 'getRemote',
                    payload: {
                        page,
                        per_page
                    }
                })
                message.success("Delete successfully");
            } else {
                message.error("Delete Failed");
            }
        },
        *addRecord({ payload: { values } }, { put, call }) {
            const data = yield call(addRecordList, values);
            if (data) {
                const { page, per_page } = yield select(state => state.users.meta);
                yield put({
                    type: 'getRemote',
                    payload: {
                        page,
                        per_page
                    }
                })
                message.success("Add successfully");
            } else {
                message.error("Add Failed");
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }, action) => {
                if (pathname === '/users') {
                    // dispatch({
                    //     type: 'getRemote'
                    // })
                }
            })
        }
    }
}
export default UserModel;