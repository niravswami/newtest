<template>
  <div class="container">
    <div v-if="edit">
      <div class="flx bslin col-md-4">
        <h4 class="mb-3">My Profile</h4>
        <div @click="edit = false"><p>edit</p></div>
      </div>
      <div class="profileInfo">
        <div class="fnt14 col-md-5 ">
              <div class="flx">
                <div class="width30 clr87">
                  First Name
                </div>
                <div class="width70">
                  {{ firstName }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Last Name
                </div>
                <div class="width70">
                  {{ lastName }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Gender
                </div>
                <div class="width70">
                  {{ gender }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Birth Date
                </div>
                <div class="width70">
                  {{ birthDate }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Email
                </div>
                <div class="width70">
                  {{ email }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Mobile
                </div>
                <div class="width70">
                  +91 {{ mobileNumber }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  City
                </div>
                <div class="width70">
                  {{ city }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Area
                </div>
                <div class="width70">
                  {{ area }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  State
                </div>
                <div class="width70">
                  {{ state }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Country
                </div>
                <div class="width70">
                  {{ country }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Pincode
                </div>
                <div class="width70">
                  {{ pincode }}
                </div>
              </div>
            </div>

      </div>
    </div>
    <div v-else>
      <form class="needs-validation" novalidate>
        <div class="col-md-4">
          <h4>My Profile</h4>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" v-model="firstName" placeholder="First name" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" v-model="lastName" placeholder="Last name" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="gender" name="inlineRadioOptions" id="inlineRadio1" value="Male">
            <label class="form-check-label" for="inlineRadio1">Male</label>
         </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="gender" name="inlineRadioOptions" id="inlineRadio2" value="Female">
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="gender" name="inlineRadioOptions" id="inlineRadio3" value="Other" >
              <label class="form-check-label" for="inlineRadio3">Other</label>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <input type="date" class="form-control" v-model="birthDate" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        </div>

        <div class="form-row">

          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" v-model="email" placeholder="Email" required>
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">+91</span>
              </div>
              <input type="number" class="form-control" v-model="mobileNumber" placeholder="Mobile Number" aria-describedby="inputGroupPrepend"
                required>
              <div class="invalid-feedback">
                Please choose a mobile number.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <div class="input-group">
              <input type="text" class="form-control" v-model="city" placeholder="Ctiy" aria-describedby="inputGroupPrepend"
                required>
              <div class="invalid-feedback">
                Please choose a mobile number.
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" v-model="area" placeholder="Area" required>
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

        </div>
        <div class="form-row">
          <div class="col-md-2 mb-3">
            <input type="number" class="form-control" v-model="pincode" placeholder="Pincode" required>
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <div class="input-group">
                <select name="" id="" class="form-control" v-model="state" required>
                  <option value="">Choose..</option>
                  <option :value="val" v-for="(val, i) in stateList" :key="i">{{ val }}</option>
                </select>
              <div class="invalid-feedback">
                Please choose a mobile number.
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <select name="" id="" class="form-control" v-model="country" required>
                  <option value="">Choose..</option>
                  <option :value="val" v-for="(val, i) in countryList" :key="i">{{ val }}</option>
                </select>
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <h4>Change Password</h4>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" placeholder="Current Password" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="change Password" aria-describedby="inputGroupPrepend"
                required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Confirm New Password" aria-describedby="inputGroupPrepend"
                required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <button class="btn btn-primary" @click.prevent="edit = !edit" type="submit">Save Profile</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Nirav',
      lastName: 'Swami',
      gender: 'Male',
      birthDate: '1989-12-25',
      email: 'niravswami9@gmail.com',
      mobileNumber: '9725501989',
      city: 'Surat',
      area: 'Bhataar',
      pincode: '395007',
      state: 'Gujarat',
      country: 'India',
      edit: true,
      stateList: ['Andhra Pradesh','Arunachal Pradesh','Andaman and Nicobar Islands','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'],
      countryList: ['India', 'America']
    }
  }
}
</script>

<style scoped>
*{
  text-align: left;
}
.btn{
  display: block;
}
.flx {
  display: flex;
  padding: 5px 0;
}
.width70{
  width: 70%;
}
.width30{
  width: 30%;
}
.fnt14{
  font-size: 14px;
}
.bslin {
  align-items: center;
}
.bslin div {
  margin-left: 67px;
}
.bslin div:hover {
  color: blue;
  cursor: pointer;
}
</style>
