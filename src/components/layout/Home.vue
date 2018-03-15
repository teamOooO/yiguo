<template>
  <div>
    首页
    <!-- <div class="" v-for='(v, i) in groupFloor'> -->
      <group-floor :res='groupFloor'/>
    <!-- </div> -->
  </div>
</template>
<script>
  import axios from 'axios';
  import GroupFloor from '../home/GroupFloor';
  export default {
    data: () => {
      return {
        groupFloor: []

      }
    },
    components: {
      GroupFloor
    },
    mounted() {
      axios({
        url: '/api/homedata',
      })
        .then((result) => {
          const resultData = result.data.data.template.componentList;
          this.groupFloor.push(resultData[1], resultData[2], resultData[3], resultData[4]);

          // this.img = resultData[1].adPictures[0].pictureUrl;
          // console.log(this.groupFloor);
          // console.log(this.groupFloor[1].adPictures[0].pictureUrl);

        })
    }
  }
</script>
