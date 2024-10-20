# Mi a feladat
A feladat az volt, hogy egy általunk választott témából egy olyan weboldalt készítsünk, amelynek egy kezdőlapja, egy, az adatokból készített táblázatot és egy, az adatokból készült különálló kártyákat készítsünk. Ezeket külön menüpontokban kellett megoldani.
## Általános leírás

## Milyen technológiát használunk
- backend: Nem készült szerveroldali rész 
- frontend: Vite+ Vue 3 technológia
- dizájn: HTML + CSS + Bootstrap + JavaScript
- adatbázis: Az adatokat helyileg hoztuk létre.


# Menüpontok, funkciók
Mi van az egyes menüpontok alatt és mit lehet csinálni általánosan

## Home
Ez az oldal fogad minket, amikor felkeressük az oldalt.
Láthatunk egy bemutatkozó szöveget és a kapcsolatfelvételi lehetőségeket a weboldal üzemeltetőjével.
A háttérkép pedig a weboldal témájához igazodik.

## Táblázat
A táblázat menüpontra kattintva megtalálhatjuk a sorozat legfontosabb szereplőinek nevét illusztrációval és egy rövid leírással.

## Kártyák
A kártyák menüpontban pedig kártyaszerűen jelennek meg a szereplők neve és képe. Ha a részletek gombra kattintunk, akkor pedig minden információ megjelenik az adott szereplőről.

## Keresés
Van lehetőség keresésre a táblázat és a kártyák menüpontra kattintva. Ha beírunk valamit, akkor egy kis késleltetéssel megjelennek a találatok, amelyek ki lesznek jelölve az olvasó számára.

## Szűrés
A kártyák menüpontban a keresés mellett még szűrésre is van lehetőségünk. Tehát csak azokat a kártyákat jeleníti meg, amelyeknek szövegében a keresés sikerrel jár, ezáltal talál is valamit. A találatok száma a kiszűrt kártyák alatt található meg.

# Adatforrás
- Leírni a tábla funkcióját:  
Funkciója az információátadás a leírások által. 
- milyen oszlopok vannak:  
4 oszlop van, az azonosító (id), amely arra szolgál, hogy megkülönböztesse a objektumokat az objektumlistában, a karakter neve (title), egy kép róla (image), és egy rövid leírás (text)
- fizikailag hol van a táblázat:  
Mivel ebben az esetben nem adatbáziskezelő programmal készült az adatbázist, ezért a kliens oldalon hoztuk létre azt. 
- milyen technológiával férünk hozzá az adatokhoz:  
Én az App.vue fájlba készítettem el az objektumlistát és azt a provide/inject technológia segítségével tudom használatba venni. A provide részbe adom meg magát az adatokat, az inject részt egy másik fájlban hozom létre és ott használatba tudom venni.  
- Egy kódrészlet a tábláról:  
```js
karakterek: [{
          id: 1,
          title: "Timmy Turner",
          image: "timmy.jpg",
          text: [
            "Timmy Turner a sorozat főszereplője. Ahogy a címadó dalban is szerepel, ő egy átlagos gyerek, akit senki sem ért meg, és hogy elhanyagoló szülei egy gonosz bébiszitter, Vicky gondjaira bízzák. Egy nap azonban egy Cosmo és Wanda nevű varázslatos kívánságteljesítő tündérpár érkezik hozzá, hogy felvidítsák, és így kezdődik számos kalandja."
          ],
        },
        {...}
    //...
]        

```

# A program részletezése
## könyvtár és állomány szerkezet, modulok
![](/public/fajlstruktura.JPG)

