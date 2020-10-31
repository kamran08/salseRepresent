<template>
    <div>
        <div class="_main_content">
            <div class="_1card">
                <div class="_1card_body">
                    <h2 class="_1card_title">All Notifications</h2>

                    <div class="_recent_activity">

                        <div class="_timeline_task" v-for="(item,index) in notificationData" :key="index">
                            <div class="_timeline_icon" :class="item.isSeen==1?'_bg_success':'_bg_unseen'">
                                <Icon type="md-checkmark" />
                            </div>
                            <div class="_timeline_details" @click="seenNotificationUndate(item, index)">
                                <div class="_timeline_title">
                                     <nuxt-link :to="`${item.link}`">
                                           <h4> {{item.description}}</h4>
                                    </nuxt-link>
                                    <span class="time"><Icon type="md-time" />{{item.created_at | timeAgo}}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	data(){
		return {
            notificationData:[],
            loading:false
		}
	},

	methods : {
		goBack() {
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
         async seenNotificationUndate(item,index){
            let ob={
                id:item.id
            }
            const res = await this.callApi('post', '/sales/seenNotificationUndate', ob)
            if(res.status == 200){
                if(item.isSeen==0){
                    let a = this.unseenNotification
                    a--
                    this.$store.commit('SetNotification', (a));
                }
                 this.notificationData[index].isSeen=1
                    
            }
          else{
              this.swr();
          }
        },
    }, 
       filters:{
        timeAgo(date){
            var current = new Date(); 
            var previous = new Date(date); 
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            var elapsed = current - previous;
            var result = ''
            if (elapsed < msPerMinute) {
                result= Math.round(elapsed/1000) + ' seconds ago';   
            }
            else if (elapsed < msPerHour) {
                result = Math.round(elapsed/msPerMinute) + ' minutes ago';   
            }

            else if (elapsed < msPerDay ) {
                result = Math.round(elapsed/msPerHour ) + ' hours ago';   
            }

            else if (elapsed < msPerMonth) {
                result =  Math.round(elapsed/msPerDay) + ' days ago';   
            }

            else if (elapsed < msPerYear) {
                result =  Math.round(elapsed/msPerMonth) + ' months ago';   
            }
            else {
                result =  Math.round(elapsed/msPerYear ) + ' years ago';   
            }
            return result
        }
    },

	async created(){
       const res  = await this.callApi('get',`/sales/get_all_notification_tech`)
        if(res.status == 200){
            this.notificationData = res.data
        }
        else{
            this.swr()
        }  
    }
	
}
</script>
<style scoped>
._bg_unseen {
    color: #000;
    background: #8080808c;
}
</style>