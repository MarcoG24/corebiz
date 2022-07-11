import axios from 'axios';

export function getData() {
    return axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
}

export function getDataMock() {
    const data = [
        {
          "productId": 1,
          "productName": "SAPATO FLOATER PRETO",
          "stars": 1,
          "imageUrl": "https://corebiz-test.herokuapp.com/images/product-1.png",
          "listPrice": null,
          "price": 25990,
          "installments": [
            {
              "quantity": 9,
              "value": 2887
            }
          ]
        },
        {
          "productId": 2,
          "productName": "SANDÁLIA LINHO BROWN",
          "stars": 4,
          "imageUrl": "https://corebiz-test.herokuapp.com/images/product-2.png",
          "listPrice": 29900,
          "price": 19900,
          "installments": [
            {
              "quantity": 4,
              "value": 4975
            }
          ]
        },
        {
          "productId": 3,
          "productName": "BOTA MUSTANG PRETO",
          "stars": 2,
          "imageUrl": "https://corebiz-test.herokuapp.com/images/product-3.png",
          "listPrice": 32900,
          "price": 29900,
          "installments": [
            {
              "quantity": 10,
              "value": 2990
            }
          ]
        },
        {
          "productId": 4,
          "productName": "CINTO SEMICROMO PRETO 40MM",
          "stars": 3,
          "imageUrl": "https://corebiz-test.herokuapp.com/images/product-4.png",
          "listPrice": null,
          "price": 7990,
          "installments": []
        }
      ]
    return data
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