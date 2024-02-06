<template>
  <greeting-user></greeting-user>
  <div>
    <service-list></service-list>
    <leave-request></leave-request>
  </div>
  <specialist-list></specialist-list>
</template>

<script>
import GreetingUser from '@/components/GreetingUser';
import ServiceList from '@/components/ServiceList';
import LeaveRequest from '@/components/LeaveRequest';
import SpecialistList from '@/components/SpecialistList';


export default {
  name: 'HomeView',
  components: {
    GreetingUser,
    ServiceList,
    LeaveRequest,
    SpecialistList
  }
}
</script>


<style lang="scss" scoped>
</style>