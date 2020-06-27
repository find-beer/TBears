/**
 * fetch简单封装
 * @param {String} url
 * @param {String} method
 * @param {Object} params
 */
import utils from 'url';
import _ from 'lodash';

function enhanceFetch(pathname, method, params) {
    const methods = ['get', 'post'];

    if (!pathname || !methods.includes(method)) {
        console.error('检查入参');
    }

    return new Promise((resolve, reject) => {
        let url, options;

        if (method === 'get') {
            url =
                'http://121.89.223.103:8080/' +
                utils.format({
                    pathname,
                    query: params,
                });
        } else {
            url = 'http://121.89.223.103:8080/' + pathname;
            options = {
                body: JSON.stringify(params),
            };
        }

        console.log(options);

        fetch(url, {
            method,
            contentType: 'application/json;charset=UTF-8',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            ...options,
        })
            .then(response => {
                return response.json();
            })
            .then(resjson => {
                console.info('sourcedata', resjson);
                // resolve(_.pickBy(resjson.data, Boolean));
                resolve(resjson.data);
            })
            .catch(err => {
                console.error('errmsg', err);
                resolve({});
            });
    });
}

export default enhanceFetch;
