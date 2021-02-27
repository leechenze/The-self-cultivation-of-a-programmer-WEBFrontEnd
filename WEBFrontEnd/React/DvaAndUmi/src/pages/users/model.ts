import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecordList, delRecordList, addRecordList } from './service';
interface UserModelType {
    namespace: 'users',
    state: {},
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
    },
    reducers: {
        getList(state, { type, payload }) {
            return payload;
        }
    },
    effects: {
        *getRemote({ type, payload }, { put, call }) {
            // 在effects中找services时使用call;
            const data = yield call(getRemoteList);
            console.log(data);
            yield put({
                type: 'getList',
                payload: {
                    data: data.data
                },
            })
        },
        *editRecord({ payload: { id, values } }, { put, call }) {
            const data = yield call(editRecordList, { id, values })
            yield put({
                type: 'getRemote',
            })
        },
        *delRecord({ payload: { record } }, { put, call }) {
            const data = yield call(delRecordList, record);
            yield put({
                type: 'getRemote',
            })
        },
        *addRecord({ payload: { values } }, { put, call }) {
            const data = yield call(addRecordList, values);
            yield put({
                type: 'getRemote',
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }, action) => {
                if (pathname === '/users') {
                    dispatch({
                        type: 'getRemote'
                    })
                }
            })
        }
    }
}
export default UserModel;