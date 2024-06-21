#!/usr/bin/env -S node --experimental-specifier-resolution=node --experimental-modules --no-warnings --loader ts-node/esm

import {PolishVehicleRegistrationCertificateDecoder} from '../src/polish-vehicle-registration-certificate-decoder.js'

// Scanned from https://www.pwpw.pl/binaries/content/gallery/pwpwcms_pl/Dla_mediow/zdjecia_do_artykulow/2016/03/dsc_1548.jpg
const b64Input: string =
  'BgQAANtYAAJDAPkxAHwAQXIw7zcGNN4ANiox+w81HrUGOP8eUABSAEUA+1oAWQBEDv9OAFQAIABN3wAuClMAvlQPV/eKUhq9Wg5X7k58UtcWSVq9TF5J79pBZ+5PAEsG12bTSm5GVQBM/ntSAEH7L1dj+0MAS1vvMvovewo3Ut4wDi39HjEAN6Pbl0FNe3YgPt5Q3kv3IlSevVnX1z9FMmuCShL2WgBaG9umKADvSAApJnx75k+itwZMAEx9X0rvbkSOTXtOOF/DRy0WOW53fPYLFoMzLr0xAi3DGnevLQOCfJ/vQZ5TcBZrN0oa9k4AfA82Q4QaDzj3q8deN6sN7zIE/1x8lbMnQdwBQi5ZT86jL2tqNAr2MwAw34xSH+uPSVPYFxZThBMzON8AMJM5wQA3MwRcMX7bNcET2jInwyedE01HZ4dlM94qKy0DL38fNgAqeBszSxOvNIeKfHM7fCLxNQAwVkMtdzl7Xiw/YMyrFzxQACBWw+Hza7c3C93/NWuHg1OWRquPQ5KP02K9IBZT4QZC9oNZU7aXFiOX83U4ADJFC7ADhrNVCyOW8w9qMbEnZhdHbHxjdjIT7E4DW0M3OQuGaxYmCSSSSSr/'

const decoder = new PolishVehicleRegistrationCertificateDecoder(b64Input)

console.info(decoder.data.constructor.name.replace(/(?!^)[A-Z]/g, m => ' ' + m.toLowerCase()) + ':')
console.info('')

Object.values(decoder.data).forEach(field => {
  console.info(`${field.name.padStart(30)}: ${field.value}`)
})
