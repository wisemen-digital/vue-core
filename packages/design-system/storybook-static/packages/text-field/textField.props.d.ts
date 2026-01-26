import { AutocompleteInput, Input, InputField, InputMeta } from '../../types/input.type';
export interface TextFieldProps extends Input, AutocompleteInput, InputMeta, InputField {
    /**
     * The size of the text field.
     * @default 'md'
     */
    size?: 'md' | 'sm';
    /**
     * The type of the input.
     * @default 'text'
     */
    type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
}
