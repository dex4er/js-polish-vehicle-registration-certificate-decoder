const nrv2eDecompress = require('nrv2e-decompress')

/**
 * @interface PolishVehicleRegistrationCertificateField
 * @property {string} name
 * @property {string} description
 * @property {string} value
 */

/**
 * @interface PolishVehicleRegistrationCertificateIssuer
 * @property {string} name
 * @property {string} description
 * @property {string[]} value 4 lines
 */

/**
 * @interface PolishVehicleRegistrationCertificateData
 * @property {PolishVehicleRegistrationCertificateField} format identyfikator formatu
 * @property {PolishVehicleRegistrationCertificateField} seriaDr seria dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} kodTerytorialnyUrzedu kod terytorialny urzędu rejestrującego
 * @property {PolishVehicleRegistrationCertificateIssuer} organWydajacy organ wydający (4 linie tekstu)
 * @property {PolishVehicleRegistrationCertificateField} numerRejestracyjnyPojazdu numer rejestracyjny pojazdu
 * @property {PolishVehicleRegistrationCertificateField} markaPojazdu marka pojazdu
 * @property {PolishVehicleRegistrationCertificateField} typPojazdu typ pojazdu
 * @property {PolishVehicleRegistrationCertificateField} wariantPojazdu wariant, jeżeli występuje
 * @property {PolishVehicleRegistrationCertificateField} wersjaPojazdu wersja, jeżeli występuje
 * @property {PolishVehicleRegistrationCertificateField} modelPojazdu model pojazdu numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)
 * @property {PolishVehicleRegistrationCertificateField} numerIdentyfikacyjnyPojazdu data wydania dowodu rejestracyjnego (YYYY-MM-DD)
 * @property {PolishVehicleRegistrationCertificateField} dataWydaniaDowoduRejestracyjnego okres ważności dowodu, jeżeli występuje takie ograniczenie
 * @property {PolishVehicleRegistrationCertificateField} okresWaznosciDowoduRejestracyjnego okres ważności dowodu, jeżeli występuje takie ograniczenie
 * @property {PolishVehicleRegistrationCertificateField} pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} imiePosiadaczaDowoduRejestracyjnego imię posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} nazwiskoPosiadaczaDowoduRejestracyjnego nazwisko posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} nazwaPosiadaczaDowoduRejestracyjnego nazwa posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} numerPESELLubREGONPosiadaczaDowoduRejestracyjnego numer PESEL lub REGON dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} kodPocztowyPosiadaczaDowoduRejestracyjnego kod pocztowy posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} miejscowoscPosiadaczaDowoduRejestracyjnego miejscowość posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} gminaPosiadaczaDowoduRejestracyjnego gmina posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} ulicaPosiadaczaDowoduRejestracyjnego ulica posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} nrDomuPosiadaczaDowoduRejestracyjnego nr domu posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} nrMieszkaniaPosiadaczaDowoduRejestracyjnego nr mieszkania posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} pelneNazwiskoLubNazwaWlascicielaPojazdu pełne nazwisko lub nazwa właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} imieWlascicielaPojazdu imię właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} nazwiskoWlascicielaPojazdu nazwisko właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} nazwaWlascicielaPojazdu nazwa właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} numerPESELLubREGONWlascicielaPojazdu numer PESEL lub REGON właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} kodPocztowyWlascicielaPojazdu kod pocztowy właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} miejscowoscWlascicielaPojazdu miejscowość właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} gminaWlascicielaPojazdu gmina właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} ulicaWlascicielaPojazdu ulica właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} nrDomuWlascicielaPojazdu nr domu właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} nrMieszkaniaWlascicielaPojazdu nr mieszkania właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} maksymalnaMasaCalkowitaPojazduKg maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)
 * @property {PolishVehicleRegistrationCertificateField} dopuszczalnaMasaCalkowitaPojazduKg dopuszczalna masa całkowita pojazdu (w kg)
 * @property {PolishVehicleRegistrationCertificateField} dopuszczalnaMasaCalkowitaZespoluPojazdowKg dopuszczalna masa całkowita zespołu pojazdów (w kg)
 * @property {PolishVehicleRegistrationCertificateField} masaWlasnaPojazduKg masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)
 * @property {PolishVehicleRegistrationCertificateField} kategoriaPojazdu kategoria pojazdu
 * @property {PolishVehicleRegistrationCertificateField} numerSwiadectwaHomologacjiTypuPojazdu numer świadectwa homologacji typu pojazdu, jeżeli występuje
 * @property {PolishVehicleRegistrationCertificateField} liczbaOsi liczba osi
 * @property {PolishVehicleRegistrationCertificateField} maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg maksymalna masa całkowita przyczepy z hamulcem (w kg)
 * @property {PolishVehicleRegistrationCertificateField} maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg maksymalna masa całkowita przyczepy bez hamulca (w kg)
 * @property {PolishVehicleRegistrationCertificateField} stosunekMocyDoMasyWlasnejKWkg stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów
 * @property {PolishVehicleRegistrationCertificateField} pojemnoscSilnikaCm3 pojemność silnika (w cm3)
 * @property {PolishVehicleRegistrationCertificateField} maksymalnaMocNettoSilnikaKW maksymalna moc netto silnika (w kW)
 * @property {PolishVehicleRegistrationCertificateField} rodzajPaliwa rodzaj paliwa
 * @property {PolishVehicleRegistrationCertificateField} dataPierwszejRejestracjiPojazdu data pierwszej rejestracji pojazdu (YYYY-MM-DD)
 * @property {PolishVehicleRegistrationCertificateField} liczbaMiejscSiedzacych liczba miejsc siedzących, włączając siedzenie kierowcy
 * @property {PolishVehicleRegistrationCertificateField} liczbaMiejscStojacych liczba miejsc stojących, jeżeli występuje
 * @property {PolishVehicleRegistrationCertificateField} rodzajPojazdu rodzaj pojazdu
 * @property {PolishVehicleRegistrationCertificateField} przeznaczenie przeznaczenie
 * @property {PolishVehicleRegistrationCertificateField} rokProdukcji rok produkcji
 * @property {PolishVehicleRegistrationCertificateField} dopuszczalnaLadownosc dopuszczalna ładowność
 * @property {PolishVehicleRegistrationCertificateField} najwiekszyDopNaciskOsi największy dop. nacisk osi
 * @property {PolishVehicleRegistrationCertificateField} nrKartyPojazdu nr karty pojazdu
 * @property {PolishVehicleRegistrationCertificateField} kodIdentyfikacyjny kod identyfikacyjny
 * @property {PolishVehicleRegistrationCertificateField} rodzajKod rodzaj - kod
 * @property {PolishVehicleRegistrationCertificateField} podrodzajKod podrodzaj - kod
 * @property {PolishVehicleRegistrationCertificateField} przeznaczenieKod przeznaczenie - kod
 * @property {PolishVehicleRegistrationCertificateField} nieznane1 ?
 * @property {PolishVehicleRegistrationCertificateField} nieznane2 ?
 */

