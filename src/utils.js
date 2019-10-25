/** 
 * 封装HTTP请求 
 * @param {string} url 接口路径
 * @param {any} data 参数
 * @param {string} type get OR post 
 */
export const HTTP = (url, data, type) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: type || 'post',
            data: data,
            dataType: 'json',
            success: (data) => {
                resolve(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
}
// 调用方式
// async function queryintention(){
//     var data = {
//         'counselor':"aaaaa",
//     }
//     const res = await lib.HTTP(`${conf.server}${api.getBaseInfo}`, formData)
//     console.log(data)
// }