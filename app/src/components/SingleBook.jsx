import {Card} from 'react-bootstrap'

const SingleBook = (props) =>(
                 <Card className="book" style={{ width: '16rem' }}>
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                </Card>          
)

    

export default SingleBook