- Milyen mappában milyen komponensek vannak, és azoknak mi a feladata:  
A komponensek a components mappában találhatóak. A KarakterInfo.vue felelős a modal megjelenítéséért abban az esetben, amikor a részletek gombra kattintunk. A KarakterKartya.vue komponens felelős azért, hogy a kártya miképpen jelenjen meg. Ezek a komponensek egyszerre több helyen is felhasználható weboldalak, amelyek segítéségével csökkenthetjük a leírt kód mennyiségét.
- Milyen modulokat Használunk a projekthez:  
A public mappa felelős a képek forrásának biztosításához. Az assets a saját stíluslapokért felelős. A components mappában találhatjuk azokat a fájlokat, amelyeket többször is fel szeretnénk használni. A router mappa felelős a route-olásért, azaz az útvonalválasztásért. A views mappában vannak a statikus weboldalak. A HomeView.vue felelős a kezdőlapért, a KarakterekKartya a kártyák megjelenítéséért és egy csomó másért felelős. A KarakterTablazat.vue pedig a táblázatért felelős. Az App.vue felelős a weboldal egységességéért. A main.js-be importáljuk a technológiákat, amiket használunk, mint például a bootstrap.

## Home megvalósítása
A Home egy letisztult kezdőlapot ad, amely két szekcióból áll:
 - welcome (üdvözlés és rövid leírás)
 - contacts (elérhetőségek):  
 Egy e-mail cím van megadva és a közösségi médiában elérhető oldalak (egy listában).
 ![](/public/homeviewContact.JPG)


## Táblázat megvalósítása
### Miért kell a táblázat
A táblázat egy nagyszerű módja annak, hogy az adatokat egyszerre, egy helyen jeleníthessük meg.

### Mely fáj(lok), komponensek
Az app.vue és a KarakterekTablazat.vue fájlok felelősek a táblázatért.
Az App.vue csak az adatokat biztosítja számunkra
### Szerkezet
A fájl áll egy template részből, amely a táblázatot jeleníti meg. Áll még egy script részből, amely félig a reszponzivitást segíti, félig pedig a táblázatban való keresést teszi lehetővé. A style részben pedig a táblázat reszponzivitásáért tettem erőfeszítéseket.
### Vizualizálás módja, dizájn, 
- A táblázat és az adatok vizualizálása:  

    - A táblázat stílusa: table-bordered (szegélyezett), table-hover(ha a sorra rávisszük az kurzort, kijelöli), table-striped(csíkozott) és shadow-sm(kis árnyék) Bootstrap osztályokat használ a jobb megjelenés érdekében.
   - Táblázat fejléce:  
        Három oszlopot definiál: "Cím", "Kép", és "Leírás".
    - Táblázat törzse (tbody): ![](/public/tablazatTartalom.JPG)
        A v-for direktíva használatával minden karakter adatot egy sorban megjelenít a karakterek tömbből.  
        - Cím oszlop: A karakter címét jeleníti meg, ami keresésnél kiemeli a keresett kifejezést.  
        - Kép oszlop: Megjeleníti a karakterhez tartozó képet, és alkalmazza a img-fluid osztályt, ha a képernyő szélessége kisebb 768 pixelnél (reszponzív).  
        - Leírás oszlop: A karakterhez tartozó leírást jeleníti meg, formázva bekezdésekre, és kiemelve a keresett szavakat.
- Az ezt segítő script:
    - Inject:
        - A karakterek és a searchWord adatokat a szülő komponensből veszi át. Ez azt jelenti, hogy a karakterek és a keresett szó adatait egy magasabb szintű komponens szolgáltatja.
    - A data és az lifecycle metódusok:  
        - data: Definiál egy windowWidth nevű adatot, amely az ablak aktuális szélességét tárolja. Ezt az értéket használja a képek reszponzív kezeléséhez.
        - mounted: Amikor a weboldal betöltődik, hozzáad egy eseményfigyelőt (resize), amely frissíti a windowWidth értékét, ha a felhasználó átméretezi az ablakot.
        - beforeDestroy: Eltávolítja az eseményfigyelőt, hogy ne működjön feleslegesen.
        - A szélességgel kapcsolatos függvény: updateWindowWidth: Ez a metódus frissíti a windowWidth értékét, amikor az ablak mérete változik.
        - plusz a keresőfüggvények, amikről később lesz szó részletesebben.
