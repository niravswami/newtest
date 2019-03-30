export default {
  user({comit}, payload) {
    firebase.auth().createUserWithEmailPasswordAndMobile(payload.email, payload.password, payload.mobileNumber)
    .then(
      user => {
        const newUser = {
          id: user.uid,
          email: '',
          mobile: '',
          password: '',
          shop: {
            shopName: '',
            Address: '',
            area: '',
            city: '',
            state: '',
            country: '',
          },
          products: []
        }
        comit(setUser, newUser)
      }
    )
    .catch(err => console.log(err))
  }
}