/**
 * @class
 * @param {string} b64Input
 * @property {PolishVehicleRegistrationCertificateData} data
 */
class PolishVehicleRegistrationCertificateDecoder {
  constructor (b64Input) {
    const binInput = Buffer.from(b64Input, 'base64')

    // 4 first bytes are output length
    const outputLength = binInput.readUInt32LE(0)
    const utf16Output = Buffer.alloc(outputLength)
    const compressedInput = binInput.slice(4)

    nrv2eDecompress(compressedInput, utf16Output)
    const textOutput = utf16Output.toString('utf16le')

    const dataFields = textOutput.split('|')

    this.data = {
      format: { name: 'nd.', description: 'identyfikator formatu', value: dataFields[0] },
      seriaDr: { name: 'SERIA DR', description: '', value: dataFields[1] },
      kodTerytorialnyUrzedu: { name: 'nd.', description: '', value: dataFields[2] },
      organWydajacy: { name: 'ORGAN WYDAJĄCY', description: '', value: dataFields.slice(3, 7) },
      numerRejestracyjnyPojazdu: { name: 'A', description: 'numer rejestracyjny pojazdu', value: dataFields[7] },
      markaPojazdu: { name: 'D.1', description: 'marka pojazdu', value: dataFields[8] },
      typPojazdu: { name: 'D.2', description: 'typ pojazdu', value: dataFields[9] },
      wariantPojazdu: { name: 'D.2', description: 'wariant, jeżeli występuje', value: dataFields[10] },
      wersjaPojazdu: { name: 'D.2', description: 'wersja, jeżeli występuje', value: dataFields[11] },
      modelPojazdu: { name: 'D.3', description: 'model pojazdu', value: dataFields[12] },
      numerIdentyfikacyjnyPojazdu: { name: 'E', description: 'numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)', value: dataFields[13] },
      dataWydaniaDowoduRejestracyjnego: { name: 'I', description: 'data wydania dowodu rejestracyjnego (YYYY-MM-DD)', value: dataFields[14] },
      okresWaznosciDowoduRejestracyjnego: { name: 'H', description: 'okres ważności dowodu, jeżeli występuje takie ograniczenie', value: dataFields[15] },
      pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego', value: dataFields[16] },
      imiePosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'imię posiadacza dowodu rejestracyjnego', value: dataFields[17] },
      nazwiskoPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'nazwisko posiadacza dowodu rejestracyjnego', value: dataFields[18] },
      nazwaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'nazwa posiadacza dowodu rejestracyjnego', value: dataFields[19] },
      numerPESELLubREGONPosiadaczaDowoduRejestracyjnego: { name: 'C.1.2', description: 'numer PESEL lub REGON dowodu rejestracyjnego', value: dataFields[20] },
      kodPocztowyPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'kod pocztowy posiadacza dowodu rejestracyjnego', value: dataFields[21] },
      miejscowoscPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'miejscowość posiadacza dowodu rejestracyjnego', value: dataFields[22] },
      gminaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'gmina posiadacza dowodu rejestracyjnego', value: dataFields[23] },
      ulicaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'ulica posiadacza dowodu rejestracyjnego', value: dataFields[24] },
      nrDomuPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'nr domu posiadacza dowodu rejestracyjnego', value: dataFields[25] },
      nrMieszkaniaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'nr mieszkania posiadacza dowodu rejestracyjnego', value: dataFields[26] },
      pelneNazwiskoLubNazwaWlascicielaPojazdu: { name: 'C.2.1', description: 'pełne nazwisko lub nazwa właściciela pojazdu', value: dataFields[27] },
      imieWlascicielaPojazdu: { name: 'C.2.1', description: 'imię właściciela pojazdu', value: dataFields[28] },
      nazwiskoWlascicielaPojazdu: { name: 'C.2.1', description: 'nazwisko właściciela pojazdu', value: dataFields[29] },
      nazwaWlascicielaPojazdu: { name: 'C.2.1', description: 'nazwa właściciela pojazdu', value: dataFields[30] },
      numerPESELLubREGONWlascicielaPojazdu: { name: 'C.2.2', description: 'numer PESEL lub REGON właściciela pojazdu', value: dataFields[31] },
      kodPocztowyWlascicielaPojazdu: { name: 'C.2.3', description: 'kod pocztowy właściciela pojazdu', value: dataFields[32] },
      miejscowoscWlascicielaPojazdu: { name: 'C.2.3', description: 'miejscowość właściciela pojazdu', value: dataFields[33] },
      gminaWlascicielaPojazdu: { name: 'C.2.3', description: 'gmina właściciela pojazdu', value: dataFields[34] },
      ulicaWlascicielaPojazdu: { name: 'C.2.3', description: 'ulica właściciela pojazdu', value: dataFields[35] },
      nrDomuWlascicielaPojazdu: { name: 'C.2.3', description: 'nr domu właściciela pojazdu', value: dataFields[36] },
      nrMieszkaniaWlascicielaPojazdu: { name: 'C.2.3', description: 'nr mieszkania właściciela pojazdu', value: dataFields[37] },
      maksymalnaMasaCalkowitaPojazduKg: { name: 'F.1', description: 'maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)', value: dataFields[38] },
      dopuszczalnaMasaCalkowitaPojazduKg: { name: 'F.2', description: 'dopuszczalna masa całkowita pojazdu (w kg)', value: dataFields[39] },
      dopuszczalnaMasaCalkowitaZespoluPojazdowKg: { name: 'F.3', description: 'dopuszczalna masa całkowita zespołu pojazdów (w kg)', value: dataFields[40] },
      masaWlasnaPojazduKg: { name: 'G', description: 'masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)', value: dataFields[41] },
      kategoriaPojazdu: { name: 'J', description: 'kategoria pojazdu', value: dataFields[42] },
      numerSwiadectwaHomologacjiTypuPojazdu: { name: 'K', description: 'numer świadectwa homologacji typu pojazdu, jeżeli występuje', value: dataFields[43] },
      liczbaOsi: { name: 'L', description: 'liczba osi', value: dataFields[44] },
      maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg: { name: 'O.1', description: 'maksymalna masa całkowita przyczepy z hamulcem (w kg)', value: dataFields[45] },
      maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg: { name: 'O.2', description: 'maksymalna masa całkowita przyczepy bez hamulca (w kg)', value: dataFields[46] },
      stosunekMocyDoMasyWlasnejKWkg: { name: 'Q', description: 'stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów', value: dataFields[47] },
      pojemnoscSilnikaCm3: { name: 'P.1', description: 'pojemność silnika (w cm3)', value: dataFields[48] },
      maksymalnaMocNettoSilnikaKW: { name: 'P.2', description: 'maksymalna moc netto silnika (w kW)', value: dataFields[49] },
      rodzajPaliwa: { name: 'P.3', description: 'rodzaj paliwa', value: dataFields[50] },
      dataPierwszejRejestracjiPojazdu: { name: 'B', description: 'data pierwszej rejestracji pojazdu (YYYY-MM-DD)', value: dataFields[51] },
      liczbaMiejscSiedzacych: { name: 'S.1', description: 'liczba miejsc siedzących, włączając siedzenie kierowcy', value: dataFields[52] },
      liczbaMiejscStojacych: { name: 'S.2', description: 'liczba miejsc stojących, jeżeli występuje', value: dataFields[53] },
      rodzajPojazdu: { name: 'RODZAJ POJAZDU', description: '', value: dataFields[54] },
      przeznaczenie: { name: 'PRZEZNACZENIE', description: '', value: dataFields[55] },
      rokProdukcji: { name: 'ROK PRODUKCJI', description: '', value: dataFields[56] },
      dopuszczalnaLadownosc: { name: 'DOPUSZCZALNA ŁADOWNOŚĆ', description: '', value: dataFields[57] },
      najwiekszyDopNaciskOsi: { name: 'NAJWIĘKSZY DOP. NACISK OSI', description: '', value: dataFields[58] },
      nrKartyPojazdu: { name: 'NR KARTY POJAZDU', description: '', value: dataFields[59] },
      kodIdentyfikacyjny: { name: '?', description: 'kod identyfikacyjny', value: dataFields[60] },
      rodzajKod: { name: '?', description: 'rodzaj - kod', value: dataFields[61] },
      podrodzajKod: { name: '?', description: 'podrodzaj - kod', value: dataFields[62] },
      przeznaczenieKod: { name: '?', description: 'przeznaczenie - kod', value: dataFields[63] },
      nieznane1: { name: '?', description: '', value: dataFields[64] },
      nieznane2: { name: '?', description: '', value: dataFields[65] }
    }
  }
}

PolishVehicleRegistrationCertificateDecoder.PolishVehicleRegistrationCertificateDecoder = PolishVehicleRegistrationCertificateDecoder

module.exports = PolishVehicleRegistrationCertificateDecoder
