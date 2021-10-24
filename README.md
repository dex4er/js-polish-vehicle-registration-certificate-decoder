# polish-vehicle-registration-certificate-decoder

<!-- markdownlint-disable MD013 -->

[![Build Status](https://api.travis-ci.com/dex4er/js-polish-vehicle-registration-certificate-decoder.svg)](https://app.travis-ci.com/github/dex4er/js-polish-vehicle-registration-certificate-decoder) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-polish-vehicle-registration-certificate-decoder/badge.svg)](https://coveralls.io/github/dex4er/js-polish-vehicle-registration-certificate-decoder) [![npm](https://img.shields.io/npm/v/polish-vehicle-registration-certificate-decoder.svg)](https://www.npmjs.com/package/polish-vehicle-registration-certificate-decoder)

<!-- markdownlint-enable MD013 -->

Decode Polish Vehicle Registration Certificate Aztec 2D barcode data.

## Requirements

This is ESM module which requires ES2020 and Node >= 14.

## Installation

```shell
npm install polish-vehicle-registration-certificate-decoder
```

_Additionally for Typescript:_

```shell
npm install -D @types/node
```

## Usage

```js
import PolishVehicleRegistrationCertificateDecoder from 'polish-vehicle-registration-certificate-decoder'
```

or:

```js
import {
  PolishVehicleRegistrationCertificateDecoder,
  PolishVehicleRegistrationCertificateNewFormatData,
  PolishVehicleRegistrationCertificateOldFormatData,
} from 'polish-vehicle-registration-certificate-decoder'
```

### constructor

```js
const decoder = new PolishVehicleRegistrationCertificateDecoder(b64Input)
```

_Arguments:_

- `b64Input` is a string with base64 data scanned from Aztec 2D barcode

## data

Property which contains decoded data object. This object is an instance of
`PolishVehicleRegistrationCertificateNewFormatData` or
`PolishVehicleRegistrationCertificateOldFormatData` class. Each property of this
data object is an object with `name`, `description` and `value` properties.
Object for `rodzajPaliwa` has additional `valueDescription` property.

_Example:_

<!-- markdownlint-disable MD013 -->

```js
if (decoder.data instanceof PolishVehicleRegistrationCertificateNewFormatData) {
  console.log(decoder.data.format)
} else if (decoder.data instanceof PolishVehicleRegistrationCertificateOldFormatData) {
  console.log(decoder.data.adresPosiadaczaDowoduRejestracyjnego)
}
```

<!-- markdownlint-enable MD013 -->

Full example of new format data:

```js
console.log(JSON.strinfigy(decoder.data, null, 2))
```

Output:

<!-- markdownlint-disable MD013 -->

```json
{
  "format": {
    "name": "nd.",
    "description": "identyfikator formatu",
    "value": "XXC1"
  },
  "seriaDr": {
    "name": "SERIA DR",
    "description": "",
    "value": "AAA0007046"
  },
  "kodTerytorialnyUrzedu": {
    "name": "nd.",
    "description": "",
    "value": "1465058"
  },
  "organWydajacy": {
    "name": "ORGAN WYDAJĄCY",
    "description": "",
    "value": ["PREZYDENT M. ST. WARSZAWY", "DZIELNICA MOKOTÓW", "UL. RAKOWIECKA 25/27", "02-517 WARSZAWA"]
  },
  "numerRejestracyjnyPojazdu": {
    "name": "A",
    "description": "numer rejestracyjny pojazdu",
    "value": "DMI 1PNK"
  },
  "markaPojazdu": {
    "name": "D.1",
    "description": "marka pojazdu",
    "value": "TOYOTA"
  },
  "typPojazdu": {
    "name": "D.2",
    "description": "typ pojazdu",
    "value": "E12J"
  },
  "wariantPojazdu": {
    "name": "D.2",
    "description": "wariant, jeżeli występuje",
    "value": "ZZE120(H)"
  },
  "wersjaPojazdu": {
    "name": "D.2",
    "description": "wersja, jeżeli występuje",
    "value": ""
  },
  "modelPojazdu": {
    "name": "D.3",
    "description": "model pojazdu",
    "value": "COROLLA"
  },
  "numerIdentyfikacyjnyPojazdu": {
    "name": "E",
    "description": "numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)",
    "value": "JTDKM28E100089120"
  },
  "dataWydaniaDowoduRejestracyjnego": {
    "name": "I",
    "description": "data wydania dowodu rejestracyjnego (YYYY-MM-DD)",
    "value": "2013-11-06"
  },
  "okresWaznosciDowoduRejestracyjnego": {
    "name": "H",
    "description": "okres ważności dowodu, jeżeli występuje takie ograniczenie",
    "value": "---"
  },
  "pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.1",
    "description": "pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego",
    "value": "KOWALSKI JAN"
  },
  "imiePosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.1",
    "description": "imię posiadacza dowodu rejestracyjnego",
    "value": "JAN"
  },
  "nazwiskoPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.1",
    "description": "nazwisko posiadacza dowodu rejestracyjnego",
    "value": "KOWALSKI"
  },
  "nazwaPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.1",
    "description": "nazwa posiadacza dowodu rejestracyjnego",
    "value": ""
  },
  "numerPESELLubREGONPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.2",
    "description": "numer PESEL lub REGON posiadacza dowodu rejestracyjnego",
    "value": "82091711022"
  },
  "kodPocztowyPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "kod pocztowy posiadacza dowodu rejestracyjnego",
    "value": "02-517"
  },
  "miejscowoscPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "miejscowość posiadacza dowodu rejestracyjnego",
    "value": "WARSZAWA"
  },
  "gminaPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "gmina posiadacza dowodu rejestracyjnego",
    "value": ""
  },
  "ulicaPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "ulica posiadacza dowodu rejestracyjnego",
    "value": "WAŁBRZYSKA"
  },
  "nrDomuPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "nr domu posiadacza dowodu rejestracyjnego",
    "value": "24"
  },
  "nrMieszkaniaPosiadaczaDowoduRejestracyjnego": {
    "name": "C.1.3",
    "description": "nr mieszkania posiadacza dowodu rejestracyjnego",
    "value": "30"
  },
  "pelneNazwiskoLubNazwaWlascicielaPojazdu": {
    "name": "C.2.1",
    "description": "pełne nazwisko lub nazwa właściciela pojazdu",
    "value": "KOWALSKA MARIA"
  },
  "imieWlascicielaPojazdu": {
    "name": "C.2.1",
    "description": "imię właściciela pojazdu",
    "value": "MARIA"
  },
  "nazwiskoWlascicielaPojazdu": {
    "name": "C.2.1",
    "description": "nazwisko właściciela pojazdu",
    "value": "KOWALSKA"
  },
  "nazwaWlascicielaPojazdu": {
    "name": "C.2.1",
    "description": "nazwa właściciela pojazdu",
    "value": ""
  },
  "numerPESELLubREGONWlascicielaPojazdu": {
    "name": "C.2.2",
    "description": "numer PESEL lub REGON właściciela pojazdu",
    "value": "88030971022"
  },
  "kodPocztowyWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "kod pocztowy właściciela pojazdu",
    "value": "02-517"
  },
  "miejscowoscWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "miejscowość właściciela pojazdu",
    "value": "WARSZAWA"
  },
  "gminaWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "gmina właściciela pojazdu",
    "value": ""
  },
  "ulicaWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "ulica właściciela pojazdu",
    "value": "WAŁBRZYSKA"
  },
  "nrDomuWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "nr domu właściciela pojazdu",
    "value": "24"
  },
  "nrMieszkaniaWlascicielaPojazdu": {
    "name": "C.2.3",
    "description": "nr mieszkania właściciela pojazdu",
    "value": "30"
  },
  "maksymalnaMasaCalkowitaPojazduKg": {
    "name": "F.1",
    "description": "maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)",
    "value": "1655"
  },
  "dopuszczalnaMasaCalkowitaPojazduKg": {
    "name": "F.2",
    "description": "dopuszczalna masa całkowita pojazdu (w kg)",
    "value": "1655"
  },
  "dopuszczalnaMasaCalkowitaZespoluPojazdowKg": {
    "name": "F.3",
    "description": "dopuszczalna masa całkowita zespołu pojazdów (w kg)",
    "value": "2655"
  },
  "masaWlasnaPojazduKg": {
    "name": "G",
    "description": "masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)",
    "value": "1205"
  },
  "kategoriaPojazdu": {
    "name": "J",
    "description": "kategoria pojazdu",
    "value": "M1"
  },
  "numerSwiadectwaHomologacjiTypuPojazdu": {
    "name": "K",
    "description": "numer świadectwa homologacji typu pojazdu, jeżeli występuje",
    "value": "e11*2001/116*0180*04"
  },
  "liczbaOsi": {
    "name": "L",
    "description": "liczba osi",
    "value": "2"
  },
  "maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg": {
    "name": "O.1",
    "description": "maksymalna masa całkowita przyczepy z hamulcem (w kg)",
    "value": "1000"
  },
  "maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg": {
    "name": "O.2",
    "description": "maksymalna masa całkowita przyczepy bez hamulca (w kg)",
    "value": "450"
  },
  "stosunekMocyDoMasyWlasnejKWkg": {
    "name": "Q",
    "description": "stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów",
    "value": "---"
  },
  "pojemnoscSilnikaCm3": {
    "name": "P.1",
    "description": "pojemność silnika (w cm3)",
    "value": "1398,00"
  },
  "maksymalnaMocNettoSilnikaKW": {
    "name": "P.2",
    "description": "maksymalna moc netto silnika (w kW)",
    "value": "71,00"
  },
  "rodzajPaliwa": {
    "name": "P.3",
    "description": "rodzaj paliwa",
    "value": "P",
    "valueDescription": "benzyna"
  },
  "dataPierwszejRejestracjiPojazdu": {
    "name": "B",
    "description": "data pierwszej rejestracji pojazdu (YYYY-MM-DD)",
    "value": "2005-07-01"
  },
  "liczbaMiejscSiedzacych": {
    "name": "S.1",
    "description": "liczba miejsc siedzących, włączając siedzenie kierowcy",
    "value": "5"
  },
  "liczbaMiejscStojacych": {
    "name": "S.2",
    "description": "liczba miejsc stojących, jeżeli występuje",
    "value": "---"
  },
  "rodzajPojazdu": {
    "name": "RODZAJ POJAZDU",
    "description": "",
    "value": "SAMOCHÓD OSOBOWY"
  },
  "przeznaczenie": {
    "name": "PRZEZNACZENIE",
    "description": "",
    "value": "---"
  },
  "rokProdukcji": {
    "name": "ROK PRODUKCJI",
    "description": "",
    "value": "2005"
  },
  "dopuszczalnaLadownosc": {
    "name": "DOPUSZCZALNA ŁADOWNOŚĆ",
    "description": "",
    "value": "---"
  },
  "najwiekszyDopNaciskOsi": {
    "name": "NAJWIĘKSZY DOP. NACISK OSI",
    "description": "",
    "value": "8,82"
  },
  "nrKartyPojazdu": {
    "name": "NR KARTY POJAZDU",
    "description": "",
    "value": "AAA0000000"
  },
  "kodIdentyfikacyjny": {
    "name": "OCR",
    "description": "kod identyfikacyjny",
    "value": "02650008000158"
  },
  "rodzajKod": {
    "name": "?",
    "description": "rodzaj - kod",
    "value": "03"
  },
  "podrodzajKod": {
    "name": "?",
    "description": "podrodzaj - kod",
    "value": "02"
  },
  "przeznaczenieKod": {
    "name": "?",
    "description": "przeznaczenie - kod",
    "value": "000"
  },
  "nieznane1": {
    "name": "?",
    "description": "",
    "value": "2000NNNNNNNN"
  },
  "nieznane2": {
    "name": "?",
    "description": "",
    "value": "009002001"
  }
}
```

<!-- markdownlint-enable MD013 -->

## License

Copyright (c) 2018-2021 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[GPL-2.0](https://opensource.org/licenses/GPL-2.0)
