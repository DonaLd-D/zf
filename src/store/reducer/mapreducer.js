const defaultState={
  city:{
    cityName:''
  }
}

export default (state=defaultState,action)=> {

  let newState=JSON.parse(JSON.stringify(state));
  switch(action.type){
    case 'initcity':
      newState.city=action.value;
      return newState;
      break;

    default:
      break;
  }


  return state;
}