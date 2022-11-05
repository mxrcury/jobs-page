import React, { useContext, useEffect } from 'react'

import { Card, Pagination } from '../components';
import { getJobs } from '../api';
import { Context } from './../providers/context';

import { Container } from './styles'
import { ACTIONS } from '../constants';
import Cards from '../components/Cards';

const Home = () => {

  const {state,dispatch} = useContext(Context)

  useEffect(()=>{
    getJobs().then(res=>dispatch({type:ACTIONS.SET_JOBS,jobs:res}))
  },[])

  return (
    <Container>
      <Cards />
      <Pagination />
    </Container>
  );
}

export default Home