- A style (media query):
    - mark osztály: A keresett szó kiemeléséhez használt stílus, amely rózsaszín háttérrel (hotpink) jeleníti meg az egyezéseket.
    - Media query (@media): 768 pixel alatti képernyőszélességnél a táblázat reszponzív módon viselkedik: ![](/public/tablazatStilus.JPG)
        - A táblázat cellái blokkszerűen viselkednek, és minden cellához hozzáad egy címkét (data-label), hogy a mobilnézetben is egyértelmű legyen, hogy mi az oszlop tartalma.
        - A táblázat fejléce eltűnik, és a cellákba ágyazott címek jelennek meg.
    

## Kártyák
### Mely fáj(lok), komponensek
A kártyák és a modal megjelenítésére a KarakterekKartya.vue szolgálatos. A kártya és a modal szerkezetét komponensekben tároljuk, hogy kényelmesen, többször is fel tudjuk őket használni. Ezek a KarakterInfo.vue és a KarakterKartya.vue névre hallgatnak.

### Ezen komponensek használata
A komponenseket a KarakterKartya.vue-ba importálva lehet használatba venni.
Ezeket mind a HTML kódban használjuk
- KarakterKartya.vue
    - Itt egy col osztályú dobozba beleteszünk egy kártyát.
    - Mivel dinamikus a cím és a kép, ezért slotot használunk. A slot lehetővé teszi, hogy a szülő komponens meghatározza, mi jelenjen meg a kártyán belül (pl. kép és cím). Az image és title nevesített slot-ok biztosítják a megfelelő tartalom helyét.
    - A részletek gomb a modal megnyitásához szükséges. A data-bs-toggle="modal" és a data-bs-target="#karakterInfoModal" attribútumok a Bootstrap modal működését vezérlik. A gomb az onClickReszletek metódust hívja meg kattintáskor.
    - A script részben két dolog van:
        - props: A komponens kap egy id-t, amely az adott karakter azonosítója. Ez az id lesz a podrobnostiModal esemény része.
        - OnClickReszletek: Ez a metódus kibocsát egy egyedi eseményt (podrobnostiModal), amelyet a szülő komponens foghat el. Ezzel az eseménnyel a karakter azonosítóját küldi vissza, hogy a szülő komponens kezelje a modal tartalmát.
    - A style részben csak a kártyákat látjuk el tulajdonságokkal ![](/public/karakterKartyaStyle.JPG)  
        - .card: A kártya egész magasságban jelenik meg, rugalmasan igazodva a tartalomhoz. A transition biztosítja, hogy ha a felhasználó az egérrel fölé viszi a kurzort, a kártya finoman megnövekedjen.
        - .card-body: A kártya testében (ahol a cím és a gomb található) a tartalom rugalmasan oszlik el, a kártya függőleges irányú kitöltése érdekében.
        - .card:hover: Hover hatásra a kártya mérete enyhén megnő (scale(1.05)), ami interaktívabbá teszi a felhasználói élményt.
- KarakterInfo.vue
    - Ez felelős azért, hogy a részletek gombra rákattintva jelenjen meg a modal.
    - A doboznak egy csomó osztályjelölőt adunk.
        - modal fade: A modal elemek a Bootstrap CSS keretrendszert használják. A fade osztály biztosítja, hogy a modal megnyitása és bezárása animációval történjen.
        - id="karakterInfoModal": Ez az egyedi azonosító kapcsolja össze a modalt az oldalon lévő gombokkal (például a KarakterKartya.vue-ban található gombbal, amely ezt a modalt nyitja meg).
        - tabindex="-1" és aria-hidden="true": Ezek a hozzáférhetőségi attribútumok biztosítják, hogy a modal alaphelyzetben ne legyen fókuszban és rejtve legyen.
    - Ezen kívül megadjuk azt, hogy a modal függőlegesen középen helyezkedjen el (modal-dialog-centered) és nagyobb legyen (modal-lg)
    - A header tartalmazza a karakter nevét
    - A slotot itt is használjuk.
    - A script-ben csak egyetlen prop-ot fogadunk, az pedig a karakter neve
    - A style pedig a modal-ban megjelenő képet szabja személyre a my-picture osztályban: 
        - Ez a stílus biztosítja, hogy a kép ne lépje túl a konténer szélességét, rózsaszín keretet és lekerekített sarkokat kapjon, valamint egy kis margót a jobb oldalon.
