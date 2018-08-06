/**
 * @property {PolishVehicleRegistrationCertificateField} seriaDr seria dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateIssuer} organWydajacy organ wydający (4 linie tekstu)
 * @property {PolishVehicleRegistrationCertificateField} numerRejestracyjnyPojazdu numer rejestracyjny pojazdu
 * @property {PolishVehicleRegistrationCertificateField} markaPojazdu marka pojazdu
 * @property {PolishVehicleRegistrationCertificateField} modelPojazdu model pojazdu numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)
 * @property {PolishVehicleRegistrationCertificateField} numerIdentyfikacyjnyPojazdu data wydania dowodu rejestracyjnego (YYYY-MM-DD)
 * @property {PolishVehicleRegistrationCertificateField} dataWydaniaDowoduRejestracyjnego okres ważności dowodu, jeżeli występuje takie ograniczenie
 * @property {PolishVehicleRegistrationCertificateField} okresWaznosciDowoduRejestracyjnego okres ważności dowodu, jeżeli występuje takie ograniczenie
 * @property {PolishVehicleRegistrationCertificateField} pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateField} numerPESELLubREGONPosiadaczaDowoduRejestracyjnego numer PESEL lub REGON dowodu rejestracyjnego
 * @property {PolishVehicleRegistrationCertificateAddress} adresPosiadaczaDowoduRejestracyjnego kod pocztowy posiadacza dowodu rejestracyjnego (2 linie tekstu)
 * @property {PolishVehicleRegistrationCertificateField} pelneNazwiskoLubNazwaWlascicielaPojazdu pełne nazwisko lub nazwa właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateField} numerPESELLubREGONWlascicielaPojazdu numer PESEL lub REGON właściciela pojazdu
 * @property {PolishVehicleRegistrationCertificateAddress} adresWlascicielaPojazdu kod pocztowy właściciela pojazdu (2 linie tekstu)
 * @property {PolishVehicleRegistrationCertificateField} maksymalnaMasaCalkowitaPojazduKg maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)
 * @property {PolishVehicleRegistrationCertificateField} dopuszczalnaMasaCalkowitaPojazduKg dopuszczalna masa całkowita pojazdu (w kg)
 * @property {PolishVehicleRegistrationCertificateField} dopuszczalnaMasaCalkowitaZespoluPojazdowKg dopuszczalna masa całkowita zespołu pojazdów (w kg)
 * @property {PolishVehicleRegistrationCertificateField} masaWlasnaPojazduKg masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)
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
 */
class PolishVehicleRegistrationCertificateOldFormatData {}

module.exports = PolishVehicleRegistrationCertificateOldFormatData
