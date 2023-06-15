import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Newiphone.css";
import { BsChevronRight } from "react-icons/bs";

const Logoiphone14 = () => {
  return (
    <img
      src='https://www.apple.com/v/iphone/home/bo/images/overview/compare/logo_iphone_14__beagfaob98eq_large.png'
      alt='logo_iphone_14'
    />
  );
};

const Logoiphone14pro = () => {
  return (
    <img
      src='https://www.apple.com/v/iphone/home/bo/images/overview/compare/logo_iphone_14_pro__edxo9r6p2g8y_large.png'
      alt='logo_iphone_14pro'
    />
  );
};

const Logoiphone13 = () => {
  return (
    <img
      src='https://www.apple.com/v/iphone/home/bo/images/overview/compare/logo_iphone_13__2eze52plyky6_large.png'
      alt='logo_iphone_13'
    />
  );
};

const LogoiphoneSE = () => {
  return (
    <img
      src='https://www.apple.com/v/iphone/home/bo/images/overview/compare/logo_iphone_se__m265le0wq0q6_large.png'
      alt='logo_iphone_se'
    />
  );
};

function NewiphonContent(props) {
  return (
    <>
      <div className='btn-container-new'>
        {props.img}

        <p style={{ margin: "10px 0 0 0" }} className='h5'>
          ขุมพลังครบเครื่อง
        </p>
        <div className='btn-conten-new'>
          <p>เริ่มต้นที่ ฿ {props.price}</p>
          <div className='btn-item-more'>
            <span>
              <p className='buy-btn'>ซื้อ</p>
            </span>
          </div>
          <div className='btn-more'>
            <span>
              <a href='ดูเพิ่มเติม'>
                ดูเพิ่มเติม <BsChevronRight />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Newiphone() {
  return (
    <>
      <div>
        <Row>
          <Col></Col>

          <Col xs={8} lg={8}>
            <div
              className='content-contai'
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "110px 0 0 0 ",
              }}
            >
              <h1>
                iPhone รุ่นไหน
                <br className='small' />
                ที่ใช่สำหรับคุณ
              </h1>
            </div>

            {/* Newiphone-img */}

            <div
              className='Newiphone-style'
              style={{
                display: "flex",
                justifyContent: "center,",
                margin: "60px 0 0 0 ",
                textAlign: "center",
              }}
            >
              <Row>
                <Col sm>
                  <div className='Newiphon-img'>
                    <img src='./imge/compare_iphone_14_pro.jpeg' alt='' />
                  </div>

                  <div className='watch-wrapper'>
                    <div>
                      <img
                        src='./imge/swatch_iphone_14_pro.png'
                        alt='iphone_14'
                      />
                    </div>
                    <NewiphonContent img={<Logoiphone14pro />} price='41,000' />
                  </div>
                </Col>

                <Col sm>
                  <div className='Newiphon-img'>
                    <img src='./imge/compare_iphone_14.jpeg' alt='iphone_14' />
                  </div>

                  <div className='watch-wrapper'>
                    <div>
                      <img
                        src='./imge/swatch_iphone_14.png'
                        alt='iphone_14'
                        style={{ width: "104px" }}
                      />
                    </div>

                    <NewiphonContent img={<Logoiphone14 />} price='32,900' />
                  </div>
                </Col>

                <Col sm>
                  <div className='Newiphon-img'>
                    <img src='./imge/compare_iphone_13.jpeg' alt='' />
                  </div>

                  <div className='watch-wrapper'>
                    <div>
                      <img
                        src='./imge/swatch_iphone_13.png'
                        alt='iphone_13'
                        style={{ width: "104px" }}
                      />
                    </div>

                    <NewiphonContent img={<Logoiphone13 />} price='24,900' />
                  </div>
                </Col>

                <Col sm>
                  <div className='Newiphon-img'>
                    <img src='./imge/compare_iphone_se.jpeg' alt='' />
                  </div>

                  <div className='watch-wrapper'>
                    <figure>
                      <img
                        src='./imge/swatch_iphone_se.png'
                        alt='iphone_se'
                        style={{ width: "50px" }}
                      />
                    </figure>

                    <NewiphonContent img={<LogoiphoneSE />} price='17,900' />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col></Col>
        </Row>
      </div>
    </>
  );
}
export default Newiphone;
