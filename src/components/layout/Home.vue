<template>
  <div>
<<<<<<< HEAD
    <!-- <div class="" v-for='(v, i) in groupFloor'> -->
    <first-screen :res="firstScreen"></first-screen>
    <group-floor :res='groupFloor' />
    <!-- </div> -->
    <group-floor :res="groupFloor"/>
=======
    <first-screen :res="firstScreen"></first-screen>
    <group-floor :res='groupFloor' />
>>>>>>> zhangboyu-0315-router-end
    <hot-selling :hotSellingTit="hotSellingTit" :hotSelling="hotSelling"/>
    <home-prolist :res="homeProlist" />
  </div>
</template>
<script>
  import axios from 'axios';
  import FirstScreen from '../home/FirstScreen';
  import GroupFloor from '../home/GroupFloor';
  import HotSelling from '../home/HotSelling';
  import HomeProlist from '../home/HomeProlist';
  export default {
    data: () => {
      return {
<<<<<<< HEAD
=======
        firstScreen: [],
>>>>>>> zhangboyu-0315-router-end
        groupFloor: [],
        hotSellingTit: [],//热卖商品标题
        hotSelling: [],//热卖商品
        homeProlist: [],
        firstScreen: []
      }
    },
    components: {
      FirstScreen,
      GroupFloor,
      HotSelling,
      HomeProlist
    },
    mounted() {
      axios({
          url: '/api/homedata',
        })
        .then((result) => {
          const resultData = result.data.data.template.componentList;
          this.groupFloor.push(resultData[1], resultData[2], resultData[3], resultData[4]);
<<<<<<< HEAD
          this.firstScreen = resultData[0];
          this.hotSellingTit.push(resultData[5]);
          this.hotSelling.push(resultData[6], resultData[7], resultData[8], resultData[9], resultData[10], resultData[11], resultData[12]);
          this.homeProlist.push(resultData[13], resultData[14], resultData[15], resultData[16], resultData[17], resultData[18]);
          // console.log(resultData[1]);
          // this.img = resultData[1].adPictures[0].pictureUrl;
          // console.log(this.groupFloor);
          // console.log(this.groupFloor[1].adPictures[0].pictureUrl);

=======
          this.firstScreen.push(resultData[0]);
          this.hotSellingTit.push(resultData[5]);
          this.hotSelling.push(resultData[6], resultData[7], resultData[8], resultData[9], resultData[10], resultData[11], resultData[12]);
          this.homeProlist.push(resultData[13], resultData[14], resultData[15], resultData[16], resultData[17], resultData[18]);
>>>>>>> zhangboyu-0315-router-end
        })
    }
  }
</script>
