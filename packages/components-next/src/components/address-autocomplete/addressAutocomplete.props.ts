import type { Address } from '@/components/address-autocomplete/addressAutocomplete.type'
import type { AutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import type { PublicProps } from '@/types/props.type'

export interface AddressAutocompleteProps extends Omit<AutocompleteProps<Address | null>, 'displayFn' | 'filter' | 'items'> {}

export type AddressAutocompletePublicProps = PublicProps<AddressAutocompleteProps>
