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
- link "Türk-İş Başkanı Ergün Atalay, Mehmet Şimşek'e çattı":
  - /url: https://www.sozcu.com.tr/turk-is-baskani-ergun-atalay-mehmet-simsek-e-catti-p179171
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
- link "SİZDEN GELENLER":
  - /url: /sosyal
  - img
  - text: SİZDEN GELENLER
- button "Ara"
- button "Giriş Yap veya Üye Ol": Giriş Yap / Üye Ol
- heading "Popüler Gündem Haberleri" [level=2]
- button "Önceki Slayt"
- button "Sonraki Slayt": Tümünü Gör
- link "Gündem":
  - /url: /gundem
- 'link "Kartalkaya''daki otel yangınına ilişkin flaş gelişme: İddianame kabul edildi"':
  - /url: https://egundem.com/gundem/kartalkayadaki-otel-yanginina-iliskin-flas-gelisme-iddianame-kabul-edildi-19b392c0
  - 'img "Kartalkaya''daki otel yangınına ilişkin flaş gelişme: İddianame kabul edildi"'
- button:
  - img
- link "CNN TÜRK":
  - /url: /cnn-turk-g
- text: 1 sa.
- 'heading "Kartalkaya''daki otel yangınına ilişkin flaş gelişme: İddianame kabul edildi" [level=3]':
  - 'link "Kartalkaya''daki otel yangınına ilişkin flaş gelişme: İddianame kabul edildi"':
    - /url: https://egundem.com/gundem/kartalkayadaki-otel-yanginina-iliskin-flas-gelisme-iddianame-kabul-edildi-19b392c0
- paragraph: SON DAKİKA HABERLERİ... Kartalkaya'daki otel yangınına ilişkin 13 şüpheli hakkında 1998'er yıla, 19 şüpheli hakkında 22 yıl 6'şar aya kadar hapis istemiyle hazırlanan iddianame kabul edildi.
- link "Gündem":
  - /url: /gundem
- link "Kartalkaya'daki otel yangınına ilişkin 32 şüpheli hakkında hapis istemiyle hazırlanan iddianame kabul edildi":
  - /url: https://egundem.com/gundem/kartalkayadaki-otel-yanginina-iliskin-32-supheli-hakkinda-hapis-istemiyle-hazirlanan-iddianame-kabul-edildi-664d9f23
  - img "Kartalkaya'daki otel yangınına ilişkin 32 şüpheli hakkında hapis istemiyle hazırlanan iddianame kabul edildi"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 1 sa.
- heading "Kartalkaya'daki otel yangınına ilişkin 32 şüpheli hakkında hapis istemiyle hazırlanan iddianame kabul edildi" [level=3]:
  - link "Kartalkaya'daki otel yangınına ilişkin 32 şüpheli hakkında hapis istemiyle hazırlanan iddianame kabul edildi":
    - /url: https://egundem.com/gundem/kartalkayadaki-otel-yanginina-iliskin-32-supheli-hakkinda-hapis-istemiyle-hazirlanan-iddianame-kabul-edildi-664d9f23
- paragraph: Kartalkaya'daki otel yangınına ilişkin 13 şüpheli hakkında 1998'er yıla, 19 şüpheli hakkında 22 yıl 6'şar aya kadar hapis istemiyle hazırlanan iddianame kabul edildi.
- link "Gündem":
  - /url: /gundem
- link "AK Parti'nin TBMM Başkanı adayı, Numan Kurtulmuş oldu":
  - /url: https://egundem.com/gundem/ak-partinin-tbmm-baskani-adayi-numan-kurtulmus-oldu-f2ef8d29
  - img "AK Parti'nin TBMM Başkanı adayı, Numan Kurtulmuş oldu"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 1 sa.
- heading "AK Parti'nin TBMM Başkanı adayı, Numan Kurtulmuş oldu" [level=3]:
  - link "AK Parti'nin TBMM Başkanı adayı, Numan Kurtulmuş oldu":
    - /url: https://egundem.com/gundem/ak-partinin-tbmm-baskani-adayi-numan-kurtulmus-oldu-f2ef8d29
