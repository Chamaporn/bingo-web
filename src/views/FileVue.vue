<template>
    <v-main>
        <v-container>
            <v-row>
                <label class="text-head">
                    รหัสผู้ใช้งาน :
                </label>
                <label class="text-primary pl-3 text-head">
                    554258544225665
                </label>
            </v-row>

            <v-row class="pt-5">
                <label class="text-head">
                    ชื่อ :
                </label>
                <label class="text-primary pl-3 text-head">
                    paphaon
                </label>
            </v-row>
            <v-row class="pt-16">
                <v-col :cols="$vuetify.display.smAndDown ? 5 : 2">
                    <v-card elevation="2" class="card-border " rounded="lg">
                        <v-card-actions>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-dots-vertical" size="small">
                                </v-icon>
                            </v-col>
                        </v-card-actions>
                        <v-card-actions>
                            <v-row class="justify-center ">
                                <v-icon color="red" icon="mdi-file-pdf-box" size="60px">
                                </v-icon>
                            </v-row>
                        </v-card-actions>
                        <v-card-title>
                            <v-row class="justify-start pl-5 pb-5 pt-5 ">
                                <label class="text-list">
                                    เอกสาร.pdf
                                </label>
                            </v-row>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col :cols="$vuetify.display.smAndDown ? 5 : 2">
                    <v-card elevation="2" class="card-border " rounded="lg">
                        <v-card-actions>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-dots-vertical" size="small">
                                </v-icon>
                            </v-col>
                        </v-card-actions>
                        <v-card-actions>
                            <v-row class="justify-center ">
                                <v-icon color="red" icon="mdi-file-pdf-box" size="60px">
                                </v-icon>
                            </v-row>
                        </v-card-actions>
                        <v-card-title>
                            <v-row class="justify-start pl-5 pb-5 pt-5 ">
                                <label class="text-list">
                                    เอกสาร.pdf
                                </label>
                            </v-row>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col :cols="$vuetify.display.smAndDown ? 5 : 2">
                    <v-card elevation="2" class="card-border " rounded="lg">
                        <v-card-actions>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-dots-vertical" size="small">
                                </v-icon>
                            </v-col>
                        </v-card-actions>
                        <v-card-actions>
                            <v-row class="justify-center ">
                                <v-icon color="red" icon="mdi-file-pdf-box" size="60px">
                                </v-icon>
                            </v-row>
                        </v-card-actions>
                        <v-card-title>
                            <v-row class="justify-start pl-5 pb-5 pt-5 ">
                                <label class="text-list">
                                    เอกสาร.pdf
                                </label>
                            </v-row>
                        </v-card-title>
                    </v-card>
                </v-col>



            </v-row>

        </v-container>
    </v-main>
</template>
<style scoped>
.text-head {
    font-size: 18px;
}

.text-list {
    font-size: 14px;
}
</style>