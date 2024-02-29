let slaptazodis = '000000000'

console.log(slaptazodis.length)
if (!slaptazodis.includes('#')) {
    console.log('Slaptažodis privalo turėti grotažymes')
} else if (slaptazodis.length < 16 ){
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo')
} else if ( slaptazodis.length < 20 ){
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo')
} else if(slaptazodis.length >= 20) {
    console.log('Slaptažodis tinkamas')
}



// AMŽIUS

// Pagal amžiu surašyti į kurią klasė eina mokinys:

// 1. Iki 6 metų į mokyklą neina.

// 2. 7-10 metų eina į pradinę klasę.

// 3. 11-14 metų eina į pagrindinę.

// 4. 15-18 metų eina į gimnaziją.

// 5. 19+ mokyklą baigė.
// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.





let amzius = Number(prompt ('enter your amzius'))

if(isNaN(amzius)){
    console.log('amzius turi buti skaicius')
}
if (amzius < 0 ) {
    console.log('amžius yra per mažas')
}  else if(amzius <= 6) {
    console.log(`i mokykla neina`)
}  else if (amzius <= 7) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if(amzius <= 10) {3
    console.log('eina į pradinę klasę')
} else if(amzius <= 11) {
    console.log(`Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.`)
} else if(amzius <= 14) {
    console.log('eina į pagrindine')
} else if (amzius <= 15) {
    console.log(`Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.`)
} else if(amzius <= 18) {
    console.log('eina į gimnazija')
} else if(amzius <= 19) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs')
} else if (amzius <= 120) {
    console.log('Mokykla baiges')
} else {
    console.log('amzius per didelis')
}

// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.
// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

let klausimas1 = 'geltona'
let klausimas2 = 'raudona'

let atsakymas1 = 'geltona'
let atsakymas2 = 'raudona'

if (klausimas1 === atsakymas1 && klausimas2 === atsakymas2 ) {
     console.log('Patekai i kita lygi:abu atsakymai teisingi')
  } else if (klausimas1 === atsakymas1 || klausimas2 === atsakymas2 ) {
     console.log('Patekai i kita lygi:pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
  } else if (klausimas1 === atsakymas1 || klausimas2 === atsakymas2 ) {
     console.log('Patekai i kita lygi:pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else {
    console.log('Nepatekai i kita lygi:abu atsakymai buvo neteisingi')
  } 
//   if (klausimas1 === '8' || atsakymas1 === '8') {
//     console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
//   } 
//   if () {
//     console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
//   }
 // ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.
 
// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.
 
let klausimas21 = 'geltona'
let klausimas22 = 'raudona'

let atsakymas21 = 'getona'
let atsakymas22 = 'raudona'

if (klausimas21 === atsakymas21 && klausimas22 === atsakymas22 ) {
     console.log('Patekai i kita lygi:abu atsakymai teisingi')
  } else if (klausimas21 !== atsakymas21 || klausimas22 === atsakymas22 ) {
     console.log('Nepatekai i kita lygi:pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
  } else if (klausimas21 === atsakymas21 || klausimas22 !== atsakymas22 ) {
     console.log('nepatekai i kita lygi:pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else {
    console.log('Nepatekai i kita lygi:abu atsakymai buvo neteisingi')
  } 
 

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

let klausimas31 = 'geltona'
let klausimas32 = 'raudona'
let klausimas33 = 'zalia'

let atsakymas31 = 'geltona'
let atsakymas32 = 'rauona'
let atsakymas33 = 'zlia'

if (klausimas31 === atsakymas31 && klausimas32 === atsakymas32 && klausimas33 === atsakymas33 ) {
    console.log('Patekai i kita lygi:visi atsakymai teisingi')
} else if (klausimas31 === atsakymas31 && klausimas32 === atsakymas32 || klausimas33 !== atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau trecias atsakymas neteisingas')
} else if (klausimas31 === atsakymas31 && klausimas32 !== atsakymas32 && klausimas33 !== atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau antras ir trecias atsakymai neteisingas')
} else if (klausimas31 === atsakymas31 && klausimas32 !== atsakymas32 && klausimas33 == atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau antras atsakymas neteisingas')
} else if (klausimas31 !== atsakymas31 || klausimas32 === atsakymas32 && klausimas33 === atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau pirmas atsakymai neteisingas')
} else if (klausimas31 !== atsakymas31 && klausimas32 !== atsakymas32 && klausimas33 === atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau pirmas ir antras atsakymai neteisingas')
} else if (klausimas31 !== atsakymas31 && klausimas32 !== atsakymas32 & klausimas33 === atsakymas33 ) {
    console.log('Patekai i kita lygi: taciau antras ir trecias atsakymai neteisingas')
} else { console.log('nepatekai i kita lyg5, visi ats neteisingi') 
}