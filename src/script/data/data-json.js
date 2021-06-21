class DataJson{
  static async getData(){
    return fetch(`https://covid19.mathdro.id/api`)
     .then(response => {
          return response.json();
     })
     .then(responseJson => {
          return Promise.resolve(responseJson);
     })
  }
}

class DataJson2{
  static async getData(){
    return fetch(`https://covid19.mathdro.id/api/countries/indonesia`)
     .then(response => {
          return response.json();
     })
     .then(responseJson => {
          return Promise.resolve(responseJson);
     })
  }
}

export { DataJson, DataJson2};
