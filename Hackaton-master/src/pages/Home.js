import React, { useEffect } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions'
import HomeCarousel from '../components/HomeCarousel';
import List from '../components/cardColumns/List';
import AboutUsPagination from '../components/paginations/AboutUsPagination';
import { useLocation } from 'react-router-dom';

const Home = (props) => {
    const location = useLocation();

    useEffect(() => {
        const search = new URLSearchParams(location.search);
        const page = search.get("page");

        props.fetchData(page || 0);
    }, [location]);

    if(props.error){
        return(
        <h4 className="text-danger">
            {props.error.message}
        </h4>)
    }

    return (
        <div className="HomeMainDiv">
            <HomeCarousel />
            <List data = {props.data}/>
            <AboutUsPagination/>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchData(page))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);