import request from '../../public/request.ts';

export function postCallback(wyCallbackId: string, event: 1001 | 1002 | 1003) {
  return request<any>({
    path: '/api/callback',
    method: 'POST',
    data: {
      wyCallbackId,
      event
    }
  })
}