- paragraph: AK Parti, TBMM Başkanı Numan Kurtulmuş'un Meclis Başkanı seçimi için adaylık başvurusunu TBMM'ye sundu.
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
- link "CHP’de fırtına öncesi sessizlik bozuldu! Kılıçdaroğlu’ndan tehditlere karşı sert mesaj":
  - /url: https://egundem.com/gundem/chpde-firtina-oncesi-sessizlik-bozuldu-kilicdaroglundan-tehditlere-karsi-sert-mesaj-11e89a1e
  - img "CHP’de fırtına öncesi sessizlik bozuldu! Kılıçdaroğlu’ndan tehditlere karşı sert mesaj"
- button:
  - img
- link "Yeni Akit":
  - /url: /yeni-akit-g
- text: 41 dk.
- heading "CHP’de fırtına öncesi sessizlik bozuldu! Kılıçdaroğlu’ndan tehditlere karşı sert mesaj" [level=3]:
  - link "CHP’de fırtına öncesi sessizlik bozuldu! Kılıçdaroğlu’ndan tehditlere karşı sert mesaj":
    - /url: https://egundem.com/gundem/chpde-firtina-oncesi-sessizlik-bozuldu-kilicdaroglundan-tehditlere-karsi-sert-mesaj-11e89a1e
- paragraph: CHP eski Genel Başkanı Kemal Kılıçdaroğlu, sosyal medya hesabı üzerinden yaptığı açıklamayla parti içinde yaşanan gerilimi gözler önüne serdi. 38. Kurultay sonrası başlayan linç ve tehdit kampanyalarına dikkat çeken Kılıçdaroğlu, can güvenliğine yönelik ağır tehditler aldığını duyurdu.
- link "Gündem":
  - /url: /gundem
- link "Papara soruşturmasında tutuklama talebi":
  - /url: https://www.sozcu.com.tr/papara-sorusturmasinda-tutuklama-talebi-p179253
  - img "Papara soruşturmasında tutuklama talebi"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 42 dk.
- heading "Papara soruşturmasında tutuklama talebi" [level=3]:
  - link "Papara soruşturmasında tutuklama talebi":
    - /url: https://www.sozcu.com.tr/papara-sorusturmasinda-tutuklama-talebi-p179253
- paragraph: Son dakika gelişmesine göre Papara soruşturması kapsamında gözaltına alınan şüpheliler tutuklama talebiyle Sulh Ceza Mahkemesine sevk edildi
- link "Gündem":
  - /url: /gundem
- link "Bir anket daha açıklandı! İstanbul ve Ankara'da fark açılıyor":
  - /url: https://www.sozcu.com.tr/bir-anket-daha-aciklandi-istanbul-ve-ankara-da-fark-aciliyor-p179252
  - img "Bir anket daha açıklandı! İstanbul ve Ankara'da fark açılıyor"
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 44 dk.
- heading "Bir anket daha açıklandı! İstanbul ve Ankara'da fark açılıyor" [level=3]:
  - link "Bir anket daha açıklandı! İstanbul ve Ankara'da fark açılıyor":
    - /url: https://www.sozcu.com.tr/bir-anket-daha-aciklandi-istanbul-ve-ankara-da-fark-aciliyor-p179252
- paragraph: Genel seçim anketleri yapılmaya devam ediliyor. ORC Araştırmanın yaptığı genel seçim anketine göre fark açılmaya devam ediyor
- link "Gündem":
  - /url: /gundem
- 'link "Saraçhane eylemlerinde tutuklanan gençler tahliye edildi: ‘Tek bir çocuk kalana kadar mücadele edeceğiz’"':
  - /url: https://www.cumhuriyet.com.tr/turkiye/sarachane-eylemlerinde-tutuklanan-gencler-tahliye-edildi-tek-bir-cocuk-kalana-kadar-mucadele-edecegiz-2405489
  - 'img "Saraçhane eylemlerinde tutuklanan gençler tahliye edildi: ‘Tek bir çocuk kalana kadar mücadele edeceğiz’"'
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 44 dk.
- 'heading "Saraçhane eylemlerinde tutuklanan gençler tahliye edildi: ‘Tek bir çocuk kalana kadar mücadele edeceğiz’" [level=3]':
  - 'link "Saraçhane eylemlerinde tutuklanan gençler tahliye edildi: ‘Tek bir çocuk kalana kadar mücadele edeceğiz’"':
    - /url: https://www.cumhuriyet.com.tr/turkiye/sarachane-eylemlerinde-tutuklanan-gencler-tahliye-edildi-tek-bir-cocuk-kalana-kadar-mucadele-edecegiz-2405489
