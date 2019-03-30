<template>
    <section id="footer-section">
        <div class="footer-container">
          <div class="to-top text-center p-2">
            <a href="#banner-section">Back to Top</a><hr>
        </div>
            <div class="container">
                <div class="row p-2">
                    <div class="col text-center about-foot">
                        <ul>
                            <li>
                                <a href="#">About US</a>
                            </li>
                            <li>
                                <a href="#">Contact US</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col text-center service-foot">
                        <ul>
                            <li>
                                <a href="#">Buy</a>
                            </li>
                            <li>
                                <a href="#">Sell</a>
                            </li>
                            <li>
                                <a href="#">Rent</a>
                            </li>
                            <li>
                                <a href="#">Whole seller</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col text-center social-foot">
                        <ul>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row rights">
                    <div class="col text-center">
                        &copy; 2018, Paansi.com, All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>


    </section>

</template>

<script>
export default {

}
</script>

<style scoped>

#footer-section {
    margin-top: 30px;
    display: inline-block;
    width: 100%;
    background: linear-gradient(to bottom, #ff9966 , #ff5e62);
}

.to-top {

    color: #fff;
}

ul {
  list-style: none;
}

.footer-container {
    color: #fff
}

.rights {
  padding-bottom: 10px;
}

.about-foot a,
.service-foot a,
.social-foot a,
.to-top a {
    line-height: 1.9em;
    color: #fff
}
</style>
