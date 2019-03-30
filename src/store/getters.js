export default {
  /* getData: state => {
    axios.get('../../static/Json.json')
      .then(res => {
          console.log(res)
          const data = res
          console.log(data.data)
          state.info = data.data;
        })
      .catch(err => console.log(err))
    }, */
    getInfo (state) {
      return state.info
    }
  }

