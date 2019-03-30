<template>
    <div id="pinAddr" class="pinAddress" title="Pin Address">

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIkSURBVGhD7Zg/S5tRFIdTxEEEU5dOTg4ODu1cqJ9AHLt0EQQRB3ER+gm6uLWi0qEoQpcuXfwEiuCgm4IgEZzbQYdSqCTtc3JOeE363vdf8iY3ch/4cXLfc84950dikFQCvtJoNMbQFvr51wPY4wthxNbLDo2f9Ap/YKcDQj4zNP3Q9njI7xGqVl4KzHiJbnSiktuMtsXDZQ9ozEq7hitH0aSIeyfscRPOyzLzMbnMaIuTOyvrGpaaQvd2bxPOm5aW/Lw9biOzGS130jMj3PVGr4xgyUNLO40ImcxoqRMvjAipZrTMiTdGhEQzWuLEKyOC04ymnXhnRKD2vbVFWM6Fr0Z2rC3Cci6CkU64KxjpZNBGnrPACaqZrtGKpcs1QkMdvbDSUmHOho1NJbcRgaYjNMfL6TLE3TNokdd3KBOFjPhIMOIbwYhvBCMCzTXCWVni/nNipq/gQkZoukKzVl4qjHvGrFXU0OnxkC5k5LWV9g3G7uv0eHIboeE3If0XjB7D3CXdIJ4i70jP/mnMA4u+s/mxBCP9JhhJIBjphmAkgWCkG4KRBIbTCAV/CN+I3/XJYI0Qbwmyz6mcW3BOfUeaixOrehy4ka+Pzy1SjVDwi/CWKL8zCYM2ckyQfT7KuQXnJ/w3wsO65ePw1ci2lUbw8MLy/0Gu+VHrt5jb9lHqhPyarR/BwwUk31ZDAbteonFbvx0Sr9AH9Nlj7aJ1FG8i4AWVyj+Deb7G8VbOlQAAAABJRU5ErkJggg==" style="height: 19px;">
        <span id="pinCount">0</span>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
/* #pinAddr img {
  transform: rotate(-90deg);
} */

.pinAddress {
    margin-top: 5px;
    margin-left: 20px;
    padding: 7px 12px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    background-color: #ff9966 ;
    border: 1px solid #ef6d3c;
    align-items: center;
    border-radius: 5px;

}

#pinCount {
    color: #fff;
    font-size: 14px;
    padding-left: 8px;
    font-weight: bold;
}
</style>
