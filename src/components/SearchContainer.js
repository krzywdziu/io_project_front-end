import React from "react"
import SearchList from "./SearchList";
import Header from "./Header"
import InputSearch from "./InputSearch"
import Login from "./Login";
import HistorySearch from "./HistorySearch";

class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleItems = this.handleItems.bind(this)
        this.sortItems = this.sortItems.bind(this)
        this.changeSort = this.changeSort.bind(this)
      }

 
  state = {

    sortType:"LowHigh",
    //temporary example of items; to be replaced by scrapped items 
    items: [
      {
          "name": "CERAVE Nawilżający Krem do Twarzy z ceramidami SPF25 - 52 ml + CERAVE Nawilżający Krem do Twarzy z ceramidami - 52 ml + Cerave Płyn micelarny - 295 ml",
          "price": "78.59",
          "currency": "PLN",
          "shopName": "apteka-melissa.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/93411668",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=Dy97VlFNUH5G5U71ADWJSfPwaKh47QtRENO3OyWQ7dBxIL7cICDVM943B185kO6FWY1zJFRzsaEdhbk6RI1iOqCzep9qsQzh5nNqebsiu72Gv7fFMt26GtkV8hhR51kPGQhDyXKC6JRxobh69mu2h0EGm-80N7oXJ9pYkb01dF9a7NuvS6zfQ0lFINyWV851YSmZZB72FCIze1vEerPD6BISAQXKFJhsNOAVtOUc4sOQmKNUIlol7Z9LZD0rXhqPNYBFOpnARdQlWMIUQQ3kIaVQTMJZBQ3dpVBMwlkFDd1XcRmShGHw6R-a9Fd7J1NUpVBMwlkFDd2lUEzCWQUN3QWZHl2ISWsPTxc8YVe5c5bN9zp9sdpdu895sSJJ_D7PmAOQXY1-zzgAu7MTzmrO3XFevkgeogih&a=2",
          "reviews": [],
          "productInfo": "Cechy i zalety Wspiera odbudowę bariery ochronnej skóry twarzy i ciała Bezzapachowy Odpowiedni dla dorosłych i dzieci od 3 r. życia Nawilża do 24h dzięki technologii MVE Hipoalergiczny Delikatny dla skóry Niekomedogenny Kremowa konsystencja Bogata, nietłusta formuła Szybko się wchłania Miękka i gładka skóra Sposób użycia Nakładać obficie na skórę twarzy i ciała. Omijać okolice oczu. W przypadku dostania się preparatu do oczu, natychmiast przepłukać je wodą. Odpowiedni dla dzieci i dorosłych. Rewolucja w dermokosmetykach UNIKALNA KOMPOZYCJA CERAMIDY WSPIERAJĄ ODBUDOWĘ NATURALNEJ BARIERY OCHRONNEJ SKÓRY MVE KONTROLOWANY PROCES NAWILŻENIA 24H OPTYMALNA KOMPOZYCJA CARAMIDÓW I WODY w warstwie rogowej naskórka gwarantuje nienaruszoną, dobrze nawilżoną skórę o zdrowym wyglądzie. Ceramidy odbudowa bariery ochronnej skóry CERAVE to kompozycja trzech ceramidów o budowie identycznej z ceramidami zawartymi w skórze: ceramid 1, ceramid 3, ceramid 6-II, a także cholesterolu, kwasów tłuszczowych i fitosfingozyny. Składniki te wykazują działanie synergiczne w odbudowie bariery ochronnej skóry. Technologia MVE długotrwałe nawilżenie skóry MVE to wielofazowa emulsja olej w wodzie zbudowana z kilku warstw oleju i wody, zawierających ceramidy 1, 3, 6-II, kwasy tłuszczowe i fitosfingozynę. W wielofazowy sposób natychmiastowo i długotrwale nawilża skórę, chroni ją i przywraca jej funkcję ochronną.* Sposób działania MVE Technologia MVE umożliwia stabilne w czasie uwalnianie w skórze wielu warstw ceramidów, kwasów tłuszczowych i fitosfingozyny w sposób skuteczny i dobrze kontrolowany, aby pomóc w odbudowaniu bariery skórnej, dzięki czemu skóra pozostaje nawilżona na dłużej. Potwierdzona skuteczność w badaniach klinicznych Opinie konsumentek z Bardzo dobry Dla suchej skóry jest prawdziwym ukojeniem. Po tygodniu stosowania skóra wrociła do super formy. Formuła bez zapachu, dlatego skorzystał też mąż. Nie zostawia tłustej warstwy. Oceniam bardzo wysoko. sylwia_nieradka 21 marca 2019 Rewelacja Bardzo fajny delikatny krem, który świetnie nawilża i koi skórę. Lekka konsystencja łatwo się rozprowadz. Jestem nim oczarowana. Stosuje codziennie. Nie powoduje podrażnień. Iloonka1311 lipca 2018 Ekstraa :) !! Balsam jest B. Dobry :) łatwo sie rozsmarowuje nawet mój mąż go zaczął używać :) na pewno z tego produktu nie zrezygnuje i gorąco polecam :) do suchej skóry jest Idealny. Naider88 19 czerwca 2018 Kompleksowa pielęgnacja suchej skóry Podstawowe informacje: Producent Cerave > Dermokosmetyki Cerave Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Przeznaczenie Twarz > Dermokosmetyki do twarzy Działanie Nawilżające Dodatkowe cechy Filtry SPF Popularne Dermokosmetyki Cerave do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/93411668/f-cerave-nawilzajacy-krem-do-twarzy-z-ceramidami-spf25-52-ml-cerave-nawilzajacy-krem-do-twarzy-z-ceramidami-52-ml-cerave-plyn-micelarny-295-ml.jpg",
          "timestamp": "2023-01-21T19:36:25.4358797"
      },
      {
          "name": "SVR SebiaClear krem matujący 40ml + SVR SebiaClear woda micelarna 75ml",
          "price": "42.75",
          "currency": "PLN",
          "shopName": "wapteka.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/47724059",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=TB3bGFfyWGJzL7LX731tPSjc5z8mCLBINCO0oHKYViag5gqcQXSMlKVIyfc3x2CffRX45JC4UGBNa-hXwTDTUXzy8n0D9_Zje4913iAZH6g-Xg4YO2wmzG9aOxv0gW5yDckyWcWad5Qa5HJ3f8hZ4_Y2QWfeUS5g5L42bfjgeRn5Bv2pAIBIpXc6ll420hs3PLexE8r7tmBm6XInnHMm6kWk0WAKReLmit-e1wzcGoulUEzCWQUN3eavcoNGqqi4_8XlaH9_qSOlUEzCWQUN3aVQTMJZBQ3dWPfYjwaGREJwPZEAStiqtn6AemlGlL8PFZHlupxrPorquH-ZQOEsAWFW44gK5_oqIrRhecZk-Qmb2qCRlcH3vD_H4ZjbMHZt&a=2",
          "reviews": [
              "Woda micelarna świetnie oczyszcza cerę, skóra jest wygładzona i nawilżona, krem świetnie matuje, nadaje się pod makijaż",
              "Krem-żel bardzo dobrze się wchłania i nie pozostwia tłystej warstwy.Matuje cerę i nie podrażnia jej",
              "Bardzo zadowolona tymi produktami, kupowałam pierwszy raz,i została zachwycona.",
              "Ciężko ocenić po paru dniach stosowania, ale na ten moment wydaje się ok",
              "Świetny do cery tłustej, trądzikowej. Łagodzi zmiany zapalne",
              "Trudno powiedzieć dopiero zakupione. Ale seria jest spoko",
              "Najlepszy krem do cery tłustej, który matuje",
              "Fajny zapach, lekka konsystencja",
              "Ładny zapach,wydajny",
              "Polecam"
          ],
          "productInfo": "SVR SEBIACLEAR MAT-PORES krem matujacy to produkt o kompleksowym działaniu: reguluje wytwarzanie sebum, zwęża pory i zapewnia długotrwały efekt matujący (8 godzin). Płynna tekstura wolna od tłuszczu. Matowe i aksamitne wykończenie. Doskonała baza pod makijaż. Wskazania: do pielęgnacji skóry mieszanej, tłustej, podatnej na trądzik Sposób użycia: aplikować rano lub wieczorem na całą twarz. Składniki aktywne: Glukonolakton 14% + kwas salicylowy, Niacynamid 4%, Mat SR 2%, cukry fizjologiczne. SVR SEBIACLEAR EAU MICALLAIRE 75ml: Woda micelarna, która oczyszcza skórę i usuwa odporny na wodę makijaż. Eliminuje zanieczyszczenia i nadmiar łoju bez wysuszania skóry, pozostawia skórę czystą i świeżą. Odpowiedni do cery wrażliwej, mieszanej , tłustej. Daje prawdziwe uczucie odświeżenia. Doskonała skuteczność preparatów idzie w parze z doskonałą tolerancją przez skórę i dostarcza równocześnie wyjątkowej przyjemności kosmetycznej. Redukcja niedoskonałości w 7dni została potwierdzona klinicznie. Wskazania: oczyszczający płyn miceralny. Dokładnie oczyszcza skórę, usuwa makijaż wodoodporny. Sposób użycia: nakładać rano oraz/lub wieczorem na twarzy i okolice oczu przy pomocy wacika. Nie spłukiwać. Składniki aktywne: Glukonolakton, Micele. Podstawowe informacje: Producent SVR > Dermokosmetyki SVR Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Wody > Dermokosmetyki - wody Pojemność 75 ml Przeznaczenie Twarz > Dermokosmetyki do twarzy Rodzaj skóry Mieszana > Dermokosmetyki do cery mieszanej Tłusta > Dermokosmetyki do cery tłustej Wrażliwa > Dermokosmetyki do skóry wrażliwej Działanie Matujące Oczyszczające Stosowanie Na dzień Na noc Dodatkowe cechy Bez parabenów Bez silikonów Składniki aktywne Kwas salicylowy Popularne Dermokosmetyki SVR do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/47724059/f-svr-sebiaclear-krem-matujacy-40ml-svr-sebiaclear-woda-micelarna-75ml.jpg",
          "timestamp": "2023-01-21T19:36:25.6658679"
      },
      {
          "name": "BIODERMA SENSIBIO EYE Kremowy żel pod oczy - 15 ml + SENSIBIO AR BB CREAM Krem do skóry z problemami naczynkowymi - 40 ml + SENSIBIO H2O Płyn micelarn",
          "price": "79.97",
          "currency": "PLN",
          "shopName": "manada.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/81882514",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=GcSFrG1nMvBzL7LX731tPW92f9ahijDDvMaAPaiCK0naEVs_6vhVtINLFqr7deYW_L24PzkejHvVD5Zhc3Hd2gqK2Z9lwbcTdIih6JSiXrPU4vn6IufAd2TD50otZri9pVBMwlkFDd3tgUcmM6zyCQEUgXjG9BhbpVBMwlkFDd2lUEzCWQUN3bgsmCgnCG-sttWayavHYUG0J4v_KiYpwqZ4bDde3imfYVWUfBz234G53V1ECauUM8d4G07DWO05SoTdmzTd0kmPhWAFQLk4kLzenoh6hWyjktDT5w9bWnM=&a=2",
          "reviews": [],
          "productInfo": "Bioderma Sensibio AR, krem aktywny do skóry z problemami naczynkowymi, 40ml - Długi termin ważności! Bioderma Sensibio AR to krem do cery naczynkowej o właściwościach łagodzących podrażnienia, zmniejszających rumień i hamujących rozszerzanie naczynek powodowane m. in. spożywaniem alkoholu i pikantnych potraw, dużymi wahaniami temperatury czy stresem. Krem ma lekką, nietłustą i bezzapachową konsystencję. Jest hipoalergiczny, pozbawiony konserwantów, barwników i dobrze tolerowany przez wrażliwą skórę. Biologiczne działanie Sensibio AR redukuje zaczerwienienia i zapobiega ich nawrotom, regulując mechanizmy biologiczne odpowiedzialne za rozszerzanie naczyń krwionośnych. Znajdujący się w nim innowacyjny kompleks Rosactiv działa bezpośrednio na VEGF (naczyniowośródbłonkowy czynnik wzrostu), jeden z głównych mechanizmów powodujących rozszerzenie i osłabienie naczyń krwionośnych, a tym samym zaczerwienienie skóry. Enoxolon, alantoina i olej canola – natychmiastowo łagodzą, działają przeciwzapalnie i wzmacniają barierę ochronną skóry. Wyciąg z Laminaria Ochroleuca ogranicza podrażnienia i działa przeciwzapalnie. Sensibio AR nawilża, wzmacnia barierę ochronną skóry i zapobiega wnikaniu czynników drażniących. Sposób użycia Rano i/lub wieczorem, siedem dni w tygodniu. Nałóż Sensibio AR na oczyszczoną skórę twarzy W przypadku intensywnego przegrzania skóry, można ją szybko i skutecznie załagodzić stosując jednocześnie Sensibio AR i Sensibio Forte. W czasie dużego nasłonecznienia zalecamy stosowanie ochrony przeciwsłonecznej dostosowanej do potrzeb skóry wrażliwej i naczynkowej – Photoderm AR SPF 50+ Bioderma, Sensibio H2O Woda Micelarna, 250 ml DZIAŁANIE Skutecznie usuwa zanieczyszczenia, smog oraz makijaż twarzy i okolic oczu - nawet wodoodporny Koi wrażliwą skórę i zmniejsza objawy wrażliwości Chroni mikrobiom skóry Uwalnia skórę od zanieczyszczeń i metabolitów To perfekcyjna kombinacja skuteczności i delikatności - dogłębnie oczyszcza skórę z szacunkiem dla jej bariery ochronnej Pozwala skórze zachować jej wewnętrzną równowagę, respektując ekobiologię skóry Doskonale tolerowany nawet przez najbardziej wrażliwą skórę Nie wymaga spłukiwania wodą DLA KOGO? Dorośli, Młodzież JAK STOSOWAC? rano i wieczorem – 7 dni w tygodniu ETAP 1Nasącz wacik Sensibio H2O. ETAP 2Delikatnie przesuwaj po skórze bez pocierania, usuwając zanieczyszczenia, smog i makijaż ETAP 3Powtarzaj do chwili, aż kolejny wacik będzie czysty ETAP 4Pamiętaj: nie wymaga spłukiwania wodą Podstawowe informacje: Producent Bioderma > Dermokosmetyki Bioderma Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Żele > Dermokosmetyki w żelu do mycia twarzy Przeznaczenie Oczy i usta > Dermokosmetyki pod oczy i do pielęgnacji ust Rodzaj skóry Naczynkowa > Dermokosmetyki do cery naczynkowej Popularne Dermokosmetyki do skóry naczynkowej Bioderma Dermokosmetyki Bioderma do oczu i ust Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/81882514/f-bioderma-sensibio-eye-kremowy-zel-pod-oczy-15-ml-sensibio-ar-bb-cream-krem-do-skory-z-problemami-naczynkowymi-40-ml-sensibio-h2o-plyn-micelarn.jpg",
          "timestamp": "2023-01-21T19:36:26.033852"
      },
      {
          "name": "Vichy Mineral 89 Płyn Micelarny 100ml + Aqualia Krem na dzień 15ml + Krem na noc 15ml",
          "price": "84.98",
          "currency": "PLN",
          "shopName": "drmaxdrogeria.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/141481995",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=CgBWnsY4T-JzL7LX731tPdOBarSrbLvCMNPJb9_Tf6-QHz-bk-PYNwk04NzHOIMTc11T_sE6iMOjm2Fr3oLi9q5bwV07l89q-jVcpOqnWdTMkJwLexl_HyWnMUrzftKvquMUrsh4BS6lUEzCWQUN3aVQTMJZBQ3dhYLaGBbbN73VgTcRcfo6T6VQTMJZBQ3dLXkblgtnPo0_V4WBsVh8cebiQa3YsLP1oQoLC105DWPHYoZnLG5_DkRe94XUYfKCXsDpt1W7FrvCXA3R8EJ3txRYt_Wki_DX0mMTFF-FFTVyGk1EMXbAIftdlmTTQu8l&a=2",
          "reviews": [
              "Spełnia swoje zadanie , bardzo dobry produkt 👍"
          ],
          "productInfo": ". Vichy Mineral 89 Płyn Micelarny 100ml + Aqualia Krem na dzień 15ml + Krem na noc 15ml Wzmacniająco - nawilżający zestaw świąteczny Vichy to doskonały pomysł na prezent dla bliskiej osoby. Zestaw składa się z kosmetyków przeznaczonych dla cery wrażliwej, suchej i odwodnionej. W zestawie znajduje się booster wzmacniająco-nawilżający z kwasem hialuronowym oraz trzy mini produkty. Vichy Mineral 89 booster wzmacniająco-nawilżający z kwasem hialuronowym 50ml Wzmacniająco-nawilżający booster z kwasem hialuronowym z serii Mineral 89 marki Vichy to produkt kosmetyczny dedykowany wszystkim rodzajom skóry, także tej wrażliwej. Formuła zawiera tylko 11 składników aktywnych, w tym kwas hialuronowy i 89% wody termalnej Vichy – źródło 15 minerałów, które pomagają: wzmacniać barierę ochronną skóry, przeciwdziałać przemęczeniu, stresowi i zanieczyszczeniom powietrza, ujędrniać, nawilżać, zmiękczać i ujednolicać cerę, przywrócić sprężystą, promienną skórę o zdrowym wyglądzie.Produkt należy stosować jako pierwszy krok w pielęgnacji skóry twarzy, pod krem. Booster Vichy Mineral 89 z kwasem hialuronowym ma lekką formułę, która szybko się wchłania i nie pozostawia tłustego filmu na skórze. Produkt może być stosowany pod makijaż. Sposób użycia Serum-booster nałożyć na czystą skórę jako pierwszy krok w pielęgnacji twarzy przed kremem. Używać rano i wieczorem. Może być stosowany pod makijaż. Składniki Aqua/Water, Peg/Ppg/Polybutylene Glycol-8/5/3 Glycerin, Glycerin (gliceryna), Butylene Glycol, Methyl Gluceth-20, Carbomer, Sodium Hyaluronate (kwas hialuronowy), Phenoxyethanol, Caprylyl Glycol, Citric Acid, Biosaccharide Gum-1. Vichy Purete Thermale płyn micelarny do skóry wrażliwej 100 ml: Vichy Purete Thermale to oczyszczający płyn micelarny, który myje i usuwa makijaż z twarzy i oczu. Niezwykle łagodna formuła wzbogacona o wodę termalną Vichy i pantenol dla nawilżania. Mineralny płyn micelarny Vichy pozostawia skórę ukojoną i czystą, zapewniając uczucie komfortu. Sposób użycia Namocz wacik płynem i delikatnie oczyść twarz, aby usunąć makijaż i zanieczyszczenia. Stosuj rano i wieczorem. Składniki Aqua / Water, Hexylene Glycol, Glycerin (gliceryna), Poloxamer 184, Disodium Cocoamphodiacetate, Disodium Edta, Panthenol (witamina B5), Polyaminopropyl Biguanide, Perfume / Fragrance. Vichy Aqualia Thermal, bogaty krem nawilżający, 15 ml: Bogaty krem nawilżający z serii Aqualia Thermal marki Vichy to produkt kosmetyczny dedykowany suchej i bardzo suchej skórze. Formuła zawiera 97% składników aktywnych pochodzenia naturalnego, w tym: mineralizującą wodę termalną Vichy, która zawiera 15 minerałów i wspiera ochronę skóry, sód PCA, który wspomaga procesy wzmacniające funkcje barierowe naskórka, cukier roślinny mannozę, który pomaga wzmacniać komórki i poprawiać nawilżenie skóry, naturalny kwas hialuronowy, który wspiera efekt wypełnienia i wspomaga utrzymanie wody w skórze. Ponadto składniki aktywne zawarte w formule bogatego kremu nawilżającego Aqualia Thermal Vichy wspierają wzmacnianie i nawilżanie odwodnionej skóry, a także wspomagają nawodnienie naskórka, zmniejszenie oznak odwodnienia i wygładzenie drobnych linii oraz zmarszczek. Pomagają przywrócić skórze komfort i uczucie gładkości. Sposób użycia Stosuj rano i wieczorem. Osobno lub po użyciu Aqualia Thermal serum nawilżającego. Składniki Aqua / Water, Glycerin (gliceryna), Isopropyl Palmitate, Propanediol, Cetearyl Alcohol, Alcohol Denat, Cetyl Esters, Butyrospermum Parkii Butter / Shea Butter (masło shea), Pentylene Glycol, Mannose (mannoza), Polyglyceryl-3 Methylglucose Distearate, Sodium Polyacrylate, Sodium PCA (sód PCA), Salicylic Acid, Sodium Hyaluronate (kwas hialuronowy), Caprylyl Glycol, Citric Acid, Parfum / Fragrance. Vichy Aqualia Thermal, nawilżający i regenerujący żel-krem na noc 15 ml Nawilżający żel-krem na noc Vichy Aqualia Thermal zapewnia skórze maksymalną regenerację podczas snu oraz redukuje objawy zmęczenia. Wyjątkowa kompozycja składników aktywnych długotrwale nawilża, odżywia i zwiększa elastyczność skóry. Kosmetyk Aqualia Thermal zawiera między innymi kwas hialuronowy oraz olejki roślinne, które wzmacniają barierę ochronną skóry, intensywnie nawilżają i regenerują. Dodatek wody termalnej Vichy to 15 cennych minerałów, o działaniu łagodzącym, przywracającym skórze równowagę i chroniącym przed szkodliwym działaniem wolnych rodników. Sposób użycia Jako krem na noc nakładaj codziennie wieczorem. Jako maseczkę stosuj 1-2 razy w tygodniu. Omijaj okolice oczu. Składniki Aqua / Water, Glycerin (gliceryna), Dimethicone, Caprylic/Capric Triglyceride, Squalane (skwalan), Ammonium Polyacryldimethyltauramide / Ammonium Polyacryloyldimethyl Taurate, Ci 42090 / Blue 1, Ci 42053 / Green 3, Dimethiconol, Sodium Hyaluronate (kwas hialuronowy), Phenoxyethanol, Poloxamer 338, Disodium Edta, Caprylyl Glycol, Citric Acid, Biosaccharide Gum-1, Xanthan Gum, Parfum / Fragrance. Podstawowe informacje: Producent Vichy > Vichy dermokosmetyki Model Minéral 89 Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Pojemność 15 ml Przeznaczenie Twarz > Dermokosmetyki do twarzy Rodzaj skóry Wrażliwa > Dermokosmetyki do skóry wrażliwej Działanie Kojące Nawilżające Stosowanie Na dzień Na noc Dodatkowe cechy Nie wysusza Składniki aktywne Woda termalna Popularne Dermokosmetyki do skóry wrażliwej Vichy Dermokosmetyki Vichy do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/141481995/f-vichy-mineral-89-plyn-micelarny-100ml-aqualia-krem-na-dzien-15ml-krem-na-noc-15ml.jpg",
          "timestamp": "2023-01-21T19:36:26.8390236"
      },
    ],
    items_sorted: [
      {
          "name": "CERAVE Nawilżający Krem do Twarzy z ceramidami SPF25 - 52 ml + CERAVE Nawilżający Krem do Twarzy z ceramidami - 52 ml + Cerave Płyn micelarny - 295 ml",
          "price": "78.59",
          "currency": "PLN",
          "shopName": "apteka-melissa.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/93411668",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=Dy97VlFNUH5G5U71ADWJSfPwaKh47QtRENO3OyWQ7dBxIL7cICDVM943B185kO6FWY1zJFRzsaEdhbk6RI1iOqCzep9qsQzh5nNqebsiu72Gv7fFMt26GtkV8hhR51kPGQhDyXKC6JRxobh69mu2h0EGm-80N7oXJ9pYkb01dF9a7NuvS6zfQ0lFINyWV851YSmZZB72FCIze1vEerPD6BISAQXKFJhsNOAVtOUc4sOQmKNUIlol7Z9LZD0rXhqPNYBFOpnARdQlWMIUQQ3kIaVQTMJZBQ3dpVBMwlkFDd1XcRmShGHw6R-a9Fd7J1NUpVBMwlkFDd2lUEzCWQUN3QWZHl2ISWsPTxc8YVe5c5bN9zp9sdpdu895sSJJ_D7PmAOQXY1-zzgAu7MTzmrO3XFevkgeogih&a=2",
          "reviews": [],
          "productInfo": "Cechy i zalety Wspiera odbudowę bariery ochronnej skóry twarzy i ciała Bezzapachowy Odpowiedni dla dorosłych i dzieci od 3 r. życia Nawilża do 24h dzięki technologii MVE Hipoalergiczny Delikatny dla skóry Niekomedogenny Kremowa konsystencja Bogata, nietłusta formuła Szybko się wchłania Miękka i gładka skóra Sposób użycia Nakładać obficie na skórę twarzy i ciała. Omijać okolice oczu. W przypadku dostania się preparatu do oczu, natychmiast przepłukać je wodą. Odpowiedni dla dzieci i dorosłych. Rewolucja w dermokosmetykach UNIKALNA KOMPOZYCJA CERAMIDY WSPIERAJĄ ODBUDOWĘ NATURALNEJ BARIERY OCHRONNEJ SKÓRY MVE KONTROLOWANY PROCES NAWILŻENIA 24H OPTYMALNA KOMPOZYCJA CARAMIDÓW I WODY w warstwie rogowej naskórka gwarantuje nienaruszoną, dobrze nawilżoną skórę o zdrowym wyglądzie. Ceramidy odbudowa bariery ochronnej skóry CERAVE to kompozycja trzech ceramidów o budowie identycznej z ceramidami zawartymi w skórze: ceramid 1, ceramid 3, ceramid 6-II, a także cholesterolu, kwasów tłuszczowych i fitosfingozyny. Składniki te wykazują działanie synergiczne w odbudowie bariery ochronnej skóry. Technologia MVE długotrwałe nawilżenie skóry MVE to wielofazowa emulsja olej w wodzie zbudowana z kilku warstw oleju i wody, zawierających ceramidy 1, 3, 6-II, kwasy tłuszczowe i fitosfingozynę. W wielofazowy sposób natychmiastowo i długotrwale nawilża skórę, chroni ją i przywraca jej funkcję ochronną.* Sposób działania MVE Technologia MVE umożliwia stabilne w czasie uwalnianie w skórze wielu warstw ceramidów, kwasów tłuszczowych i fitosfingozyny w sposób skuteczny i dobrze kontrolowany, aby pomóc w odbudowaniu bariery skórnej, dzięki czemu skóra pozostaje nawilżona na dłużej. Potwierdzona skuteczność w badaniach klinicznych Opinie konsumentek z Bardzo dobry Dla suchej skóry jest prawdziwym ukojeniem. Po tygodniu stosowania skóra wrociła do super formy. Formuła bez zapachu, dlatego skorzystał też mąż. Nie zostawia tłustej warstwy. Oceniam bardzo wysoko. sylwia_nieradka 21 marca 2019 Rewelacja Bardzo fajny delikatny krem, który świetnie nawilża i koi skórę. Lekka konsystencja łatwo się rozprowadz. Jestem nim oczarowana. Stosuje codziennie. Nie powoduje podrażnień. Iloonka1311 lipca 2018 Ekstraa :) !! Balsam jest B. Dobry :) łatwo sie rozsmarowuje nawet mój mąż go zaczął używać :) na pewno z tego produktu nie zrezygnuje i gorąco polecam :) do suchej skóry jest Idealny. Naider88 19 czerwca 2018 Kompleksowa pielęgnacja suchej skóry Podstawowe informacje: Producent Cerave > Dermokosmetyki Cerave Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Przeznaczenie Twarz > Dermokosmetyki do twarzy Działanie Nawilżające Dodatkowe cechy Filtry SPF Popularne Dermokosmetyki Cerave do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/93411668/f-cerave-nawilzajacy-krem-do-twarzy-z-ceramidami-spf25-52-ml-cerave-nawilzajacy-krem-do-twarzy-z-ceramidami-52-ml-cerave-plyn-micelarny-295-ml.jpg",
          "timestamp": "2023-01-21T19:36:25.4358797"
      },
      {
          "name": "SVR SebiaClear krem matujący 40ml + SVR SebiaClear woda micelarna 75ml",
          "price": "42.75",
          "currency": "PLN",
          "shopName": "wapteka.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/47724059",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=TB3bGFfyWGJzL7LX731tPSjc5z8mCLBINCO0oHKYViag5gqcQXSMlKVIyfc3x2CffRX45JC4UGBNa-hXwTDTUXzy8n0D9_Zje4913iAZH6g-Xg4YO2wmzG9aOxv0gW5yDckyWcWad5Qa5HJ3f8hZ4_Y2QWfeUS5g5L42bfjgeRn5Bv2pAIBIpXc6ll420hs3PLexE8r7tmBm6XInnHMm6kWk0WAKReLmit-e1wzcGoulUEzCWQUN3eavcoNGqqi4_8XlaH9_qSOlUEzCWQUN3aVQTMJZBQ3dWPfYjwaGREJwPZEAStiqtn6AemlGlL8PFZHlupxrPorquH-ZQOEsAWFW44gK5_oqIrRhecZk-Qmb2qCRlcH3vD_H4ZjbMHZt&a=2",
          "reviews": [
              "Woda micelarna świetnie oczyszcza cerę, skóra jest wygładzona i nawilżona, krem świetnie matuje, nadaje się pod makijaż",
              "Krem-żel bardzo dobrze się wchłania i nie pozostwia tłystej warstwy.Matuje cerę i nie podrażnia jej",
              "Bardzo zadowolona tymi produktami, kupowałam pierwszy raz,i została zachwycona.",
              "Ciężko ocenić po paru dniach stosowania, ale na ten moment wydaje się ok",
              "Świetny do cery tłustej, trądzikowej. Łagodzi zmiany zapalne",
              "Trudno powiedzieć dopiero zakupione. Ale seria jest spoko",
              "Najlepszy krem do cery tłustej, który matuje",
              "Fajny zapach, lekka konsystencja",
              "Ładny zapach,wydajny",
              "Polecam"
          ],
          "productInfo": "SVR SEBIACLEAR MAT-PORES krem matujacy to produkt o kompleksowym działaniu: reguluje wytwarzanie sebum, zwęża pory i zapewnia długotrwały efekt matujący (8 godzin). Płynna tekstura wolna od tłuszczu. Matowe i aksamitne wykończenie. Doskonała baza pod makijaż. Wskazania: do pielęgnacji skóry mieszanej, tłustej, podatnej na trądzik Sposób użycia: aplikować rano lub wieczorem na całą twarz. Składniki aktywne: Glukonolakton 14% + kwas salicylowy, Niacynamid 4%, Mat SR 2%, cukry fizjologiczne. SVR SEBIACLEAR EAU MICALLAIRE 75ml: Woda micelarna, która oczyszcza skórę i usuwa odporny na wodę makijaż. Eliminuje zanieczyszczenia i nadmiar łoju bez wysuszania skóry, pozostawia skórę czystą i świeżą. Odpowiedni do cery wrażliwej, mieszanej , tłustej. Daje prawdziwe uczucie odświeżenia. Doskonała skuteczność preparatów idzie w parze z doskonałą tolerancją przez skórę i dostarcza równocześnie wyjątkowej przyjemności kosmetycznej. Redukcja niedoskonałości w 7dni została potwierdzona klinicznie. Wskazania: oczyszczający płyn miceralny. Dokładnie oczyszcza skórę, usuwa makijaż wodoodporny. Sposób użycia: nakładać rano oraz/lub wieczorem na twarzy i okolice oczu przy pomocy wacika. Nie spłukiwać. Składniki aktywne: Glukonolakton, Micele. Podstawowe informacje: Producent SVR > Dermokosmetyki SVR Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Wody > Dermokosmetyki - wody Pojemność 75 ml Przeznaczenie Twarz > Dermokosmetyki do twarzy Rodzaj skóry Mieszana > Dermokosmetyki do cery mieszanej Tłusta > Dermokosmetyki do cery tłustej Wrażliwa > Dermokosmetyki do skóry wrażliwej Działanie Matujące Oczyszczające Stosowanie Na dzień Na noc Dodatkowe cechy Bez parabenów Bez silikonów Składniki aktywne Kwas salicylowy Popularne Dermokosmetyki SVR do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/47724059/f-svr-sebiaclear-krem-matujacy-40ml-svr-sebiaclear-woda-micelarna-75ml.jpg",
          "timestamp": "2023-01-21T19:36:25.6658679"
      },
      {
          "name": "BIODERMA SENSIBIO EYE Kremowy żel pod oczy - 15 ml + SENSIBIO AR BB CREAM Krem do skóry z problemami naczynkowymi - 40 ml + SENSIBIO H2O Płyn micelarn",
          "price": "79.97",
          "currency": "PLN",
          "shopName": "manada.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/81882514",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=GcSFrG1nMvBzL7LX731tPW92f9ahijDDvMaAPaiCK0naEVs_6vhVtINLFqr7deYW_L24PzkejHvVD5Zhc3Hd2gqK2Z9lwbcTdIih6JSiXrPU4vn6IufAd2TD50otZri9pVBMwlkFDd3tgUcmM6zyCQEUgXjG9BhbpVBMwlkFDd2lUEzCWQUN3bgsmCgnCG-sttWayavHYUG0J4v_KiYpwqZ4bDde3imfYVWUfBz234G53V1ECauUM8d4G07DWO05SoTdmzTd0kmPhWAFQLk4kLzenoh6hWyjktDT5w9bWnM=&a=2",
          "reviews": [],
          "productInfo": "Bioderma Sensibio AR, krem aktywny do skóry z problemami naczynkowymi, 40ml - Długi termin ważności! Bioderma Sensibio AR to krem do cery naczynkowej o właściwościach łagodzących podrażnienia, zmniejszających rumień i hamujących rozszerzanie naczynek powodowane m. in. spożywaniem alkoholu i pikantnych potraw, dużymi wahaniami temperatury czy stresem. Krem ma lekką, nietłustą i bezzapachową konsystencję. Jest hipoalergiczny, pozbawiony konserwantów, barwników i dobrze tolerowany przez wrażliwą skórę. Biologiczne działanie Sensibio AR redukuje zaczerwienienia i zapobiega ich nawrotom, regulując mechanizmy biologiczne odpowiedzialne za rozszerzanie naczyń krwionośnych. Znajdujący się w nim innowacyjny kompleks Rosactiv działa bezpośrednio na VEGF (naczyniowośródbłonkowy czynnik wzrostu), jeden z głównych mechanizmów powodujących rozszerzenie i osłabienie naczyń krwionośnych, a tym samym zaczerwienienie skóry. Enoxolon, alantoina i olej canola – natychmiastowo łagodzą, działają przeciwzapalnie i wzmacniają barierę ochronną skóry. Wyciąg z Laminaria Ochroleuca ogranicza podrażnienia i działa przeciwzapalnie. Sensibio AR nawilża, wzmacnia barierę ochronną skóry i zapobiega wnikaniu czynników drażniących. Sposób użycia Rano i/lub wieczorem, siedem dni w tygodniu. Nałóż Sensibio AR na oczyszczoną skórę twarzy W przypadku intensywnego przegrzania skóry, można ją szybko i skutecznie załagodzić stosując jednocześnie Sensibio AR i Sensibio Forte. W czasie dużego nasłonecznienia zalecamy stosowanie ochrony przeciwsłonecznej dostosowanej do potrzeb skóry wrażliwej i naczynkowej – Photoderm AR SPF 50+ Bioderma, Sensibio H2O Woda Micelarna, 250 ml DZIAŁANIE Skutecznie usuwa zanieczyszczenia, smog oraz makijaż twarzy i okolic oczu - nawet wodoodporny Koi wrażliwą skórę i zmniejsza objawy wrażliwości Chroni mikrobiom skóry Uwalnia skórę od zanieczyszczeń i metabolitów To perfekcyjna kombinacja skuteczności i delikatności - dogłębnie oczyszcza skórę z szacunkiem dla jej bariery ochronnej Pozwala skórze zachować jej wewnętrzną równowagę, respektując ekobiologię skóry Doskonale tolerowany nawet przez najbardziej wrażliwą skórę Nie wymaga spłukiwania wodą DLA KOGO? Dorośli, Młodzież JAK STOSOWAC? rano i wieczorem – 7 dni w tygodniu ETAP 1Nasącz wacik Sensibio H2O. ETAP 2Delikatnie przesuwaj po skórze bez pocierania, usuwając zanieczyszczenia, smog i makijaż ETAP 3Powtarzaj do chwili, aż kolejny wacik będzie czysty ETAP 4Pamiętaj: nie wymaga spłukiwania wodą Podstawowe informacje: Producent Bioderma > Dermokosmetyki Bioderma Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Żele > Dermokosmetyki w żelu do mycia twarzy Przeznaczenie Oczy i usta > Dermokosmetyki pod oczy i do pielęgnacji ust Rodzaj skóry Naczynkowa > Dermokosmetyki do cery naczynkowej Popularne Dermokosmetyki do skóry naczynkowej Bioderma Dermokosmetyki Bioderma do oczu i ust Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/81882514/f-bioderma-sensibio-eye-kremowy-zel-pod-oczy-15-ml-sensibio-ar-bb-cream-krem-do-skory-z-problemami-naczynkowymi-40-ml-sensibio-h2o-plyn-micelarn.jpg",
          "timestamp": "2023-01-21T19:36:26.033852"
      },
      {
          "name": "Vichy Mineral 89 Płyn Micelarny 100ml + Aqualia Krem na dzień 15ml + Krem na noc 15ml",
          "price": "84.98",
          "currency": "PLN",
          "shopName": "drmaxdrogeria.pl",
          "ceneoProductUrl": "https://www.ceneo.pl/141481995",
          "directShopUrl": "https://www.ceneo.pl/Click/Offer/?e=CgBWnsY4T-JzL7LX731tPdOBarSrbLvCMNPJb9_Tf6-QHz-bk-PYNwk04NzHOIMTc11T_sE6iMOjm2Fr3oLi9q5bwV07l89q-jVcpOqnWdTMkJwLexl_HyWnMUrzftKvquMUrsh4BS6lUEzCWQUN3aVQTMJZBQ3dhYLaGBbbN73VgTcRcfo6T6VQTMJZBQ3dLXkblgtnPo0_V4WBsVh8cebiQa3YsLP1oQoLC105DWPHYoZnLG5_DkRe94XUYfKCXsDpt1W7FrvCXA3R8EJ3txRYt_Wki_DX0mMTFF-FFTVyGk1EMXbAIftdlmTTQu8l&a=2",
          "reviews": [
              "Spełnia swoje zadanie , bardzo dobry produkt 👍"
          ],
          "productInfo": ". Vichy Mineral 89 Płyn Micelarny 100ml + Aqualia Krem na dzień 15ml + Krem na noc 15ml Wzmacniająco - nawilżający zestaw świąteczny Vichy to doskonały pomysł na prezent dla bliskiej osoby. Zestaw składa się z kosmetyków przeznaczonych dla cery wrażliwej, suchej i odwodnionej. W zestawie znajduje się booster wzmacniająco-nawilżający z kwasem hialuronowym oraz trzy mini produkty. Vichy Mineral 89 booster wzmacniająco-nawilżający z kwasem hialuronowym 50ml Wzmacniająco-nawilżający booster z kwasem hialuronowym z serii Mineral 89 marki Vichy to produkt kosmetyczny dedykowany wszystkim rodzajom skóry, także tej wrażliwej. Formuła zawiera tylko 11 składników aktywnych, w tym kwas hialuronowy i 89% wody termalnej Vichy – źródło 15 minerałów, które pomagają: wzmacniać barierę ochronną skóry, przeciwdziałać przemęczeniu, stresowi i zanieczyszczeniom powietrza, ujędrniać, nawilżać, zmiękczać i ujednolicać cerę, przywrócić sprężystą, promienną skórę o zdrowym wyglądzie.Produkt należy stosować jako pierwszy krok w pielęgnacji skóry twarzy, pod krem. Booster Vichy Mineral 89 z kwasem hialuronowym ma lekką formułę, która szybko się wchłania i nie pozostawia tłustego filmu na skórze. Produkt może być stosowany pod makijaż. Sposób użycia Serum-booster nałożyć na czystą skórę jako pierwszy krok w pielęgnacji twarzy przed kremem. Używać rano i wieczorem. Może być stosowany pod makijaż. Składniki Aqua/Water, Peg/Ppg/Polybutylene Glycol-8/5/3 Glycerin, Glycerin (gliceryna), Butylene Glycol, Methyl Gluceth-20, Carbomer, Sodium Hyaluronate (kwas hialuronowy), Phenoxyethanol, Caprylyl Glycol, Citric Acid, Biosaccharide Gum-1. Vichy Purete Thermale płyn micelarny do skóry wrażliwej 100 ml: Vichy Purete Thermale to oczyszczający płyn micelarny, który myje i usuwa makijaż z twarzy i oczu. Niezwykle łagodna formuła wzbogacona o wodę termalną Vichy i pantenol dla nawilżania. Mineralny płyn micelarny Vichy pozostawia skórę ukojoną i czystą, zapewniając uczucie komfortu. Sposób użycia Namocz wacik płynem i delikatnie oczyść twarz, aby usunąć makijaż i zanieczyszczenia. Stosuj rano i wieczorem. Składniki Aqua / Water, Hexylene Glycol, Glycerin (gliceryna), Poloxamer 184, Disodium Cocoamphodiacetate, Disodium Edta, Panthenol (witamina B5), Polyaminopropyl Biguanide, Perfume / Fragrance. Vichy Aqualia Thermal, bogaty krem nawilżający, 15 ml: Bogaty krem nawilżający z serii Aqualia Thermal marki Vichy to produkt kosmetyczny dedykowany suchej i bardzo suchej skórze. Formuła zawiera 97% składników aktywnych pochodzenia naturalnego, w tym: mineralizującą wodę termalną Vichy, która zawiera 15 minerałów i wspiera ochronę skóry, sód PCA, który wspomaga procesy wzmacniające funkcje barierowe naskórka, cukier roślinny mannozę, który pomaga wzmacniać komórki i poprawiać nawilżenie skóry, naturalny kwas hialuronowy, który wspiera efekt wypełnienia i wspomaga utrzymanie wody w skórze. Ponadto składniki aktywne zawarte w formule bogatego kremu nawilżającego Aqualia Thermal Vichy wspierają wzmacnianie i nawilżanie odwodnionej skóry, a także wspomagają nawodnienie naskórka, zmniejszenie oznak odwodnienia i wygładzenie drobnych linii oraz zmarszczek. Pomagają przywrócić skórze komfort i uczucie gładkości. Sposób użycia Stosuj rano i wieczorem. Osobno lub po użyciu Aqualia Thermal serum nawilżającego. Składniki Aqua / Water, Glycerin (gliceryna), Isopropyl Palmitate, Propanediol, Cetearyl Alcohol, Alcohol Denat, Cetyl Esters, Butyrospermum Parkii Butter / Shea Butter (masło shea), Pentylene Glycol, Mannose (mannoza), Polyglyceryl-3 Methylglucose Distearate, Sodium Polyacrylate, Sodium PCA (sód PCA), Salicylic Acid, Sodium Hyaluronate (kwas hialuronowy), Caprylyl Glycol, Citric Acid, Parfum / Fragrance. Vichy Aqualia Thermal, nawilżający i regenerujący żel-krem na noc 15 ml Nawilżający żel-krem na noc Vichy Aqualia Thermal zapewnia skórze maksymalną regenerację podczas snu oraz redukuje objawy zmęczenia. Wyjątkowa kompozycja składników aktywnych długotrwale nawilża, odżywia i zwiększa elastyczność skóry. Kosmetyk Aqualia Thermal zawiera między innymi kwas hialuronowy oraz olejki roślinne, które wzmacniają barierę ochronną skóry, intensywnie nawilżają i regenerują. Dodatek wody termalnej Vichy to 15 cennych minerałów, o działaniu łagodzącym, przywracającym skórze równowagę i chroniącym przed szkodliwym działaniem wolnych rodników. Sposób użycia Jako krem na noc nakładaj codziennie wieczorem. Jako maseczkę stosuj 1-2 razy w tygodniu. Omijaj okolice oczu. Składniki Aqua / Water, Glycerin (gliceryna), Dimethicone, Caprylic/Capric Triglyceride, Squalane (skwalan), Ammonium Polyacryldimethyltauramide / Ammonium Polyacryloyldimethyl Taurate, Ci 42090 / Blue 1, Ci 42053 / Green 3, Dimethiconol, Sodium Hyaluronate (kwas hialuronowy), Phenoxyethanol, Poloxamer 338, Disodium Edta, Caprylyl Glycol, Citric Acid, Biosaccharide Gum-1, Xanthan Gum, Parfum / Fragrance. Podstawowe informacje: Producent Vichy > Vichy dermokosmetyki Model Minéral 89 Rodzaj kosmetyku Kremy > Dermokosmetyki w kremie Płyny > Dermokosmetyki w płynie Pojemność 15 ml Przeznaczenie Twarz > Dermokosmetyki do twarzy Rodzaj skóry Wrażliwa > Dermokosmetyki do skóry wrażliwej Działanie Kojące Nawilżające Stosowanie Na dzień Na noc Dodatkowe cechy Nie wysusza Składniki aktywne Woda termalna Popularne Dermokosmetyki do skóry wrażliwej Vichy Dermokosmetyki Vichy do twarzy Zaproponuj zmiany lub zgłoś uwagi",
          "imageUrl": "https://image.ceneostatic.pl/data/products/141481995/f-vichy-mineral-89-plyn-micelarny-100ml-aqualia-krem-na-dzien-15ml-krem-na-noc-15ml.jpg",
          "timestamp": "2023-01-21T19:36:26.8390236"
      },
    ],
   };

   sortItems = () => {
    let check = this.state.sortType
    var data = this.state.items
    switch(check){
      case 'LowHigh':
        data.sort((a, b) => {
          return b.price - a.price
        });
        console.log("test")
        console.log(data)
        this.setState({items_sorted: data});
        break;

      case 'HighLow':
        data.sort((a, b) => {
          return a.price - b.price
        });
        this.setState({items_sorted: data});
        break;
    }
}

   handleItems = (itemsValue) => {
    this.setState({items: itemsValue});
    this.sortItems();
}

  changeSort = () => {
    var data = document.getElementById("sortSelect").value;
    this.setState({sortType: data});
    this.sortItems()
}


  render() {
    return (
      <div className="container">
        <div className="inner">
      <Header />
      <InputSearch handleItems = {this.handleItems}/>
      <SearchList items={this.state.items_sorted} changeSort={this.changeSort}/>
    </div>
    <div className="right">
      <Login/>
    </div>
    <div className="history">
      <HistorySearch/>
    </div>
    </div>
    )
  }
}
export default SearchContainer
