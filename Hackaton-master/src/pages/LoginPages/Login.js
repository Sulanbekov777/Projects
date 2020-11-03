import React, { useState, useEffect,} from 'react'
import { Row, Col, Card, CardBody, Label, Input, ButtonGroup, Button}  from 'reactstrap'
import {Modal} from 'reactstrap'
import { Link, useHistory, Redirect } from 'react-router-dom'
import Home from '../Home'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth/actions'
import { CLEAR_ERROR } from '../../redux/auth/constants';

function Login(props) {
    const [modalIsOpen, setModalIsOpen] = useState(true)    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginUser({ email, password }, history);
    }

    const {clearError} = props;
    useEffect(() => {
        clearError()
    }, [clearError])

    useEffect(() => {
      
    }, [])

    const url = "http://localhost:3001"

    if(email === 'demo@demo.com' && password === 'qwerty'){
        return (
          <Button className="mt-5"> 
            <a href = {url}>{url}</a>
          </Button>
        )
    }


    console.log(props)
    return (
        <div>
            <Home/>
            <Modal isOpen={modalIsOpen}>            
                <Row style={{height:'0vh',width:'100%'}} className="align-items-center justify-content-center">
                  <Col md={8}>
                    <Card className="shadow">
                      <CardBody>
                        <form onSubmit={handleSubmit}>
                          <h3>Login</h3>
                          <Label className="mt-3" htmlFor="email">
                            Enter your email:
                            {props?.err && props?.err?.response?.data.message &&
                            (<h4 className="danger">Error:
                                {props.err.response.data.message}</h4>)
                            }
                          </Label>

                          <Input 
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}    
                          />
                          <Label className="mt-3" htmlFor="password">
                            Enter your password:
                          </Label>
                          <Input 
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}    
                          />
                          <ButtonGroup className="w-100 mt-3">
                            <Button color='primary' type="submit">Submit</Button>
                          <Button type="reset" onClick={()=>setModalIsOpen(false)}>Cancel</Button>
                          </ButtonGroup>
                          {modalIsOpen===false ? <Redirect to="/"/>:<Redirect to="/auth/login"/>}
                          <p className="text-center mt-3">Ты че не зарегался? {' '} <Link to="/auth/register">Зарегайся</Link></p>
                          <p className="text-center mt-3"><Link to="/">Домой</Link></p>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
    const { isAuth, loading, err } = state.AuthReducer;
    return { isAuth, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: ({ email, password }, history) => {
            dispatch(loginUser({ email, password }, history))
        },
        clearError: () => dispatch({
            type: CLEAR_ERROR,
        })
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Login)
