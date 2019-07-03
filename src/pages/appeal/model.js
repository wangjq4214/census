import {
  fetchOnLineEvent,
  fetchBlueSkyCount,
  fetchBusinessCount,
  fetchDistributeEvent,
  fetchInTimeHandle,
  fetchMonitorCount,
  fetchAreaEventDetail,
} from '@/pages/appeal/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'appeal',
  state: {
    typeId: '145056',
    onLineEvent: [],
    areaEventDetail: [],
    blueSkyCount: [],
    businessCount: [],
    distributeEvent: [],
    inTimeHandle: [],
    monitorCount: [],
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
        put({ type: 'handleOnLineFinish' }),
        put({ type: 'handleOnlineTotal' }),
      ]);
    },
    * handleOnLineFinish(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      // 获取所有数据
      const res = yield all({
        OnLineEvent: call(fetchOnLineEvent),
        BlueSkyCount: call(fetchBlueSkyCount),
        BusinessCount: call(fetchBusinessCount),
      });
      // 映射数据
      const tempOnLineEvent = res.OnLineEvent.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempBlue = res.BlueSkyCount.data.map((item) => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempBusiness = res.BusinessCount.data.map((item) => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      // 获取某个类别详情
      const areaEventDetail = yield call(fetchAreaEventDetail, typeId);
      yield put({
        type: 'save',
        payload: {
          onLineEvent: tempOnLineEvent,
          blueSkyCount: tempBlue,
          businessCount: tempBusiness,
          areaEventDetail: areaEventDetail.data,
        },
      });
    },
    * handleDetails({ payload: { typeId } }, { call, put }) {
      const areaEventDetail = yield call(fetchAreaEventDetail, typeId);
      yield put({
        type: 'save',
        payload: {
          areaEventDetail: areaEventDetail.data,
        },
      });
    },
    * handleOnlineTotal(_, { all, call, put }) {
      const res = yield all({
        distributeEvent: call(fetchDistributeEvent),
        inTimeHandle: call(fetchInTimeHandle),
        monitorCount: call(fetchMonitorCount),
      });
      const tempDis = res.distributeEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      yield put({
        type: 'save',
        payload: {
          distributeEvent: tempDis,
          inTimeHandle: res.inTimeHandle.data,
          monitorCount: res.monitorCount.data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/appeal') {
          dispatch({ type: 'fetch' });
          setInterval(() => {
            dispatch({ type: 'fetch' });
          }, 10000);
        }
      });
    },
  },
};
