import {
  PolishVehicleRegistrationCertificateAddress,
  PolishVehicleRegistrationCertificateFuel,
  PolishVehicleRegistrationCertificateIssuer,
  PolishVehicleRegistrationCertificateValue,
} from './polish-vehicle-registration-certificate-fields.js'

export class PolishVehicleRegistrationCertificateOldFormatData {
  /** seria dowodu rejestracyjnego */
  seriaDr!: PolishVehicleRegistrationCertificateValue
  /** organ wydający (4 linie tekstu) */
  organWydajacy!: PolishVehicleRegistrationCertificateIssuer
  /** numer rejestracyjny pojazdu */
  numerRejestracyjnyPojazdu!: PolishVehicleRegistrationCertificateValue
  /** marka pojazdu */
  markaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** model pojazdu numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy) */
  modelPojazdu!: PolishVehicleRegistrationCertificateValue
  /** numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy) */
  numerIdentyfikacyjnyPojazdu!: PolishVehicleRegistrationCertificateValue
  /** data wydania dowodu rejestracyjnego (YYYY-MM-DD) */
  dataWydaniaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** okres ważności dowodu, jeżeli występuje takie ograniczenie */
  okresWaznosciDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego */
  pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** adres posiadacza dowodu rejestracyjnego (2 linie tekstu) */
  adresPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateAddress
  /** numer PESEL lub REGON dowodu rejestracyjnego */
  numerPESELLubREGONPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** pełne nazwisko lub nazwa właściciela pojazdu */
  pelneNazwiskoLubNazwaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** numer PESEL lub REGON właściciela pojazdu */
  numerPESELLubREGONWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** adres właściciela pojazdu (2 linie tekstu) */
  adresWlascicielaPojazdu!: PolishVehicleRegistrationCertificateAddress
  /** maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg) */
  maksymalnaMasaCalkowitaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** dopuszczalna masa całkowita pojazdu (w kg) */
  dopuszczalnaMasaCalkowitaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** dopuszczalna masa całkowita zespołu pojazdów (w kg) */
  dopuszczalnaMasaCalkowitaZespoluPojazdowKg!: PolishVehicleRegistrationCertificateValue
  /** masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg) */
  masaWlasnaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** liczba osi */
  liczbaOsi!: PolishVehicleRegistrationCertificateValue
  /** maksymalna masa całkowita przyczepy z hamulcem (w kg) */
  maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg!: PolishVehicleRegistrationCertificateValue
  /** maksymalna masa całkowita przyczepy bez hamulca (w kg) */
  maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg!: PolishVehicleRegistrationCertificateValue
  /** stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów */
  stosunekMocyDoMasyWlasnejKWkg!: PolishVehicleRegistrationCertificateValue
  /** pojemność silnika (w cm3) */
  pojemnoscSilnikaCm3!: PolishVehicleRegistrationCertificateValue
  /** maksymalna moc netto silnika (w kW) */
  maksymalnaMocNettoSilnikaKW!: PolishVehicleRegistrationCertificateValue
  /** rodzaj paliwa */
  rodzajPaliwa!: PolishVehicleRegistrationCertificateFuel
  /** data pierwszej rejestracji pojazdu (YYYY-MM-DD) */
  dataPierwszejRejestracjiPojazdu!: PolishVehicleRegistrationCertificateValue
  /** liczba miejsc siedzących, włączając siedzenie kierowcy */
  liczbaMiejscSiedzacych!: PolishVehicleRegistrationCertificateValue
  /** liczba miejsc stojących, jeżeli występuje */
  liczbaMiejscStojacych!: PolishVehicleRegistrationCertificateValue
  /** rodzaj pojazdu */
  rodzajPojazdu!: PolishVehicleRegistrationCertificateValue
  /** przeznaczenie */
  przeznaczenie!: PolishVehicleRegistrationCertificateValue
  /** rok produkcji */
  rokProdukcji!: PolishVehicleRegistrationCertificateValue
  /** dopuszczalna ładowność */
  dopuszczalnaLadownosc!: PolishVehicleRegistrationCertificateValue
  /** największy dop. nacisk osi */
  najwiekszyDopNaciskOsi!: PolishVehicleRegistrationCertificateValue
  /** nr karty pojazdu */
  nrKartyPojazdu!: PolishVehicleRegistrationCertificateValue
  /** kod identyfikacyjny */
  kodIdentyfikacyjny!: PolishVehicleRegistrationCertificateValue
}
