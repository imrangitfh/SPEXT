<template>
  <div class="center">
    <h1>Audio Transcription</h1>
    <div class="spoken_text">
      <div id="inner_spoken_text_up">
        <input type="file" @change="onFileChange" id="realFile" ref="file"/>
        <button @click.prevent="onUploadFile" enctype="multipart/form-data" id="uploadFileBtn" class="button">
          <img src="upload.png" height="64px" width="64px">
        </button>
        <span id="uploadFileSpan">No file chosen!</span>
      </div>
      <div id="inner_spoken_text_down">
        <button id="record" class="button">
          <img src="mic.png" height="64px" width="64px">
        </button>
      </div>
    </div>

    <div class="translated_text">
      <input type="text" value="Your transcripted text will be displayed here!" id="transcript_output"/>
    </div>
  </div>
</template>

<script>
import dashboardUpload from '../services/dashboardUpload'

export default {
  name: 'dashboard',
  data () {
    return {
      file: ''
    }
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
