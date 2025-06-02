# Test info

- Name: eGündem - Gündem Sayfası Testleri >> EGT-21 - Gündem sayfası yüklenmeli
- Location: C:\Users\Kasa\Documents\egundem\tests\gundem.spec.js:8:3

# Error details

```
Error: expect.toContainText: Error: strict mode violation: locator('h1, h2') resolved to 3 elements:
    1) <h2 class="text-xl leading-6 tracking-[-0.5px] font-interBold text-primary-black dark:text-white">Popüler Gündem Haberleri</h2> aka getByRole('heading', { name: 'Popüler Gündem Haberleri' })
    2) <h1 class="text-xl leading-6 tracking-[-0.5px] font-interBold text-primary-black dark:text-white">Gündem</h1> aka getByRole('heading', { name: 'Gündem', exact: true })
    3) <h2 class="text-lg font-interBold text-primary-black font-bold dark:text-white">Twitter Gündem</h2> aka getByRole('heading', { name: 'Twitter Gündem' })

Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('h1, h2')

    at C:\Users\Kasa\Documents\egundem\tests\gundem.spec.js:11:42
```

# Page snapshot

```yaml
- link "E-Gündem Haberleri & Son Dakika Haberleri E-Gündem Logo":
  - /url: /
  - text: E-Gündem Haberleri & Son Dakika Haberleri
  - img "E-Gündem Logo"
- link "Rusya heyeti İstanbul'a geldi":
  - /url: https://www.trthaber.com/haber/dunya/rusya-heyeti-istanbula-geldi-909180.html
- button "Toggle dark mode"
- link "eGündem Instagram":
  - /url: https://www.instagram.com/egundemapp/
  - img
- link "eGündem Facebook":
  - /url: https://www.facebook.com/
  - img
- link "eGündem Twitter":
  - /url: https://x.com/egundemapp/
  - img
- link "eGündem TikTok":
  - /url: https://www.tiktok.com/@egundem
  - img
- link "eGündem Youtube":
  - /url: https://www.youtube.com/
  - img
- button "Menüyü Aç":
  - img
- link "GÜNDEM":
  - /url: /gundem
- link "SPOR":
  - /url: /spor
- link "FİNANS":
  - /url: /finans
- link "BİLİM & TEKNOLOJİ":
  - /url: /bilim-and-teknoloji
- link "YAŞAM":
  - /url: /yasam
- button "Ara"
- button "Giriş Yap veya Üye Ol": Giriş Yap / Üye Ol
- heading "Popüler Gündem Haberleri" [level=2]
- button "Önceki Slayt"
- button "Sonraki Slayt": Tümünü Gör
- link "Gündem":
  - /url: /gundem
- link "Cumhurbaşkanı Erdoğan’dan flaş açıklamalar - CANLI -":
  - /url: https://egundem.com/gundem/cumhurbaskani-erdogandan-flas-aciklamalar-canli-4638a220
  - img "Cumhurbaşkanı Erdoğan’dan flaş açıklamalar - CANLI -"
- button:
  - img
- link "Yeni Akit":
  - /url: /yeni-akit-g
- text: 2 sa.
- heading "Cumhurbaşkanı Erdoğan’dan flaş açıklamalar - CANLI -" [level=3]:
  - link "Cumhurbaşkanı Erdoğan’dan flaş açıklamalar - CANLI -":
    - /url: https://egundem.com/gundem/cumhurbaskani-erdogandan-flas-aciklamalar-canli-4638a220
- paragraph: Cumhurbaşkanı Recep Tayyip Erdoğan başkanlığında yapılan Kabine Toplantısı açıklamalarda bulunuyor.
- link "Gündem":
  - /url: /gundem
- link "Eşini öldürüp intihar süsü vermiş! Mektupta parmak izi çıkan koca için rekor hapis istemi":
  - /url: https://egundem.com/gundem/esini-oldurup-intihar-susu-vermis-mektupta-parmak-izi-cikan-koca-icin-rekor-hapis-istemi-b1a7242a
  - img "Eşini öldürüp intihar süsü vermiş! Mektupta parmak izi çıkan koca için rekor hapis istemi"
- button:
  - img
- link "Hürriyet":
  - /url: /hurriyet-gundem
- text: 3 sa.
- heading "Eşini öldürüp intihar süsü vermiş! Mektupta parmak izi çıkan koca için rekor hapis istemi" [level=3]:
  - link "Eşini öldürüp intihar süsü vermiş! Mektupta parmak izi çıkan koca için rekor hapis istemi":
    - /url: https://egundem.com/gundem/esini-oldurup-intihar-susu-vermis-mektupta-parmak-izi-cikan-koca-icin-rekor-hapis-istemi-b1a7242a
- paragraph: Antalya'da evinde cansız bedeni bulunan Düriye Çiğdem Keklik'i (33) tüfekle vurup, intihar süsü verdiği ileri sürülen eşi Hüsamettin Keklik'in (30), ağırlaştırılmış ömür boyu hapsi istendi. Mektubun Düriye Çiğdem Keklik'e eşi tarafından zorla yazdırılmış olabileceği belirtildi.
- link "Gündem":
  - /url: /gundem
- link "Sinan Oğan uzun süre sonra ortaya çıktı":
  - /url: https://www.sozcu.com.tr/sinan-ogan-uzun-sure-sonra-ortaya-cikti-p180181
  - img "Sinan Oğan uzun süre sonra ortaya çıktı"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- heading "Sinan Oğan uzun süre sonra ortaya çıktı" [level=3]:
  - link "Sinan Oğan uzun süre sonra ortaya çıktı":
    - /url: https://www.sozcu.com.tr/sinan-ogan-uzun-sure-sonra-ortaya-cikti-p180181
- paragraph: 28 Mayıs seçimleri öncesinde Cumhurbaşkanı Erdoğan lehine adaylıktan çekilen Sinan Oğan, uzun süre sonra yeniden ortaya çıktı. Oğan, Azerbaycan'da oldukça popüler olan bir restoranda görüldü.
- list:
  - listitem
  - listitem
  - listitem
  - listitem
  - listitem
  - listitem
  - listitem
- heading "Gündem" [level=1]
- link "Gündem":
  - /url: /gundem
- link "DEM Parti Meclis Başkanvekili Pervin Buldan oldu":
  - /url: https://egundem.com/gundem/dem-parti-meclis-baskanvekili-pervin-buldan-oldu-e2192832
  - img "DEM Parti Meclis Başkanvekili Pervin Buldan oldu"
- button:
  - img
- link "CNN TÜRK":
  - /url: /cnn-turk-g
- text: 37 dk.
- heading "DEM Parti Meclis Başkanvekili Pervin Buldan oldu" [level=3]:
  - link "DEM Parti Meclis Başkanvekili Pervin Buldan oldu":
    - /url: https://egundem.com/gundem/dem-parti-meclis-baskanvekili-pervin-buldan-oldu-e2192832
- paragraph: DEM Parti Meclis Grubu, parti genel merkezinde yaptığı toplantıda Meclis Başkanvekilini belirledi. DEM Parti’nin yeni Meclis Başkanvekili Pervin Buldan oldu.
- link "Gündem":
  - /url: /gundem
- link "Gizli kameralar nasıl tespit edilir? Mahremiyet ihlalinde ceza ne?":
  - /url: https://egundem.com/gundem/gizli-kameralar-nasil-tespit-edilir-mahremiyet-ihlalinde-ceza-ne-cf66cff2
  - img "Gizli kameralar nasıl tespit edilir? Mahremiyet ihlalinde ceza ne?"
- button:
  - img
- link "CNN TÜRK":
  - /url: /cnn-turk-g
- text: 45 dk.
- heading "Gizli kameralar nasıl tespit edilir? Mahremiyet ihlalinde ceza ne?" [level=3]:
  - link "Gizli kameralar nasıl tespit edilir? Mahremiyet ihlalinde ceza ne?":
    - /url: https://egundem.com/gundem/gizli-kameralar-nasil-tespit-edilir-mahremiyet-ihlalinde-ceza-ne-cf66cff2
- paragraph: Önce Sakarya’nın Sapanca ilçesinde bir bungalovda sonra da Denizli’de bir kiralık evde gizli kamera bulundu. Peki bir tatilci kaldığı konutta böyle bir sorunla karşılaşırsa devamında nasıl bir yol izlemeli? Hukuki boyutu ne? Hukukçu Şükrü Aksu CNN TÜRK yayınında yanıtladı.
- link "Gündem":
  - /url: /gundem
- link "Bodrum Teksas’a döndü, restoranda oturan husumetlilerine kurşun yağdırdılar":
  - /url: https://www.sozcu.com.tr/bodrum-teksas-a-dondu-restoranda-oturan-husumetlilerine-kursun-yagdirdilar-p180194
  - img "Bodrum Teksas’a döndü, restoranda oturan husumetlilerine kurşun yağdırdılar"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 46 dk.
- heading "Bodrum Teksas’a döndü, restoranda oturan husumetlilerine kurşun yağdırdılar" [level=3]:
  - link "Bodrum Teksas’a döndü, restoranda oturan husumetlilerine kurşun yağdırdılar":
    - /url: https://www.sozcu.com.tr/bodrum-teksas-a-dondu-restoranda-oturan-husumetlilerine-kursun-yagdirdilar-p180194
- paragraph: Trabzon’daki Rahip Santoro cinayetinin zanlısı Bodrum’da saldırıya silahlı saldırıya uğradı.
- link "Gündem":
  - /url: /gundem
- 'link "Nur Sena intihar notunda işaret etmişti: Araştırma görevlisi, görevinden uzaklaştırıldı"':
  - /url: https://www.cumhuriyet.com.tr/turkiye/nur-sena-intihar-notunda-isaret-etmisti-arastirma-gorevlisi-gorevinden-uzaklastirildi-2406323
  - 'img "Nur Sena intihar notunda işaret etmişti: Araştırma görevlisi, görevinden uzaklaştırıldı"'
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 47 dk.
- 'heading "Nur Sena intihar notunda işaret etmişti: Araştırma görevlisi, görevinden uzaklaştırıldı" [level=3]':
  - 'link "Nur Sena intihar notunda işaret etmişti: Araştırma görevlisi, görevinden uzaklaştırıldı"':
    - /url: https://www.cumhuriyet.com.tr/turkiye/nur-sena-intihar-notunda-isaret-etmisti-arastirma-gorevlisi-gorevinden-uzaklastirildi-2406323
- paragraph: Diyarbakır'da bıraktığı notun ardından intihar eden İlahiyat Fakültesi öğrencisi Nur Sena Düzgün’ün işaret ettiği araştırma görevlisi Ahmet P., görevinden uzaklaştırıldı.
- link "Gündem":
  - /url: /gundem
- link "Bir tost için bu rezalete değer mi? Tostun yarısını yedi, saçından kopardığı kılı içine koyarak yenisi aldı!":
  - /url: https://egundem.com/gundem/bir-tost-icin-bu-rezalete-deger-mi-tostun-yarisini-yedi-sacindan-kopardigi-kili-icine-koyarak-yenisi-aldi-11b3eb70
  - img "Bir tost için bu rezalete değer mi? Tostun yarısını yedi, saçından kopardığı kılı içine koyarak yenisi aldı!"
- button:
  - img
- link "Yeni Akit":
  - /url: /yeni-akit-g
- text: 50 dk.
- heading "Bir tost için bu rezalete değer mi? Tostun yarısını yedi, saçından kopardığı kılı içine koyarak yenisi aldı!" [level=3]:
  - link "Bir tost için bu rezalete değer mi? Tostun yarısını yedi, saçından kopardığı kılı içine koyarak yenisi aldı!":
    - /url: https://egundem.com/gundem/bir-tost-icin-bu-rezalete-deger-mi-tostun-yarisini-yedi-sacindan-kopardigi-kili-icine-koyarak-yenisi-aldi-11b3eb70
- paragraph: Sakarya'nın en işlek noktalarından Çark Caddesi'nde aperatif dükkanında yaşanan olay pes dedirtti. Sipariş verdiği ve bir kısmını yediği tostun içerisine kafasından kopardığı saç telini koyan kadın, ‘Saç çıktı' diyerek tostun yenisini aldı. Mide bulandıran rezaleti işletmenin güvenlik kamerası ortaya çıkardı.
- link "Gündem":
  - /url: /gundem
- 'link "Ankara''yı sağanak yağış vurdu: Cadde ve sokakları su bastı, ulaşım aksadı"':
  - /url: https://www.sozcu.com.tr/ankara-yi-saganak-yagis-vurdu-cadde-ve-sokaklari-su-basti-ulasim-aksadi-p180192
  - 'img "Ankara''yı sağanak yağış vurdu: Cadde ve sokakları su bastı, ulaşım aksadı"'
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- 'heading "Ankara''yı sağanak yağış vurdu: Cadde ve sokakları su bastı, ulaşım aksadı" [level=3]':
  - 'link "Ankara''yı sağanak yağış vurdu: Cadde ve sokakları su bastı, ulaşım aksadı"':
    - /url: https://www.sozcu.com.tr/ankara-yi-saganak-yagis-vurdu-cadde-ve-sokaklari-su-basti-ulasim-aksadi-p180192
- paragraph: Meteoroloji'nin uyarılarının ardından Ankara'da öğleden sonra etkisini artıran sağanak yağış, hayatı olumsuz etkiledi. Bazı cadde ve sokakları su basarken trafik yoğunluğu oluştu.
- link "Gündem":
  - /url: /gundem
- 'link "CHP''li Borçka Belediyesi Başkanı Ercan Orhan: \"İşçimizin maaşını ödeyebilmek için evimi satışa çıkardım”"':
  - /url: https://egundem.com/gundem/chpli-borcka-belediyesi-baskani-ercan-orhan-iscimizin-maasini-odeyebilmek-icin-evimi-satisa-cikardim-b1e0677d
  - 'img "CHP''li Borçka Belediyesi Başkanı Ercan Orhan: \"İşçimizin maaşını ödeyebilmek için evimi satışa çıkardım”"'
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 1 sa.
- 'heading "CHP''li Borçka Belediyesi Başkanı Ercan Orhan: \"İşçimizin maaşını ödeyebilmek için evimi satışa çıkardım”" [level=3]':
  - 'link "CHP''li Borçka Belediyesi Başkanı Ercan Orhan: \"İşçimizin maaşını ödeyebilmek için evimi satışa çıkardım”"':
    - /url: https://egundem.com/gundem/chpli-borcka-belediyesi-baskani-ercan-orhan-iscimizin-maasini-odeyebilmek-icin-evimi-satisa-cikardim-b1e0677d
- paragraph: CHP'li Borçka Belediyesi Başkanı Ercan Orhan, işçilerinin maaşlarını ödeyebilmek için kendi evini satışa çıkardığını belirterek, "Ben daha küçük bir evde yaşayabilirim ama yeter ki çalışanlarımız mağdur olmasın. Onlar bu kuruma her gün 24 saat emek veriyor. Onlar daha verimli çalışsın, daha istekli gelsin istiyoruz" dedi.
- link "Gündem":
  - /url: /gundem
- 'link "Öğrenciler mezuniyetlerini miting alanında yapmıştı... Rektör Özkan: ''Özgür Özel hakkında suç duyurusunda bulunacağım''"':
  - /url: https://www.cumhuriyet.com.tr/turkiye/ogrenciler-mezuniyetlerini-miting-alaninda-yapmisti-rektor-ozkan-ozgur-ozel-hakkinda-suc-duyurusunda-bulunacagim-2406317
  - 'img "Öğrenciler mezuniyetlerini miting alanında yapmıştı... Rektör Özkan: ''Özgür Özel hakkında suç duyurusunda bulunacağım''"'
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 1 sa.
- 'heading "Öğrenciler mezuniyetlerini miting alanında yapmıştı... Rektör Özkan: ''Özgür Özel hakkında suç duyurusunda bulunacağım''" [level=3]':
  - 'link "Öğrenciler mezuniyetlerini miting alanında yapmıştı... Rektör Özkan: ''Özgür Özel hakkında suç duyurusunda bulunacağım''"':
    - /url: https://www.cumhuriyet.com.tr/turkiye/ogrenciler-mezuniyetlerini-miting-alaninda-yapmisti-rektor-ozkan-ozgur-ozel-hakkinda-suc-duyurusunda-bulunacagim-2406317
- paragraph: CHP Genel Başkanı Özgür Özel, Antalya mitinginde Akdeniz Üniversitesi öğrencileri ile birlikte kep atmıştı. Özel, "Akdeniz Üniversitesi’nin göbeğinden saraya bağlı rektörü bu pırıl pırıl genç kardeşlerime mezuniyet töreni yaptırmadı" ifadelerini kullanmıştı. Rektör Özkan, suç duyurusunda bulunacağını açıkladı.
- link "Gündem":
  - /url: /gundem
- link "Mansur Yavaş, cezaevinde İmamoğlu ve Özdağ'ı ziyaret etti":
  - /url: https://egundem.com/gundem/mansur-yavas-cezaevinde-imamoglu-ve-ozdagi-ziyaret-etti-48719035
  - img "Mansur Yavaş, cezaevinde İmamoğlu ve Özdağ'ı ziyaret etti"
- button:
  - img
- link "CNN TÜRK":
  - /url: /cnn-turk-g
- text: 1 sa.
- heading "Mansur Yavaş, cezaevinde İmamoğlu ve Özdağ'ı ziyaret etti" [level=3]:
  - link "Mansur Yavaş, cezaevinde İmamoğlu ve Özdağ'ı ziyaret etti":
    - /url: https://egundem.com/gundem/mansur-yavas-cezaevinde-imamoglu-ve-ozdagi-ziyaret-etti-48719035
- paragraph: Ankara Büyükşehir Belediye Başkanı Mansur Yavaş, Silivri'deki Marmara Açık Ceza İnfaz Kurumu'nda tutuklu bulunan Ekrem İmamoğlu ve Ümit Özdağ'ı ziyaret etti. Ziyaret sonrasında açıklama yapan Yavaş, "Bir gün bu yargılamaların ne kadar haksız olduğu ortaya çıkacağı kanaatteyim. Başarılı olan Cumhuriyet Halk Partili belediyeleri itibarsızlaştırma yoluyla iktidar değişikliğinin önüne geçilmediğini görüyoruz. Özeti budur. Bundan da son derece eminim" dedi.
- link "Gündem":
  - /url: /gundem
- 'link "Yol verme kavgasında döner bıçağı çıkarttı: 9 adet suç kaydı tespit edildi... Suç aletiyle yakalandı"':
  - /url: https://egundem.com/gundem/yol-verme-kavgasinda-doner-bicagi-cikartti-9-adet-suc-kaydi-tespit-edildi-suc-aletiyle-yakalandi-e5d1c983
  - 'img "Yol verme kavgasında döner bıçağı çıkarttı: 9 adet suç kaydı tespit edildi... Suç aletiyle yakalandı"'
- button:
  - img
- link "Hürriyet":
  - /url: /hurriyet-gundem
- text: 1 sa.
- 'heading "Yol verme kavgasında döner bıçağı çıkarttı: 9 adet suç kaydı tespit edildi... Suç aletiyle yakalandı" [level=3]':
  - 'link "Yol verme kavgasında döner bıçağı çıkarttı: 9 adet suç kaydı tespit edildi... Suç aletiyle yakalandı"':
    - /url: https://egundem.com/gundem/yol-verme-kavgasinda-doner-bicagi-cikartti-9-adet-suc-kaydi-tespit-edildi-suc-aletiyle-yakalandi-e5d1c983
- paragraph: Ankara’da bir vatandaş yol verme kavgasına girdiği dolmuş şoförüne döner bıçağı çekti. Ankara Valiliği, "Şahsın G. A. ( 9 adet suç kaydı mevcut) isimli şahıs olduğu tespit edilerek suç aleti ile birlikte yakalanmıştır. Olayla ilgili adli tahkikata başlanılmıştır" açıklaması yapıldı.
- link "Gündem":
  - /url: /gundem
- link "7 ile sarı kodlu uyarı! Bakanlık'tan sağanak açıklaması":
  - /url: https://www.sozcu.com.tr/7-ile-sari-kodlu-uyari-bakanlik-tan-saganak-aciklamasi-p180190
  - img "7 ile sarı kodlu uyarı! Bakanlık'tan sağanak açıklaması"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- heading "7 ile sarı kodlu uyarı! Bakanlık'tan sağanak açıklaması" [level=3]:
  - link "7 ile sarı kodlu uyarı! Bakanlık'tan sağanak açıklaması":
    - /url: https://www.sozcu.com.tr/7-ile-sari-kodlu-uyari-bakanlik-tan-saganak-aciklamasi-p180190
- paragraph: İçişleri Bakanlığı, Meteoroloji Genel Müdürlüğü'nden alınan verilere göre sağanak yağış uyarısında bulundu. Yağışların etkili olacağı 7 il için sarı uyarı verildi.
- link "Gündem":
  - /url: /gundem
- link "Borsa günü düşüşle tamamladı":
  - /url: https://egundem.com/gundem/borsa-gunu-dususle-tamamladi-242761ab
  - img "Borsa günü düşüşle tamamladı"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 1 sa.
- heading "Borsa günü düşüşle tamamladı" [level=3]:
  - link "Borsa günü düşüşle tamamladı":
    - /url: https://egundem.com/gundem/borsa-gunu-dususle-tamamladi-242761ab
- paragraph: Borsa İstanbul'da BIST 100 endeksi, günü yüzde 0,12 değer kaybederek 9.008,87 puandan tamamladı.
- link "Gündem":
  - /url: /gundem
- 'link "KYK’de isyan eden öğrencilere pişkin savunma: ‘Babanızın evinde klima mı vardı?’"':
  - /url: https://www.cumhuriyet.com.tr/turkiye/kyk-de-isyan-eden-ogrencilere-piskin-savunma-babanizi-evinde-klima-mi-vardi-2406316
  - 'img "KYK’de isyan eden öğrencilere pişkin savunma: ‘Babanızın evinde klima mı vardı?’"'
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 1 sa.
- 'heading "KYK’de isyan eden öğrencilere pişkin savunma: ‘Babanızın evinde klima mı vardı?’" [level=3]':
  - 'link "KYK’de isyan eden öğrencilere pişkin savunma: ‘Babanızın evinde klima mı vardı?’"':
    - /url: https://www.cumhuriyet.com.tr/turkiye/kyk-de-isyan-eden-ogrencilere-piskin-savunma-babanizi-evinde-klima-mi-vardi-2406316
- paragraph: CHP Diyarbakır Milletvekili Sezgin Tanrıkulu, Dicle Üniversitesi’ndeki kız öğrenci yurdu önünde yaptığı açıklamada, öğrencilerin yaşadığı hijyen, yemek ve ulaşım sorunlarına dikkat çekerek, yetkilileri göreve çağırdı. Tanrıkulu, öğrencilerin şikayetlerine verilen pişkin yanıtı da “‘Babanızın evinde klima mı vardı, doğalgaz mı vardı?’ şeklinde aşağılayıcı ifadeler kullanılmış” şeklinde aktardı.
- link "Gündem":
  - /url: /gundem
- 'link "DİSK Ege Bölge Temsilcisi Memiş Sarı SÖZCÜ''ye konuştu: 65 bin liralık net maaş teklifine dünden razıyız"':
  - /url: https://www.sozcu.com.tr/disk-ege-bolge-temsilcisi-memis-sari-sozcu-ye-konustu-65-bin-liralik-net-maas-teklifine-dunden-p180189
  - 'img "DİSK Ege Bölge Temsilcisi Memiş Sarı SÖZCÜ''ye konuştu: 65 bin liralık net maaş teklifine dünden razıyız"'
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- 'heading "DİSK Ege Bölge Temsilcisi Memiş Sarı SÖZCÜ''ye konuştu: 65 bin liralık net maaş teklifine dünden razıyız" [level=3]':
  - 'link "DİSK Ege Bölge Temsilcisi Memiş Sarı SÖZCÜ''ye konuştu: 65 bin liralık net maaş teklifine dünden razıyız"':
    - /url: https://www.sozcu.com.tr/disk-ege-bolge-temsilcisi-memis-sari-sozcu-ye-konustu-65-bin-liralik-net-maas-teklifine-dunden-p180189
- paragraph: İzmir Büyükşehir Belediyesi'nde çalışan yaklaşık 23 bin işçinin grevi beşinci gününde. İşçiler eylem ve miting yaparken, DİSK Ege Bölge Temsilcisi Memiş Sarı Sözcü TV'ye konuştu. Sendika hakkındaki eleştirilere yanıt veren Sarı, kendilerinin ne talep ettiğini anlattı, "Belediye yönetiminin 65 bin liralık net maaş teklifine dünden razıyız" dedi.
- link "Gündem":
  - /url: /gundem
- link "Sırrı Süreyya Önder'in yerine geçecek isim belli oldu":
  - /url: https://www.sozcu.com.tr/sirri-sureyya-onder-in-yerine-gececek-isim-belli-oldu-p180187
  - img "Sırrı Süreyya Önder'in yerine geçecek isim belli oldu"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- heading "Sırrı Süreyya Önder'in yerine geçecek isim belli oldu" [level=3]:
  - link "Sırrı Süreyya Önder'in yerine geçecek isim belli oldu":
    - /url: https://www.sozcu.com.tr/sirri-sureyya-onder-in-yerine-gececek-isim-belli-oldu-p180187
- paragraph: DEM Partili TBMM Başkanvekili Sırrı Süreyya Önder'in hayatını kaybetmesinin ardından DEM Parti adına Başkanvekilliği yapacak isim belli oldu
- link "Gündem":
  - /url: /gundem
- link "DEM Parti'nin Meclis Başkanvekili Pervin Buldan oldu":
  - /url: https://egundem.com/gundem/dem-partinin-meclis-baskanvekili-pervin-buldan-oldu-879bba68
  - img "DEM Parti'nin Meclis Başkanvekili Pervin Buldan oldu"
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 1 sa.
- heading "DEM Parti'nin Meclis Başkanvekili Pervin Buldan oldu" [level=3]:
  - link "DEM Parti'nin Meclis Başkanvekili Pervin Buldan oldu":
    - /url: https://egundem.com/gundem/dem-partinin-meclis-baskanvekili-pervin-buldan-oldu-879bba68
- paragraph: TBMM Başkanvekili ve DEM Parti İstanbul Milletvekili Sırrı Süreyya Önder'in yaşamını yitirmesinin ardından DEM Parti, Meclis Başkanvekilini belirledi. Açıklamada "Bugün yapılan Kapalı Meclis Grup Toplantımızda, DEM Parti İmralı Heyeti Üyesi Pervin Buldan, Meclis Başkanvekilimiz olarak belirlenmiştir" denildi.
- link "Gündem":
  - /url: /gundem
- link "Morata, gidebileceği muhtemel takımların başında Getafe'yi gösterdi":
  - /url: https://egundem.com/gundem/morata-gidebilecegi-muhtemel-takimlarin-basinda-getafeyi-gosterdi-7bcbc9f8
  - img "Morata, gidebileceği muhtemel takımların başında Getafe'yi gösterdi"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 1 sa.
- heading "Morata, gidebileceği muhtemel takımların başında Getafe'yi gösterdi" [level=3]:
  - link "Morata, gidebileceği muhtemel takımların başında Getafe'yi gösterdi":
    - /url: https://egundem.com/gundem/morata-gidebilecegi-muhtemel-takimlarin-basinda-getafeyi-gosterdi-7bcbc9f8
- paragraph: Galatasaray'da forma giyen İspanyol futbolcu Alvaro Morata, gelecekte Getafe'de oynamak istediğini söyledi.
- link "Gündem":
  - /url: /gundem
- 'link "CHP Sözcüsü Yücel''den İzmir grevi açıklaması: İşçilerin Anayasal haklarını kullanmasına saygı duyuyoruz"':
  - /url: https://egundem.com/gundem/chp-sozcusu-yucelden-izmir-grevi-aciklamasi-iscilerin-anayasal-haklarini-kullanmasina-saygi-duyuyoruz-4c7c9eb1
  - 'img "CHP Sözcüsü Yücel''den İzmir grevi açıklaması: İşçilerin Anayasal haklarını kullanmasına saygı duyuyoruz"'
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 1 sa.
- 'heading "CHP Sözcüsü Yücel''den İzmir grevi açıklaması: İşçilerin Anayasal haklarını kullanmasına saygı duyuyoruz" [level=3]':
  - 'link "CHP Sözcüsü Yücel''den İzmir grevi açıklaması: İşçilerin Anayasal haklarını kullanmasına saygı duyuyoruz"':
    - /url: https://egundem.com/gundem/chp-sozcusu-yucelden-izmir-grevi-aciklamasi-iscilerin-anayasal-haklarini-kullanmasina-saygi-duyuyoruz-4c7c9eb1
- paragraph: İzmir Büyükşehir Belediyesi işçilerinin greviyle ilgili soruları yanıtlayan CHP Sözcüsü Deniz Yücel, “İşçilerin Anayasal haklarını kullanmasına saygı duyuyoruz” dedi. Yücel, "Bir an önce sendika ile belediyenin ortak bir noktada buluşması, işçi ve emekçi kardeşlerimizin emeğinin karşılığını vererek ancak belediyenin imkanlarını da göz önüne alarak bir uzlaşı sağlanması dileğimizdir" ifadelerini kullandı.
- link "Gündem":
  - /url: /gundem
- link "Suriye ile ilgili yeni gelişmeyi Erdoğan duyurdu":
  - /url: https://www.sozcu.com.tr/suriye-ile-ilgili-yeni-gelismeyi-erdogan-duyurdu-p180184
  - img "Suriye ile ilgili yeni gelişmeyi Erdoğan duyurdu"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- heading "Suriye ile ilgili yeni gelişmeyi Erdoğan duyurdu" [level=3]:
  - link "Suriye ile ilgili yeni gelişmeyi Erdoğan duyurdu":
    - /url: https://www.sozcu.com.tr/suriye-ile-ilgili-yeni-gelismeyi-erdogan-duyurdu-p180184
- paragraph: AKP'li Cumhurbaşkanı Erdoğan Kabine toplantısının ardından basının karşısına geçti. Suriye-Türkiye ilişkilerinin yeni rotasına dair konuşan Erdoğan, Suriye'ye sivil havacılık uçuşlarının da başlayacağını duyurdu
- link "Gündem":
  - /url: /gundem
- link "MHP bayramda DEM'e gidecek CHP yok!":
  - /url: https://www.sozcu.com.tr/mhp-bayramda-dem-e-gidecek-chp-yok-p180183
  - img "MHP bayramda DEM'e gidecek CHP yok!"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 1 sa.
- heading "MHP bayramda DEM'e gidecek CHP yok!" [level=3]:
  - link "MHP bayramda DEM'e gidecek CHP yok!":
    - /url: https://www.sozcu.com.tr/mhp-bayramda-dem-e-gidecek-chp-yok-p180183
- paragraph: MHP'nin Kurban Bayramı için tebrik programı belli oldu. Programda DEM Parti ikinci kez yeralırken CHP ile görüşmeye yer verilmedi
- img
- heading "Twitter Gündem" [level=2]
- button "Türkiye Etiketleri"
- button "Dünya Etiketleri"
- link "#eşitsizliğehayır":
  - /url: https://x.com/search?q=%23eşitsizliğehayır&src=trend_click&vertical=trends
  - heading "#eşitsizliğehayır" [level=3]
- button:
  - img
- link "Kemal Kılıçdaroğlu 7032 gönderi":
  - /url: https://x.com/search?q=Kemal Kılıçdaroğlu&src=trend_click&vertical=trends
  - heading "Kemal Kılıçdaroğlu" [level=3]
  - paragraph: 7032 gönderi
- button:
  - img
- link "#KavgaBüyük 1315 gönderi":
  - /url: https://x.com/search?q=%23KavgaBüyük&src=trend_click&vertical=trends
  - heading "#KavgaBüyük" [level=3]
  - paragraph: 1315 gönderi
- button:
  - img
- link "İlkay 3162 gönderi":
  - /url: https://x.com/search?q=İlkay&src=trend_click&vertical=trends
  - heading "İlkay" [level=3]
  - paragraph: 3162 gönderi
- button:
  - img
- link "#bildiğinizgibi":
  - /url: https://x.com/search?q=%23bildiğinizgibi&src=trend_click&vertical=trends
  - heading "#bildiğinizgibi" [level=3]
- button:
  - img
- button "Geri"
- list:
  - listitem
  - listitem
  - listitem
  - listitem
- button "İleri"
- dialog:
  - img "E-Gündem Logo"
  - button "Kapat"
  - text: BİZİ TAKİP EDİN
  - link "eGündem Instagram":
    - /url: https://www.instagram.com/egundemapp/
    - img
  - link "eGündem Facebook":
    - /url: https://www.facebook.com/
    - img
  - link "eGündem Twitter":
    - /url: https://x.com/egundemapp/
    - img
  - link "eGündem TikTok":
    - /url: https://www.tiktok.com/@egundem
    - img
  - link "eGündem Youtube":
    - /url: https://www.youtube.com/
    - img
  - button "Giriş Yap veya Üye Ol": Giriş Yap / Üye Ol
  - textbox "Ara"
  - link "Son Dakika":
    - /url: /son-dakika
  - link "Gündem":
    - /url: /gundem
  - link "Spor":
    - /url: /spor
  - link "Finans":
    - /url: /finans
  - link "Dedikodu":
    - /url: /dedikodu
  - link "Yaşam":
    - /url: /yasam
  - link "Yemek":
    - /url: /yemek
  - link "Astroloji":
    - /url: /astroloji
  - link "Bilim & Teknoloji":
    - /url: /bilim-and-teknoloji
  - link "YouTube":
    - /url: /youtube
  - link "Twitter":
    - /url: /twitter
  - link "Yerel":
    - /url: /yerel
  - link "Hakkımızda":
    - /url: /about
  - link "Künye":
    - /url: /tag
  - text: Mobil uygulama indir
  - link "AppGallery":
    - /url: "#"
    - img
    - text: AppGallery
  - link "AppStore":
    - /url: "#"
    - img
    - text: AppStore
  - link "GooglePlay":
    - /url: "#"
    - img
    - text: GooglePlay
- img "E-Gündem Logo"
- text: Copyright © 2024 eGündem Medya AŞ. Tüm Hakları Saklıdır.
- link "eGündem Instagram":
  - /url: https://www.instagram.com/egundemapp/
  - img
- link "eGündem Facebook":
  - /url: https://www.facebook.com/
  - img
- link "eGündem Twitter":
  - /url: https://x.com/egundemapp/
  - img
- link "eGündem TikTok":
  - /url: https://www.tiktok.com/@egundem
  - img
- link "eGündem Youtube":
  - /url: https://www.youtube.com/
  - img
- link "HABERLER":
  - /url: /
- link "Gündem":
  - /url: "#"
- link "Politika":
  - /url: "#"
- link "Finans":
  - /url: "#"
- link "Dünya":
  - /url: "#"
- link "Sağlık":
  - /url: "#"
- link "Otomobil":
  - /url: "#"
- link "Bilgi":
  - /url: "#"
- link "Teknoloji":
  - /url: "#"
- link "Medya":
  - /url: "#"
- link "Yaşam":
  - /url: "#"
- link "Spor":
  - /url: "#"
- link "3. Sayfa":
  - /url: "#"
- link "Magazin":
  - /url: "#"
- link "Emlak":
  - /url: "#"
- link "Kadın":
  - /url: "#"
- link "İpucu":
  - /url: "#"
- link "Biyografi":
  - /url: "#"
- link "Eğitim":
  - /url: "#"
- link "Tarih":
  - /url: "#"
- link "Seyahat":
  - /url: "#"
- link "Kitap":
  - /url: "#"
- link "Kültür Sanat":
  - /url: "#"
- link "Astroloji":
  - /url: "#"
- link "Fatiha Suresi":
  - /url: "#"
- link "Ayetel Kürsi":
  - /url: "#"
- link "Fetih suresi":
  - /url: "#"
- link "Namaz Vakitleri":
  - /url: "#"
- link "İhlas Suresi":
  - /url: "#"
- link "Dualar":
  - /url: "#"
- paragraph: © 2024 e-Gündem. Her hakkı saklıdır
- link "App Store HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: App Store HEMEN İNDİRİN
- link "Google Play HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: Google Play HEMEN İNDİRİN
- link "App Gallery HEMEN İNDİRİN":
  - /url: "#"
  - img
  - text: App Gallery HEMEN İNDİRİN
- link "Hakkımızda":
  - /url: /about
- link "KVKK Politikası":
  - /url: /kvkk
- link "Gizlilik Politikası":
  - /url: /gizlilik-politikasi
- link "Bize Ulaşın":
  - /url: "#"
- link "Künye":
  - /url: /tag
- alert
- img
- text: Gizliliğinize önem veriyoruz
- button "Reddet":
  - img
- paragraph: Websitemiz, haber alma deneyiminizi iyileştirmek ve daha iyi reklam içeriği sunabilmek için çerezler kullanmaktadır.
- paragraph: Kabul Et butonuna tıklayarak çerez kullanımını kabul etmiş olursunuz.
- img "E-Gündem Logo"
- link "Çerezler":
  - /url: /cerez-politikasi
- link "Gizlilik":
  - /url: /gizlilik-politikasi
- link "Hakkımızda":
  - /url: /about
- button "Kabul Et"
- button "Reddet"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const BASE_URL = 'https://egundem.com';
   4 |
   5 | test.describe('eGündem - Gündem Sayfası Testleri', () => {
   6 |
   7 |   // EGT-21: Gündem sayfası doğru şekilde yüklenmeli
   8 |   test('EGT-21 - Gündem sayfası yüklenmeli', async ({ page }) => {
   9 |     await page.goto(`${BASE_URL}/gundem`, { timeout: 60000 });
  10 |     await expect(page).toHaveURL(/\/gundem/);
> 11 |     await expect(page.locator('h1, h2')).toContainText(/gündem/i);
     |                                          ^ Error: expect.toContainText: Error: strict mode violation: locator('h1, h2') resolved to 3 elements:
  12 |   });
  13 |
  14 |   // EGT-22: Gündem haberleri listelenmeli
  15 |   test('EGT-22 - Gündem haberleri listelenmeli', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}/gundem`);
  17 |     const newsItems = page.locator('.news-card, article, .gundem-item'); // Sitedeki CSS'e göre ayarla
  18 |     await expect(newsItems).toHaveCountGreaterThan(0);
  19 |   });
  20 |
  21 |   // EGT-23: Her haberde başlık ve tarih bulunmalı
  22 |   test('EGT-23 - Gündem haber başlık ve tarihi görünmeli', async ({ page }) => {
  23 |     await page.goto(`${BASE_URL}/gundem`);
  24 |     const title = page.locator('.news-card h2, article h2');
  25 |     const date = page.locator('.date, .news-date, time');
  26 |     await expect(title.first()).not.toBeEmpty();
  27 |     await expect(date.first()).not.toBeEmpty();
  28 |   });
  29 |
  30 |   // EGT-24: Gündem haber detayına gidilebilmeli
  31 |   test('EGT-24 - Haberin detay sayfasına ulaşılmalı', async ({ page }) => {
  32 |     await page.goto(`${BASE_URL}/gundem`);
  33 |     const firstNews = page.locator('a[href*="/gundem/"]').first();
  34 |     await firstNews.click();
  35 |     await expect(page).toHaveURL(/\/gundem\//);
  36 |     await expect(page.locator('article')).toBeVisible();
  37 |   });
  38 |
  39 |   // EGT-25: Sayfa 404 ya da içerik bulunamadı hatası vermemeli
  40 |   test('EGT-25 - Sayfa 404 veya boş içerik içermemeli', async ({ page }) => {
  41 |     await page.goto(`${BASE_URL}/gundem`);
  42 |     const notFound = await page.locator('text=404').count();
  43 |     const emptyText = await page.locator('text=İçerik bulunamadı').count();
  44 |     expect(notFound + emptyText).toBe(0);
  45 |   });
  46 |
  47 | });
  48 |
```