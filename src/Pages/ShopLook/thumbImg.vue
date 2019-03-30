<template>
  <div class="containerHolder px-3 py-5">
    <div class="flx">
      <h4>Product Upload Page</h4>
      <div class="uploadCancelBtnDiv">
      <button class="bigButton productUploadBtn" type="submit" @click.prevent="uploadItem">Priview</button>
      <button class="bigButton productCancelBtn">Cancel</button>
      </div>
    </div>

    <div class="mainDiv flx">
      <div class="imgDiv flx">
        <div class="thumbDiv flx">
          <div v-for="(img, i) in item.images" :key="i" class="thumbnailDiv" :id="i">
            <div class="deleteThumb flx">
              <img style="width: 25%; height: 25%;" title="Add Pic" @click="editThumbnailPic(i)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG9SURBVGhD7Ze7SgNBFIa3shHcZ7C3ESy19yGUgGgtVrZioyjY5TVE0FdQh73AFtvqa6Ty8h84B3aHvSVZ3DNyPvgJyUzc/0tmZmNkGEZYOOe20jSdI+9Zlp3zy2GB4jHyivxU8sDDYYDCMb6FN08iLBkU7ZKQ6JdByTOvdFv0y+AbuWoo3pT/I4N5F/yWaUEZOp32+WmNITK0n3j6dKCIbOxFnueH/HKNPhmMz3nqNKCEfzqtIkP3mZin/T10cU9CMliG369SQtIrE4KEpFUmSZITjAchIWmVmQyUWlZCokcGZVaVkCyQA/5z04AC60oEtbFbYxJjQBc3CUSFBOL/j71UTGIM6OKISZjEGNDFkbAlCOfcNv2cRplH5Nsv2RcVEj74dXrkF+2KSgkBxZJq2Y7QctQpQeBTvvcKN0WHBPbETlmWG/y0BsZ2IXPNy0avBIGSN8hLm4wAqWPMqx4AupYTyj1TsSEymPekUoJAoU8u1yuD8VOVEkVRbKLcl4j0ydB9Rp0EgXvFXlVCMmSZqQKFZ00ilKBkUPbOK0+n0gce6QC4paOZp+oGhS9JBpnRMqM9w0OGYRjGmkTRL15ypmLchEVFAAAAAElFTkSuQmCC">

              <img @click="delThumb(i)" style="width: 25%; height: 25%;" title="Delete Pic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIRSURBVGhD7ZhNSsNAGIbrUkH8WbvXpS56AHElgl5BQReCoFdw3SO0Bd31IKG0TWKh52hv0BLfKd8HZUyayTczSYV54KUldd6ZR5ufsRUIBAKBf8FkMmnHcfw2Go3O6JATkiQ5QF7Qf0+H/JGm6RMkVpgwQxaY9Io+smI2m52gN6XeDO+7WZbt0cdu0SQ41jK6xEZ6zmUKJDhzqcwWCU7fmUyJBKeyjIEEx14Gi2ujaKkVF8VYpoIE54OGysBkrzml21IqI5BQJ/+AhstQl1gUzfXikhTKCCVWyB1VyFGLQuFCn6Ak8/F4fEkVayQSyFKdo1Rhj63MTkgwUhkIXO+MBCOUqRq/EoxnmXokGE8y6n71SFPUh2OZZiQYRzLNSjCWMrshweAEvdEWaBRclj+ponmGw+EpFvWjL9IwzjZnVlhKcJqVcSTBEW/OrFASgseOstQr40mCU4+MZwmOXxmhxFJdYvFa9T7zZz/jBOl+Alnf7NRvGO+blbGVYEim8rbZiQy+TvsuJBipDMadU4UMSDznFG9L6bOTUOabhsuAyENOaVGMHwCrymAdHRoqQ/2HD0V9vTgnxhKMqQwk8JIc0TA5BjKVJRh1ImNsoQwk4ul0ekw/bg/J9PSJELEEUyTjXIJRMujubkxmLcHoMt4kGPrLvGOeAb7jt3TYCei9QL7Q3Ymi6JAOBwKBQCBQA63WL31+7PKvASEaAAAAAElFTkSuQmCC">
            </div>
            <input type="file" accept="image/*" :data-file="img.refinput" @change="previewImage" style="display:none;">
            <div class="thumbnail">
              <img  @mouseover="mouseover" :ref="'img' + i" :src="img.src">
            </div>
          </div>

          <button @click="addNewThubnail" class="btnAdd btn btn-link">Add More</button>
        </div>
        <div class="mainPicDiv">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="detailDiv">
        <div class="forTitle padding">
          <div v-if="isPath">
          <div>
            <div class="flx categoryPathDiv">
              <a href="#" class="rightPadding">{{item.mainCategoryIs}}</a>
              <span class="rightPadding">></span>
              <a href="#" class="rightPadding">{{item.secondCategoryIs}}</a>
              <span class="rightPadding">></span>
              <a href="#" class="rightPadding">{{item.subCategoryIs}}</a>
            </div>
          </div>
        </div>
          <div v-else></div>
          <div class="titleDiv">
            <div class="form-row">
              <div class="form-group col-md-12">
                <input type="text" v-model="item.title" class="form-control productName" placeholder="What is Your Product?">
              </div>
            </div>
            <!-- <textarea ref="titleTextarea" :value="item.title" cols="40" rows="1" v-if="edit" class="productName" @keypress.enter="editTitle"
              autofocus></textarea>

            <h3 v-else>{{ item.title }}</h3> -->
          </div>
         <!--  <div class="buttonDiv">
            <span title="Edit" @click="editTitle" v-if="show">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHDSURBVGhD7ZfLSsNAFIa7ciPoMyiikyKC4FL3PoQiiK7FlcsZ68JiwV1fwoUIFTuTrqvgO+hrdOXlnHKmknRy6QVzpswHPzTJpPxfkpk2tUAg4Bcb8mUlUroNeYtUfEG7/WK92VuNlOlDfkaR+p4O+8FQQprXhIRvMrkSNj7ICKXPneXT8UEG7ohylk9nkWSEMpd0SrXgnKjL3j5tJiglA/OJhlfH38TWg7rUh7Q7QbGMbtPQahhfnaaS6eP30LD/J3uJnUAGzmcqYVNChr+ETZ6MPvVEwiZbpjIml7BhJDO9hI0eRNfdA/q6aphdAgLnezYnHAkScyBI2LCQSL9jT5ogMQeChE2QmAMLIYFs3pg1/DsNeYR8O4vmhYNEGih15CybFY4SFiHNu7P0eKp9xy5CKNNylE6HhwRc9e26fFiizQRRo7cLc6WBj41DgI8EAmVuoehzlowlUt3j1ALA63GCQp1hsRIycPeeWEogcJU/qVyhjJDxGUuJnZZZhmJfI5ECGfydYSeBbMl4LyFRQoYlsLyeOEUwPskIqe+S5XFV0h/wuQMiTVyaaShvhNJXKIN3Bh8znDN0KBAIBAIzUqv9Aq9qjxOUGcPnAAAAAElFTkSuQmCC">
            </span>

            <span title="Save" @click="saveEditTitle" v-if="!show">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJvSURBVGhD7Zm/axRBFMdXJIUI/misUgVNZldyKawE/QvE0sZGCASxEJuA5ZsTRFEsVFRSiCLYXJMmXGZyhaAkWCRdAgFRsNZCixBQ4vnm7rm7t/fW7O7d3o4yX/hw3O6b2ffZ2dts7jwXWzP+YO2QL/VjH9RXfG1XjZD6uddoHKT2skeAfsRNWCXY06vcMr5UX7jJItSLibuto1ReSiahWcMr4lP8uLll4oOTCKl+mkuPSgfOmYX1sek7S8cNJ6F5hDZ3gsea6zt+Hpnk4B5AfaOygTMNzXGc83t8fgHqHu32RH35QnxfVJNRhhscMkSRAFrn+ufXS7Q7VcSQSYYbGGKJiGFfGW5QiEUihr/KcANCLBMxpMpwxSEWihjwDneThkXhCkNsFQH9lIZF4QpDnEh/nAhDpSIz8OYYzrmKz24fDfiU+yGQ+irtLllE6r0a6BNUWmrwpM0zx2cpImIGvfXry+dPQWuiDAS0JnF1rpjV547PUUjERpyIbTgR23AiXfAPGej10pB6I+stuJgI6O0AmgGVl5t2+wCesGso9IvthSgkgo8OZ6l0ZEGRl1wvfyggonYzfYMx5KDILN9Pl/wiQ3xozJMpUJfZfggnMuo4kVScyGBxIqk4kcHiRFL5V0UEqB9IQ0i92NlWsYiQ6nOnH1Dve/vcb0WocfPjZ/z9qBNbkdeJ99lEcCV2gvrKpc73TGZb9SvyrtuPetjT5//+GdlLFoZYKoL/Jz2h0ihot8kXR5faqEleSkkCqa5T+1Gm6vqiuVtxA2wET+5W7b4+TO335vQtNYNn4TYu2YKtoMAzX67cSJVwsSKe9xu0vvWvQt7IRgAAAABJRU5ErkJggg==">
            </span>
            <span @click="editTitleCancel" title="Cancel" v-if="!show">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI+SURBVGhD7ZjLSuRAFIbjcgRxdO1el8ogaFKtiCJOV3W78QEUdCEI+gqufQQVdOe7eHmFYZzpdMDLEyhtVfockFjpdE5VJS3UBz8dKqlT9aVzDzwej8fzLYjF8mKXR0f/tlZnoMkKHfFrvMPZQcLDNjS5oyvYXszZu/ztybz8b68swCoj/nI2JXfOPdTtxTw67wXBGKy2S0YCYyyTlcDIsS6sy8jCOol+OHumyuRJYGLBLq3JyIL5EhiCTJEExoqMOrHl8fqmG+BLSsgMK4Hp8OgEutKQ/8ShrnBuhpApK6Ei53ED3WmoS6yanK54bgbIECXeu80GhxJ01KRkwZfsAAOjZJrhPJRIoUmkh/UelDDHVGYkJBCqTLcZro2MBEKSKRnnEohLmcokEBcyqUSrsQtDVIdNmdokEBsytUsgJjIjI4Ekgq3rJloYHp1Cifp53FyalhN60E60ONZezowwlMDUK2NJop8BD5pOAYlSjx2FqVrGiQSmKhmnEhjXMhSJ9D4hL7Fyudx9Rslk3mesQH6fgJud2sOyrV4ZUwkklZGT022fG1syjztLP2xIIGSZdjgLJWgkorGvLZ6TYZ6dSDKCXUN3Gkmrsa0pqs0wEkhpGc7OoCsN9YVPfenTFv+UMhJICZm7142NSehGp0iGIoGoE7lA5vbP9upP2NycVIazi+xAJhLIABm7EkhfJjrHgWxIIBoZNxKIkkl4dKy+xcYi+g3NVuiI5TkpcKVO7Kd2OAHNHo/H4/FUQBB8AP+X+a0YZTRrAAAAAElFTkSuQmCC">
            </span>
          </div> -->
        </div>
        <div class="priceDiv padding">
          <div class="previousPriceDiv flx">
              <div class="form-row">
                <div class="form-group col-md-5">
                  <label for="priviousPrice">Privious Price</label>
                  <input type="number" v-model="item.previousPrice" class="form-control previousPriceInput" id="priviousPrice">
                </div>
                <div class="form-group col-md-5">
                  <label for="price">Price</label>
                  <input type="text" v-model="item.amount" class="form-control priceInput" id="price" @change="enterPrice">
                </div>
                <div v-if="isRent" class="form-group col-md-2">
                  <label for="discount">Discount</label>
                  <input type="number" class="form-control discountInput" id="discount" v-model="item.discount" @change="applyDiscount">
                </div>
                <div v-else class="form-group col-md-2">
                  <label for="rent">Rent</label>
                  <select class="form-control" id="rent" v-model="item.rentPer">
                    <option value=""  disabled selected>option</option>
                    <option v-for="(val,i) in forRent" :key="i" :value="val">{{ val }}</option>
                </select>
              </div>



              </div>
            <!--<div class="previousPrice">
              <input type="number" v-model="item.previousPrice" class="previousPriceInput mb-2">
               <input type="number" v-model="item.previousPrice" v-if="previousEdit" @keypress.enter="editPriviousPrice" class="previousPriceInput">
              <div class="previousOutput clr87" v-else @click="previousEdit=!previousEdit"><span>₹ {{ item.previousPrice }} </span>
              </div>
            </div>-->
           </div>
            <div class="taxes mt-3">
              <label class="tax clr87" for="checkbox">(Inclusive Of All Taxes)</label>
              <input type="checkbox" id="checkbox" v-model="item.checked">
            </div>

          <!--<div class="priceAndDiscount flx">
            <div class="price flx">
              <span>₹</span>
              <input type="text"  class="priceInput"  v-model="item.strPrice">
               <input type="text"  class="priceInput" v-if="isPrice" v-model="item.strPrice" @keypress.enter="enterPrice">
              <h2 v-else @click="isPrice=!isPrice">{{ item.strPrice }}</h2>
            </div>-->
            <!--<div class="discount flx">
              <input type="number" class="discountInput" v-model.lazy="item.discount" @change="applyDiscount">
              <span class="discountOutput clr87">% off</span>
               <input type="number" class="discountInput" v-if="isdiscount" v-model.lazy="item.discount" @keypress.enter="applyDiscount">
              <div class="discountOutput clr87" v-else @click="isdiscount=!isdiscount">{{ item.discount }} % off</div>
            </div>
          </div>
          <div class="forInfo">click on <span style="text-decoration: line-through;">" 0 "</span>, <span>" ₹123 "</span>  and <span>" 0% "</span>  to edit then press ENTER to change or cancel.</div>-->
        </div>
        <div class="mainDescriptionDiv">
          <div v-if="isProperty" class="form-group row padding textCenter">
            <label for="brand" class="col-sm-2 col-form-label">Brand</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="brand" v-model="item.brand" placeholder="brand">
            </div>
          </div>
          <div v-else class="form-group  padding textCenter">
            <label for="propertyAddress" class="col col-form-label">property Location</label>
            <div class="col">
              <input type="text" class="form-control" id="propertyAddress" v-model="item.propertyLocation" placeholder="Full Address">
            </div>

             <div class="form-row mt-3">
              <div class="form-group col">
                <label for="inputCity">Area</label>
                <input type="text" v-model="item.area" class="form-control" id="inputArea" placeholder="Area">
              </div>
              <div class="form-group col">
                <label for="inputCity">City</label>
                <input type="text" v-model="item.city" class="form-control" id="inputCity" placeholder="City">
              </div>
            </div>
             <div class="form-row mt-3">

              <div class="form-group col">
                <label for="inputState">State</label>
                <select v-model="item.state" id="inputState" class="form-control">
                  <option value="" selected disabled>Choose...</option>
                  <option :value="val" v-for="(val, i) in state" :key="i">{{val}}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputZip">Pincode</label>
                <input type="text" v-model="item.pincode" class="form-control" id="inputZip">
              </div>
            </div>
          </div>
          <ul>
            <li v-for="(description, i) in item.descriptions" :key="i" class="lists padding">
              <div style="width: 100%;" class="flx descriptionsButtons">

                <!-- <span title="Edit" :data-button="'edit' + i" @click="editDiscriptionPart(i)">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHDSURBVGhD7ZfLSsNAFIa7ciPoMyiikyKC4FL3PoQiiK7FlcsZ68JiwV1fwoUIFTuTrqvgO+hrdOXlnHKmknRy6QVzpswHPzTJpPxfkpk2tUAg4Bcb8mUlUroNeYtUfEG7/WK92VuNlOlDfkaR+p4O+8FQQprXhIRvMrkSNj7ICKXPneXT8UEG7ohylk9nkWSEMpd0SrXgnKjL3j5tJiglA/OJhlfH38TWg7rUh7Q7QbGMbtPQahhfnaaS6eP30LD/J3uJnUAGzmcqYVNChr+ETZ6MPvVEwiZbpjIml7BhJDO9hI0eRNfdA/q6aphdAgLnezYnHAkScyBI2LCQSL9jT5ogMQeChE2QmAMLIYFs3pg1/DsNeYR8O4vmhYNEGih15CybFY4SFiHNu7P0eKp9xy5CKNNylE6HhwRc9e26fFiizQRRo7cLc6WBj41DgI8EAmVuoehzlowlUt3j1ALA63GCQp1hsRIycPeeWEogcJU/qVyhjJDxGUuJnZZZhmJfI5ECGfydYSeBbMl4LyFRQoYlsLyeOEUwPskIqe+S5XFV0h/wuQMiTVyaaShvhNJXKIN3Bh8znDN0KBAIBAIzUqv9Aq9qjxOUGcPnAAAAAElFTkSuQmCC">
                </span>

                <span title="Save" class="dnone" :data-button="'save' + i" @click="saveDiscriptionPart(i)">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJvSURBVGhD7Zm/axRBFMdXJIUI/misUgVNZldyKawE/QvE0sZGCASxEJuA5ZsTRFEsVFRSiCLYXJMmXGZyhaAkWCRdAgFRsNZCixBQ4vnm7rm7t/fW7O7d3o4yX/hw3O6b2ffZ2dts7jwXWzP+YO2QL/VjH9RXfG1XjZD6uddoHKT2skeAfsRNWCXY06vcMr5UX7jJItSLibuto1ReSiahWcMr4lP8uLll4oOTCKl+mkuPSgfOmYX1sek7S8cNJ6F5hDZ3gsea6zt+Hpnk4B5AfaOygTMNzXGc83t8fgHqHu32RH35QnxfVJNRhhscMkSRAFrn+ufXS7Q7VcSQSYYbGGKJiGFfGW5QiEUihr/KcANCLBMxpMpwxSEWihjwDneThkXhCkNsFQH9lIZF4QpDnEh/nAhDpSIz8OYYzrmKz24fDfiU+yGQ+irtLllE6r0a6BNUWmrwpM0zx2cpImIGvfXry+dPQWuiDAS0JnF1rpjV547PUUjERpyIbTgR23AiXfAPGej10pB6I+stuJgI6O0AmgGVl5t2+wCesGso9IvthSgkgo8OZ6l0ZEGRl1wvfyggonYzfYMx5KDILN9Pl/wiQ3xozJMpUJfZfggnMuo4kVScyGBxIqk4kcHiRFL5V0UEqB9IQ0i92NlWsYiQ6nOnH1Dve/vcb0WocfPjZ/z9qBNbkdeJ99lEcCV2gvrKpc73TGZb9SvyrtuPetjT5//+GdlLFoZYKoL/Jz2h0ihot8kXR5faqEleSkkCqa5T+1Gm6vqiuVtxA2wET+5W7b4+TO335vQtNYNn4TYu2YKtoMAzX67cSJVwsSKe9xu0vvWvQt7IRgAAAABJRU5ErkJggg==">
                </span> -->
                <span title="Delete" @click="deleteDescriptionPart(i)">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI+SURBVGhD7ZjLSuRAFIbjcgRxdO1el8ogaFKtiCJOV3W78QEUdCEI+gqufQQVdOe7eHmFYZzpdMDLEyhtVfockFjpdE5VJS3UBz8dKqlT9aVzDzwej8fzLYjF8mKXR0f/tlZnoMkKHfFrvMPZQcLDNjS5oyvYXszZu/ztybz8b68swCoj/nI2JXfOPdTtxTw67wXBGKy2S0YCYyyTlcDIsS6sy8jCOol+OHumyuRJYGLBLq3JyIL5EhiCTJEExoqMOrHl8fqmG+BLSsgMK4Hp8OgEutKQ/8ShrnBuhpApK6Ei53ED3WmoS6yanK54bgbIECXeu80GhxJ01KRkwZfsAAOjZJrhPJRIoUmkh/UelDDHVGYkJBCqTLcZro2MBEKSKRnnEohLmcokEBcyqUSrsQtDVIdNmdokEBsytUsgJjIjI4Ekgq3rJloYHp1Cifp53FyalhN60E60ONZezowwlMDUK2NJop8BD5pOAYlSjx2FqVrGiQSmKhmnEhjXMhSJ9D4hL7Fyudx9Rslk3mesQH6fgJud2sOyrV4ZUwkklZGT022fG1syjztLP2xIIGSZdjgLJWgkorGvLZ6TYZ6dSDKCXUN3Gkmrsa0pqs0wEkhpGc7OoCsN9YVPfenTFv+UMhJICZm7142NSehGp0iGIoGoE7lA5vbP9upP2NycVIazi+xAJhLIABm7EkhfJjrHgWxIIBoZNxKIkkl4dKy+xcYi+g3NVuiI5TkpcKVO7Kd2OAHNHo/H4/FUQBB8AP+X+a0YZTRrAAAAAElFTkSuQmCC">
                </span>

              </div>
              <!-- <div class="flx" :data-preview="'heading'+i">
                <div class="discriptionHeading clr87">
                  <pre>{{ discription.heading }}</pre>
                </div>
                <div class="values">
                  <pre>{{ discription.text }}</pre>
                </div>
              </div> -->

              <!-- <div class=" flx" :data-preview="'text'+i">
                <div class="discriptionHeading" >
                  <textarea v-model="discription.heading" name="" id="editHeadInput" cols="15" rows="2"></textarea>
                </div>
                <div class="values">
                  <textarea v-model="discription.text" name="" id="editTextareaInput" cols="40" rows="2"></textarea>
                </div>
              </div> -->
              <div class="  ">
            <div class=" flx">
              <div class="descriptionHeading" style="border-right: none;">
                <textarea v-model="description.heading" name="" id="headInput" cols="15" rows="2" placeholder="Write your Heading- e.g: Items in the box"></textarea>
              </div>
              <div class="values">
                <textarea v-model="description.text" name="" id="textareaInput" cols="40" rows="2" placeholder="Charger 1x, Handset 1x, Case-cover 3x"></textarea>
              </div>
            </div>
          </div>

            </li>
          </ul>
            <div class="btns padding">
              <button @click="save" class="ipSaveBtn">Add More</button>
            </div>
          <!-- <div class=" padding gryClr">
            <div class=" flx">
              <div class="discriptionHeading" style="border-right: none;">
                <textarea v-model="discription.heading" name="" id="headInput" cols="15" rows="2"></textarea>
              </div>
              <div class="values">
                <textarea v-model="discription.text" name="" id="textareaInput" cols="40" rows="2"></textarea>
              </div>
            </div>
            <div class="btns">
              <button @click="save" class="ipSaveBtn">Save this Block</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { eventBus } from '../../main.js'
  export default {
    props: {

    },
    components: {

    },
    created() {
      /* creat Product ID */

      this.getstatus
      console.log(this.getstatus)
        /* this.item.mainCategoryIs = this.getstatus.mainCategory
        this.item.secondCategoryIs = this.getstatus.secondCategory
        this.item.subCategoryIs = this.getstatus.subCategory */
      this.checkStatus()
    },
    activeted() {

    },
    deactivated() {
    },
    destroyed() {


    },

    data() {
      return {

        edit: false,
        show: true,
        previousEdit: false,
        isRent: true,
        isPath: true,
        isPrice: false,
        isdiscount: false,
        isProperty: true,
        count: 1,
        clickEditDiscription: true,
        forRent: ['Hour', 'Day', 'Week', 'Month', 'Year'],
        state: ['Andhra Pradesh','Arunachal Pradesh','Andaman and Nicobar Islands','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'],
        item: {
          ProductID: null,
          want_to: '',
          categoryInWant_to: '',
          otherCategoryInWant_to: '',
          mainCategoryIs: null,
          secondCategoryIs: null,
          subCategoryIs: null,
          rentPer: '',
          title: '',
          brand: '',
          previousPrice: 0,
          amount: 12000,
          discount: 0,
          strPrice: '12,000',
          //img: require('../../assets/img/Paansi-2jjhh.png'),
          img: 'http://placehold.it/150/92c952',
          checked: true,
          propertyLocation: '',
          area: '',
          city: '',
          state: '',
          pincode: '',
          descriptions: [
            {
              heading: '',
              text : ''
            }
          ],
          images: [
            {
              //src: require('../../assets/img/Paansi-2jjhh.png'),
              src: 'http://placehold.it/150/92c952',
              refinput: 'imginput0'
            }
          ]
        },
      }
    },
    methods: {
      editThumbnailPic(i) {
          const button = document.querySelector(`input[data-file="imginput${i}"]`);
          button.click();
      },
      editTitle(e) {
        this.edit = true;
        this.show = false;
      },
      addNewThubnail(e) {

        if (this.count <= 4) {
          this.item.images.push({
            src: 'http://placehold.it/150/92c952',
            refinput: 'imginput' + this.count
          });
          this.count++;
        } else {
          const button = document.querySelector('.btnAdd');
          button.textContent = 'Max 5 Pics';
          button.setAttribute("disabled", "disabled");
        }
      },
      delThumb(index) {
        const a = confirm('Are You Sure You Want To Delete?');
        if (a === true) {

          this.item.images.splice(index, 1);
          this.count--;
          const button = document.querySelector('.btnAdd');
          button.textContent = 'Add More';
          button.removeAttribute("disabled", "disabled");
          const b = this.item.images.length;
          if(b !== 0) {
            const c = b - 1;
            this.item.img = this.item.images[c].src
          } else {
            this.item.img = 'http://placehold.it/150/92c952';
          }
        }
        return;
      },
      save() {
        const a = document.querySelector('#headInput').value;
        const b = document.querySelector('#textareaInput').value;
        if (a === '' || b === '') {
          alert('Please write some description ')
          return;
        } else {
          this.item.descriptions.push({
            heading: a,
            text: b,
          });
        document.querySelector('#headInput').value = '';
        }
        document.querySelector('#textareaInput').value = '';
      },
      editDescriptionPart(index) {
        const a = document.querySelector(`div[data-preview="heading${index}"]`);
        const b = document.querySelector(`div[data-preview="text${index}"]`);
        const c = document.querySelector(`span[data-button="edit${index}"]`);
        const d = document.querySelector(`span[data-button="save${index}"]`);

        a.classList.add('dnone');
        b.classList.remove('dnone');
        c.classList.add('dnone');
        d.classList.remove('dnone');
      },
      saveDescriptionPart(index) {
        {
          const a = document.querySelector(`div[data-preview="heading${index}"]`);
          const b = document.querySelector(`div[data-preview="text${index}"]`);
          const c = document.querySelector(`span[data-button="edit${index}"]`);
          const d = document.querySelector(`span[data-button="save${index}"]`);

          a.classList.remove('dnone');
          b.classList.add('dnone');
          c.classList.remove('dnone');
          d.classList.add('dnone');
        }
      },
      deleteDescriptionPart(index) {
        const a = confirm('Are You Sure You Want To Delete!!');
        if (a) {
          this.item.descriptions.splice(index, 1);
        }
        return;
      },
      saveEditTitle() {
        this.show = false;
        const a = document.querySelector('.productName').value;
        this.item.title = a;
        if (this.item.title === 'Product Name') {
          alert('please enter product name');
          return;
        } else {
          this.edit = false;
        }
        this.show = true;
      },
      editTitleCancel() {
        const a = confirm('Confrirm To Cancel Changes');
        if (a === true) {
          this.edit = false;
          this.show = true;
        } else {
          this.edit = true;
          this.show = false;
        }
        return;
      },
      editPriviousPrice() {
        const a = document.querySelector('.previousPriceInput').value;
        this.item.previousPrice = a;
        this.previousEdit = false;
      },
      enterPrice() {
        const a = document.querySelector('.priceInput').value;
        if (a === '' || a == 0) {
          alert('please enter Amount!!!');
          return
        } else {
          a.replace(/\,/g,"");
          let b = a.replace(/\,/g,"");
          b = Number(b);
          this.item.amount = b
          const c = `${b}`;
          this.commaFormatted(c);
          console.log(b)
          this.item.discount = 0;
          this.item.previousPrice = 0;
          this.isPrice = false;
        }
      },
      applyDiscount() {

        const discountInput = document.querySelector('.discountInput').value;
        const originalDiscount = Number(this.item.discount);
        if (discountInput == '' || discountInput == 0 || discountInput == null) {
          if (discountInput == '') {
            alert('please provide some number, atleast "0"');
            return;
          } else {
            console.log('fst else')
              if(this.item.previousPrice !== 0) {
              const a = this.item.previousPrice;
              this.item.amount = a;
              const b = `${a}`;
              this.commaFormatted(b);
              this.item.previousPrice = 0;
              this.item.discount = 0;
            } else {
              this.item.discount = 0;
            }
          }
          console.log('2 isDid fals')
            this.isdiscount = false;
            return;

        } else if (discountInput === originalDiscount) {
          this.item.discount = originalDiscount;
          this.isdiscount = false;
          console.log('original')
            return;

        } else {
            let m;
          if(this.item.previousPrice === 0) {
            const priceInput = this.item.amount;
            const discountIntoPercentage = discountInput / 100;
            const totalValue = priceInput - (priceInput * discountIntoPercentage);
             m = totalValue.toFixed(2);
             this.commaFormatted(m);
             this.item.amount = m;
            this.item.previousPrice = priceInput;
            this.item.discount = discountInput ;
          } else {
            const priceInput = this.item.previousPrice;
            const discountIntoPercentage = discountInput / 100;
            const totalValue = priceInput - (priceInput * discountIntoPercentage);
             m = totalValue.toFixed(2);
             this.commaFormatted(m);
            this.item.amount = m;
            this.item.previousPrice = priceInput;
            this.item.discount = discountInput ;
          }
        }
            console.log('out')
            this.isdiscount = false;
            return;
      },
       commaFormatted(amount) {
        var delimiter = ","; // replace comma if desired
        var a = amount.split('.',2)
        var d = a[1];
        var i = parseInt(a[0]);
        if(isNaN(i)) {
        return '';
        }
        var minus = '';
        if(i < 0) {
        minus = '-';
        }
        i = Math.abs(i);
        var n = new String(i);
        var a = [];
        while(n.length > 3) {
        var nn = n.substr(n.length-3);
        a.unshift(nn);
        n = n.substr(0,n.length-3);
        }
        if(n.length > 0) {
        a.unshift(n);
        }
        n = a.join(delimiter);
        if(d) {
        if(d.length < 1) {
        amount = n;
        } else {
        amount = n + '.' + d;
        }
        } else {
        amount = n
        }
        amount = minus + amount;

        return this.item.strPrice = amount;;
        },
      mouseover(e) {
        const id = e.target.parentElement.parentElement.id;
        if (id == '0') {
          this.item.img = this.item.images[0].src;
        } else if (id == '1') {
          this.item.img = this.item.images[1].src;
        } else if (id == '2') {
          this.item.img = this.item.images[2].src;
        } else if (id == '3') {
          this.item.img = this.item.images[3].src;
        } else if (id == '4') {
          this.item.img = this.item.images[4].src;
        }
      },
      previewImage: function (event) {
        // Reference to the DOM input element
        var input = event.target;
        let id = input.parentElement.id;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.item.img = e.target.result;

            if (id == '0') {
              this.item.images[0].src = e.target.result;
            } else if (id == '1') {
              this.item.images[1].src = e.target.result;
            } else if (id == '2') {
              this.item.images[2].src = e.target.result;
            } else if (id == '3') {
              this.item.images[3].src = e.target.result;
            } else if (id == '4') {
              this.item.images[4].src = e.target.result;
            }
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      },
      uploadItem() {
        const prdID = new Date().getTime()
        const aa = this.item.images
        const b = aa.filter(a => a.src !== 'http://placehold.it/150/92c952');

            const product = {
              ProductId: prdID,
              date: new Date().getFullYear(),
              /* first selection */
              want_to : this.item.want_to,
              categoryInWant_to : this.item.categoryInWant_to,
              otherCategoryInWant_to : this.item.otherCategoryInWant_to,
              /* second selection */
              mainCategoryIs: this.item.mainCategoryIs,
              secondCategoryIs: this.item.secondCategoryIs,
              subCategoryIs: this.item.subCategoryIs,
              /* product title etc */
              title : this.item.title,
              rentPer: this.item.rentPer,
              brand: this.item.brand,
              previousPrice : this.item.previousPrice,
              img: this.item.images[0].src,
              amount : this.item.amount,
              discount: this.item.discount,
              strPrice : this.item.strPrice,
              checked : this.item.checked,
              descriptions : this.item.descriptions,
              propertyLocation: this.item.propertyLocation,
              area: this.item.area,
              city: this.item.city,
              state: this.item.state,
              pincode: this.item.pincode,
              images : b
              }
            this.$store.dispatch('disPrd', product)
            /* eventBus.$emit('thumb', product); */
            console.log(product)

          this.$router.push('/productdetail/:productId?');
            /* axios.post('https://jsonplaceholder.typicode.com/posts', prd)
             .then(res => {
            console.log(res)
           })
           .catch(err => console.log(err)) */
      },
      checkStatus() {
        this.item.want_to = this.getstatus.want_to
        this.item.categoryInWant_to = this.getstatus.categoryInWant_to
        this.item.otherCategoryInWant_to = this.getstatus.otherCategoryInWant_to

        if(this.getstatus.want_to.toLowerCase() === 'rent') {
          if(this.getstatus.categoryInWant_to !== 'Property') {
            this.isRent = false
            this.isPath = true
            this.item.mainCategoryIs = this.getstatus.mainCategory
            this.item.secondCategoryIs = this.getstatus.secondCategory
            this.item.subCategoryIs = this.getstatus.subCategory
          } else {

            this.isRent = false
            this.isPath = false
          }
          /* console.log('rent') */
          } else if( this.getstatus.mainCategory === '' || this.getstatus.secondCategory === '') {
            this.isPath = false
          /* console.log('hhi') */
      }else {
        this.item.mainCategoryIs = this.getstatus.mainCategory
        this.item.secondCategoryIs = this.getstatus.secondCategory
        this.item.subCategoryIs = this.getstatus.subCategory
      }
        /* console.log(this.item) */
        if(this.getstatus.categoryInWant_to.toLowerCase() === 'property'){
            this.isProperty = false
            this.isPath = false
        }
        if(this.getstatus.want_to.toLowerCase() === 'services') {
          this.isPath = false
        }
        if(this.getstatus.want_to.toLowerCase() === 'education') {
          this.isPath = false
        }
      },
      forDeactiveted () {
        this.item.mainCategoryIs = ''
        this.item.secondCategoryIs = ''
        this.item.subCategoryIs = ''
      },
      forActiveted() {
        this.item.mainCategoryIs = this.getstatus.mainCategory
        this.item.secondCategoryIs = this.getstatus.secondCategory
        this.item.subCategoryIs = this.getstatus.subCategory
      }
    },
    computed: {
      getstatus() {
      return this.$store.getters.getprocedureNewProductUpload
      },

    }
  }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* text-transform: capitalize; */
  text-align: left;
  word-wrap: break-word;
  color: #555;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
