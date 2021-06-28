<template>
  <div class="center_dash">
    <h1 v-if="user">Audio Transcription / Hello {{user}}</h1>
    <h1 v-if="!user">Audio Transcription</h1>
    <div class="spoken_text">
      <div id="inner_spoken_text_up">
        <button class="button" id="fileUpload" onclick="document.getElementById('realFile').click()">
          <img src="../assets/file.png" height="64px" width="64px" alt="Upload your File here!">
        </button>
        <span id="filePath">No File chosen!</span>
        <input type="file" @change="onFileChange" id="realFile" ref="file">
      </div>
      <div id="inner_spoken_text_down">
        <button @click.prevent="onUploadFile" enctype="multipart/form-data" id="uploadFileBtn" class="button">
          <img src="./upload.png" height="64px" width="64px" alt="Transcript">
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
      var filePathSpan = document.getElementById("filePath")
      filePathSpan.innerHTML = "selected File: " + this.file.name
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

<style>
.center_dash{
  position: absolute;
  top: 550%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%;
  background: whitesmoke;
  height: 900%;
  border-radius: 10px;
  margin-top: 3%;
  overflow: hidden;
}
.spoken_text{
  position: relative;
  float: left;
  width: 45%;
  margin: 20px 0 70px 40px;
  height: 75%;
  background: lightgrey;
  border-radius: 5px;
}
.center_dash h1{
  text-align: center;
  padding: 1% 0 30px 0;
  border-bottom: 1px solid #ADADADAD;
}
.translated_text{
  position: relative;
  float: right;
  width: 45%;
  margin: 20px 40px 70px 0;
  height: 75%;
  background: lightgrey;
  border-radius: 5px;
}
#inner_spoken_text_up{
  position: relative;
  float: top;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#inner_spoken_text_down{
  position: relative;
  float: bottom;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#transcript_output{
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 5% 5% 5% 5%;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  background-color: lightgrey;
  border-radius: 5px;
  outline: none;
}
.button {
  width: auto;
  height: 85px;
  border: 1px solid;
  background: #54B5AA;
  border-radius: 15px;
  font-size: 19px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin: 10px;
  padding: 10px;
}
.button:hover{
  border-color: #101010;
  transition: .5s;
}
#uploadFileBtn {
  position: absolute;
}
#fileUpload {
  position: absolute;
}
#filePath {
  position: relative;
  top: 70px;
}
#realFile {
  position: absolute;
  float: top;
  display: none;
}

@media (max-width: 900px) {
  .translated_text{
    position: relative;
    float: top;
    width: 100%;
    margin: 5px 5px 5px 5px;
    height: 50%;
    background: lightgrey;
    border-radius: 5px;
  }
  .spoken_text{
    position: relative;
    width: 100%;
    margin: 5px 0 5px 5px;
    height: 50%;
    background: lightgrey;
    border-radius: 5px;
  }
}
</style>
