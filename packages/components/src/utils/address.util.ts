import type { AddressForm } from '@/types/address.type'

export class AddressUtil {
  static formatAddressForm(address: AddressForm | null): string {
    if (address == null) {
      return ''
    }

    return `${address.street} ${address.number}, ${address.postalCode} ${address.city}, ${address.country.toUpperCase()}`
  }
}
