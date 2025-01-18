import React from 'react';
import { useDispatch } from 'react-redux';
import { addCounter } from '../../Redux/action';
import { Button } from '@mui/material';

const AddCounter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(addCounter())}>Add Counter</Button>
    </div>
  );
};

export default AddCounter;