- paragraph: İmamoğlu’na destek eyleminde gözaltına alınan ve “Cumhurbaşkanına hakaret” ile suçlanan 14 genç, 68 gün sonra özgürlüklerine kavuştu. Tahliye edilen gençlerden Toprak Doğan’ın annesi Candan Doğan Cumhuriyet’e konuştu.
- link "Gündem":
  - /url: /gundem
- link "AYA Sanat ve Düşünce Vakfı Üsküdar'da düzenlenen törenle açıldı":
  - /url: https://egundem.com/gundem/aya-sanat-ve-dusunce-vakfi-uskudarda-duzenlenen-torenle-acildi-7ceec9e5
  - img "AYA Sanat ve Düşünce Vakfı Üsküdar'da düzenlenen törenle açıldı"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 47 dk.
- heading "AYA Sanat ve Düşünce Vakfı Üsküdar'da düzenlenen törenle açıldı" [level=3]:
  - link "AYA Sanat ve Düşünce Vakfı Üsküdar'da düzenlenen törenle açıldı":
    - /url: https://egundem.com/gundem/aya-sanat-ve-dusunce-vakfi-uskudarda-duzenlenen-torenle-acildi-7ceec9e5
- paragraph: "\"Yerden Göğe İnsan\" sloganıyla hayata geçirilen AYA Sanat ve Düşünce Vakfı, Üsküdar'da düzenlenen törenle açıldı."
- link "Gündem":
  - /url: /gundem
- 'link "Günlerdir haber yok: Derede kaybolan Faisal''i arama çalışmalarında 5. gün"':
  - /url: https://www.cumhuriyet.com.tr/turkiye/gunlerdir-haber-yok-derede-kaybolan-faisal-i-arama-calismalarinda-5-gun-2405488
  - 'img "Günlerdir haber yok: Derede kaybolan Faisal''i arama çalışmalarında 5. gün"'
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 49 dk.
- 'heading "Günlerdir haber yok: Derede kaybolan Faisal''i arama çalışmalarında 5. gün" [level=3]':
  - 'link "Günlerdir haber yok: Derede kaybolan Faisal''i arama çalışmalarında 5. gün"':
    - /url: https://www.cumhuriyet.com.tr/turkiye/gunlerdir-haber-yok-derede-kaybolan-faisal-i-arama-calismalarinda-5-gun-2405488
- paragraph: Trabzon'un Çaykara ilçesinde turizm merkezi Uzungöl'de gezinti sırasında düştüğü derede akıntıya kapılarak kaybolan Suudi Arabistan uyruklu Faisal Ramzi Alshaikh'u (9) arama çalışmaları 5'inci günde sürüyor.
- link "Gündem":
  - /url: /gundem
- 'link "Tekirdağ''da ilginç görüntü: Eşinden boşanmasını göbek atarak kutladı"':
  - /url: https://www.sozcu.com.tr/tekirdag-da-ilginc-goruntu-esinden-bosanmasini-gobek-atarak-kutladi-p179251
  - 'img "Tekirdağ''da ilginç görüntü: Eşinden boşanmasını göbek atarak kutladı"'
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 51 dk.
- 'heading "Tekirdağ''da ilginç görüntü: Eşinden boşanmasını göbek atarak kutladı" [level=3]':
  - 'link "Tekirdağ''da ilginç görüntü: Eşinden boşanmasını göbek atarak kutladı"':
    - /url: https://www.sozcu.com.tr/tekirdag-da-ilginc-goruntu-esinden-bosanmasini-gobek-atarak-kutladi-p179251
- paragraph: Tekirdağ'da kumar oynadığı gerekçesiyle eşinden boşanan kadın, göbek atarak kutlama yaptı.
- link "Gündem":
  - /url: /gundem
- link "Basın mensubunu öldüren 4 sanık hakim karşısında çıktı, savunmaları pes dedirtti":
  - /url: https://egundem.com/gundem/basin-mensubunu-olduren-4-sanik-hakim-karsisinda-cikti-savunmalari-pes-dedirtti-fa19d6cb
  - img "Basın mensubunu öldüren 4 sanık hakim karşısında çıktı, savunmaları pes dedirtti"
