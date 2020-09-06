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
            url = utils.format({
                pathname,
                query: params,
            });
        } else {
            url = pathname;
            options = {
                body: JSON.stringify(params),
            };
        }

        console.info('request.url', url);

        fetch(url, {
            method,
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
                // console.info('request.sourcedata', resjson);
                // resolve(_.pickBy(resjson.data, Boolean));
                resolve(resjson);
            })
            .catch(err => {
                console.error('request.errmsg', err);
                resolve({});
            });
    });
}

export default enhanceFetch;