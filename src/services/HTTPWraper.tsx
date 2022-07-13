import axios from 'axios';

export function getData() {
    return axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
}

export function postData(api_data: any) {
    axios({
        method: 'post', 
        url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
        data: {
          api_data
        }
      })
}