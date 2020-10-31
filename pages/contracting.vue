<template>
    <div>
        <div class="main-content box-pad mb-40">
            <div class="_step box p-20">
                <h2 class="_con_title">Contractiong With HomeBolt Technology</h2>

                <div class="_step_main_all">
                    <p class="_step_main_title">Step 1:Contract with HomeBolt!</p>

                    <div class="_step_main">
                        <ul class="_step_main_list">

                            <li @click="$router.push('/form1')" style="cursor:pointer;"><p class="_step_main_list_text">Direct Deposit Authorization Form</p></li>
                            <li @click="$router.push('/form2')" style="cursor:pointer;"><p class="_step_main_list_text">INDEPENDENT CONTRACTOR AGREEMENT</p></li>
                            <li @click="$router.push('/form3')" style="cursor:pointer;"><p class="_step_main_list_text">Request for Texpayer</p></li>
                        </ul>
                    </div>
                </div>

                <div class="_step_main_all">
                    <p class="_step_main_title">Step 2:Contract with Carriers</p>

                    <div class="_step_main">
                        <p class="_step_sub_main_title">FOR BOTH REGISTER WITH YOUR HOMEBOLT EMAIL ADDRESS!</p>

                        <div class="_step_card_all">
                            <div class="_step_card">
                              <a href="https://www.agencyworkspace.com/s/brokerregistrationpage">
                                <div class="_step_card_pic" >
                                    <img class="_step_card_img" src="/images/contact1.jpeg" alt="" title="">
                                    <div class="_step_card_bottom">
                                        <!-- <p class="_step_card_title">Health Incrace Coatracting Click Here!</p> -->
                                    </div>
                                </div>
                              </a>

                                <p class="_step_card_text">Health Care Instraction Download! (Click)</p>
                            </div>

                            <div class="_step_card">
                              <a href="https://surelc.surancebay.com/sbweb/agency/692">
                                <div class="_step_card_pic">
                                    <img class="_step_card_img" src="/images/contact2.jpeg" alt="" title="">
                                    <div class="_step_card_bottom">
                                        <!-- <p class="_step_card_title">Health Incrace Coatracting Click Here!</p> -->
                                    </div>
                                </div>
                              </a>

                                <p class="_step_card_text">Need To Use Adobe Flash!</p>
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
        return{


        }
    },
  async asyncData({app,store,redirect,params,query}){
        try {
            const [res1,res2,res3] = await Promise.all([
                app.$axios.get(`/sales/getDepositeByUser`),
                app.$axios.get(`/sales/getCreatorAgreementByUser`),
                app.$axios.get(`/sales/getTexPayerByUser`)
                // app.$axios.get(`/sales/getAddendumPdf`)
            ]);
            var form_four = res1.data
            var form_five = res2.data
            var form_six = res3.data
            // var addendumPdf = res4.data
            if(res1.status == 200 && res2.status == 200 && res3.status == 200 && res4.status == 200) {
                return {
                    form_four:form_four,
                    form_five:form_five,
                    form_six:form_six,
                    // addendumPdf:addendumPdf,
                };
            }
        } catch (error) {
            
            console.log(error)
        }

    },
}
</script>