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
    console.log(num)
    if (num !== null) {
        const strNum = String(num)
        const x = strNum.substring(0, strNum.length-2) + "." + strNum.substring(strNum.length-2, strNum.length);
        if (event === 'listPrice') {
            return 'de $' + x
        } else {
            return 'por $' + x
        }
        
    }
    
 }

export function CardProduct({ dataProduct }: { dataProduct: any;}) {

  return (
    <Card style={{ width: '18rem' }}>
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
        <ListGroup.Item>{currencyFormat(dataProduct.price, 'price')}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );

}
