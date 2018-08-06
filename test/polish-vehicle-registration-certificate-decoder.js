'use strict'

const t = require('tap')
require('tap-given')(t)

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
chai.should()

const PolishVehicleRegistrationCertificateDecoder = require('../lib/polish-vehicle-registration-certificate-decoder')

Feature('Test nrv2eDecompress', () => {
  Scenario('Decompress file', () => {
    let b64Input
    let decoder

    Given('binary input as Base64', () => {
      b64Input = 'BgQAANtYAAJDAPkxAHwAQXIw7zcGNN4ANiox+w81HrUGOP8eUABSAEUA+1oAWQBEDv9OAFQAIABN3wAuClMAvlQPV/eKUhq9Wg5X7k58UtcWSVq9TF5J79pBZ+5PAEsG12bTSm5GVQBM/ntSAEH7L1dj+0MAS1vvMvovewo3Ut4wDi39HjEAN6Pbl0FNe3YgPt5Q3kv3IlSevVnX1z9FMmuCShL2WgBaG9umKADvSAApJnx75k+itwZMAEx9X0rvbkSOTXtOOF/DRy0WOW53fPYLFoMzLr0xAi3DGnevLQOCfJ/vQZ5TcBZrN0oa9k4AfA82Q4QaDzj3q8deN6sN7zIE/1x8lbMnQdwBQi5ZT86jL2tqNAr2MwAw34xSH+uPSVPYFxZThBMzON8AMJM5wQA3MwRcMX7bNcET2jInwyedE01HZ4dlM94qKy0DL38fNgAqeBszSxOvNIeKfHM7fCLxNQAwVkMtdzl7Xiw/YMyrFzxQACBWw+Hza7c3C93/NWuHg1OWRquPQ5KP02K9IBZT4QZC9oNZU7aXFiOX83U4ADJFC7ADhrNVCyOW8w9qMbEnZhdHbHxjdjIT7E4DW0M3OQuGaxYmCSSSSSr/'
    })

    When('decoder object is created', () => {
      decoder = new PolishVehicleRegistrationCertificateDecoder(b64Input)
    })

    Then('data property contains correct values', () => {
      decoder.data.should.deep.equal({
        format: {
          name: 'nd.',
          description: 'identyfikator formatu',
          value: 'XXC1'
        },
        seriaDr: {
          name: 'SERIA DR',
          description: '',
          value: 'AAA0007046'
        },
        kodTerytorialnyUrzedu: {
          name: 'nd.',
          description: '',
          value: '1465058'
        },
        organWydajacy: {
          name: 'ORGAN WYDAJĄCY',
          description: '',
          value: [
            'PREZYDENT M. ST. WARSZAWY',
            'DZIELNICA MOKOTÓW',
            'UL. RAKOWIECKA 25/27',
            '02-517 WARSZAWA'
          ]
        },
        numerRejestracyjnyPojazdu: {
          name: 'A',
          description: 'numer rejestracyjny pojazdu',
          value: 'DMI 1PNK'
        },
        markaPojazdu: {
          name: 'D.1',
          description: 'marka pojazdu',
          value: 'TOYOTA'
        },
        typPojazdu: {
          name: 'D.2',
          description: 'typ pojazdu',
          value: 'E12J'
        },
        wariantPojazdu: {
          name: 'D.2',
          description: 'wariant, jeżeli występuje',
          value: 'ZZE120(H)'
        },
        wersjaPojazdu: {
          name: 'D.2',
          description: 'wersja, jeżeli występuje',
          value: ''
        },
        modelPojazdu: {
          name: 'D.3',
          description: 'model pojazdu',
          value: 'COROLLA'
        },
        numerIdentyfikacyjnyPojazdu: {
          name: 'E',
          description: 'numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)',
          value: 'JTDKM28E100089120'
        },
        dataWydaniaDowoduRejestracyjnego: {
          name: 'I',
          description: 'data wydania dowodu rejestracyjnego (YYYY-MM-DD)',
          value: '2013-11-06'
        },
        okresWaznosciDowoduRejestracyjnego: {
          name: 'H',
          description: 'okres ważności dowodu, jeżeli występuje takie ograniczenie',
          value: '---'
        },
        pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.1',
          description: 'pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego',
          value: 'KOWALSKI JAN'
        },
        imiePosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.1',
          description: 'imię posiadacza dowodu rejestracyjnego',
          value: 'JAN'
        },
        nazwiskoPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.1',
          description: 'nazwisko posiadacza dowodu rejestracyjnego',
          value: 'KOWALSKI'
        },
        nazwaPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.1',
          description: 'nazwa posiadacza dowodu rejestracyjnego',
          value: ''
        },
        numerPESELLubREGONPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.2',
          description: 'numer PESEL lub REGON dowodu rejestracyjnego',
          value: '82091711022'
        },
        kodPocztowyPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'kod pocztowy posiadacza dowodu rejestracyjnego',
          value: '02-517'
        },
        miejscowoscPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'miejscowość posiadacza dowodu rejestracyjnego',
          value: 'WARSZAWA'
        },
        gminaPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'gmina posiadacza dowodu rejestracyjnego',
          value: ''
        },
        ulicaPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'ulica posiadacza dowodu rejestracyjnego',
          value: 'WAŁBRZYSKA'
        },
        nrDomuPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'nr domu posiadacza dowodu rejestracyjnego',
          value: '24'
        },
        nrMieszkaniaPosiadaczaDowoduRejestracyjnego: {
          name: 'C.1.3',
          description: 'nr mieszkania posiadacza dowodu rejestracyjnego',
          value: '30'
        },
        pelneNazwiskoLubNazwaWlascicielaPojazdu: {
          name: 'C.2.1',
          description: 'pełne nazwisko lub nazwa właściciela pojazdu',
          value: 'KOWALSKA MARIA'
        },
        imieWlascicielaPojazdu: {
          name: 'C.2.1',
          description: 'imię właściciela pojazdu',
          value: 'MARIA'
        },
        nazwiskoWlascicielaPojazdu: {
          name: 'C.2.1',
          description: 'nazwisko właściciela pojazdu',
          value: 'KOWALSKA'
        },
        nazwaWlascicielaPojazdu: {
          name: 'C.2.1',
          description: 'nazwa właściciela pojazdu',
          value: ''
        },
        numerPESELLubREGONWlascicielaPojazdu: {
          name: 'C.2.2',
          description: 'numer PESEL lub REGON właściciela pojazdu',
          value: '88030971022'
        },
        kodPocztowyWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'kod pocztowy właściciela pojazdu',
          value: '02-517'
        },
        miejscowoscWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'miejscowość właściciela pojazdu',
          value: 'WARSZAWA'
        },
        gminaWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'gmina właściciela pojazdu',
          value: ''
        },
        ulicaWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'ulica właściciela pojazdu',
          value: 'WAŁBRZYSKA'
        },
        nrDomuWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'nr domu właściciela pojazdu',
          value: '24'
        },
        nrMieszkaniaWlascicielaPojazdu: {
          name: 'C.2.3',
          description: 'nr mieszkania właściciela pojazdu',
          value: '30'
        },
        maksymalnaMasaCalkowitaPojazduKg: {
          name: 'F.1',
          description: 'maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)',
          value: '1655'
        },
        dopuszczalnaMasaCalkowitaPojazduKg: {
          name: 'F.2',
          description: 'dopuszczalna masa całkowita pojazdu (w kg)',
          value: '1655'
        },
        dopuszczalnaMasaCalkowitaZespoluPojazdowKg: {
          name: 'F.3',
          description: 'dopuszczalna masa całkowita zespołu pojazdów (w kg)',
          value: '2655'
        },
        masaWlasnaPojazduKg: {
          name: 'G',
          description: 'masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)',
          value: '1205'
        },
        kategoriaPojazdu: {
          name: 'J',
          description: 'kategoria pojazdu',
          value: 'M1'
        },
        numerSwiadectwaHomologacjiTypuPojazdu: {
          name: 'K',
          description: 'numer świadectwa homologacji typu pojazdu, jeżeli występuje',
          value: 'e11*2001/116*0180*04'
        },
        liczbaOsi: {
          name: 'L',
          description: 'liczba osi',
          value: '2'
        },
        maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg: {
          name: 'O.1',
          description: 'maksymalna masa całkowita przyczepy z hamulcem (w kg)',
          value: '1000'
        },
        maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg: {
          name: 'O.2',
          description: 'maksymalna masa całkowita przyczepy bez hamulca (w kg)',
          value: '450'
        },
        stosunekMocyDoMasyWlasnejKWkg: {
          name: 'Q',
          description: 'stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów',
          value: '---'
        },
        pojemnoscSilnikaCm3: {
          name: 'P.1',
          description: 'pojemność silnika (w cm3)',
          value: '1398,00'
        },
        maksymalnaMocNettoSilnikaKW: {
          name: 'P.2',
          description: 'maksymalna moc netto silnika (w kW)',
          value: '71,00'
        },
        rodzajPaliwa: {
          name: 'P.3',
          description: 'rodzaj paliwa',
          value: 'P '
        },
        dataPierwszejRejestracjiPojazdu: {
          name: 'B',
          description: 'data pierwszej rejestracji pojazdu (YYYY-MM-DD)',
          value: '2005-07-01'
        },
        liczbaMiejscSiedzacych: {
          name: 'S.1',
          description: 'liczba miejsc siedzących, włączając siedzenie kierowcy',
          value: '5'
        },
        liczbaMiejscStojacych: {
          name: 'S.2',
          description: 'liczba miejsc stojących, jeżeli występuje',
          value: '---'
        },
        rodzajPojazdu: {
          name: 'RODZAJ POJAZDU',
          description: '',
          value: 'SAMOCHÓD OSOBOWY'
        },
        przeznaczenie: {
          name: 'PRZEZNACZENIE',
          description: '',
          value: '---'
        },
        rokProdukcji: {
          name: 'ROK PRODUKCJI',
          description: '',
          value: '2005'
        },
        dopuszczalnaLadownosc: {
          name: 'DOPUSZCZALNA ŁADOWNOŚĆ',
          description: '',
          value: '---'
        },
        najwiekszyDopNaciskOsi: {
          name: 'NAJWIĘKSZY DOP. NACISK OSI',
          description: '',
          value: '8,82'
        },
        nrKartyPojazdu: {
          name: 'NR KARTY POJAZDU',
          description: '',
          value: 'AAA0000000'
        },
        kodIdentyfikacyjny: {
          name: 'OCR',
          description: 'kod identyfikacyjny',
          value: '02650008000158'
        },
        rodzajKod: {
          name: '?',
          description: 'rodzaj - kod',
          value: '03'
        },
        podrodzajKod: {
          name: '?',
          description: 'podrodzaj - kod',
          value: '02'
        },
        przeznaczenieKod: {
          name: '?',
          description: 'przeznaczenie - kod',
          value: '000'
        },
        nieznane1: {
          name: '?',
          description: '',
          value: '2000NNNNNNNN'
        },
        nieznane2: {
          name: '?',
          description: '',
          value: '009002001'
        }
      })
    })
  })
})