- És ahol mindez megjelenik: KarakterekKartya.vue
    - A div, amelyben az egész oldal található, ezeket tartalmazza (A kártyákat persze csak akkor jeleníti meg, ha a kiszűrt karakterek tömbje nem üres):
        - row: Egy sor indítása.
        - row-cols-1, row-cols-sm-2, row-cols-md-3, row-cols-lg-4: Ez határozza meg, hogy a különböző képernyőméretekhez igazítva hány oszlop jelenjen meg (1 oszlop mobilon, 4 oszlop nagy kijelzőkön).
        - g-4: Bootstrap osztály, amely a rácselemek közötti távolságot (gap) definiálja.
        - container-fluid: Egy Bootstrap konténer, amely a teljes szélességben kihúzza a tartalmat.
    - A KarakterKartya komponens használatba vétele:
``` html
    <KarakterKartya
      v-for="karakter in szurtKarakterek"
      :key="karakter.id"
      :id="karakter.id"
      @podrobnostiModal="podrobnostiModalKezelo" >
      <!-- v-slot -->
      <template v-slot:image>
        <img :src="karakter.image" class="img-fluid" :alt="karakter.title" width="200" />
      </template>
     <template v-slot:title>
        <h5 v-html="keresJelol(karakter.title)"></h5>
      </template>
    </KarakterKartya>
  </div>
```
- Mi történik?
    - A v-for direktíva egy karakter elemet iterál a szurtKarakterek tömb minden elemén. Ez dinamikusan hoz létre kártyát minden karakterhez.
    - :key="karakter.id": A Vue.js-ben a v-for használatához minden iterációs elemhez egyedi kulcs szükséges. Ez segít a DOM hatékony frissítésében.
    - :id="karakter.id": Az id attribútum átadja az egyedi karakterazonosítót a KarakterKartya komponensnek.
    - @podrobnostiModal="podrobnostiModalKezelo": Ez egy eseménykezelő. Amikor a KarakterKartya komponensben a részletek modal megnyitásának eseménye kiváltódik, meghívja a podrobnostiModalKezelo metódust.
    - Ezután átadjuk v-slot direktíva segítségével dinamikusan adjuk át a képet és címet
    - Ezen kívül gondoskodunk arról, hogy mi történjen akkor ha nincs/van találat.
- A KarakterInfo használatba vétele:
``` html
  <!-- KarakterInfo -->
  <KarakterInfo :title="keresJelol(kivalasztottKarakter.title)">
    <img
      :src="kivalasztottKarakter.image"
      :alt="kivalasztottKarakter.title"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture img-fluid"
    />
    <div v-html="keresJelol(textFormat)"></div>
  </KarakterInfo>

```
- A karakter részletes információját jeleníti meg. Dinamikusan jelenítjük meg a kiválasztott karakter nevét, képét és leírását. A nevet és a leírást egy függvénybe tesszük bele, hiszen a keresés és a szűrés pontosan ezeket veszik figyelembe.
-  A script része a KarakterekKartya.vue-ban:
    - Először is létrehozunk egy KarakterOsztaly-t, amely egy karaktert reprezentál. Az osztály konstruktorában négy tulajdonságot definiál: id, title, image, és text. Ezek mind alapértelmezett értékeket kapnak, ha nem adjuk meg őket.
    - importáljuk a komponenseket és használatba vesszük őket.
    - Ezután injectelünk: Az inject opcióval olyan adatokat kapunk a szülő komponensből, amelyeket a gyermek komponensben is használni szeretnénk:
        - searchWord: A keresett szó.
        - karakterek: A karakterek listája.
    - A data-ban egy kivalasztottKarakter nevű adatot definiálunk, amely a részletek modalban megjelenő karaktert tárolja. Alapértelmezett értéke egy új KarakterOsztaly példány.
    - A textFormat nevű computed:
        - a kiválasztott karakter text mezőjéből formázott HTML bekezdéseket készít. Ha a text mező null, akkor egy üres bekezdéssel tér vissza, különben a szövegek listájából bekezdéseket formáz HTML-ben.
    - A szurtkarakterek computed: A szűrésnél részletesen lesz szó róla.
    - reszletekModalKezelo:
        Ez a metódus felelős a modal ablakban megjelenő részletes karakteradatok betöltéséért. A karakterek tömbből kiszűri azt a karaktert, amelynek az id-je megegyezik az átadott id-vel, és ezt a karaktert állítja be a kivalasztottKarakter-nek.
    - És van a keresJelol függvény is, amit a keresésnél részletezek.
