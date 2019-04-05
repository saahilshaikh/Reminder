import{ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../constants';

export const addReminder =(text,dueDate)=>{
  const action={
    type:ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder',action);
  return action;
}

export const deleteReminder=(id)=>{
    const action={
      type:DELETE_REMINDER,
      id
    }
    console.log('deleting in actions',action);
    return action;
}

export const clearReminder=(id)=>{
  const action={
    type:CLEAR_REMINDER,
    id
  }
  console.log('clearing in actions',action);
  return action;
}
