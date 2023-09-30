import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'

export type BookFormProps<T extends FieldValues> = {
  defaultValues?: DefaultValues<T>
  onSubmit: SubmitHandler<T>
}
