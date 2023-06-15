import "./Content.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsChevronRight } from "react-icons/bs";

const LogoiphoneSE = () => {
  return (
    <img
      src='https://www.apple.com/v/iphone/home/bo/images/overview/compare/logo_iphone_se__m265le0wq0q6_large.png'
      alt='logo_iphone_14pro'
    />
  );
};

function Iphone() {
  return (
    <>
      <Row className='bg-iphone-14-pro' style={{ marginTop: "40px" }}>
        <div className='tile-iphone-14-pro'>
          <section>
            <h4>iPhone 14 Pro</h4>
            <h1 className='h1'>โปร ยิ่งกว่าโปร</h1>
            <p>เริ่มต้นที่ ฿41,900</p>
            <span className='btn-item'>
              <p className='btn-buy'>ซื้อ</p>
              <a href='iphon'>
                ดูเพิ่มเติม <BsChevronRight />
              </a>
            </span>
            <div className='img-item'>
              <img
                className='img-fluid'
                src='./imge/hero_iphone_14_pro.jpeg'
                alt=''
              />
            </div>
          </section>
        </div>
      </Row>

      <br />
      <Row className='bg-iphone-se'>
        <section className='iphone_se'>
          <Col xs={8} lg={6}>
            <div className='tlitle-iphone_se'>
              <LogoiphoneSE />
              <p className='hero-inline'>
                รักทั้งความแรง <br />
                <span className='nowrap'>รักทั้งความคุ้มค่า</span>
              </p>
              <p>เริ่มต้นที่ ฿17,900</p>
              <span className='btn-item'>
                <p className='btn-buy'>ซื้อ</p>
                <a href='iphon'>
                  ดูเพิ่มเติม <BsChevronRight />
                </a>
              </span>
            </div>
          </Col>
          <Col xs={8} lg={6}>
            <div className='img-item-se'>
              <img className='' src='./imge/iphone_se.jpeg' alt='' />
            </div>
          </Col>
        </section>
      </Row>
    </>
  );
}

// >> Content <<<

function Content() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <section>
            <article>ใหม่</article>
            <h4>iPhone 14</h4>
            <h1 className='h1'>
              สองขนาดที่ยอดเยี่ยม <br />
              วันนี้เติมความสดใสด้วยสีเหลือง
            </h1>
            <p>เริ่มต้นที่ ฿32,900</p>
            <span className='btn-item'>
              <p className='btn-buy'>ซื้อ</p>
              <a href='iphon'>
                ดูเพิ่มเติม <BsChevronRight />
              </a>
            </span>
          </section>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col sm={8}>
          <div className='img-item'>
            <img
              className='img-fluid'
              src='./imge/hero_iphone_14.jpeg'
              alt=''
            />
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Iphone />
    </>
  );
}
export default Content;
