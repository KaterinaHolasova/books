import { FormLabel, FormControl as MuiFormControl } from '@mui/material'
import { FieldValues, TextFieldElement } from 'react-hook-form-mui'
import { FormControlProps } from './types'

export function FormControl<T extends FieldValues>(props: FormControlProps<T>) {
  const { label, ...rest } = props

  return (
    <MuiFormControl>
      <FormLabel>{label}</FormLabel>
      <TextFieldElement {...rest} />
    </MuiFormControl>
  )
}
