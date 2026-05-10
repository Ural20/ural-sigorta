import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: {
        brand: "UralSigorta",
        services: "Hizmetler",
        comments: "Yorumlar",
        login: "Giriş Yap",
        register: "Kayıt Ol",
        account: "Hesabım",
        logout: "Çıkış Yap",
        admin: "Admin",

        badge: "Yeni Nesil Dijital Sigorta",
        heroTitle: "Geleceğini Ural Sigorta ile Güvence Altına Al",
        heroText: "Araç, sağlık, konut ve seyahat sigortalarında hızlı teklif, online başvuru ve dijital poliçe deneyimi.",
        applyNow: "Hemen Başvur",
        details: "Detaylı İncele",

        offerTitle: "Ücretsiz Teklif Al",
        name: "Ad Soyad",
        phone: "Telefon",
        createOffer: "Teklif Oluştur",
        saveOffer: "Teklifi Onayla ve Kaydet",
        fillAllFields: "Lütfen tüm alanları doldurun",
        loginRequired: "Teklifi kaydetmek için giriş yapmalısınız",
        offerSaved: "Teklif kaydedildi",
        pending: "Beklemede",

        carOfferTitle: "Full Kasko Paketi",
        carOfferDetail: "Yol yardım, mini onarım, çekici ve anlaşmalı servis desteği.",
        healthOfferTitle: "Premium Sağlık Paketi",
        healthOfferDetail: "Özel hastane, muayene, tahlil ve online doktor desteği.",
        homeOfferTitle: "Konut Güvence Paketi",
        homeOfferDetail: "Deprem, yangın, hırsızlık ve su baskını güvencesi.",
        travelOfferTitle: "Global Seyahat Paketi",
        travelOfferDetail: "Bagaj kaybı, uçuş iptali ve yurt dışı sağlık desteği.",

        customSolutions: "Size Özel Sigorta Çözümleri",
        servicesDesc: "İhtiyacınıza uygun sigorta paketini seçin, detaylarını inceleyin.",

        carInsurance: "Araç Sigortası",
        carText: "Kasko, trafik sigortası, yol yardım ve mini onarım desteği.",
        carDetail: "Araç sigortası ile aracınızı kaza, hasar ve hırsızlığa karşı koruyabilirsiniz.",

        healthInsurance: "Sağlık Sigortası",
        healthText: "Özel hastane, muayene ve online doktor desteği.",
        healthDetail: "Sağlık sigortası ile kapsamlı sağlık hizmetlerinden yararlanabilirsiniz.",

        homeInsurance: "Konut Sigortası",
        homeText: "Deprem, yangın ve hırsızlık koruması.",
        homeDetail: "Konut sigortası evinizi ve eşyalarınızı güvence altına alır.",

        travelInsurance: "Seyahat Sigortası",
        travelText: "Yurt içi ve yurt dışı tam güvence.",
        travelDetail: "Seyahat sigortası sağlık, bagaj ve uçuş desteği sağlar.",

        customerReviews: "Müşteri Yorumları",
        showAll: "Tümünü Göster",
        showLess: "Daha Az Göster",

        comment1: "Hızlı teklif sistemi ve müşteri desteği gerçekten çok başarılı.",
        comment2: "Konut sigortası süreci çok kolay ilerledi.",
        comment3: "Mobilde bile çok rahat kullanılan modern bir site.",
        comment4: "Teklif sistemi oldukça hızlı çalışıyor.",
        comment5: "Seyahat sigortası hizmetinden memnun kaldım.",
        comment6: "Destek ekibi oldukça ilgiliydi.",

        corporate: "Kurumsal",
        about: "Hakkımızda",
        contact: "İletişim",
        location: "İzmir / Türkiye",
        footerText: "Dijital sigortacılık çözümleriyle hızlı, güvenilir ve modern hizmet.",
        copyright: "© 2026 Ural Sigorta. Tüm hakları saklıdır.",

        happyCustomers: "Mutlu Müşteri",
        satisfaction: "Memnuniyet",
        liveSupport: "Canlı Destek",
        totalCoverage: "Toplam Güvence"
      }
    },

    en: {
      translation: {
        brand: "UralInsurance",
        services: "Services",
        comments: "Reviews",
        login: "Login",
        register: "Register",
        account: "My Account",
        logout: "Logout",
        admin: "Admin",

        badge: "Next Generation Digital Insurance",
        heroTitle: "Secure Your Future with Ural Insurance",
        heroText: "Fast quotes, online applications and digital policy experience for car, health, home and travel insurance.",
        applyNow: "Apply Now",
        details: "Explore Details",

        offerTitle: "Get a Free Quote",
        name: "Full Name",
        phone: "Phone",
        createOffer: "Create Quote",
        saveOffer: "Approve and Save Quote",
        fillAllFields: "Please fill in all fields",
        loginRequired: "You must login to save the quote",
        offerSaved: "Quote saved successfully",
        pending: "Pending",

        carOfferTitle: "Full Car Insurance Package",
        carOfferDetail: "Roadside assistance, mini repair, towing and partner service support.",
        healthOfferTitle: "Premium Health Package",
        healthOfferDetail: "Private hospital, examination, tests and online doctor support.",
        homeOfferTitle: "Home Protection Package",
        homeOfferDetail: "Earthquake, fire, theft and flood coverage.",
        travelOfferTitle: "Global Travel Package",
        travelOfferDetail: "Luggage loss, flight cancellation and international health support.",

        customSolutions: "Custom Insurance Solutions",
        servicesDesc: "Choose the insurance package that suits your needs and review the details.",

        carInsurance: "Car Insurance",
        carText: "Comprehensive coverage, traffic insurance, roadside assistance and repair support.",
        carDetail: "Protect your vehicle against accidents, damage and theft.",

        healthInsurance: "Health Insurance",
        healthText: "Private hospital, examination and online doctor support.",
        healthDetail: "Access comprehensive healthcare services with health insurance.",

        homeInsurance: "Home Insurance",
        homeText: "Earthquake, fire and theft protection.",
        homeDetail: "Protect your home and belongings with home insurance.",

        travelInsurance: "Travel Insurance",
        travelText: "Full coverage for domestic and international trips.",
        travelDetail: "Travel insurance provides health, luggage and flight support.",

        customerReviews: "Customer Reviews",
        showAll: "Show All",
        showLess: "Show Less",

        comment1: "The fast quote system and customer support are excellent.",
        comment2: "The home insurance process was very easy.",
        comment3: "A modern website that works smoothly even on mobile.",
        comment4: "The quote system works very quickly.",
        comment5: "I was satisfied with the travel insurance service.",
        comment6: "The support team was very helpful.",

        corporate: "Corporate",
        about: "About Us",
        contact: "Contact",
        location: "Izmir / Türkiye",
        footerText: "Fast, reliable and modern service with digital insurance solutions.",
        copyright: "© 2026 Ural Insurance. All rights reserved.",

        happyCustomers: "Happy Customers",
        satisfaction: "Satisfaction",
        liveSupport: "Live Support",
        totalCoverage: "Total Coverage"
      }
    },

    de: {
      translation: {
        brand: "UralVersicherung",
        services: "Leistungen",
        comments: "Bewertungen",
        login: "Einloggen",
        register: "Registrieren",
        account: "Mein Konto",
        logout: "Abmelden",
        admin: "Admin",

        badge: "Digitale Versicherung der neuen Generation",
        heroTitle: "Sichern Sie Ihre Zukunft mit Ural Versicherung",
        heroText: "Schnelle Angebote, Online-Anträge und digitale Policen für Auto-, Kranken-, Haus- und Reiseversicherung.",
        applyNow: "Jetzt beantragen",
        details: "Details ansehen",

        offerTitle: "Kostenloses Angebot erhalten",
        name: "Vor- und Nachname",
        phone: "Telefon",
        createOffer: "Angebot erstellen",
        saveOffer: "Angebot bestätigen und speichern",
        fillAllFields: "Bitte füllen Sie alle Felder aus",
        loginRequired: "Sie müssen sich anmelden, um das Angebot zu speichern",
        offerSaved: "Angebot erfolgreich gespeichert",
        pending: "Ausstehend",

        carOfferTitle: "Vollkasko-Paket",
        carOfferDetail: "Pannenhilfe, kleine Reparaturen, Abschleppdienst und Partner-Service.",
        healthOfferTitle: "Premium-Gesundheitspaket",
        healthOfferDetail: "Privatklinik, Untersuchung, Tests und Online-Arzt-Unterstützung.",
        homeOfferTitle: "Haus-Schutzpaket",
        homeOfferDetail: "Schutz gegen Erdbeben, Feuer, Diebstahl und Wasserschäden.",
        travelOfferTitle: "Globales Reisepaket",
        travelOfferDetail: "Gepäckverlust, Flugstornierung und internationale Gesundheitsunterstützung.",

        customSolutions: "Individuelle Versicherungslösungen",
        servicesDesc: "Wählen Sie das passende Versicherungspaket und prüfen Sie die Details.",

        carInsurance: "Autoversicherung",
        carText: "Kasko, Verkehrsversicherung, Pannenhilfe und Reparaturservice.",
        carDetail: "Schützen Sie Ihr Fahrzeug vor Unfällen, Schäden und Diebstahl.",

        healthInsurance: "Krankenversicherung",
        healthText: "Privatklinik, Untersuchung und Online-Arzt-Unterstützung.",
        healthDetail: "Nutzen Sie umfassende Gesundheitsleistungen mit der Krankenversicherung.",

        homeInsurance: "Hausversicherung",
        homeText: "Schutz vor Erdbeben, Feuer und Diebstahl.",
        homeDetail: "Schützen Sie Ihr Zuhause und Ihre Gegenstände mit einer Hausversicherung.",

        travelInsurance: "Reiseversicherung",
        travelText: "Vollschutz für nationale und internationale Reisen.",
        travelDetail: "Reiseversicherung bietet Gesundheits-, Gepäck- und Flugunterstützung.",

        customerReviews: "Kundenbewertungen",
        showAll: "Alle anzeigen",
        showLess: "Weniger anzeigen",

        comment1: "Das schnelle Angebotssystem und der Kundensupport sind ausgezeichnet.",
        comment2: "Der Prozess der Hausversicherung war sehr einfach.",
        comment3: "Eine moderne Website, die auch mobil sehr gut funktioniert.",
        comment4: "Das Angebotssystem funktioniert sehr schnell.",
        comment5: "Ich war mit der Reiseversicherung sehr zufrieden.",
        comment6: "Das Support-Team war sehr hilfsbereit.",

        corporate: "Unternehmen",
        about: "Über uns",
        contact: "Kontakt",
        location: "Izmir / Türkiye",
        footerText: "Schneller, zuverlässiger und moderner Service mit digitalen Versicherungslösungen.",
        copyright: "© 2026 Ural Versicherung. Alle Rechte vorbehalten.",

        happyCustomers: "Zufriedene Kunden",
        satisfaction: "Zufriedenheit",
        liveSupport: "Live-Support",
        totalCoverage: "Gesamtschutz"
      }
    },

    ru: {
      translation: {
        brand: "UralСтрахование",
        services: "Услуги",
        comments: "Отзывы",
        login: "Войти",
        register: "Регистрация",
        account: "Мой аккаунт",
        logout: "Выйти",
        admin: "Админ",

        badge: "Цифровое страхование нового поколения",
        heroTitle: "Защитите свое будущее с Ural Insurance",
        heroText: "Быстрые предложения, онлайн-заявки и цифровые полисы для авто, здоровья, дома и путешествий.",
        applyNow: "Подать заявку",
        details: "Подробнее",

        offerTitle: "Получить бесплатное предложение",
        name: "ФИО",
        phone: "Телефон",
        createOffer: "Создать предложение",
        saveOffer: "Подтвердить и сохранить предложение",
        fillAllFields: "Пожалуйста, заполните все поля",
        loginRequired: "Для сохранения предложения необходимо войти",
        offerSaved: "Предложение успешно сохранено",
        pending: "В ожидании",

        carOfferTitle: "Полный пакет автострахования",
        carOfferDetail: "Дорожная помощь, мелкий ремонт, эвакуатор и поддержка партнерского сервиса.",
        healthOfferTitle: "Премиальный медицинский пакет",
        healthOfferDetail: "Частная больница, обследование, анализы и онлайн-врач.",
        homeOfferTitle: "Пакет защиты жилья",
        homeOfferDetail: "Покрытие от землетрясения, пожара, кражи и затопления.",
        travelOfferTitle: "Глобальный туристический пакет",
        travelOfferDetail: "Потеря багажа, отмена рейса и международная медицинская поддержка.",

        customSolutions: "Индивидуальные страховые решения",
        servicesDesc: "Выберите подходящий страховой пакет и изучите детали.",

        carInsurance: "Автострахование",
        carText: "Полное покрытие, дорожная помощь и поддержка ремонта.",
        carDetail: "Защитите свой автомобиль от аварий, повреждений и угона.",

        healthInsurance: "Медицинское страхование",
        healthText: "Частная клиника, обследование и онлайн-врач.",
        healthDetail: "Получите доступ к современным медицинским услугам.",

        homeInsurance: "Страхование жилья",
        homeText: "Защита от землетрясений, пожара и кражи.",
        homeDetail: "Защитите свой дом и имущество с помощью страхования жилья.",

        travelInsurance: "Туристическое страхование",
        travelText: "Полное покрытие для поездок внутри страны и за рубежом.",
        travelDetail: "Туристическое страхование включает здоровье, багаж и поддержку рейсов.",

        customerReviews: "Отзывы клиентов",
        showAll: "Показать все",
        showLess: "Показать меньше",

        comment1: "Быстрая система предложений и поддержка клиентов очень хороши.",
        comment2: "Процесс страхования жилья прошел очень легко.",
        comment3: "Современный сайт, который удобно использовать даже на телефоне.",
        comment4: "Система предложений работает очень быстро.",
        comment5: "Я доволен услугой туристического страхования.",
        comment6: "Служба поддержки была очень внимательной.",

        corporate: "Компания",
        about: "О нас",
        contact: "Контакты",
        location: "Измир / Турция",
        footerText: "Быстрое, надежное и современное обслуживание с цифровыми страховыми решениями.",
        copyright: "© 2026 Ural Insurance. Все права защищены.",

        happyCustomers: "Довольных клиентов",
        satisfaction: "Удовлетворенность",
        liveSupport: "Поддержка 24/7",
        totalCoverage: "Общее покрытие"
      }
    }
  },

  lng: "tr",
  fallbackLng: "tr",

  interpolation: {
    escapeValue: false
  }
})

export default i18n