import React from 'react'
import { useContext } from 'react';
import { Context } from './../../providers/context';
import Card from './../Card/index';

const Cards = ({card}) => {
    const {state,dispatch} = useContext(Context)


  
    return (
    <>
      {state.jobs.map((card, idx) => (
          <Card
            isRatedJob={Math.floor(Math.random() * 15) > 5 ? true : false}
            card={card}
          />
      ))}
    </>
  )
}

export default Cards
