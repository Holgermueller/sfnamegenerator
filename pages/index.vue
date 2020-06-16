<template>
  <div id="main">
    <v-card class="card">
      <v-card-title class="title">SFNG</v-card-title>
      <v-card-subtitle>(Sci-Fi Name Generator)</v-card-subtitle>
      <v-card-text>
        <h1 v-if="this.generatedName" class="name-display">
          {{ this.generatedName }}
        </h1>
        <h1 v-else class="place-holder">_______________________________</h1>
      </v-card-text>
      <v-card-actions>
        <v-btn class="button" @click="chooseConsonant">Add a Consonant</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="button" @click="chooseVowel">Add a Vowel</v-btn>

        <v-btn class="button" @click="addDash">
          Add a dash
        </v-btn>

        <v-btn class="button" @click="deleteLastLetter">Delete</v-btn>

        <v-btn class="button" @click="clearName">Clear</v-btn>
      </v-card-actions>
    </v-card>
  </div>
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

    deleteLastLetter() {
      this.generatedName = this.generatedName.slice(
        0,
        this.generatedName.length - 1
      );
    },

    clearName() {
      this.generatedName = "";
    }
  }
};
</script>

<style scoped>
.card {
  margin: 7% auto;
  width: 85%;
}
.name-display {
  height: 55%;
}
.name-display,
.place-holder {
  margin: 7% auto;
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 4%;
}
/* .button {
  width: 100%;
} */
</style>