- button:
  - img
- link "Hürriyet":
  - /url: /hurriyet-gundem
- text: 52 dk.
- heading "Basın mensubunu öldüren 4 sanık hakim karşısında çıktı, savunmaları pes dedirtti" [level=3]:
  - link "Basın mensubunu öldüren 4 sanık hakim karşısında çıktı, savunmaları pes dedirtti":
    - /url: https://egundem.com/gundem/basin-mensubunu-olduren-4-sanik-hakim-karsisinda-cikti-savunmalari-pes-dedirtti-fa19d6cb
- paragraph: Beylikdüzü'nde bir otoparkta çıkan tartışmada basın mensubu Kurtuluş'un silahla vurularak öldürülmesine ilişkin 4 sanık hakim karşısına çıktı.
- link "Gündem":
  - /url: /gundem
- link "BM, Gazze'de İHH yardım görevlilerinin İsrail tarafından öldürülmesinden derin endişeli":
  - /url: https://egundem.com/gundem/bm-gazzede-ihh-yardim-gorevlilerinin-israil-tarafindan-oldurulmesinden-derin-endiseli-38cfa241
  - img "BM, Gazze'de İHH yardım görevlilerinin İsrail tarafından öldürülmesinden derin endişeli"
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 54 dk.
- heading "BM, Gazze'de İHH yardım görevlilerinin İsrail tarafından öldürülmesinden derin endişeli" [level=3]:
  - link "BM, Gazze'de İHH yardım görevlilerinin İsrail tarafından öldürülmesinden derin endişeli":
    - /url: https://egundem.com/gundem/bm-gazzede-ihh-yardim-gorevlilerinin-israil-tarafindan-oldurulmesinden-derin-endiseli-38cfa241
- paragraph: BM İnsan Hakları Yüksek Komiserliği Sözcüsü Jeremy Laurence, İsrail'in Gazze'deki saldırılarında İnsan Hak ve Hürriyetleri (İHH) İnsani Yardım Vakfının 5 üyesi dahil yardım görevlilerinin öldürülmesinden derin endişe duyulduğunu bildirdi.
- link "Gündem":
  - /url: /gundem
- link "Japonya, Suriye'ye yaptırımları kaldırıyor":
  - /url: https://egundem.com/gundem/japonya-suriyeye-yaptirimlari-kaldiriyor-2dd47913
  - img "Japonya, Suriye'ye yaptırımları kaldırıyor"
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 55 dk.
- heading "Japonya, Suriye'ye yaptırımları kaldırıyor" [level=3]:
  - link "Japonya, Suriye'ye yaptırımları kaldırıyor":
    - /url: https://egundem.com/gundem/japonya-suriyeye-yaptirimlari-kaldiriyor-2dd47913
- paragraph: Japonya, Suriye'ye uygulanan yaptırımları kısmen kaldırma kararı aldıklarını duyurdu.
- link "Gündem":
  - /url: /gundem
- 'link "Tuzla''da fabrika yangını: Ekipler seferber oldu"':
  - /url: https://www.sozcu.com.tr/tuzla-da-fabrika-yangini-ekipler-seferber-oldu-p179250
  - 'img "Tuzla''da fabrika yangını: Ekipler seferber oldu"'
- button:
  - img
- link "Sözcü":
  - /url: /sozcu-gazetesi
- text: 56 dk.
- 'heading "Tuzla''da fabrika yangını: Ekipler seferber oldu" [level=3]':
  - 'link "Tuzla''da fabrika yangını: Ekipler seferber oldu"':
    - /url: https://www.sozcu.com.tr/tuzla-da-fabrika-yangini-ekipler-seferber-oldu-p179250
- paragraph: İstanbul'un Tuzla ilçesinde bir fabrikada çıkan yangına ekiplerin müdahalesi devam ediyor.
- link "Gündem":
  - /url: /gundem
- link "Eşinden boşandı sokakta maskeli kutlama yaptı":
  - /url: https://www.cumhuriyet.com.tr/turkiye/esinden-bosandi-sokakta-maskeli-kutlama-yapti-2405484
  - img "Eşinden boşandı sokakta maskeli kutlama yaptı"
