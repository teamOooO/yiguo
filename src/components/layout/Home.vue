<template>
  <div>
    <!-- <div class="" v-for='(v, i) in groupFloor'> -->
    <first-screen :res="firstScreen"></first-screen>
    <group-floor :res='groupFloor' />
    <!-- </div> -->
  </div>
</template>
<script>
  import axios from 'axios';
  import FirstScreen from '../home/FirstScreen';
  import GroupFloor from '../home/GroupFloor';
  export default {
    data: () => {
      return {
        firstScreen: [],
        groupFloor: []
      }
    },
    components: {
      FirstScreen,
      GroupFloor
    },
    mounted() {
      axios({
          url: '/api/homedata',
        })
        .then((result) => {
          const resultData = result.data.data.template.componentList;
          this.groupFloor.push(resultData[1], resultData[2], resultData[3], resultData[4]);
          this.firstScreen = resultData[0];
        })
    }
  }
</script>
