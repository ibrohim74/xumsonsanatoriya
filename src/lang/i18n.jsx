import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector) // Tilni brauzer orqali avtomatik aniqlash
    .use(initReactI18next) // react-i18next'ni i18n bilan integratsiya qilish
    .init({
        fallbackLng: "uz", // Agar til aniqlanmasa, O'zbek tiliga fallback qiladi
        debug: true, // Hatoliklarni kuzatish uchun debug rejimi
        interpolation: {
            escapeValue: false, // XSS xurujlaridan himoyalanish uchun
        },
        resources: {
            uz: {
                translation: {
                    nav: {
                        about_us: "Biz haqimizda",
                        offer: "Taklif",
                        rooms: "Xonalar",
                    },
                    header: {
                        h1: "«XUMSON» Sanatoriysi",
                        p: "Tabiat va tibbiyot uyg‘unligi",
                        button: "Oldindan band qilish"
                    },

                    about: {
                        subtitle: "Biz haqmzda qisqa ma'lumot",
                        title: "“Xumson” sanatoriysi",
                        texts: {
                            t1: "“Xumson” sanatoriysi Toshkent viloyatining Bo'stonliq tumanida, Ugam tog' tizimlari yon-bag‘rida , go'zal va tengsiz manzaralar qo'ynida , dengiz sathidan 1000 metr balandlikda , Toshkent shahridan 80km shimoli-sharqda joylashgan so'lim bir maskandir.",
                            t2: "Sanatoriy yurak-qon tomir, asab tizimi , nafas olish a'zolari va tayanch-harakat tizimi kasalliklarini davolashga ixtisoslashgan.",
                            t3: "Sanatoriy zamonaviy tashxis va davolash asbob-uskunalari bilan jihozlangan bo'lib , xizmatlar yuqori malakali shifokorlar (Kardiolog , nevropatolog , fizioterapevt) va hamshiralar tomonidan olib boriladi. Zamonaviy laboratoriya , tashxis , ultratovush , EKG , stomatologiya hamda ginekologiya xonalari mavjud.",
                            t4: "Sanatoriy hududidan oqib o'tuvchi Ugam daryosining suvi gidrokarbonatli kalsiy , natriy va inson salomatligi uchun foydali bo'lgan yana o'nlab minerallarga boyligi bilan xam mashhurdir.",
                            t5: "sanatoriyda parhez taomlar bilan birga milliy va Yevropa taomlari xam tayyorlanadi. Fitobar , choyxona hamda restoran xizmatlaridan foydalanish keng yo'lga qo'yilgan.",
                            t6: "sanatoriyda yashash uchun ikki, uch va to'rt o'rinli standart , yarim lyuks , lyuks xonalar , kottejlar va apartamentlar bor.",
                            t7: "sanatoriyga tashrif buyurganlar uchun qo'shimcha qulayliklar yaratish maqsadida jismoniy mashg'ulotlar zali , bilyard va tennis xonalari , sauna , yopiq basseyn , kutubxona , kosmetolog , stilist xizmatlari xam tashkillashtirilgan.",
                            t8: "Dam oluvchilar uchun turli xil ko'ngilochar kechalar xam uyushtirib turiladi.",
                            t9: "Yana siz uchun qulaylik - bizda elektromobillaringizni quvvatlantirishingiz mumkin",

                        },
                    },

                    offer:{
                        title:"Taklif etamiz",
                        subtitle:"Sog‘lom dam olish",
                        offer1:{
                            title:"Qulay turar joy",
                            text:"Bizda barcha zamonaviy qulayliklarga ega 2, 3 o'rinli yarimlyuks, lyuks va kottejlar mavjud."
                        },
                        offer2:{
                            title:"Taomlar",
                            text:"Foydali vitamin va ozuqalarga boy, mazali parhez taomlar siz uchun 3 mahal tortiq etiladi."
                        },
                        offer3:{
                            title:"Tibbiy xizmatlar",
                            text:"Bizning xodimlarimiz har bir dam oluvchilar uchun eng yuqori darajada xizmat ko'rsatishga tayyor."
                        },
                        offer4:{
                            title:"Zamonaviy diagnostika, fizioterapiya",
                            text:"Sanatoriymiz Zamonaviy asbob-uskunalar bilan jihozlangan bo'lib, unda malakali shifokorlar tomonidan tibbiy xizmat ko‘rsatiladi."
                        },
                    },

                    room:{
                        title:"Bizning Xonalarimiz",
                        subTitle:"Qulaylik va shinamlik siz uchun",
                        bino:"bino",
                        kunga:"kunga",
                        kishi:"kishi uchun",
                        price:" ming so'm",
                        asosiy:"Asosiy"
                    },

                    boglanish:"Biz bilan bog'lanish",
                    barcha_xonalar:" barcha xonalarni ko'rish",

                    modal:{
                        title:"Maʼlumotlaringizni qoldiring va bizning operatorlarimiz siz bilan Yaqin orada bog'lanadi",
                        username:"Ismingiz",
                        tell:"Telefon raqamingiz",
                        send:"Jo'natish"
                    },

                    footer:{
                        address:{
                            title:"Manzil",
                            address: "Toshkent viloyati, Bo'stonliq tumani, Xumson qishlog'i"
                        },
                        tell:{
                            title:"Telefon Raqami",
                            tell:"+998 90 054 14 04"
                        },
                        email:{
                            title:"Email",
                            email: "office@xumsonsanatoriya.uz"
                        }
                    },

                    errors:{
                        name_empty:"Ismingizni yozing",
                        name_error:"Isim 3ta harifdan kam bo'lmasligi lozim",
                        tell_error:"Telefon raqami notog'ri",
                        server_error:"Serverda xatolik yuzaga keldi",
                        success:"Jo'natildi"
                    }
                }
            },
            uzk: {
                translation: {
                    nav: {
                        about_us: "Биз ҳақмизда",
                        offer: "Таклиф",
                        rooms: "Хоналар",
                    },
                    header: {
                        h1: "«Хумсон» санаторийси",
                        p: "табиат ва тиббиёт уйғунлиги",
                        button: "Олдиндан банд қилиш"
                    },
                    about: {
                        subtitle: "Биз ҳақмизда қисқа маълумот",
                        title: "«Хумсон» санаторийси",
                        texts: {
                            t1: "Хумсон санаторийси Тошкент вилоятининг Бўстонлиқ туманида, Угам тоғ тизмалари ён бағрида, гўзал ва тенгсиз манзаралар қўйнида, денгиз сатҳидан 1000 метр баландликда, Тошкент шаҳридан 80 км шимоли-шарқда жойлашган сўлим бир маскандир.",
                            t2: "Санаторий юрак-қон томир, асаб тизими, нафас олиш аъзолари ва таянч-ҳаракат тизими касалликларини даволашга ихтисослашган.",
                            t3: "Санаторий замонавий ташхис ва даволаш асбоб-ускуналари билан жиҳозланган бўлиб, хизматлар юқори малакали шифокорлар (кардиолог, невропатолог, физиотерапевт) ва ҳамширалар томонидан олиб борилади. Замонавий лаборатория, ташхис, ультратовуш, ЭКГ, стоматология ҳамда гинекология хоналари мавжуд.",
                            t4: "Санаторий ҳудудидан оқиб ўтувчи Угам дарёсининг суви гидрокарбонатли кальций, натрий ва инсон саломатлиги учун фойдали бўлган яна ўнлаб минералларга бойлиги билан ҳам машҳурдир.",
                            t5: "Санаторийда парҳез таомлар билан бирга миллий ва Европа таомлари ҳам тайёрланади. Фитобар, чойхона ҳамда ресторан хизматларидан фойдаланиш кенг йўлга қўйилган.",
                            t6: "Санаторийда яшаш учун икки, уч ва тўрт ўринли стандарт, ярим люкс, люкс хоналар, коттежлар ва апартаментлар бор.",
                            t7: "Санаторийга ташриф буюрганлар учун қўшимча қулайликлар яратиш мақсадида жисмоний машғулотлар зали, бильярд ва теннис хоналари, сауна, ёпиқ бассейн, кутубхона хизматлари ҳам ташкиллаштирилган.\n",
                            t8: "Дам олувчилар учун турли хил кўнгилочар кечалар ҳам уюштириб турилади.\n",
                            t9: "Яна Сиз учун қулайлик - бизда электромобилларингизни қувватлантиришингиз мумкин.",

                        }
                    },

                    offer:{
                        title:"Таклиф этамиз",
                        subtitle:"Соғлом дам олиш",
                        offer1:{
                            title:"Қулай турар жой",
                            text:"Бизда барча замонавий қулайликларга эга 2, 3 ўринли яримлюкс, люкс ва коттежлар мавжуд."
                        },
                        offer2:{
                            title:"Таомлар",
                            text:"Фойдали витамин ва озуқаларга бой, мазали парҳез таомлар сиз учун 3 маҳал тортиқ этилади."
                        },
                        offer3:{
                            title:"Тиббий хизматлар",
                            text:"Бизнинг ходимларимиз ҳар бир дам олувчилар учун энг юқори даражада хизмат кўрсатишга тайёр."
                        },
                        offer4:{
                            title:"Замонавий диагностика, физиотерапия",
                            text:"Санаториймиз замонавий асбоб-ускуналар билан жиҳозланган бўлиб, унда малакали шифокорлар томонидан тиббий хизмат кўрсатилади."
                        },
                    },
                    room:{
                        title:"Бизнинг Хоналаримиз",
                        subTitle:"Қулайлик ва шинамлик сиз учун",
                        bino:"бино",
                        kunga:"кунга ",
                        kishi:"киши учун",
                        price:" минг сўм",
                        asosiy:"Асосий бино"
                    },
                    boglanish:"Биз билан боғланиш",
                    barcha_xonalar:"барча хоналарни кўриш",
                    modal: {
                        title: "Маʼлумотларингизни қолдиринг ва бизнинг операторларимиз сиз билан яқин орада боғланади",
                        username: "Исмингиз",
                        tell: "Телефон рақамингиз",
                        send: "Жўнатиш"
                    },

                    footer:{
                        address:{
                            title:"Манзил",
                            address: "Тошкент вилояти, Бостонлиқ тумани, Ҳумсон қишлоғи"
                        },
                        tell:{
                            title:"Телефон Рақами",
                            tell:"+998 90 054 14 04"
                        },
                        email:{
                            title:"Email",
                            email: "office@xumsonsanatoriya.uz"
                        }
                    },

                    errors: {
                        name_empty: "Исмингизни ёзинг",
                        name_error: "Исм 3 та ҳарфдан кам бўлмаслиги керак",
                        tell_error: "Телефон рақами нотўғри",
                        server_error: "Серверда хатолик юзага келди",
                        success: "Жўнатилди"
                    }
                }
            },
            ru: {
                translation: {
                    nav: {
                        about_us: "О нас",
                        offer: "Предложение",
                        rooms: "Номера",
                    },
                    header: {
                        h1: "Санаторий «Хумсон»",
                        p: "Гармония природы и медицины",
                        button: "забронировать"
                    },
                    about: {
                        subtitle: "Краткая информация о нас",
                        title: "Санаторий «Хумсон»",
                        texts: {
                            t1: "Санаторий «Хумсон» расположен в Бостанлыкском районе Ташкентской области, на склонах Угамского хребта, в красивой и уникальной местности, на высоте 1000 метров над уровнем моря, в 80 км к северо-востоку от Ташкента.",
                            t2: "Санаторий специализируется на лечении заболеваний сердечно-сосудистой системы, нервной системы, органов дыхания и опорно-двигательного аппарата.",
                            t3: "Санаторий оснащен современным диагностическим и лечебным оборудованием, услуги оказываются высококвалифицированными врачами (кардиолог, невролог, физиотерапевт) и медсестрами. Также имеются современные лаборатории, кабинеты диагностики, ультразвукового исследования, ЭКГ, стоматологии и гинекологии.",
                            t4: "Вода реки Угам, протекающей по территории санатория, известна своим богатым содержанием гидрокарбонатного кальция, натрия и десятков других минералов, полезных для здоровья человека.",
                            t5: "В санатории наряду с диетическими блюдами также готовятся национальные и европейские блюда. Широко доступны услуги фитобара, чайханы и ресторана.",
                            t6: "Для проживания в санатории имеются двух-, трех- и четырехместные стандартные, полулюкс и люкс номера, коттеджи и апартаменты.",
                            t7: "Для создания дополнительных удобств для гостей организованы залы для занятий спортом, бильярдная и теннисные комнаты, сауна, крытый бассейн, библиотека, а также услуги косметолога и стилиста.",
                            t8: "Для отдыхающих также регулярно проводятся различные развлекательные вечера.",
                            t9: "Еще одно удобство для вас – у нас можно зарядить свои электромобили."
                        }
                    },

                    offer:{
                        title:"мы предлагаем",
                        subtitle:"Здоровый отдых",
                        offer1:{
                            title:"Комфортное проживание",
                            text:"У нас есть 2 -, 3-местные полу люксы, люксы и коттеджи со всеми современными удобствами."
                        },
                        offer2:{
                            title:"Блюда",
                            text:"Вкусные диетические блюда, богатые полезными витаминами и питательными веществами, будут приготовлены для вас 3 раза в день."
                        },
                        offer3:{
                            title:"Медицинские услуги",
                            text:"Наши сотрудники готовы обеспечить высочайший уровень обслуживания для каждого отдыхающего."
                        },
                        offer4:{
                            title:"Современная диагностика, физиотерапия",
                            text:"Наш санаторий оснащен современным оборудованием, медицинское обслуживание в нем осуществляют квалифицированные врачи."
                        },
                    },

                    room:{
                        title:"Наши номера",
                        subTitle:"Комфорт и уют для вас",
                        bino:"корпус ",
                        price:" тысяч сум",
                        asosiy:"Лечебный корпус"
                    },
                    boglanish:"Связаться с нами",
                    barcha_xonalar:"просмотр всех комнат",
                    modal: {
                        title: "Оставьте свои данные, и наши операторы свяжутся с вами в ближайшее время",
                        username: "Ваше имя",
                        tell: "Ваш номер телефона",
                        send: "Отправить"
                    },

                    footer:{
                        address:{
                            title:"Адрес",
                            address: "Ташкентская область, Бостанлыкский район, поселок Хумсан"
                        },
                        tell:{
                            title:"Номер Телефона",
                            tell:"+998 90 054 14 04"
                        },
                        email:{
                            title:"Email",
                            email: "office@xumsonsanatoriya.uz"
                        }
                    },

                    errors: {
                        name_empty: "Введите ваше имя",
                        name_error: "Имя должно состоять минимум из 3 букв",
                        tell_error: "Неверный номер телефона",
                        server_error:"На сервере произошла ошибка",
                        success:"Отправлено"
                    }
                }
            },
        },
    });

export default i18n;
