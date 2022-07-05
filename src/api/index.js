import { request } from "../utils/request";

export function GET(url){
    return request({
        url,
        method:'GET'
    })
}