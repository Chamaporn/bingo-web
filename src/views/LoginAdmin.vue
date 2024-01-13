<template>
    <v-main>
        <v-container>
            <v-row class="justify-center pt-12">
                <v-col :cols="$vuetify.display.smAndDown ? 7 : 4" >
                    <v-card style="vertical-align: center;" height="300px" class="pt-" elevation="1">
                        <v-toolbar color="primary">
                            <v-row class="justify-center">
                                <label class="text-white v-text-head ">
                                    เข้าสู่ระบบ
                                </label>
                            </v-row>
                        </v-toolbar>
                       <div class="d-flex ">
                        <v-col class="pt-13">
                        <v-row class="justify-center pt-8">
                            <v-col :cols="$vuetify.display.smAndDown ? 10 : 8">
                                <v-btn block rounded height="45" size="x-large" color="#1565C0" elevation="1">
                                    <v-icon icon="mdi-microsoft-windows" color="white" class="pr-5"></v-icon>
                                    <span > Azure AD</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                        </v-col>
                         
                       </div>
                           
                        <v-spacer>
                        </v-spacer>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<style scoped>
.v-text-head {
    font-size: 20px;
}

.v-text {
    font-size: 16px;
}
</style>

<script>

export default {

}
</script>


