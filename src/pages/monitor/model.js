export default {
  namespace: 'monitor',
  state: {},
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
      yield all([]);
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
