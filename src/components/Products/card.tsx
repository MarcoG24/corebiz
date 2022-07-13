import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./Products.scss";

const imgStars = (stars: number) => {
    var script = []
    for (var i = 1; i < 5; i++) {
        if (i <= stars) {
            script.push(<AiTwotoneStar className='style-star'/>) 
        } else {
            script.push(<AiOutlineStar className='style-star'/>)
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
    if (installments.length > 0) {
        return 'O en ' + String(installments[0].quantity) + 'x de $' + String(currencyFormat(installments[0].value, ''))
    }
}

export function CardProduct({ dataProduct }: { dataProduct: any;}) {
  
  
  return (
    <Card className="text-center style-card">
      <Card.Img variant="top" src={dataProduct.imageUrl} />
      <Card.Body className='body-card'>
        <Card.Title className='title-card'>{dataProduct.productName}</Card.Title>
        <Card.Text>
          {
            imgStars(dataProduct.stars)
          }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='style-list-group small-size'>{currencyFormat(dataProduct.listPrice, 'listPrice')}</ListGroup.Item>
        <ListGroup.Item className='style-list-group' style={{fontWeight: "bold"}}>{currencyFormat(dataProduct.price, 'price')}</ListGroup.Item>
        <ListGroup.Item className='style-list-group small-size'>{quantity(dataProduct.installments)}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="dark">Comprar</Button>
      </Card.Body>
    </Card>
  );

}
