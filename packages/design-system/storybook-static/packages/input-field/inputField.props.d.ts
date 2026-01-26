import { InputField } from '../../types/input.type';
export interface InputFieldProps extends InputField {
    /**
     * Whether the input is in an error state.
     * @default false
     */
    isError?: boolean;
    /**
     * The size of the input field.
     * @default 'md'
     */
    size?: 'md' | 'sm';
}
