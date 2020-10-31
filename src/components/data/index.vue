<template>
  <section>
    <h1>Data</h1>
    <gap g="60" />
    <p>
      <small>
        asw-sparline chart's accepting data in <b>data</b>
        props it is taking array of data as input
        <br>
        it accept both type of array input number(only Y)/object(X, Y)
      </small>
    </p>
    <gap g="40" />
    <h4>Data as array of number</h4>
    <div class="vue-comp">
      <code
        ><b>&#60;</b>asw-sparkline-line :data="[11, 31, 22, 44, 12]"<b
          >/></b
        ></code
      >
    </div>
    <gap g="40" />
    <h4>Data as array of object</h4>
    <div class="vue-comp">
      <code
        ><b>&#60;</b>asw-sparkline-line
          <xmp>
          :data="[
          <span>
            <br>
              {value: 10, label: 'apple'},
            <br>
              {value: 20, label: 'banana'},
            <br>
              {value: 15, label: 'mango'}
            <br>
          </span>
          ]"
          </xmp>
        <b
          >/></b
        ></code
      >
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.terminal {
  background: #3e3e3e;
  font-size: 14px;
  padding: 5px 15px;
  margin: 10px 0px;
  border-radius: 4px;
  letter-spacing: 2px;
  p {
    color: #ffffff;
    line-height: 30px;
  }
}
.vue-comp {
  code {
    display: block;
    border-radius: 4px;
    padding: 5px 15px;
    margin: 10px 0px;
    background: #e4e4d9;
    color: #ff6b00;
    b {
      color: #4040ff;
    }
    span {
      padding-left: 5px;
    }
  }
}
</style>
