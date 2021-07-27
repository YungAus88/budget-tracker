import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem =(props) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='blue-badge'>
                    ${props.cost}
                    <TiDelete size='1.7em'onClick={handleDeleteExpense}></TiDelete>
                </span>
            </div>
        </li>
    );
};

export default ExpenseItem;