<template lang="pug">
.seoText
  .seoText__container
    h2 SEO-текст
    ul.greyPoint
      li Стабильное высокоскоростное соединение, до 1 Gb/s;
      li Поддержка протоколов HTTP(s) и Socks5;
      li Поддержка клиентов 24/7/365, мы всегда на связи, без исключений;
      li Помощь в настройке прокси, при необходимости заходим на ваш пк, через временный доступ по TeamViewer;
      li Большое кол-во сетей и подсетей, более 300 и выдачу прокси с разбросом по ним;
    br
    p На сегодняшний день сервис имеет самую большую сеть прокси серверов, это более 100 сетей и 300 подсетей, количество приватных прокси наращивается вместе с количеством клиентов. Данный факт позволяет предоставлять нашим пользователям возможность выдачи прокси в разброс, например: 100 ip адресов из 100 разных сетей/подсетей. Данная возможность оказалась очень важным критерием для работы пользователей, так как это способствует снижению рисков блокировки в системе, где используются прокси.
    br
    br
    br
    h2 SEO-текст
    ol.greyNumber
      li Стабильное высокоскоростное соединение, до 1 Gb/s;
      li Поддержка протоколов HTTP(s) и Socks5;
      li Поддержка клиентов 24/7/365, мы всегда на связи, без исключений;
      li Помощь в настройке прокси, при необходимости заходим на ваш пк, через временный доступ по TeamViewer;
      li Большое кол-во сетей и подсетей, более 300 и выдачу прокси с разбросом по ним;
    br
    p На сегодняшний день сервис имеет самую большую сеть прокси серверов, это более 100 сетей и 300 подсетей, количество приватных прокси наращивается вместе с количеством клиентов. Данный факт позволяет предоставлять нашим пользователям возможность выдачи прокси в разброс, например: 100 ip адресов из 100 разных сетей/подсетей. Данная возможность оказалась очень важным критерием для работы пользователей, так как это способствует снижению рисков блокировки в системе, где используются прокси.

</template>

<script>
export default {
  name: "SeoText"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.seoText{
  @include adaptiveValue(padding-top, 40, 28);
  @include adaptiveValue(padding-bottom, 40, 28);
  color: $color_4;

  h2{
    text-align: left;
    @include adaptiveValue(margin-bottom,24, 24)
  }
  p{
    @include adaptiveValue(font-size,12,12);
  }
}
</style>