pre {
  white-space: pre-wrap;       /* CSS 3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  padding:0px;
  margin:0px
}
.clr87 {
  color: #878787;
}
.flx {
  display: flex;
}
.dnone {
  display: none;
}
.textCenter {
  align-items: center;
}
.padding {
  padding: 10px 30px;
  border: 1px solid #f0f0f0;
}
.gryClr {
  background-color: #ebebeb;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
input[type="text"], input[type="number"] {
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding-left: 10px;
  width: 100%;
  height: 36px;
}
.containerHolder {
  background-color: #fff;
}
.categoryPathDiv{
  padding: 0 10px 10px 10px;
  font-size: 13px;
}
.rightPadding {
  margin-right: 5px;
}
.container {
  margin: 0 auto;
}
.bigButton {
  margin-left: 30px;
  padding: 4px 50px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
.productUploadBtn {
  background: linear-gradient(to right, #11998e, #38ef7d);
}
.productUploadBtn:hover {
  background: linear-gradient(to right, #38ef7d, #11998e);
}
.productCancelBtn {
  background: linear-gradient(to right, #93291E, #ED213A);
}
.productCancelBtn:hover {
  background: linear-gradient(to right, #ED213A, #93291E );
}
.uploadCancelBtnDiv {
  display: flex;
  align-items: center;
}
.mainDiv .imgDiv {
  margin: 50px auto auto auto;
  position: sticky;
  top: 70px;
}
.mainDiv .imgDiv .thumbDiv {
  flex-direction: column;
  border-top: 1px solid #f0f0f0;
  padding-right: 10px;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv {
height: auto;
position: relative;
margin-top: 5px;
}
.thumbnailDiv:hover {
  color: black;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv .thumbnail {
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-style: none;
  border: 1px solid #ededed;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.deleteThumb {
  position: absolute;
  cursor: pointer;
  background: linear-gradient(black, rgba(128, 128, 128, 0.507));
  z-index: 1;
  justify-content: space-around;
  align-items: center;
}
.mainDiv .imgDiv .thumbDiv .btnAdd {
  font-size: 12px;
  margin-top: 10px;
  width: 80px;
  text-align: center;
}
.mainDiv .imgDiv .mainPicDiv {
  width: 500px;
  height: 500px;
}
.mainDiv .imgDiv .mainPicDiv img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  vertical-align: top;
  border: 1px solid #f0f0f0;
  padding: 3px;
}
.mainDiv .detailDiv {
  width: 100%;
  margin-top: 50px;
}
.mainDiv .detailDiv .forTitle .buttonDiv {
  margin-left: auto;
}
.buttonDiv span,
.descriptionsButtons span img  {
  cursor: pointer;
}
.titleDiv {
  width: 100%;
}
.mainDiv .detailDiv .forTitle .buttonDiv span img,
.descriptionsButtons span img  {
  height: 18px;
  margin-left: 10px;
}
.mainDiv .detailDiv .forTitle .productName {
  font-size: 1rem;
  line-height: 1.2;
}
.mainDiv .detailDiv .previousPriceDiv .previousPrice {
  margin-right: 30px;
  width:100px;
}
.previousPrice .previousOutput {
  text-decoration: line-through;
}
.mainDiv .detailDiv .priceAndDiscount {
  align-items: baseline;
}
.discountOutput {
  color: #ef6c3c;
}
.discount {
  width: 100px;
}
.mainDiv .detailDiv .priceAndDiscount .price {
  align-items: baseline;
}
.mainDiv .detailDiv .priceAndDiscount .price input,
.mainDiv .detailDiv .priceAndDiscount .price h2 {
  margin-right: 30px;
  padding-top: 10px;
}
.price span {
  font-size: 20px;
  margin-right: 5px;
}
.forInfo {
  font-size: 12px;
  margin-top: 10px;
  color: red;
}
.descriptionHeading {
  padding-right: 10px;
  width: 30%;
  border-right: 2px solid #ebebeb;
}
.values{
  width: 70%;
  margin-left: 30px;
}
.values-li {
  list-style-type: disc;
  font-size: 14px;
}
textarea {
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  height: auto;
}
.ipSaveBtn {
  outline:none;
  border: none;
  background: linear-gradient(to right, #005C97, #363795);
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 0 0 0 auto;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.ipSaveBtn:hover {
  background: linear-gradient(to left, #363795, #005C97);
}
.descriptionsButtons {
  justify-content: flex-end;
  padding-bottom: 10px;
}
/* SCROLLBAR */
::-webkit-scrollbar {
    height: 7px;
    width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ef6d3c;
}
</style>
