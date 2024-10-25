<script setup lang="ts">
import Card from "../elements/Card/Card.vue"
import SidebarCardTitle from "./SidebarCardTitle.vue"
import SidebarCardBody from "./SidebarCardBody.vue"
import ProfileImg from "./ProfileImg.vue"
</script>

<template>
  <Card>
    <SidebarCardTitle icon-name="i-ep-user-filled">
      プロフィール
    </SidebarCardTitle>
    <SidebarCardBody class="px-3">
      <ProfileImg class="mt-4" />
      <br>
      <p>
        都内で約1年半Webエンジニアやってます！(2024/3現在)<br>
        業務ではフロントエンド, バックエンド, インフラ(AWS)まで担当してます。<br>
        <strong>利用言語：</strong>TS, JS, HTML, CSS, Python, C#<br>
        <strong>FW：</strong>Vue, React, FastAPI, Flask, Django, Streamlit<br>
        <strong>クラウド：</strong>AWS<br>
      </p>
    </SidebarCardBody>
  </Card>
</template>
