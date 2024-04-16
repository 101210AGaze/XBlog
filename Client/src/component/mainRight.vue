<script setup>
import {ref} from "vue";



const content_article_1 = ref({
  item:"Study",
  img: "public/star.jpg",
  h2: ['信陵','乱七八糟的','学习博客'],
  beginDetail:["春申君","大约花五分钟"],
  p:"为了净化灵魂，人们应该每天做两件他不喜欢的事",
})


const content_article_2 = ref({
  title:"Enjoy",
  img: "public/sun.jpg",
  h2: ['信陵','干货满满的','享受资料'],
  beginDetail:["平原君","大约花半小时"],
  p:"道可道，非常道，名可名，非常名。有名，万物之始，无名，万物之母。",
})


const content_article_3 = ref({
  title:"Life",
  img: "public/moon.jpg",
  h2: ['信陵','热情洋溢的','生活'],
  beginDetail:["孟常君","用一辈子感受"],
  p:"一个人的作品最容易揭示出他本人。在人际交往中，一个人只想让世人看到他希望你看到的那一面，你只能借助他的一些无意识的小动作，借助无意间他脸上掠过的表情，来对他做出正确的了解。有的时候，人们把他们装出的那一面做得如此完美，随着时间的推移，他们似乎真的变成了他们所装扮的那个人了",
})

const marqueeList = ref(["昨天没有学","今天不想学","明天就放假"])
</script>

<template>
  <div class="x-blog-owner  blog-is-sticky">
    <div class="blog-big-header-title">For</div>
    <div class="blog-menu blog-small-title">Pinned Issue</div>
    <div class="blog-article page-number">
      NO. 01
    </div>
  </div>
  <div class="x-blog-content">
    <div class="blog-header">
      <div class="blog-article header-article">
        <div class="blog-big-header-title">Study</div>
        <div class="blog-date">3.21 2024</div>
      </div>
      <div class="blog-article">
        <img src="D:\xinlin\Client\public\star.jpg" alt="">
        <h2>{{ content_article_1.h2[0]}} <span>{{ content_article_1.h2[1] }}</span> {{ content_article_1.h2[2] }}</h2>
        <div class="blog-detail">
          <span>{{content_article_1.beginDetail[0]}}</span>
          <span>{{ content_article_1.beginDetail[1] }}</span>
        </div>
        <p>{{content_article_1.p}}</p>
        <router-link to="/study">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </router-link>
      </div>
    </div>
    <div class="blog-header">
      <div class="blog-article header-article">
        <div class="blog-big-header-title">Enjoy</div>
        <div class="blog-date">3.21 2024</div>
      </div>
      <div class="blog-article">
        <img src="D:\xinlin\Client\public\sun.jpg" alt="">
        <h2>{{content_article_2.h2[0]}} <span>{{content_article_2.h2[1]}}</span> {{content_article_2.h2[2]}}</h2>
        <div class="blog-detail">
          <span>{{content_article_2.beginDetail[0]}}</span>
          <span>{{content_article_2.beginDetail[1]}}</span>
        </div>
        <p>{{content_article_2.p}}</p>
        <router-link to="/study">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </router-link>
      </div>
    </div>
    <div class="blog-header">
      <div class="blog-article header-article">
        <div class="blog-big-header-title">Life</div>
        <div class="blog-date">3.21 2024</div>
      </div>
      <div class="blog-article">
        <img src="D:\xinlin\Client\public\moon.jpg" alt="">
        <h2>{{ content_article_3.h2[0]}} <span>{{ content_article_3.h2[1]}}</span> {{ content_article_3.h2[2]}}</h2>
        <div class="blog-detail">
          <span>{{ content_article_3.beginDetail[0]}}</span>
          <span>{{ content_article_3.beginDetail[1]}}</span>
        </div>
        <p>{{ content_article_3.p}}</p>
        <router-link to="/study">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </router-link>
      </div>
    </div>
  </div>
  <div class="blog-part right-blog">
    <marquee width="100%" direction="left">
      <span>{{ marqueeList[0] }}</span>
      <span>{{ marqueeList[1] }}</span>
      <span>{{ marqueeList[2] }}</span>
    </marquee>
    <div class="blog-right-title-container">
      <div class="blog-right-title">
        Latest Article
      </div>
      <div class="blog-menu rounded">See All</div>
    </div>
    <div class="blog-right">
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">1</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">Blonde - Widespread Acclaim</div>
        <div class="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
      </div>
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">2</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">Introspective Lyrics and Beats</div>
        <div class="blog-right-page-subtitle">When we toured Scotland we stopped at several selft-sealing hpuses because hotels would</div>
      </div>
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">3</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">The Language Of Gris: Comples Beauty Of Monochrome</div>
        <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
      </div>
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">4</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">A24 IS LAUNCHING ITS OWN BEAUTY BRAND</div>
        <div class="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
      </div>
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">5</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite</div>
        <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
      </div>
      <div class="blog-right-container">
        <div class="blog-title-date">
          <div class="blog-right-page">6</div>
          <div class="date">12.06.2021</div>
        </div>
        <div class="blog-right-page-title">What Happens When You Leave Your Old life Behind</div>
        <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
      </div>
      <div class="circle">
        <div class="circle-title">Leave Your Old Life Behind</div>
        <div class="circle-subtitle">Don't try to be like someone else, be yourself. Be secure with yourself.</div>
        <div class="circle-footer">Explore</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.x-blog-owner {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}



