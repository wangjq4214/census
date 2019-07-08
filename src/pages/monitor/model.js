import { fetchHotEvent, fetHotEventDetail, fetchInTimeSum } from '@/pages/monitor/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'monitor',
  state: {
    hotEvent: [],
    hotIndex: '145056',
    hotEventDetail: [],
    phoneState: {
      'IDX_01_04_006': [],
      'IDX_01_04_007': [],
      'IDX_01_04_008': [],
      'IDX_01_04_011': [],
      'IDX_01_04_004': [],
    },
  },
  reducers: {
    save(state, { payload: data }) {
      return {
        ...state,
        ...data,
      };
    },
  },
  effects: {
    * fetch(_, { all, put }) {
      yield all([
        put({ type: 'handleHotEvent' }),
        put({ type: 'handleInTimeSum' }),
      ]);
    },
    * handleHotEvent(_, { all, call, put }) {
      const res = yield all({
        hotEvent: call(fetchHotEvent),
      });
      const tempHotEvent = res.hotEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'handleHotEventDetail',
      });
      yield put({
        type: 'save',
        payload: {
          hotEvent: tempHotEvent,
        },
      });
    },
    * handleHotEventDetail(_, { select, call, put }) {
      const { hotIndex } = yield select(state => state.monitor);
      const res = yield call(fetHotEventDetail, hotIndex);

      yield put({
        type: 'save',
        payload: {
          hotEventDetail: res.data,
        },
      });
    },
    * handleInTimeSum(_, { select, all, call, put }) {
      const res = yield all({
        inTimeSum: call(fetchInTimeSum),
      });
      const { phoneState } = yield select(state => state.monitor);
      res.inTimeSum.result[0].idxs.forEach((item => {
        phoneState[item.id].push(parseInt(item.val));
      }));
      yield put({
        type: 'save',
        payload: {
          phoneState,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/monitor') {
          dispatch({ type: 'fetch' });
          dispatch({ type: 'appeal/fetch' });
          setInterval(() => {
            dispatch({ type: 'fetch' });
          }, 10000);
        }
      });
    },
  },
};
