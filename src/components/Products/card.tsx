import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const imgStars = (stars: number) => {
    var script = []
    for (var i = 1; i < 5; i++) {
        if (i <= stars) {
            script.push(<AiTwotoneStar />) 
        } else {
            script.push(<AiOutlineStar />)
        }
    }
    return script
}

function currencyFormat(num: number, event: string) {
    if (num !== null) {
        const strNum = String(num)
        const x = strNum.substring(0, strNum.length-2) + "." + strNum.substring(strNum.length-2, strNum.length);
        if (event === 'listPrice') {
            return 'de $' + x
        } else if (event === 'price') {
            return 'por $' + x
        } else {
            return x
        } 
    }
 }

 const quantity = (installments: any) => {
    var dataQuantity = 0
    if (installments.length > 0) {
        return 'O en ' + String(installments[0].quantity) + 'x de $' + String(currencyFormat(installments[0].value, ''))
    }
}

export function CardProduct({ dataProduct }: { dataProduct: any;}) {
  
  
  return (
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src={dataProduct.imageUrl} />
      <Card.Body>
        <Card.Title>{dataProduct.productName}</Card.Title>
        <Card.Text>
          {
            imgStars(dataProduct.stars)
          }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{currencyFormat(dataProduct.listPrice, 'listPrice')}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "bold"}}>{currencyFormat(dataProduct.price, 'price')}</ListGroup.Item>
        <ListGroup.Item>{quantity(dataProduct.installments)}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );

}
