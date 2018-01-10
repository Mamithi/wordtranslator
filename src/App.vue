<template>
  <div id="app">
    <h1>Word Translator</h1>
    <h5>Powered By Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>

  </div>
</template>

<script>
  import TranslateForm from './components/TranslateForm'
export default {
  name: 'app',
  components: {
    TranslateForm
  },
  methods: {
    translateText:function(text){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180110T155244Z.84768a0d100486a9.0a77e457a682d25f024157e7a256b9f9f0adb1e0&lang=sw&text='+text)
        .then((response) => {
          console.log(response)
        })

    }
  }
}
</script>


