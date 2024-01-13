<template>
  <v-container>
    <v-row>
      <v-col cols='8'>
        <v-col v-for="row in  15 " :key="row" cols='12' :class="['d-flex flex-row', 'pb-1 pt-1']">
          <v-col v-for="col in  5 " :key="col" cols='2' :class="['d-flex flex-column', 'pb-0 pt-0']">
            <v-card height="39" width="39" class="pb-0 pt-0"
              :class="[`d-flex justify-center align-center `, 'pb-0 pt-0', getClassSelectValue(row, col)]">
              <div class="pb-0 pt-0" :class="[getClassFontColor(row, col)]">{{ calValue(row, col) }}</div>
            </v-card>
          </v-col>
        </v-col>
      </v-col>
      <v-col cols='4' class="d-flex  flex-column justify-center">
        <v-card height="200" width="100%" class="mb-10"
          :class="[`d-flex justify-center align-center `, 'pb-0 pt-0', getClassSelectValue(row, col)]">
          <div class="pb-0 pt-0" style="font-size: 82px"> {{ randomNum }}</div>
        </v-card>
        <v-btn @click="randomNumber">
          Random
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      totalRow: 15,
      totalCol: 5,
      selectedNumber: [],
      randomNum: 0,
    }
  },
  methods: {
    calValue(row, col) {
      return ((col - 1) * 15) + row;
    },
    getClassFontColor(row, col) {
      var value = this.calValue(row, col)

      if (this.selectedNumber.includes(value)) {
        return 'font-select'
      }
      return 'font-nonselect'
    },
    getClassSelectValue(row, col) {
      var value = this.calValue(row, col)
      if (this.selectedNumber.includes(value)) {
        return 'bg-secondary'
      }
      return ''

    },
    playAudio(audio) {
      return new Promise(res => {
        audio.play()
        audio.onended = res
      })
    },
    frontNumber(val) {
      console.log(`/audio/${val}0.wav`)
      return `/audio/${val}0.wav`
    },
    backNumber(val) {
      return `/audio/${val}.wav`
    },
    specificNumber() {
      return `/audio/01.wav`
    },
    async playRandomNumber(val) {

      console.log('playRandomNumber')
      var front = parseInt(val / 10);
      var back = parseInt(val % 10);
      if (val >= 10) {
        //หลักสิบ
        let pathfile = this.frontNumber(front)
        console.log('pathfile', pathfile)
        var audio1 = new Audio(pathfile);
        await this.playAudio(audio1);
      }
      //หลักหน่วย
      if (back == 1 && val > 10) {
        let pathfile = this.specificNumber()
        var audio1 = new Audio(pathfile);
        await this.playAudio(audio1);

      } else {
        let pathfile = this.backNumber(back)
        var audio1 = new Audio(pathfile);
        await this.playAudio(audio1);

      }



    },
    async randomNumber() {
      if (this.selectedNumber.length == 75) {
        return;
      }
      this.randomNum = this.getRandomNumberExcludingArray(1, 75, this.selectedNumber)
      this.selectedNumber.push(this.randomNum);
      console.log(' this.playRandomNumber')
      this.playRandomNumber(this.randomNum)
    },
    getRandomNumberExcludingArray(min, max, excludedArray) {
      let randomNumber;

      do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (excludedArray.includes(randomNumber));

      return randomNumber;
    }

  }
}
</script>
<style scoped>
.font-select {
  color: #000 !important;
}

.font-nonselect {
  color: #dbe0eb !important;
}
</style>