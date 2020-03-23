
export const getlocation=()=>{
  return new Promise((resolve,reject)=>{
    var myCity = new window.BMap.LocalCity();
    myCity.get((result)=>{
    resolve(result)
  });
  })
}