- A style:
    - A mark osztály emeli ki a szavakat
``` css
    .btn {
  padding: 10px 20px; /* Alapértelmezett méret */
}

@media (max-width: 576px) {
  .btn {
    padding: 15px 25px; /* Nagyobb méret mobilon */
    font-size: 1.2rem;  /* Nagyobb betűméret mobilon */
  }
}
```
- A gombok méretezése reszponzívan
    - .btn: Ez egy általános gombstílus, amely 10x20 pixelnyi paddinget ad a gomboknak.
    - @media (max-width: 576px): Ez a CSS media query mobil eszközökre (576px szélességnél kisebb képernyőkhöz) vonatkozik. Itt nagyobb gombméretet és nagyobb betűméretet biztosít a mobil felhasználók számára.



## Keresés
Keresni a táblázatban és a kártyák közt is tudunk keresni, mind a kettő lényegében ugyanúgy működik. 
### A keresés mechanizmusa
- Én a karakterek keresésének lehetőségét az App.vue-ban tettem be egy input mezőként. Kétirányú adatkötést végeztem a v-model segítségével, így a kereső input dinamikusan változik. Azt a szót amit beírok, provide/ inject technológiával továbbítom a szükséges helyekre. A debounce függvénnyel amelyet a lodash nevű könyvtárból importálok, beállítok egy 0.3 mp-nyi késleltetést, mielőtt nekikezdene keresni. Ez egy figyelő függvény, amely az állapotváltozásra a searchInput tartalmát átadja a searchword változónak.
``` js
searchInput: debounce(function(newValue) {
      this.searchWord = newValue;
    }, 300), // 300ms késleltetés
```
- A keresést a keresJelol(szöveg) függvény végzi, melynek paramétere a szöveg. 
keresJelol: Ez a metódus felelős a keresett szó kiemeléséért a karakterek címében és leírásában. Egy reguláris kifejezést (RegExp) használva megkeresi a keresett szót, és körbeveszi egy HTML span elemmel, amely a mark osztály segítségével rózsaszín kiemelést biztosít.

## Szűrés
A szűrést csak a kártyáknál oldottam meg. Egy dolog szükséges: létrehozni egy olyan objektumlistát, amely a találatnak megfelelően jeleníti meg a kártyákat. És ezt a computed-et felhasználtam a megfelelő lista visszaadására és feltételeket adtam köréje, amiket fentebb magyaráztam.
``` js
    szurtKarakterek() {
      if (!this.searchWord) {
        return this.karakterek;
      }
      return this.karakterek.filter(
        (h) =>
          h.title.toLowerCase().includes(this.searchWord.toLowerCase()) ||
          h.text.some((t) =>
            t.toLowerCase().includes(this.searchWord.toLowerCase())
          )
      );
    },

```
- Működése:
    - Számított tulajdonság, amely a karakterek listát szűri a searchWord alapján:
        - Ha nincs keresett szó, az összes karaktert visszaadja.
        - Ha van keresett szó, akkor azokat a karaktereket adja vissza, amelyek címében vagy leírásában megtalálható a keresett szó.
