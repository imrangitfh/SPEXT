<template>
  <div class="center">
    <h1 v-if="user">Audio Transcription / Hello {{user}}</h1>
    <h1 v-if="!user">Audio Transcription</h1>
    <div class="spoken_text">
      <div id="inner_spoken_text_up">
        <input type="file" @change="onFileChange" id="realFile" ref="file"/>
      </div>
      <div id="inner_spoken_text_down">
        <button @click.prevent="onUploadFile" enctype="multipart/form-data" id="uploadFileBtn" class="button">
          <img src="./upload.png" height="64px" width="64px">
        </button>
      </div>
    </div>

    <div class="translated_text">
      <textarea maxlength="1000" cols="20"  name="message" v-model="message" placeholder="Your transcripted text will be displayed here!" id="transcript_output"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import dashboardUpload from '../services/dashboardUpload'
import authentication from "../services/authentication"

export default {
  name: 'dashboard',
  data () {
    return {
      file: '',
      message: '',
      user: null
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  async created() {
    const response = await authentication.getUser({
      headers: {
        Authorization: localStorage.getItem('ID')
      }
    });
    this.user = response.data.result[0].username
  },
  methods: {
    onFileChange () {
      const file = this.$refs.file.files[0]
      this.file = file
    },
    async onUploadFile () {
      const formData = new FormData()
      formData.append('file', this.file)
      console.log(formData)
      try {
        const response = await dashboardUpload.fileUpload(formData)
        console.log(response)
        this.message = response.data.transcriptedText
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  @import "../css/dashboard.css";
</style>
