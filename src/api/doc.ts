/*
 * @Author: 桔子桑
 * @Date: 2022-04-14 19:45:28
 * @FilePath: /vue3_template/src/api/doc.ts
 * @Description: 文件描述
 */
import {
  get,
  postQuery,
  postPayload,
  postBlob,
  postFormdata,
  put,
  del,
} from "../utils/axios";

export function getTree(data: any) {
  return postPayload("/api/apiinfo/tree", data);
}

export function getApiDetails(data: any) {
  return postQuery("/api/apiinfo/getselapi", data);
}
