// class ObjectUtilities {
//     static mergeObjects = (objA, objB) => Object.assign(objA, objB);
//     static removePassword(user) {
//       const extra = { ...user };
//       delete extra.password;
//       return extra;
//     }
//     static freezeObj = cleanUser => Object.freeze(cleanUser);
//     static getOnlyValues = frozenUser => Object.values(frozenUser);
//     static getOnlyProperties = frozenUser => Object.keys(frozenUser);
//   }

// 위에가 제출한 것 밑에가 답안
class ObjectUtilities {
  static mergeObjects = (objA, objB) => ({...objA , ...objB}); // 오브젝트를 표현할때 () 필수인듯
  static removePassword = ({password , ...rest}) => rest; //여기도 마찬가지
  static freezeObj = cleanUser => Object.freeze(cleanUser);
  static getOnlyValues = frozenUser => Object.values(frozenUser);
  static getOnlyProperties = frozenUser => Object.keys(frozenUser);
}
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  