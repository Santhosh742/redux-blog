import React from "react";
import { connect } from "react-redux";


class UserDeatils extends React.Component{
  render(){
    const {Users} = this.props;
    if(!Users){
      return null;
    }
    return(
      <div className="header">
      {Users.name}
      </div>
    )
  }
    
}

const mapStoreToProps = (state, ownProps) =>{
    return { Users: state.user.find(user => user.id === ownProps.userId)}
}

export default connect(mapStoreToProps) (UserDeatils);