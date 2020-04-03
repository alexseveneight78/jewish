import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.component("keyboard", {
  data() {
    return {
      isVisible: false,
      text1: [],
      text2: [],
      text3: [],
      text4: [],
      text5: [],
      message: ""
    };
  },
  methods: {
    a() {
      let a = this.$refs.aleph.innerHTML;
      this.message += a;
      console.log(this.message);
    },
    b() {
      let b = this.$refs.beth.innerHTML;
      this.message += b;
    },
    g() {
      let g = this.$refs.gimel.innerHTML;
      this.message += g;
    },
    d() {
      let d = this.$refs.daleth.innerHTML;
      this.message += d;
    },
    he() {
      let he = this.$refs.he.innerHTML;
      this.message += he;
    },
    vau() {
      let vau = this.$refs.vau.innerHTML;
      this.message += vau;
    },
    z() {
      let z = this.$refs.zayin.innerTHML;
      this.message += z;
    },
    heth() {
      let heth = this.$refs.heth.innerHTML;
      this.message += heth;
    },
    teth() {
      let teth = this.$refs.teth.innerHTML;
      this.message += teth;
    },
    yod() {
      let yod = this.$refs.yod.innerHTML;
      this.message += yod;
    },
    kaf() {
      let kaf = this.$refs.kaf.innerHTML;
      this.message += kaf;
    },
    lamed() {
      let l = this.$refs.lamed.innerHTML;
      this.message += l;
    },
    m() {
      let m = this.$refs.m.innerHTML;
      this.message += m;
    },
    n() {
      let n = this.$refs.n.innerHTML;
      this.message += n;
    },
    samekh() {
      let samekh = this.$refs.samekh.innerHTML;
      this.message += samekh;
    },
    ayin() {
      let ayin = this.$refs.ayin.innerHTML;
      this.message += ayin;
    },
    p() {
      let p = this.$refs.p.innerHTML;
      this.message += p;
    },
    tz() {
      let tz = this.$refs.tz.innerHTML;
      this.message += tz;
    },
    qof() {
      let qof = this.$refs.qof.innerHTML;
      this.message += qof;
    },
    r() {
      let r = this.$refs.r.innerHTML;
      this.message += r;
    },
    shin() {
      let shin = this.$refs.shin.innerHTML;
      this.message += shin;
    },
    sin() {
      let sin = this.$refs.sin.innerHTML;
      this.message += sin;
    },
    tau() {
      let tau = this.$refs.tau.innerHTML;
      this.message += tau;
    },
    finalKaf() {
      let finalKaf = this.$refs.finalKaf.innerHTML;
      this.message += finalKaf;
    },
    finalMem() {
      let finalMem = this.$refs.finalMem.innerHTML;
      this.message += finalMem;
    },
    finalNun() {
      let finalNun = this.$refs.finalNun.innerHTML;
      this.message += finalNun;
    },
    finalP() {
      let finalP = this.$refs.finalP.innerHTML;
      this.message += finalP;
    },
    finalTz() {
      let finalTz = this.$refs.finalTz.innerHTML;
      this.message += finalTz;
    },
    dagesh() {
      let dagesh = this.$refs.dagesh.innerHTML;
      this.message += dagesh;
    },
    hireq() {
      let hireq = this.$refs.hireq.innerHTML;
      this.message += hireq;
    },
    tzere() {
      let tzere = this.$refs.tzere.innerHTML;
      this.message += tzere;
    },
    segol() {
      let segol = this.$refs.segol.innerHTML;
      this.message += segol;
    },
    patah() {
      let patah = this.$refs.patah.innerHTML;
      this.message += patah;
    },
    kametz() {
      let kametz = this.$refs.kametz.innerHTML;
      this.message += kametz;
    },
    holem() {
      let holem = this.$refs.holem.innerHTML;
      this.message += holem;
    },
    qibbutz() {
      let qibbutz = this.$refs.qibbutz.innerHTML;
      this.message += qibbutz;
    },
    shva() {
      let shva = this.$refs.shva.innerHTML;
      this.message += shva;
    },
    hatafSegol() {
      let hatafSegol = this.$refs.hatafSegol.innerHTML;
      this.message += hatafSegol;
    },
    hatefPatah() {
      let hatefPatah = this.$refs.hatefPatah.innerHTML;
      this.message += hatefPatah;
    },
    hatefKametz() {
      let hatefKametz = this.$refs.hatefKametz.innerHTML;
      this.message += hatefKametz;
    }
  },
  template: `<div id="keyboard">
    <span @click="isVisible = !isVisible" :class="{ displayed: isVisible }">Виртуальная клавиатура</span>
    <div class="abc displayed">
      <div ref="aleph" @click="a" title="Aleph">&#1488;</div>
      <div ref="beth" @click="b" title="Beth">&#1489;</div>
      <div ref="gimel" @click="g" title="Gimel">&#1490;</div>
      <div ref="daleth" @click="d" title="Daleth">&#1491;</div>
      <div ref="he" @click="he" title="He">&#1492;</div>
      <div ref="vau" @click="vau" title="Vau">&#1493;</div>
      <div ref="zayin" @click="z" title="Zayin">&#1494;</div>
      <div ref="heth" @click="heth" title="Heth">&#1495;</div>
      <div ref="teth" @click="teth" title="Teth">&#1496;</div>
      <div ref="yod" @click="yod" title="Yod">&#1497;</div>
      <div ref="kaf" @click="kaf" title="Kaf">&#1499;</div>
      <div ref="lamed" @click="lamed" title="Lamed">&#1500;</div>
      <div ref="m" @click="m" title="Mem">&#1502;</div>
      <div ref="n" @click="n" title="Nun">&#1504;</div>
      <div ref="samekh" @click="samekh" title="Samekh">&#1505;</div>
      <div ref="ayin" @click="ayin" title="Ayin">&#1506;</div>
      <div ref="p" @click="p" title="Pe">&#1508;</div>
      <div ref="tz" @click="tz" title="Tzaddi">&#1510;</div>
      <div ref="qof" @click="qof" title="Qof">&#1511;</div>
      <div ref="r" @click="r" title="Resh">&#1512;</div>
      <div ref="shin" @click="shin" title="Shin">&#64298;</div>
      <div ref="sin" @click="sin" title="Sin">&#64299;</div>
      <div ref="tau" @click="tau" title="Tau">&#1514;</div>
      <hr>
      <div ref="finalKaf" @click="finalKaf" title="final Kaf">&#1498;</div>
      <div ref="finalMem" @click="finalMem" title="final Mem">&#1501;</div>
      <div ref="finalNun" @click="finalNun" title="final Nun">&#1503;</div>
      <div ref="finalP" @click="finalP" title="final Pe">&#1507;</div>
      <div ref="finalTz" @click="finalTz" title="final Tzaddi">&#1509;</div>
      <hr>
      <div ref="dagesh" @click="dagesh" title="Dagesh">&#1468;</div>
      <div ref="hireq" @click="hireq" title="Hireq">&#1460;</div>
      <div ref="tzere" @click="tzere" title="Tzere">&#1461;</div>
      <div ref="segol" @click="segol" title="Segol">&#1462;</div>
      <div ref="patah" @click="patah" title="Patah">&#1463;</div>
      <div ref="kametz" @click="kametz" title="Kametz">&#1464;</div>
      <div ref="holem" @click="holem" title="Holem">&#1465;</div>
      <div ref="qibbutz" @click="qibbutz" title="Qibbutz">&#1467;</div>
      <div ref="shva" @click="shva" title="Shva">&#1456;</div>
      <div ref="hatafSegol" @click="hatafSegol" title="Hataf Segol">&#1457;</div>
      <div ref="hatfPatah" @click="hatefPatah" title="Hatef Patah">&#1458;</div>
      <div ref="hatefKametz" @click="hatefKametz" title="hatef Kametz">&#1459;</div>
    </div>
  </div>`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
