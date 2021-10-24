import {
  PolishVehicleRegistrationCertificateFuel,
  PolishVehicleRegistrationCertificateIssuer,
  PolishVehicleRegistrationCertificateValue,
} from './polish-vehicle-registration-certificate-fields.js'

export class PolishVehicleRegistrationCertificateNewFormatData {
  /** identyfikator formatu */
  format!: PolishVehicleRegistrationCertificateValue
  /** seria dowodu rejestracyjnego */
  seriaDr!: PolishVehicleRegistrationCertificateValue
  /** kod terytorialny urzędu rejestrującego */
  kodTerytorialnyUrzedu!: PolishVehicleRegistrationCertificateValue
  /** organ wydający (4 linie tekstu) */
  organWydajacy!: PolishVehicleRegistrationCertificateIssuer
  /** numer rejestracyjny pojazdu */
  numerRejestracyjnyPojazdu!: PolishVehicleRegistrationCertificateValue
  /** marka pojazdu */
  markaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** typ pojazdu */
  typPojazdu!: PolishVehicleRegistrationCertificateValue
  /** wariant, jeżeli występuje */
  wariantPojazdu!: PolishVehicleRegistrationCertificateValue
  /** wersja, jeżeli występuje */
  wersjaPojazdu!: PolishVehicleRegistrationCertificateValue
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
  /** imię posiadacza dowodu rejestracyjnego */
  imiePosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** nazwisko posiadacza dowodu rejestracyjnego */
  nazwiskoPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** nazwa posiadacza dowodu rejestracyjnego */
  nazwaPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** numer PESEL lub REGON dowodu rejestracyjnego */
  numerPESELLubREGONPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** kod pocztowy posiadacza dowodu rejestracyjnego */
  kodPocztowyPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** miejscowość posiadacza dowodu rejestracyjnego */
  miejscowoscPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** gmina posiadacza dowodu rejestracyjnego */
  gminaPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** ulica posiadacza dowodu rejestracyjnego */
  ulicaPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** nr domu posiadacza dowodu rejestracyjnego */
  nrDomuPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** nr mieszkania posiadacza dowodu rejestracyjnego */
  nrMieszkaniaPosiadaczaDowoduRejestracyjnego!: PolishVehicleRegistrationCertificateValue
  /** pełne nazwisko lub nazwa właściciela pojazdu */
  pelneNazwiskoLubNazwaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** imię właściciela pojazdu */
  imieWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** nazwisko właściciela pojazdu */
  nazwiskoWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** nazwa właściciela pojazdu */
  nazwaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** numer PESEL lub REGON właściciela pojazdu */
  numerPESELLubREGONWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** kod pocztowy właściciela pojazdu */
  kodPocztowyWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** miejscowość właściciela pojazdu */
  miejscowoscWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** gmina właściciela pojazdu */
  gminaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** ulica właściciela pojazdu */
  ulicaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** nr domu właściciela pojazdu */
  nrDomuWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** nr mieszkania właściciela pojazdu */
  nrMieszkaniaWlascicielaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg) */
  maksymalnaMasaCalkowitaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** dopuszczalna masa całkowita pojazdu (w kg) */
  dopuszczalnaMasaCalkowitaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** dopuszczalna masa całkowita zespołu pojazdów (w kg) */
  dopuszczalnaMasaCalkowitaZespoluPojazdowKg!: PolishVehicleRegistrationCertificateValue
  /** masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg) */
  masaWlasnaPojazduKg!: PolishVehicleRegistrationCertificateValue
  /** kategoria pojazdu */
  kategoriaPojazdu!: PolishVehicleRegistrationCertificateValue
  /** numer świadectwa homologacji typu pojazdu, jeżeli występuje */
  numerSwiadectwaHomologacjiTypuPojazdu!: PolishVehicleRegistrationCertificateValue
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
  /** rodzaj - kod */
  rodzajKod!: PolishVehicleRegistrationCertificateValue
  /** podrodzaj - kod */
  podrodzajKod!: PolishVehicleRegistrationCertificateValue
  /** przeznaczenie - kod */
  przeznaczenieKod!: PolishVehicleRegistrationCertificateValue
  /** ? */
  nieznane1!: PolishVehicleRegistrationCertificateValue
  /** ? */
  nieznane2!: PolishVehicleRegistrationCertificateValue
}
