import React from 'react'
import { 
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    ButtonGroup, 
    Button,
} from 'reactstrap'
import { useHistory } from 'react-router-dom';
import '../../pages/Home.css'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';

function HomeCardColumns(props) {

    const { item } = props;
    const history = useHistory();

    const handleClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    return (
        <Card className="HomeMainCard mt-4">
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>Little info about {item.title}</CardSubtitle>
                <CardText>{item.comment}</CardText>
                <ButtonGroup>
                    <Button onClick={() => history.replace('/products/' + item.id)}>Get more info</Button>
                    <Button onClick = {(e) => handleClick(e, item)} color="primary">Purchase {item.price} $</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

const mapStateToProps = state => state.CartReducer;

export default connect( mapStateToProps, { addItemToCart })(HomeCardColumns)
