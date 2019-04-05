import React,{Component} from 'react';
import {connect} from 'react-redux';
import{addReminder,deleteReminder,clearReminder} from '../actions';
import moment from "moment";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      dueDate:''
    }
  }
addReminder(){
    this.props.addReminder(this.state.text,this.state.dueDate);
}

deleteReminder(id){
  this.props.deleteReminder(id);
}

clearReminder(id){
  this.props.clearReminder(id);
}
renderReminder(){
  const {reminders}=this.props;
  return(
    <ul className="list-group col-sm-4">
      {
        reminders.map(reminder=>{
          return(
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div className="date"><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              <div className="delete-button"
                onClick={()=>this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          )
        })
      }
      </ul>
  )
}
  render(){
    return(
      <div className="App">
        <div className="App-title">Reminder</div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={event=>this.setState({text:event.target.value})}
              />
            <input
              type="datetime-local"
              className="form-control"
              onChange={event=>this.setState({dueDate:event.target.value})}
            />
          </div>
          <button type="button"
            className="btn btn-success add"
            onClick={()=>this.addReminder()}
            >
            Add Reminder
          </button>
        {this.renderReminder()}
          <button type="button"
            className="btn btn-danger clear"
          onClick={()=>this.clearReminder()}
            >Clear
          </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    reminders:state
  }
}

export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminder})(App);
