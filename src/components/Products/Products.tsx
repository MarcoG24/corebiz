import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { CardProduct } from "./card";
import "./globalStyles.css";
import "./Products.scss";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { getDataMock } from '../../services/HTTPWraper';

import "./hideScrollbar.css";
import { Container } from "react-bootstrap";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const productsData = () => {
    console.log('aqui va los datos del producto')
    const res = getDataMock()
    console.log(res)
    // if (res.status) {
    //     return res.data
    // }
    return res
}

function App() {
  const [items] = React.useState(productsData);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
    <Container fluid className='container-products'>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map((data) => (
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
