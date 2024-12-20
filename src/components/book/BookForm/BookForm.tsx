import { Alert, Box, Button, CircularProgress, MenuItem, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FieldValues, FormContainer } from 'react-hook-form-mui'
import { BookLayout } from '../BookLayout'
import { BookFormProps } from './types'
import { useState } from 'react'
import { Category, CoverImage as CoverImageType } from '@/types/book'
import { COVER_IMAGE_OPTIONS } from '@/constants/coverImageOptions'
import { FormControl } from '../../common/FormControl'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'

export function BookForm<T extends FieldValues>(props: BookFormProps<T>) {
  const { defaultValues, isMutating, onSubmit } = props
  const router = useRouter()
  const [coverImage, setCoverImage] = useState<CoverImageType>(defaultValues?.coverImage)

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
      <BookLayout
        coverImage={coverImage}
        coverImagePlaceholder={
          <Alert severity="info">Select cover image to see the book preview</Alert>
        }
      >
        <Box mb={{ xs: 2, sm: 3, lg: 4 }}>
          <Stack spacing={2}>
            <FormControl label="Title" name="title" required />
            <FormControl label="Author" name="author" required />
            <FormControl label="Category" name="category" required select>
              {(Object.keys(CATEGORY_LABEL_MAP) as Category[]).map((value) => (
                <MenuItem key={value} value={value}>
                  {CATEGORY_LABEL_MAP[value]}
                </MenuItem>
              ))}
            </FormControl>
            <FormControl label="Description" name="description" multiline rows={4} />
            <FormControl
              label="Cover image"
              name="coverImage"
              onChange={(e) => setCoverImage(e.target.value as CoverImageType)}
              required
              select
            >
              {COVER_IMAGE_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </FormControl>
          </Stack>
        </Box>
        <Stack direction="row">
          <Button fullWidth onClick={() => router.back()} variant="outlined">
            Cancel
          </Button>
          <Button
            disabled={isMutating}
            fullWidth
            startIcon={isMutating && <CircularProgress />}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </BookLayout>
    </FormContainer>
  )
}
