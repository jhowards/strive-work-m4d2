import {Row, Col} from 'react-bootstrap'
import data from './data/scifi.json'
import SingleBook from './SingleBook'


function BookList() {
    return (
        <Row xs={1} md={3} lg={3} xl={5} className="mx-2">
        {
            data.map(book => (
                <Col key={book.asin} className="mb-3">
                <SingleBook cover={book.img} title={book.title} />
            </Col>
            ))
        }
        </Row>
    );
  }

export default BookList