.blog-big-header-title{
  color: white;
  font-size: 132px;
  font-weight: 700;
  letter-spacing: -5px;
  line-height: 1;
  margin-bottom: 6px;

  @media screen and (max-width: 1400px) {
    font-size: 120px;
  }

  @media screen and (max-width: 1260px) {
    font-size: 9vw;
    letter-spacing: -2px;
  }

  @media screen and (max-width: 560px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
}

.blog-small-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
  @media screen and (max-width: 1030px) {
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 24px;
    border-bottom: 0;
  }


  :before {
    content: ".";
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: white ;
    margin-right: 12px;
  }
}

.page-number {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  font-size: 72px;
  text-align: center;
  letter-spacing: -3px;
  font-weight: lighter;
  font-family: $title-font;
  border-right: 1px solid white;
  white-space: nowrap;
  @media screen and (max-width: 1260px) {
    font-size: 5vw;
  }

}


.x-blog-content {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  border-right: 1px solid white;
  margin-right: 10px;
  padding-right: 2em;


  @media screen and (max-width: 768px) {
    border-right: 0;
  }

  img{
    width: 100%;
    height: 240px;
  }

  & > * {
    flex-shrink: 0;
    min-height: 100%;
    scroll-snap-align: start;
  }

  .blog-article:not(.header-article) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}


.blog-date {
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  color: white;
}


.blog-article {
  h2 {
    color: white;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    margin: 8px 0 8px;

    span {
      color: white;
      font-family: "Inter", sans-serif;
    }
  }

  p {
    color: white;
    line-height: 1.5;
    margin: 14px 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 26px;
    letter-spacing: -1px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid $border-color;
    padding-top: 14px;

    svg {
      width: 26px;
      margin-right: 10px;
    }
  }
}

.blog-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;

  span {
    font-family: "Inter", sans-serif;
    color: white;
  }
}



::-webkit-scrollbar {
  display: none;
}



marquee {
  font-size: 20px;
  background-color: #6053A3;
  color: white;
  padding: 6px 0;
  width: calc(100% + 44px);
  margin-top: 24px;
  margin-left: 0;
  flex-shrink: 0;

  span:before {
    display: inline-block;
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: relative;
    top: -1px;
    vertical-align: baseline;
    background-color: #D0B7BA;
    margin: 0 16px;
  }
}

.blog-right {
  overflow: auto;
  height: calc(100% + 60px);

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.rounded {
  font-style: italic;
  font-size: 18px;
  color: white;
  &:before {
    content: "";
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background-color: rgb(22 20 25);
    margin-right: 4px;
  }
}

.blog-right-title {
  color: white;
  font-size: 25px;
  font-family: "Inter", sans-serif;
}

.blog-right-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  margin-top: 100px;
  letter-spacing: -1px;
  @media screen and (max-width: 1400px) {
    margin-top: 88px;
  }

  @media screen and (max-width: 1260px) {
    margin-top: 6vw;
  }

  @media screen and (max-width: 1030px) {
    margin-top: 5vw;
  }

}

.blog-title-date {
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 20px;
}

.blog-right-page {
  font-size: 56px;
  margin-bottom: 16px;
  font-family: "Inter", sans-serif;
  color: white;
}

.blog-right-page-title {
  font-family: "Inter", sans-serif;
  font-size: 28px;
  color: white;
  font-weight: 600;
  max-width: 16ch;
  letter-spacing: -2px;
}

.blog-right-page-subtitle {
  color: white;
  max-width: 33ch;
  font-size: 15px;
  margin-top: 12px;
  line-height: 1.4;
}

.blog-right-container + .blog-right-container {
  margin-top: 40px;
}

.right-blog {
  display: flex;
  flex-direction: column;

}


.circle {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #3e1086;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;

  &-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    font-family: "Inter", sans-serif;
    @media screen and (max-width: 1030px) {
      display: none;
    }

  }

  &-subtitle {
    max-width: 30ch;
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  &-footer {
    font-family: $italic-font;
    font-size: 30px;
  }
}

.blog-is-sticky {
  @media screen and (max-width: 560px) {
    display: none;
  }
}

</style>