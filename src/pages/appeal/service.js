import request from '@/utils/request';
import { appealOnlineFinish } from '@/utils/url';

/**
 * 获取诉求工单第一部分的在线办结图
 * @returns {Promise<*>}
 */
export function fetchOnLineEvent() {
  const { OnLineEvent } = appealOnlineFinish;
  return request(OnLineEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取分类的详情数据
 * @param typeId 时间的id
 * @returns {Promise<*>}
 */
export function fetchAreaEventDetail(typeId) {
  const { AreaEventDetail } = appealOnlineFinish;
  return request(`${AreaEventDetail}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取蓝天保卫战的数据
 * @returns {Promise<*>}
 */
export function fetchBlueSkyCount() {
  const { BlueSkyCount } = appealOnlineFinish;
  return request(BlueSkyCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取营商环境数据
 * @returns {Promise<*>}
 */
export function fetchBusinessCount() {
  const { BusinessCount } = appealOnlineFinish;
  return request(BusinessCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取转办工单案件
 * @returns {Promise<*>}
 */
export function fetchDistributeEvent() {
  const { DistributeEvent } = appealOnlineFinish;
  return request(DistributeEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取区县实时数据
 * @returns {Promise<*>}
 */
export function fetchInTimeHandle() {
  const { InTimeHandle } = appealOnlineFinish;
  return request(InTimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取监察数据
 * @returns {Promise<*>}
 */
export function fetchMonitorCount() {
  const { MonitorCount } = appealOnlineFinish;
  return request(MonitorCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
