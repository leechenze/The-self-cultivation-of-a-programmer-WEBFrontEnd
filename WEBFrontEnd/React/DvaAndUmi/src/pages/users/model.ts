import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from './service';
interface UserModelType {
    namespace: 'users',
    state: {},
    reducers: {
        getList: Reducer,
    },
    effects: {
        getRemote: Effect,
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
            yield put({
                type: 'getList',
                payload: {
                    data
                },
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