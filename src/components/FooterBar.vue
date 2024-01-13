<template>
  <v-footer class="d-flex justify-center pt-1 pb-1" color="primary lighten-1" padless app
              v-if="!$vuetify.display.smAndDown">
              <v-row justify="center" no-gutters>
                  <v-col class="d-flex flex-column" cols="4">
                      <span class="footer-label">สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์</span>
                      <span class="footer-label">อาคารเดอะ ไนน์ ทาวเวอร์ แกรนด์ พระรามเก้า (อาคารบี)</span>
                      <span class="footer-label">33/4 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310</span>
                  </v-col>
                  <v-col class="d-flex flex-column" cols="2">
                      <span class="footer-label">เบอร์ : 02 123 1234</span>
                      <span class="footer-label">แฟกซ์ : 02 123 1200</span>
                      <span class="footer-label">อีเมล : helpdesk@etda.or.th</span>
                  </v-col>
              </v-row>
          </v-footer>
</template>
<style scoped>
.text-size {
  font-size: 18px;
}
</style>

<script setup>

</script>
