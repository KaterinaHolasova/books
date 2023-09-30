import { FieldValues, SubmitHandler } from 'react-hook-form'

export type BookFormProps<T extends FieldValues> = {
  defaultValues?: T
  onSubmit: SubmitHandler<T>
}
