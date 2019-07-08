const baseUrl = 'http://175.6.46.236:8022/cs12345/';

export const appealOnlineFinish = {
  OnLineEvent: `${baseUrl}bigScreenPreviewController/queryOnLineEvent`,
  AreaEventDetail: `${baseUrl}bigScreenPreviewController/queryAreaEventDetail`,
  BlueSkyCount: `${baseUrl}bigScreenPreviewController/queryBlueSkyCount`,
  BusinessCount: `${baseUrl}bigScreenPreviewController/queryBusinessCount`,
  DistributeEvent: `${baseUrl}bigScreenPreviewController/queryDistributeEvent`,
  InTimeHandle: `${baseUrl}bigScreenPreviewController/queryInTimeHandle`,
  MonitorCount: `${baseUrl}bigScreenPreviewController/queryMonitorCount`,
  CityEventCount: `${baseUrl}bigScreenPreviewController/queryCityEventCount`,
};

export const montiorUrl = {
  HotEvent: `${baseUrl}bigScreenPreviewController/queryHotEvent`,
  HotEventDetail: `${baseUrl}bigScreenPreviewController/queryHotEventDetail`,
  InTimeSum: `${baseUrl}cmsDataController/getInTimeSum`,
};
