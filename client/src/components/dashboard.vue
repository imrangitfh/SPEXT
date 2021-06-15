<template>
  <div class="center">
    <h1>Audio Transcription</h1>
    <div class="spoken_text">
      <div id="inner_spoken_text_up">
        <input type="file" accept="audio/*" id="realFile" hidden="hidden"/>
        <button type="button" id="uploadFileBtn" class="button">
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
export default {
  data () {
  }
}
</script>

<style scoped>
  @import "../css/dashboard.css";
</style>
