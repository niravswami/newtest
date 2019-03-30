<template>
  <div id='search-box'>
      <form id='search-form' >
        <input id='search-text' placeholder='Search Around You' type='text' autofocus/>
        <button id='search-button' >
        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPESURBVGhD7ZhbiE1RGMdnMGg8uHtAKTxQM8PrlNubCJFbJh4UeZkkgxKSXPIkIU/SuMtleJYijzRyyS0e5YEkRQYzZ/y+tf77TPtwnLHPXmfm6Pzq3zrf+tb+f+s75+x9zt5VFSr0Q7q7u6dlMpkWdAO9Ql+Yc/D6A3qATqG1TA3XYf0DNjSQja1G992OewnrO9AFVC+rvoNNNKJH2lsiON6wT2m0bEsH9aspvAd1+u3khzX2zmcU5oUlbxlmqUR4KDaIomdd9RyY/4luo2bUgMbqmBpeT0BzeX2Y8YU7IAfmrekVrlBIqGWfxHlftgfmjItoqpYWhLWL0TNZZGGuEy3RsjBQYLfqZWHuA8M8LfknOM4uFPtR7KtH+BU1aFm6YGwnduycIH7OMFlLEoPPKvTdu3rMGw3RknTA19652NWJ+D1D0U1E4LfBO/fA3C6l0wHDNfJ2ENtXIdHX6W9ge9JX8BB/YhihdPFgGPuxI76oVKpgPRLvj76Kh7hF6eLAaLo8HcQ/0BSlUwfvbSrlIH6sVHH8wfiWUkHAfxzKvahMVDo5mNyUn4O4WalgUOOeyjmIm5RKDiav5ecgrlMqGNTYr3IO4gNKJQeTb/JzEAf/c0eNTSrnID6jVDLwqPZWHgw7lAoKpZb6ih7qtimVHHk5MLSTcKBSwaDGSldQUPe8UsnBxH6UshCPVyoY1Niicg7iI0olB5OH8osIfs9AzeOq5SDerlRyMDktPwfxQaWCQY03Kucgnq1UcjBZJz8H8TOlgoB/vUo5iO0BxmClk4PRKNThbT3EC5VOHbzPqIyD+LpSxYPZJfk6iJ8wDFA6NfCdgbp8lSzp/cvGbCYFcu/i9iqdCljW4tnu3T0WK50e+LZ6e481BsuVLgrs7FnAZe/sIe5CjVqSHniPwfidL+Mhtqce67UkEdjYJxFrwmDumJakD+ZzUOze2mDOrvv/fCfHcXZOxL5OEcxfZajR0vShQBP67cEcc/Zsdysq+KeSNXUc0sqYe2LHIB+8mWUo9q84gnl7LnUH7UMb0SK0HG1GR1HstqAQrL/GEK4ZzO1K9tJVC4yaKf5HMR+YD6XIbvTZVUwAx7aj+Sh2J5oL+bDNGBSwpx870FNXtQCss38KVxgXMFbLYzBx3zcTQbFJaB06hM6hNnQJnUA72cg8xmFaHsM2Sa5QM9cZStNMMdgme9FMG0OlmZJim+xFMzcY/ptmLF9ppqTYJgs0cxfVann/ho3ma6Z8mohgw7nNlF8TEWw8aqZ8m4iwZsq+iQrlSVXVL99Y9z/isBGoAAAAAElFTkSuQmCC"
        style="height: 22px;"></span>
        </button>
      </form>
    </div>
</template>

<script>
export default {

}

</script>

<style scoped>

#search-box {
position: relative;
width: 100%;
margin: 0;
}

#search-form
{
height: 34px;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
background-color: #fff;
overflow: hidden;
border: 1px solid #ef6c3c;
border-right: none; text-align: start;
}

#search-text
{
font-size: 14px;
color: #ddd;
border-width: 0;
background: transparent;

}

#search-box input[type="text"]
{
width: 90%;
padding: 6px 0 12px 1em;
color: #333;
outline: none;

}

#search-button {
position: absolute;
top: 0;
right: 0;
height: 34px;
width: 80px;
border-width: 0;
background: linear-gradient(to right, #ff9966 , #ff5e62);
-webkit-border-radius: 0px 10px 10px 0px;
-moz-border-radius: 0px 10px 10px 0px;
border-radius: 0px 10px 10px 0px;
cursor: pointer;
outline: none;
}

#search-button:hover,
#search-button:visited {
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24);
}

#search-button:active {
    /* background-color: #ef6d3c; */
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    box-shadow: 0 2px #fff;
}

</style>
