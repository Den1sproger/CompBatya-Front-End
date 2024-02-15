<template>
  <greeting-user></greeting-user>
  <div class="service-request-container">
    <service-item></service-item>
    <leave-request></leave-request>
  </div>
  <specialist-list></specialist-list>
</template>


<script>
import GreetingUser from '@/components/GreetingUser';
import ServiceItem from '@/components/ServiceItem';
import LeaveRequest from '@/components/LeaveRequest';
import SpecialistList from '@/components/SpecialistList';


export default {
  name: 'HomeView',
  components: {
    GreetingUser,
    ServiceItem,
    LeaveRequest,
    SpecialistList
  }
}
</script>


<style lang="scss" scoped>
.service-request-container {
  background-color: $background-light;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}
</style>