/// <reference types="node" />

export type PolishVehicleRegistrationCertificateFuelCode = 'P' | 'D' | 'M' | 'LPG' | 'CNG' | 'H' | 'LNG' | 'BD' | 'E85' | 'EE' | '999'

export interface PolishVehicleRegistrationCertificateFuel {
  name: string
  description: string
  value: PolishVehicleRegistrationCertificateFuelCode
  valueDescription: string
}

export interface PolishVehicleRegistrationCertificateIssuer {
  name: string
  description: string
  value: [string, string, string, string]
}

export interface PolishVehicleRegistrationCertificateAddress {
  name: string
  description: string
  value: [string, string]
}

export interface PolishVehicleRegistrationCertificateValue {
  name: string
  description: string
  value: string
}

export type PolishVehicleRegistrationCertificateField = PolishVehicleRegistrationCertificateFuel | PolishVehicleRegistrationCertificateIssuer | PolishVehicleRegistrationCertificateAddress | PolishVehicleRegistrationCertificateValue
