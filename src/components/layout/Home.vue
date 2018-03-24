<template>
  <div>
    <first-screen :res="firstScreen"></first-screen>
    <group-floor :res='groupFloor' />
    <hot-selling :hotSellingTit="hotSellingTit" :hotSelling="hotSelling"/>
    <home-prolist :res="homeProlist" />
  </div>
</template>
<script>
  import axios from 'axios';
  import { Indicator } from 'mint-ui';
  import FirstScreen from '../home/FirstScreen';
  import GroupFloor from '../home/GroupFloor';
  import HotSelling from '../home/HotSelling';
  import HomeProlist from '../home/HomeProlist';
  export default {
    data: () => {
      return {
        firstScreen: [],
        groupFloor: [],
        hotSellingTit: [],//热卖商品标题
        hotSelling: [],//热卖商品
        homeProlist: []
      }
    },
    components: {
      FirstScreen,
      GroupFloor,
      HotSelling,
      HomeProlist
    },
    beforeCreate() {
        Indicator.open({
          spinnerType: 'triple-bounce'
        });
    },
    mounted() {

      axios({
          url: '/home/homedata'
          // url: 'api/commodity/homedata'
        })
        .then((result) => {
          Indicator.close();
          // console.log(result);
          const resultData = result.data.data.template.componentList;
          this.firstScreen.push(resultData[0]);
          this.groupFloor.push(resultData[1], resultData[2], resultData[3], resultData[4]);
          this.hotSellingTit.push(resultData[5]);
          this.hotSelling.push(resultData[6], resultData[7], resultData[8], resultData[9], resultData[10], resultData[11], resultData[12]);
          this.homeProlist.push(resultData[13], resultData[14], resultData[15], resultData[16], resultData[17], resultData[18]);
        })
    }
  }
</script>
