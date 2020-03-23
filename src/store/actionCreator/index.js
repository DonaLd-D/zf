import {getlocation} from '../../utils/bdmaphelper';

export const getLocalCityAction=()=>{
  return async (dispatch)=>{
    const res=await getlocation();
    dispatch({
      type:'initcity',
      value:res
    })
  }
}