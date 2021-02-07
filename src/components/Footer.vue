<template>
  <footer>
    <div class="container">
      <div class="contacts">
        <h4>
          {{ getfooterContactsHeading }}
        </h4>
        <div class="contact-wrapper">
          <div class="label">
            {{ getfooterContactsAddressLabel }}
          </div>
          <div class="value">
            {{ getfooterContactsAddressValue }}
          </div>
        </div>
        <div class="contact-wrapper">
          <div class="label">
            {{ getfooterContactsEmailLabel }}
          </div>
          <div class="value">
            {{ getfooterContactsEmailValue }}
          </div>
        </div>
        <div class="logo">
          <img src="./../assets/logo.png" alt="">
        </div>
        <div class="copyright">
          {{ getfooterCopyright }}
        </div>
      </div>
      <div class="documents">
        <h4>
          {{ getfooterDocumentsHeading }}
        </h4>
        <ul>
          <li v-for="item in getfooterDocuments" :key="item.name">
            <a :href="item.link">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="support">
        <h4>
          {{ getfooterSupport }}
        </h4>
        <div class="contact-wrapper">
          <div class="label">
            {{ getemail }}
          </div>
          <div class="value">
            {{ getemailValue }}
          </div>
        </div>
        <div class="contact-wrapper">
          <div class="label">
            {{ getPhone }}
          </div>
          <div class="value">
            {{ getPhoneValue }}
          </div>
        </div>
        <div class="subscribe">
          <h4>
            {{ getsubscribe }}
          </h4>
          <div class="input-wrapper">
            <input type="email" :placeholder="getPlaceholder">
          </div>
        </div>
        <div class="socialPay">
          <h4>
            {{ getFollowUs }}
          </h4>
          <div class="social-wrapper">
            <div class="icons">
              <a href="">
                <img src="./../assets/facebook.png" alt="">
              </a>
              <a href="">
                <img src="./../assets/twitter.png" alt="">
              </a>
              <a href="">
                <img src="./../assets/instagram.png" alt="">
              </a>
            </div>
            <div class="bank">
              <img src="./../assets/visa.png" alt="">
              <img src="./../assets/pci.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Footer",
  computed: {
    ...mapGetters([
      'getfooterContactsHeading',
      'getfooterContactsAddressLabel',
      'getfooterContactsAddressValue',
      'getfooterContactsEmailLabel',
      'getfooterContactsEmailValue',
      'getfooterCopyright',
      'getfooterDocumentsHeading',
      'getfooterDocuments',
      'getfooterSupport',
      'getemail',
      'getemailValue',
      'getPhone',
      'getPhoneValue',
      'getsubscribe',
      'getPlaceholder',
      'getFollowUs'
    ])
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 125px 0;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
  background-color: black;
  color: white;

  .container {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    h4 {
      font-size: 18px;
      color: #9f9f9f;
      margin-bottom: 30px;
    }

    > * {
      width: 100%;
    }

    .contacts {
      max-width: 500px;
      padding-right: 50px;
      @media (max-width: 768px) {
        margin: auto;
        max-width: unset;
        padding-right: 0;
      }
      @media (max-width: 500px) {
        text-align: center;
      }
      .contact-wrapper {
        display: flex;

        .label {
          color: #4c4c4c;
          min-width: 90px;
        }

        margin-bottom: 10px;
      }

      .logo {
        filter: invert(1);
        margin-top: 30px;
        margin-bottom: 10px;
      }
    }

    .documents {
      @media (max-width: 768px) {
        width: 50%;
      }
      @media (max-width: 500px) {
        width: 100%;
        text-align: center;
      }
      ul {
        padding: 0;
        list-style: none;

        li {
          a {
            display: block;
            color: white;
            text-decoration: none;
            margin-bottom: 5px;

            &:hover {
              color: $main-red;
            }
          }
        }
      }
    }

    .support {
      @media (max-width: 768px) {
        width: 50%;
      }
      @media (max-width: 500px) {
        width: 100%;
        text-align: center;
      }
      .contact-wrapper {
        display: flex;

        .label {
          color: #4c4c4c;
          min-width: 90px;
        }

        margin-bottom: 10px;
      }

      input {
        padding: 13px;
        border-color: transparent;
        border-radius: 20px;

        &:focus {
          outline: none;
          border-color: $main-red;
        }
      }
      .social-wrapper{
        display: flex;
        justify-content: space-between;
        .icons{
          a{
            margin-right: 10px;
          }
        }
        .bank{
          img{
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>