import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { CardProduct } from "./card";
import "./globalStyles.css";
import "./Products.scss";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { getData } from '../../services/HTTPWraper';

import "./hideScrollbar.css";
import { Container } from "react-bootstrap";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
type ResponseItem = {
    imageUrl: string
    installments: number[]
    listPrice: number
    price: number
    productId: number
    productName: string
    stars: number
}

function App() {
    const defaultItems:ResponseItem[] = [];
    const getDataProducts = () => {
        getData()
          .then((response: any) => {
            setItems(response.data)
          })
          .catch((e: Error) => {
            console.log(e);
          });
    }
    getDataProducts()

  const [items, setItems]: [ResponseItem[], (items: ResponseItem[]) => void] = React.useState(defaultItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
    <Container fluid className="title-container-products">
      <span><strong>Más vendidos</strong></span>
      <br /><hr className="hr-container-products"/>
    </Container>
    <Container fluid className='container-products'>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items?.map((data: any) => (
                <CardProduct
                  dataProduct={data}
                />
              ))}
          </ScrollMenu>
        </div>
      </div>
      </Container>
    </>
  );
}
export default App;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
