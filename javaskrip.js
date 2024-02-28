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

let amzius = prompt ('enter your amzius')
console.log(amzius)
if (amzius < 0 ) {
    console.log('amžius yra per mažas')
}  else if(amzius <= 6) {
    console.log(`i mokykla neina`)
}  else if (amzius <= 7) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if(amzius <= 10) {
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
}5


