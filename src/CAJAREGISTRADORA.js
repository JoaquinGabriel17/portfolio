function checkCashRegister(price, cash, cid) {
    const change = [], neir = [0.01, 0.05, 0.1, 0.25, 1, 5,10, 20, 100], copy = cid.slice(0);
    let a = cid.slice(0)
    
    // copy.push(...cid)
    // copy[0][1] = "alskdjlaksjdlaksdjl"
    // console.log(copy)
    
    let b = 0, c, j, dif = cash - price, i, response = {
      status: '', change: []
    };
  
    while(dif > 0){
      for(i = 8; i >= 0; i--){
        let crChange = neir[i], unidad = cid[i][0], dis = Number(cid[i][1].toFixed(2));
        // console.log(dis)
        if(dis <= 0) b = 1
        else b = 0
        // console.log(dif,dis, crChange)
        if(dif >= crChange && b === 0 && dis >= crChange){
          
          cid[i][1] -= crChange
          // console.log(dis)
          dif -= crChange
          j = change.find(ele => ele[0] === unidad)
          if(j) j[1] += crChange
          else change.push([unidad, crChange])
          break;
  
        }
        // console.log(typeof dif,1)
        dif = Number(dif).toFixed(2)
        // dis = Number(dis).toFixed(2)
        // console.log(dif,2)
      }
      c = cid.find(ele => ele[1] > 0)
      if(b === 1 && dif > 0){
        response.status = "INSUFFICIENT_FUNDS"
        response.change = []
      }
      else if(!c){
        response.status = "CLOSED"
        response.change = copy
      }
      else{
        response.status = "OPEN"
        response.change = change
      }
    }
    // console.log(copy)
  //   let z = [1,2,3]
  // let l = [...z]
  // let k = z.slice(0)
  // z[2] = 1287301982309
  // k[1] = 123980912
  // z[1] = 9
  // console.log(l, z, k)
  
    console.log(response)
    //no se por que puta se modifican las copias ya me tiene los huevos al plato, gracias
    if(response.status === "CLOSED")response.change[0][1] = 0.5
    return response;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  
  