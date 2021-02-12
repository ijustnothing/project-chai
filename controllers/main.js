// const jwt = require('jsonwebtoken');

const Tea = require('../models/Tea')

module.exports.get = async function (req, res) {
  const teas = await Tea.find()
  let newArr= [];
  const loca = (str) => {
    if(str === 'китай'){
      return [35 + Math.random(),105 + Math.random()]
    }
    else if(str === 'индия'){
      return [22 + Math.random(),79 + Math.random()]
    }
    else if(str === 'кения') {
      return [1 + Math.random(), 37 + Math.random()]
    }
    else if(str === 'шри-ланка'){
      return [7+Math.random(),80+Math.random()]
    }
    else if(str==='въетнам'){
      return [12+Math.random(), 108+Math.random()]
    }
    else if(str==='англия'){
      return [52+Math.random(),-1+Math.random()]
    }else{
      return [64+Math.random(),77+Math.random()]
    }
  }
  teas.map(el => {
    nameTea = el.name;
    id = el._id;
    location = loca(el.location)
    newArr.push({location,id,nameTea})

    console.log(newArr);
  res.render('main',{teas:newArr});
});
}
