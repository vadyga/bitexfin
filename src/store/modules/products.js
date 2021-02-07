export default ({
    state: {
        siteData: '',
        language: 'eng'
    },
    mutations: {
        getSiteData(state) {
            if (state.language === 'eng') {
                state.siteData = {
                    "nav": [
                        {"section": "Offers", "text": "Offers"},
                        {"section": "Exchange", "text": "Exchange"},
                        {"section": "App", "text": "App"},
                        {"section": "Cards", "text": "Cards"},
                        {"section": "Earn", "text": "Earn"},
                        {"section": "Credit", "text": "Credit"},
                        {"section": "Pay", "text": "Pay"},
                        {"section": "DeFi", "text": "DeFi"},
                        {"section": "Prices", "text": "Prices"},
                        {"section": "Support", "text": "Support"}
                    ],
                    "login": "Log in",
                    "register": "Sign up",
                    "promoText": "Referral program - register friends and get income from their",
                    "more": "More details",
                    "offerSubtitle": "Offers",
                    "offerTitle": "Our Company Offers",
                    "offerSlides": [
                        {
                            "name": "Mobile app",
                            "description": "Full functionality of the BITEXFIN service in one palm",
                            "promo": "Bitexfin - deposit, exchange and withdraw funds anywhere 24/7",
                        },
                        {
                            "name": "Payment system",
                            "description": "Generate QR-code or payment link and accept payments from your friends and loved ones",
                            "promo": "Universal system for accepting payments",
                        },
                        {
                            "name": "Payment services",
                            "description": "Integrate payment services BITEXFIN to your website and get payments from clients from 170 countries of the world",
                            "promo": "Crypto acquiring. Payment module",
                        },
                        {
                            "name": "Mobile app",
                            "description": "Full functionality of the BITEXFIN service in one palm",
                            "promo": "Bitexfin - deposit, exchange and withdraw funds anywhere 24/7",
                        }
                    ],
                    "exchangeTableHeading": {
                        "pair": "Pair",
                        "lastAmount": "Last Amount",
                        "change": "Change",
                        "markets": "Markets",
                    },
                    "exchangeItems": [
                        {
                            "name": "BTC",
                            "fullName": "Bitcoin",
                            "logo": "btc.png",
                            "amount": "₽1,301,468.88",
                            "change": "-10.47%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "ETH",
                            "fullName": "Ethereum",
                            "logo": "eth.png",
                            "amount": "₽38,423.46",
                            "change": "-14.45%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "XRP",
                            "fullName": "Ripple",
                            "logo": "xrp.png",
                            "amount": "₽39.84",
                            "change": "-22.19%",
                            "changeStyle": "red",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "BCH",
                            "fullName": "Bitcoin Cash",
                            "logo": "bch.png",
                            "amount": "₽21,106.38",
                            "change": "-18.63%",
                            "changeStyle": "red",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "LTC",
                            "fullName": "Litecoin",
                            "logo": "ltc.png",
                            "amount": "₽5,691.13",
                            "change": "-14.89%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "BTC",
                            "fullName": "Bitcoin",
                            "logo": "btc.png",
                            "amount": "₽1,301,468.88",
                            "change": "-10.47%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                    ],
                    "learnMoreHeading": "Learn more  about the products",
                    "learnMoreDescription": "Become a part of a successful community, increase your income level",
                    "watchVideo": "Watch video",
                    "paySubtitle": "Pay",
                    "payTitle": "How to start accepting payments via QR code",
                    "firstHeading": "Leave a request and sign the contract",
                    "secondHeading": "Get a QR code from the Bank or implement the service via the API",
                    "secondDescription": "Put a sticker at the entrance to let customers know that they can pay by QR",
                    "ThirdHeading": "To accept payments, show the Bank's QR code",
                    "ThirdDescription": "In any convenient way or scan the buyers QR code ",
                    "apiItems": [
                        {
                            "name": "Bitexcard - instant recharge system account on Bitexfin",
                            "description": "Top up your account with cash. Activate the card on the website or in the mobile application and get instant access to settlement and exchange operations. The cards are available for purchase at retail outlets and online stores."
                        },
                        {
                            "name": "API Integration",
                            "description": "We provide the ability to integrate BITEXFIN functionality on third-party sites. Connect individual modules or the full functionality of the system (according to the white label principle), accept payments and provide your customers with access to payment and exchange operations"
                        },
                        {
                            "name": "Trading terminal",
                            "description": "Bitexfin offers a customizable interface that allows you to organize your workspace according to your needs; create orders to buy or sell cryptocurrency; make deals at a favorable rate. You can manage the trading navigation bar and save settings, arrange and sort order book columns, set table settings. Switch between the dark at any time and light themes, customize notifications and sound alerts"
                        }
                    ],
                    "advantageSubtitle": "Support",
                    "advantagesTitle": "Our advantages",
                    "advantagesCards": [
                        {
                            "name": "Technical support 24/7",
                            "description": "Get support via live chat or e-mail"
                        },
                        {
                            "name": "Referral program",
                            "description": "Become a part of a successful fintech project and increase your income"
                        },
                        {
                            "name": "Serving corporate clients",
                            "description": "We are happy to host to service corporate clients from many countries of the world"
                        },
                        {
                            "name": "Career",
                            "description": "Be successful learn and develop together with the team professionals"
                        },
                    ],
                    "footerContactsHeading": "Our Contacts",
                    "footerContactsAddressLabel": "Address",
                    "footerContactsAddressValue": "Vana-Narva maantee 24, Maardu, 74114 Harju maakond, Estonia Providers of a service of exchanging a virtual currency against  a fiat currency: FVR001184 Providers of a virtual currency wallet service: FRK001071 ",
                    "footerContactsEmailLabel": "Email",
                    "footerContactsEmailValue": "info@bitexfin.com",
                    "footerCopyright": "Copyright © 2020 Bitexfin | All rights reserved. BITEXFIN® and the BITEXFIN Brand Marks are registered trademarks of GOLDFORT OU ",
                    "footerDocumentsHeading": "Documents",
                    "footerDocuments":[
                        {
                            "link": "#",
                            "name": "Privacy Policy"
                        },
                        {
                            "link": "#",
                            "name": "Disclosure of risk"
                        },
                        {
                            "link": "#",
                            "name": "Anti Spam Policy"
                        },
                        {
                            "link": "#",
                            "name": "Policies regarding law"
                        },
                        {
                            "link": "#",
                            "name": "enforcement inquiries"
                        },
                        {
                            "link": "#",
                            "name": "How it works"
                        },
                        {
                            "link": "#",
                            "name": "AML Policy"
                        },
                        {
                            "link": "#",
                            "name": "Terms of use"
                        },
                        {
                            "link": "#",
                            "name": "Fees"
                        },
                        {
                            "link": "#",
                            "name": "Coin status"
                        },
                        {
                            "link": "#",
                            "name": "Internal control rules for"
                        },
                        {
                            "link": "#",
                            "name": "AML/CGT purposes"
                        },
                    ],
                    "footerSupport": "Support",
                    "email": "Email",
                    "emailValue": "support@bitexfin.com",
                    "Phone": "Phone",
                    "PhoneValue": "+3726028493",
                    "subscribe": "Subscribe",
                    "Placeholder": "Your Email",
                    "FollowUs": "Follow Us"
                }
            } else {
                state.siteData = {
                    "nav": [
                        {"section": "Offers", "text": "Offers"},
                        {"section": "Exchange", "text": "Exchange"},
                        {"section": "App", "text": "Приложение"},
                        {"section": "Cards", "text": "Карта"},
                        {"section": "Earn", "text": "Earn"},
                        {"section": "Credit", "text": "Credit"},
                        {"section": "Pay", "text": "Оплата"},
                        {"section": "DeFi", "text": "DeFi"},
                        {"section": "Prices", "text": "Цены"},
                        {"section": "Support", "text": "Помощь"}
                    ],
                    "login": "Войти",
                    "register": "Зарегестрироваться",
                    "promoText": "Реферальная программа - регистрируйте друзей и получайте доход от их",
                    "more": "Подробнее",
                    "offerSubtitle": "Предложения",
                    "offerTitle": "Наша компания предлагает",
                    "offerSlides": [
                        {
                            "name": "Мобильное приложение",
                            "description": "Полный функционал сервиса BITEXFIN на одной ладони",
                            "promo": "Bitexfin - депозит, обмен и вывод средств в любом месте 24/7",
                        },
                        {
                            "name": "Система оплаты",
                            "description": "Создавайте QR-код или ссылку для оплаты и принимайте платежи от друзей и близких",
                            "promo": "Универсальная система приема платежей",
                        },
                        {
                            "name": "Платежные услуги",
                            "description": "Интегрируйте платежный сервис BITEXFIN на свой сайт и получайте платежи от клиентов из 170 стран мира",
                            "promo": "Крипто-эквайринг. Платежный модуль",
                        },
                        {
                            "name": "Мобильное приложение",
                            "description": "Полный функционал сервиса BITEXFIN на одной ладони",
                            "promo": "Bitexfin - депозит, обмен и вывод средств в любом месте 24/7",
                        }
                    ],
                    "exchangeTableHeading": {
                        "pair": "Валюта",
                        "lastAmount": "Последняя стоимость",
                        "change": "Изменение",
                        "markets": "Рынок",
                    },
                    "exchangeItems": [
                        {
                            "name": "BTC",
                            "fullName": "Bitcoin",
                            "logo": "btc.png",
                            "amount": "₽1,301,468.88",
                            "change": "-10.47%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "ETH",
                            "fullName": "Ethereum",
                            "logo": "eth.png",
                            "amount": "₽38,423.46",
                            "change": "-14.45%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "XRP",
                            "fullName": "Ripple",
                            "logo": "xrp.png",
                            "amount": "₽39.84",
                            "change": "-22.19%",
                            "changeStyle": "red",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "BCH",
                            "fullName": "Bitcoin Cash",
                            "logo": "bch.png",
                            "amount": "₽21,106.38",
                            "change": "-18.63%",
                            "changeStyle": "red",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "LTC",
                            "fullName": "Litecoin",
                            "logo": "ltc.png",
                            "amount": "₽5,691.13",
                            "change": "-14.89%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                        {
                            "name": "BTC",
                            "fullName": "Bitcoin",
                            "logo": "btc.png",
                            "amount": "₽1,301,468.88",
                            "change": "-10.47%",
                            "changeStyle": "green",
                            "markets": "graph1.png",
                        },
                    ],
                    "learnMoreHeading": "Узнай больше о продуктах",
                    "learnMoreDescription": "Станьте частью успешного сообщества, увеличьте свой доход",
                    "watchVideo": "Посмотреть видео",
                    "paySubtitle": "Pay",
                    "payTitle": "Как начать принимать платежи через QR-код",
                    "firstHeading": "Оставьте заявку и подпишите договор",
                    "secondHeading": "Получите QR-код в Банке или реализуйте услугу через API",
                    "secondDescription": "Наклейте на входе наклейку, чтобы клиенты знали, что они могут расплачиваться QR",
                    "ThirdHeading": "Для приема платежей покажите QR-код банка",
                    "ThirdDescription": "Любым удобным способом или отсканируйте QR код покупателя",
                    "apiItems": [
                        {
                            "name": "Bitexcard - аккаунт системы мгновенного пополнения на Bitexfin",
                            "description": "Пополните счет наличными. Активируйте карту на сайте или в мобильном приложении и получите мгновенный доступ к расчетно-обменным операциям. Карты можно приобрести в торговых точках и интернет-магазинах."
                        },
                        {
                            "name": "Интеграция API",
                            "description": "Мы предоставляем возможность интегрировать функционал BITEXFIN на сторонние сайты. Подключите отдельные модули или полный функционал системы (по принципу white label), принимайте платежи и предоставляйте своим клиентам доступ к платежным и обменным операциям"
                        },
                        {
                            "name": "Торговый терминал",
                            "description": "Bitexfin предлагает настраиваемый интерфейс, который позволяет организовать рабочее пространство в соответствии с вашими потребностями; создавать заказы на покупку или продажу криптовалюты; совершать сделки по выгодному курсу. Вы можете управлять торговой панелью навигации и сохранять настройки, упорядочивать и сортировать столбцы книги заказов, настраивать параметры таблицы. Переключайтесь между темной темой в любое время и светлой, настраивайте уведомления и звуковые оповещения"
                        }
                    ],
                    "advantageSubtitle": "Support",
                    "advantagesTitle": "Наши преимущества",
                    "advantagesCards": [
                        {
                            "name": "Техническая поддержка 24/7",
                            "description": "Получите поддержку в чате или по электронной почте"
                        },
                        {
                            "name": "Реферальная программа",
                            "description": "Станьте частью успешного финтех-проекта и увеличьте свой доход"
                        },
                        {
                            "name": "Обслуживание корпоративных клиентов",
                            "description": "Мы рады принять у себя корпоративных клиентов из многих стран мира."
                        },
                        {
                            "name": "Карьера",
                            "description": "Будьте успешными, учитесь и развивайтесь вместе с командой профессионалов"
                        },
                    ],
                    "footerContactsHeading": "Наши контакты",
                    "footerContactsAddressLabel": "Адресс",
                    "footerContactsAddressValue": "Vana-Narva maantee 24, Maardu, 74114 Harju maakond, Estonia Providers of a service of exchanging a virtual currency against  a fiat currency: FVR001184 Providers of a virtual currency wallet service: FRK001071 ",
                    "footerContactsEmailLabel": "Email",
                    "footerContactsEmailValue": "info@bitexfin.com",
                    "footerCopyright": "Copyright © 2020 Bitexfin | Все права защищены. BITEXFIN® and the BITEXFIN товарные знаки являются зарегистрированными товарными знаками GOLDFORT OU ",
                    "footerDocumentsHeading": "Документы",
                    "footerDocuments":[
                        {
                            "link": "#",
                            "name": "Политика конфиденциальности"
                        },
                        {
                            "link": "#",
                            "name": "Раскрытие риска"
                        },
                        {
                            "link": "#",
                            "name": "Политика защиты от спама"
                        },
                        {
                            "link": "#",
                            "name": "Политика в отношении права"
                        },
                        {
                            "link": "#",
                            "name": "Исполнительные запросы"
                        },
                        {
                            "link": "#",
                            "name": "Как это работает"
                        },
                        {
                            "link": "#",
                            "name": "Политика AML"
                        },
                        {
                            "link": "#",
                            "name": "Правила использования"
                        },
                        {
                            "link": "#",
                            "name": "Сборы"
                        },
                        {
                            "link": "#",
                            "name": "Coin status"
                        },
                        {
                            "link": "#",
                            "name": "Правила внутреннего контроля"
                        },
                        {
                            "link": "#",
                            "name": "AML / CGT цели"
                        },
                    ],
                    "footerSupport": "Помощь",
                    "email": "Email",
                    "emailValue": "support@bitexfin.com",
                    "Phone": "Телефон",
                    "PhoneValue": "+3726028493",
                    "subscribe": "Подписка",
                    "Placeholder": "Ваш Email",
                    "FollowUs": "Подписывайтесь на нас"
                }
            }
        },
        setRu(state){
            state.language = 'ru'
        },
        setEng(state){
            state.language = 'eng'
        }
    },
    actions: {
        getSiteData(ctx) {
            ctx.commit('getSiteData')
        },
        setLangRu(ctx){
            ctx.commit('setRu')
            ctx.commit('getSiteData')
        },
        setLangEng(ctx){
            ctx.commit('setEng')
            ctx.commit('getSiteData')
        }
    },
    getters: {
        getSiteData(state) {
            return state.siteData
        },
        getNavData(state) {
            return state.siteData.nav
        },
        getLoginData(state) {
            return state.siteData.login
        },
        getRegisterData(state) {
            return state.siteData.register
        },
        getPromoData(state) {
            return state.siteData.promoText
        },
        getMoreData(state) {
            return state.siteData.more
        },
        getOfferSubtitle(state) {
            return state.siteData.offerSubtitle
        },
        getOfferTitle(state) {
            return state.siteData.offerTitle
        },
        getOfferSlides(state) {
            return state.siteData.offerSlides
        },
        getExchangeHeaderTitles(state) {
            return state.siteData.exchangeTableHeading
        },
        getExchangeItems(state) {
            return state.siteData.exchangeItems
        },
        getLearnMoreHeading(state) {
            return state.siteData.learnMoreHeading
        },
        getLearnMoreDescription(state) {
            return state.siteData.learnMoreDescription
        },
        getPaySubtitle(state) {
            return state.siteData.paySubtitle
        },
        getPayTitle(state) {
            return state.siteData.payTitle
        },
        getFirstHeading(state) {
            return state.siteData.firstHeading
        },
        getSecondHeading(state) {
            return state.siteData.secondHeading
        },
        getSecondDescription(state) {
            return state.siteData.secondDescription
        },
        getThirdHeading(state) {
            return state.siteData.ThirdHeading
        },
        getThirdDescription(state) {
            return state.siteData.ThirdDescription
        },
        getApiSlides(state) {
            return state.siteData.apiItems
        },
        getAdvantageSubtitle(state){
            return state.siteData.advantageSubtitle
        },
        getAdvantageTitle(state){
            return state.siteData.advantagesTitle
        },
        getAdvantageCards(state){
            return state.siteData.advantagesCards
        },
        getfooterContactsHeading(state){
            return state.siteData.footerContactsHeading
        },
        getfooterContactsAddressLabel(state){
            return state.siteData.footerContactsAddressLabel
        },
        getfooterContactsAddressValue(state){
            return state.siteData.footerContactsAddressValue
        },
        getfooterContactsEmailLabel(state){
            return state.siteData.footerContactsEmailLabel
        },
        getfooterContactsEmailValue(state){
            return state.siteData.footerContactsEmailValue
        },
        getfooterCopyright(state){
            return state.siteData.footerCopyright
        },
        getfooterDocumentsHeading(state){
            return state.siteData.footerDocumentsHeading
        },
        getfooterDocuments(state){
            return state.siteData.footerDocuments
        },
        getfooterSupport(state){
            return state.siteData.footerSupport
        },
        getemail(state){
            return state.siteData.email
        },
        getemailValue(state){
            return state.siteData.emailValue
        },
        getPhone(state){
            return state.siteData.Phone
        },
        getPhoneValue(state){
            return state.siteData.PhoneValue
        },
        getsubscribe(state){
            return state.siteData.subscribe
        },
        getPlaceholder(state){
            return state.siteData.Placeholder
        },
        getFollowUs(state){
            return state.siteData.FollowUs
        },
        getWatchVideo(state){
            return state.siteData.watchVideo
        }
    },
})

