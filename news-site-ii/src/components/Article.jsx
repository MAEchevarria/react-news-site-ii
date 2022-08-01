import { Image, Container, Row, Col } from 'react-bootstrap'

// function Article(props) {
function Article({image, title, byline, created_date, abstract}) {
// function Article({article}) {
  return (
    <Container >
      Article begin
      <Row className='article'>
        <Col lg='3' className='my-col' >
          {image ? <Image width='100%' height='auto' rounded src={image.url} />
            : <p> image not found </p>
          }
        </Col>
        <Col lg='9'>
          <Row>
            <h1>{title}</h1>
          </Row>
          <Row>
            <p>{created_date}</p>
          </Row>
          <Row>
            {byline && <h2>{byline}</h2>}
          </Row>
          <Row>
            <p>{abstract}</p>
          </Row>
        </Col>
      </Row>
      Article end
    </Container>
  )
}
export default Article;