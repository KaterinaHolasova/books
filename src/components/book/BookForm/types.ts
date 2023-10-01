import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'

export type BookFormProps<T extends FieldValues> = {
  defaultValues?: DefaultValues<T>
  isMutating: boolean
  onSubmit: SubmitHandler<T>
}