- button:
  - img
- link "Cumhuriyet":
  - /url: /cumhuriyet-gazetesi
- text: 56 dk.
- heading "Eşinden boşandı sokakta maskeli kutlama yaptı" [level=3]:
  - link "Eşinden boşandı sokakta maskeli kutlama yaptı":
    - /url: https://www.cumhuriyet.com.tr/turkiye/esinden-bosandi-sokakta-maskeli-kutlama-yapti-2405484
- paragraph: Tekirdağ’ın Süleymanpaşa ilçesinde eşinden boşanan bir kadın, yüzünü maske ile kapatarak arabasını süsleyip şehirde "Boşandım, mutluyum" turu attı.
- link "Gündem":
  - /url: /gundem
- link "Yunusemre’nin 1 yılı anlatıldı":
  - /url: https://egundem.com/gundem/yunusemrenin-1-yili-anlatildi-0c23b083
  - img "Yunusemre’nin 1 yılı anlatıldı"
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 58 dk.
- heading "Yunusemre’nin 1 yılı anlatıldı" [level=3]:
  - link "Yunusemre’nin 1 yılı anlatıldı":
    - /url: https://egundem.com/gundem/yunusemrenin-1-yili-anlatildi-0c23b083
- paragraph: Yunusemre Belediye Başkanı Semih Balaban, görevdeki 14 ayda yaptığı çalışmaları 1. Yıl Buluşması’nda anlattı. Halkçı, katılımcı ve tasarruf odaklı belediyecilik anlayışıyla çalıştıklarına dikkat çeken Balaban, yeni vizyonları “DAHA…” ile ilçeyi ileriye taşıyacaklarını vurguladı.
- link "Gündem":
  - /url: /gundem
- link "AK Parti'nin TBMM'nin başkan adayı Numan Kurtulmuş oldu":
  - /url: https://egundem.com/gundem/ak-partinin-tbmmnin-baskan-adayi-numan-kurtulmus-oldu-72ed0c48
  - img "AK Parti'nin TBMM'nin başkan adayı Numan Kurtulmuş oldu"
- button:
  - img
- link "CNN TÜRK":
  - /url: /cnn-turk-g
- text: 59 dk.
- heading "AK Parti'nin TBMM'nin başkan adayı Numan Kurtulmuş oldu" [level=3]:
  - link "AK Parti'nin TBMM'nin başkan adayı Numan Kurtulmuş oldu":
    - /url: https://egundem.com/gundem/ak-partinin-tbmmnin-baskan-adayi-numan-kurtulmus-oldu-72ed0c48
- paragraph: AK Parti, TBMM Başkanı Numan Kurtulmuş'un Meclis Başkanlığı için adaylığını resmi olarak Meclis’e iletti. AK Parti Grup Başkanı Abdullah Güler, 28. Yasama Dönemi İkinci Devre Meclis Başkanlığı seçiminde Kurtulmuş’un adaylığını içeren dilekçeyi, TBMM Genel Sekreteri Talip Uzun’a teslim etti.
- link "Gündem":
  - /url: /gundem
- 'link "ABD''nin Suriye Özel Temsilcisi Barrack: \"Güçlerimiz (DEAŞ''la mücadele) görevin yüzde 99''unu tamamladı\""':
  - /url: https://egundem.com/gundem/abdnin-suriye-ozel-temsilcisi-barrack-guclerimiz-deasla-mucadele-gorevin-yuzde-99unu-tamamladi-b71cb945
  - 'img "ABD''nin Suriye Özel Temsilcisi Barrack: \"Güçlerimiz (DEAŞ''la mücadele) görevin yüzde 99''unu tamamladı\""'
- button:
  - img
- link "Anadolu Ajansı":
  - /url: /anadolu-ajans
- text: 1 sa.
- 'heading "ABD''nin Suriye Özel Temsilcisi Barrack: \"Güçlerimiz (DEAŞ''la mücadele) görevin yüzde 99''unu tamamladı\"" [level=3]':
  - 'link "ABD''nin Suriye Özel Temsilcisi Barrack: \"Güçlerimiz (DEAŞ''la mücadele) görevin yüzde 99''unu tamamladı\""':
    - /url: https://egundem.com/gundem/abdnin-suriye-ozel-temsilcisi-barrack-guclerimiz-deasla-mucadele-gorevin-yuzde-99unu-tamamladi-b71cb945
