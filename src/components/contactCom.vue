<template>
    <div id="contact">
        <div class="wrapper">
            <div class="contact-form">
                <h2>Say Hello!</h2>
                <form @submit.prevent="validateBeforeSubmit">
        <!--USERNAME-->
        <div class="input-wrapper">
            <label for="username">Name</label>
            <p>
                <input name="name" 
                v-model="name" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('name') }" 
                type="text"><br>

                <span v-show="errors.has('name')" 
                class="errorStyle">{{ errors.first('name') }}</span>
            </p>
        </div>
                <!--PHONE NUMBER-->

        <div class="input-wrapper">
        <label for="phonenumber">Phone Number</label>
            <p>
                <input name="phonenumber" 
                v-model="phonenumber" 
                v-validate="'required|numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('phonenumber') }" 
                type="text"><br>

                <span v-show="errors.has('phonenumber')" class="errorStyle">
                {{ errors.first('phonenumber') }}</span>
            </p>
        </div>

                <!--EMAIL-->
        <div class="input-wrapper" >
            
            <label for="email" class="labels">Email</label>
            <p>
            <input name="email"
            v-model="email"
            v-validate="'required|email'"
            :class="{'input': true, 'inputStyle': errors.has('email')}"
            type="email"><br>
            
            <span v-show="errors.has('email')" 
            class="errorStyle">{{ errors.first('email') }}</span>
            </p>
        </div>
        <!--MESSAGE-->
        <div class="input-wrapper">
            <v-text-field v-model="message"
            class="messge-input" 
            label="message" name="message" 
            v-validate="'required'">
            </v-text-field><br>
            <span v-show="errors.has('message')" 
            class="errorStyle">{{ errors.first('message') }}</span>
        </div>

        <!--BUTTON-->
        <div class="input-wrapper">
                    <button type="submit">Send Message</button>
        </div>
                </form>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'contactCom',
    data() {
        return {
            name: '',
            phonenumber: '',
            email: '',
            message: '',
        }
    },
    methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          
        } else {
            alert('Correct them errors!');
        }
        
      });
    }
  },
}
</script>
<style scoped>
input {
    background: #fff;
    border: 1px solid #707070;
    border-radius: 5px;
    font-size: 15px;
    width: 250px;
    height: 30px;
}
.messge-input {
    width: 250px;
}
label {
    font-size: 10px;
}
.errorStyle {
    color: red;
    font-size: 12px;
    font-style: italic
}
.inputStyle {
    border: 1px solid #EF5350;
}
form {
    width: 80%;
    margin: 0 auto;
}
.contact-form h2 {
    text-align: center;
    font-size: 55px;
    font-weight: 350;
    margin: 0px 0px 20px 0px;
}
.contact-form button {
    background: #c0c0c0;
    padding: 5px 9px;
}
.contact-form button:hover {
    background: #949494;
}
#contact {
    background-image: url('~@/assets/about-background.png');
    background-size: cover;
    background-position-x: -200px;
    padding: 30px 0px;
}
@media only screen and (min-width: 500px) {
    .input-wrapper {
        text-align: center;
    }
    .messge-input {
        margin: 0 auto;
    }
}
@media only screen and (min-width: 700px) {
    #contact {
    background-position-x: inherit;
}
}
@media only screen and (min-width: 1200px) {
    #contact {
        background: none;
        padding: 0;
    }
    form {
        width: 100%;
    }
}
</style>


