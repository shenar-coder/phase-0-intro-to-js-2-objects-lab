const employee = {
    name: {
        first: "Shenar",
        last: "Fichman",
     
    },
    streetAddress: "4105 belle ave"
};

function updateEmployeeWithKeyAndValue(obj, key, value){

    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

  //  const obj = obj.splice(key);

    obj[key] = value;
  
    return obj;


};

function destructivelyDeleteFromEmployeeByKey(employee, key){

   delete employee[key] 

    return employee

};
function deleteFromEmployeeByKey(obj, key, value){


const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;
};