- paragraph: ABD'nin Ankara Büyükelçisi ve Suriye Özel Temsilcisi Tom Barrack, "Başkan Donald Trump, ordumuzu Suriye'de tek bir hedef doğrultusunda görevlendirdi, DEAŞ'a karşı mücadele. Güçlerimiz bu görevin yüzde 99'unu büyük bir başarıyla tamamladı." dedi.
- link "Gündem":
  - /url: /gundem
- 'link "Eğitim-Sen: Siyaset, proje okullarını ele geçirdi"':
  - /url: https://egundem.com/gundem/egitim-sen-siyaset-proje-okullarini-ele-gecirdi-61629584
  - 'img "Eğitim-Sen: Siyaset, proje okullarını ele geçirdi"'
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 1 sa.
- 'heading "Eğitim-Sen: Siyaset, proje okullarını ele geçirdi" [level=3]':
  - 'link "Eğitim-Sen: Siyaset, proje okullarını ele geçirdi"':
    - /url: https://egundem.com/gundem/egitim-sen-siyaset-proje-okullarini-ele-gecirdi-61629584
- paragraph: İzmir’de Eğitim-Sen’in düzenlediği basın açıklamasında, MEB’in 2025 proje okulları atamalarının liyakatten uzak, siyasi kadrolaşma odaklı olduğu vurgulandı. Açıklamada, “Siyaset, proje okullarını ele geçirdi” denildi.
- link "Gündem":
  - /url: /gundem
- link "AK Parti'nin TBMM başkan adayı belli oldu":
  - /url: https://egundem.com/gundem/ak-partinin-tbmm-baskan-adayi-belli-oldu-ac13150f
  - img "AK Parti'nin TBMM başkan adayı belli oldu"
- button:
  - img
- link "Yeni Akit":
  - /url: /yeni-akit-g
- text: 1 sa.
- heading "AK Parti'nin TBMM başkan adayı belli oldu" [level=3]:
  - link "AK Parti'nin TBMM başkan adayı belli oldu":
    - /url: https://egundem.com/gundem/ak-partinin-tbmm-baskan-adayi-belli-oldu-ac13150f
- paragraph: AK Parti, Türkiye Büyük Millet Meclisi Başkanlığı için mevcut Başkan Numan Kurtulmuş’u yeniden aday gösterdi. Adaylık başvurusu TBMM’ye sunulurken, Kurtulmuş’un tekrar seçilmesine kesin gözüyle bakılıyor. AK Parti kulislerinde “istikrarın devamı” vurgusu öne çıkarken, önümüzdeki dönemde Meclis çalışmalarında yeni anayasa süreci başta olmak üzere kritik gündemlerin masada olacağı ifade ediliyor.
- link "Gündem":
  - /url: /gundem
- 'link "Kartalkaya''da 78 kişinin öldüğü yangın faciası: İddianame kabul edildi"':
  - /url: https://egundem.com/gundem/kartalkayada-78-kisinin-oldugu-yangin-faciasi-iddianame-kabul-edildi-ebf23a37
  - 'img "Kartalkaya''da 78 kişinin öldüğü yangın faciası: İddianame kabul edildi"'
- button:
  - img
- link "BirGün":
  - /url: /birgunn
- text: 1 sa.
- 'heading "Kartalkaya''da 78 kişinin öldüğü yangın faciası: İddianame kabul edildi" [level=3]':
  - 'link "Kartalkaya''da 78 kişinin öldüğü yangın faciası: İddianame kabul edildi"':
    - /url: https://egundem.com/gundem/kartalkayada-78-kisinin-oldugu-yangin-faciasi-iddianame-kabul-edildi-ebf23a37
- paragraph: Bolu'da 78 kişinin yaşamını yitirdiği Grand Kartal Otel'deki yangın faciasıyla ilgili iddianame kabul edildi. Buna göre, 13 şüpheli hakkında 1998'er yıl, 19 şüpheli hakkında 22 yıl 6'şar aya kadar hapis isteniyor.
- link "Gündem":
  - /url: /gundem
