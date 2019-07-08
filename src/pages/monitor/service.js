import request from '@/utils/request';
import { montiorUrl } from '@/utils/url';

/**
 * 获取热点数据
 * @returns {Promise<*>}
 */
export function fetchHotEvent() {
  const { HotEvent } = montiorUrl;
  return request(HotEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取热点数据详情
 * @param typeId
 * @returns {Promise<*>}
 */
export function fetHotEventDetail(typeId) {
  const { HotEventDetail } = montiorUrl;
  return request(`${HotEventDetail}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchInTimeSum() {
  const { InTimeSum } = montiorUrl;
  const form = new FormData();
  form.append('token', '1');
  return request(InTimeSum, {
    method: 'POST',
    body: form,
  });
}
