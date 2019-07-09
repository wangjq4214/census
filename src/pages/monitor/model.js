import {
  fetchHotEvent,
  fetHotEventDetail,
  fetchInTimeSum,
  fetchHistoryVdn,
  fetchCaseTypeCount,
} from '@/pages/monitor/service';
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
    historyVdn: [
      {
        val: 0,
      },
      {
        val: 0,
      },
    ],
    caseTypeCount: [],
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
        put({ type: 'handleCaseTypeCount' }),
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
        historyVdn: call(fetchHistoryVdn),
      });
      const { phoneState } = yield select(state => state.monitor);
      const tempPhone = JSON.parse(JSON.stringify(phoneState));
      res.inTimeSum.result[0].idxs.forEach((item => {
        tempPhone[item.id].push(parseInt(item.val));
      }));
      const temp = res.historyVdn.result[0].idxs;
      yield put({
        type: 'save',
        payload: {
          phoneState: tempPhone,
          historyVdn: [temp[0], temp[1]],
        },
      });
    },
    * handleCaseTypeCount(_, { call, put }) {
      const res = yield call(fetchCaseTypeCount);
      yield put({
        type: 'save',
        payload: {
          caseTypeCount: res.data,
        },
      });
    },
  },
};
