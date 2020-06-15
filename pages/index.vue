<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="title">SFNG</v-card-title>
        <v-card-subtitle>(Sci-Fi Name Generator)</v-card-subtitle>
        <v-card-text>
          <div>{{ this.generatedName }}</div>
        </v-card-text>
        <v-card-actions>
          <ul>
            <li>
              <v-btn @click="chooseConsonant" block>Add a Consonant</v-btn>
            </li>
            <li><v-btn @click="chooseVowel" block>Add a Vowel</v-btn></li>
            <li>
              <v-btn @click="addDash" block>
                Add a dash
              </v-btn>
            </li>
            <li><v-btn @click="clearName" block>Clear</v-btn></li>
          </ul>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      generatedName: "",
      consonants: [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z"
      ],
      vowels: ["a", "e", "i", "o", "u"],
      dash: "-"
    };
  },

  methods: {
    chooseConsonant() {
      let chosenConsonant = this.consonants[
        Math.floor(Math.random() * this.consonants.length)
      ];
      this.generatedName += chosenConsonant.toUpperCase();
    },

    chooseVowel() {
      let chosenVowel = this.vowels[
        Math.floor(Math.random() * this.vowels.length)
      ];

      this.generatedName += chosenVowel.toUpperCase();
    },

    addDash() {
      this.generatedName += this.dash;
    },

    clearName() {
      this.generatedName = "";
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