- link "İstanbul'da fabrikada korkutan yangın":
  - /url: https://egundem.com/gundem/istanbulda-fabrikada-korkutan-yangin-1913ca7b
  - img "İstanbul'da fabrikada korkutan yangın"
- button:
  - img
- link "Hürriyet":
  - /url: /hurriyet-gundem
- text: 1 sa.
- heading "İstanbul'da fabrikada korkutan yangın" [level=3]:
  - link "İstanbul'da fabrikada korkutan yangın":
    - /url: https://egundem.com/gundem/istanbulda-fabrikada-korkutan-yangin-1913ca7b
- paragraph: Tuzla Tepeören Mahallesi Öz Vatan Caddesi'nde bulunan bir fabrikada iddiaya göre jeneratörler nedeniyle yangın çıktı. Yangın fabrikanın dış cephesine de sıçradı. Olay yerine çok sayıda itfaiye ekibi sevk edildi. Cadde trafiğe kapatıldı. İtfaiyenin söndürme çalışmaları devam ediyor.
- link "Gündem":
  - /url: /gundem
- 'link "Kılıçdaroğlu: Can güvenliğime yönelik açık tehditler alıyorum"':
  - /url: https://egundem.com/gundem/kilicdaroglu-can-guvenligime-yonelik-acik-tehditler-aliyorum-92a91ace
  - 'img "Kılıçdaroğlu: Can güvenliğime yönelik açık tehditler alıyorum"'
- button:
  - img
- link "Hürriyet":
  - /url: /hurriyet-gundem
- text: 1 sa.
- 'heading "Kılıçdaroğlu: Can güvenliğime yönelik açık tehditler alıyorum" [level=3]':
  - 'link "Kılıçdaroğlu: Can güvenliğime yönelik açık tehditler alıyorum"':
    - /url: https://egundem.com/gundem/kilicdaroglu-can-guvenligime-yonelik-acik-tehditler-aliyorum-92a91ace
- paragraph: "CHP süren kurultay tartışmalarıyla ilgili eski Genel Başkanı Kemal Kılıçdaroğlu sessizliğini bozdu. Kılıçdaroğlu sosyal medya hesabından yaptığı açıklamada \"Organize edilmiş, kimliklerini gizleyerek karanlıkta hareket eden trol hesaplar üzerinden sistematik bir linç kampanyasına maruz bırakılıyorum. Can güvenliğime yönelik açık tehditler alıyorum. Beni elektrik direğine asmakla tehdit edenler de var, silahla vurulmamı isteyenler de\" dedi. Kılıçdaroğlu, \"Hiçbir bilgi sahibi olmadığım, hiçbir dahlimin bulunmadığı bir konuda konuşmamı talep ediyorlar. Benden bir mesaj bekleyen herkese buradan açıkça sesleniyorum: Herkes bilsin ki; bu partinin düşmanlarını, yine bu partinin harem-i ismetinde boğmaya muktediriz\" ifadelerini kullandı."
- img
- heading "Twitter Gündem" [level=2]
- button "Türkiye Etiketleri"
- button "Dünya Etiketleri"
- link "Edin Dzeko 1721 gönderi":
  - /url: https://x.com/search?q=Edin Dzeko&src=trend_click&vertical=trends
  - heading "Edin Dzeko" [level=3]
  - paragraph: 1721 gönderi
- button:
  - img
- link "#korkuyorlar":
  - /url: https://x.com/search?q=%23korkuyorlar&src=trend_click&vertical=trends
  - heading "#korkuyorlar" [level=3]
- button:
  - img
- link "#bıst100 14754 gönderi":
  - /url: https://x.com/search?q=%23bıst100&src=trend_click&vertical=trends
  - heading "#bıst100" [level=3]
  - paragraph: 14754 gönderi
- button:
  - img
- link "Adnan Polat":
  - /url: https://x.com/search?q=Adnan Polat&src=trend_click&vertical=trends
  - heading "Adnan Polat" [level=3]
- button:
  - img
- link "Kemal 36385 gönderi":
  - /url: https://x.com/search?q=Kemal&src=trend_click&vertical=trends
  - heading "Kemal" [level=3]
  - paragraph: 36385 gönderi
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
   1 | const { test, expect } = require('@playwright/test');
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