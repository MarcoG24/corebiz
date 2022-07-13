import axios from 'axios';

export function getData() {
    return axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
}

export function postData(api_data: any) {
    return axios({
        method: 'post', 
        url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
        data: {
          'email': api_data['email'],
          'name': api_data['name']
        }
      })
}