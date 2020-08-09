<template>
  <div id="app">
    <p><span class=number>17</span> В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».</p>
    <p>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.</p><br>
    <table class=query>
      <tr class=bolder><td>Запрос</td><td>Число страниц</td></tr>
      <tr v-for='i in group' :key=i.name>
        <td>{{setWords(i.name)}}</td><td>{{i.val}}</td>
      </tr>
   </table><br>
   <p>Сколько страниц будет найдено по запросу <span class=bolder>{{setWords(question.name)}}</span>?</p>
   <p><span class=hintButton v-on:click='answer = !answer'>Ответ:</span> <span v-if='answer'>{{question.val}}</span></p>
  </div>
</template>

<script>
import task from './generator'

export default {
  name: 'App',
  data: () => {
    return {
      ...task, 
      answer: false
    }
  },
  methods: {
    setWords(str){
      str = str.replace('A',this.words[0])
      str = str.replace('B',this.words[1])
      str = str.replace('C',this.words[2])
      return str
    }
  }
}
</script>

<style>
body {
  font-size: 1.5em;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: sans-serif;
  padding: 20px;
}

p {
  text-align: justify;
}

.number {
  border: 2px solid;
  padding: 4px;
  font-weight: bolder;
}

.bolder {
  font-weight: bolder;
}

.hintButton {
  color: #0066B3;
  cursor: pointer;
  font-weight: bolder;
  border-bottom: 2px dashed;
}

.query {
  margin: auto;
  border-collapse: collapse;
}

.query td {
  min-width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid black;
  text-align: center;
}
</style>
