import { Alert, Box, Button, MenuItem, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FieldValues, FormContainer } from 'react-hook-form-mui'
import { BookLayout } from '../BookLayout'
import { BookFormProps } from './types'
import { useState } from 'react'
import { CoverImage as CoverImageType } from '@/types/book'
import { CATEGORY_OPTIONS } from '@/constants/categoryOptions'
import { COVER_IMAGE_OPTIONS } from '@/constants/coverImageOptions'
import { FormControl } from '../FormControl'

export function BookForm<T extends FieldValues>(props: BookFormProps<T>) {
  const { defaultValues, onSubmit } = props
  const router = useRouter()
  const [coverImage, setCoverImage] = useState<CoverImageType>()

  return (
    <FormContainer onSuccess={onSubmit}>
      <BookLayout
        coverImage={coverImage}
        coverImagePlaceholder={
          <Alert severity="info">Select cover image to see the book preview</Alert>
        }
      >
        <Box mb={{ xs: 2, sm: 3, lg: 4 }}>
          <Stack spacing={2}>
            <FormControl defaultValue={defaultValues?.title} name="title" required title="Title" />
            <FormControl
              defaultValue={defaultValues?.author}
              name="author"
              required
              title="Author"
            />
            <FormControl
              defaultValue={defaultValues?.category}
              name="category"
              required
              select
              title="Category"
            >
              {CATEGORY_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </FormControl>
            <FormControl
              defaultValue={defaultValues?.description}
              name="description"
              multiline
              rows={4}
              title="Description"
            />
            <FormControl
              defaultValue={defaultValues?.coverImage}
              name="coverImage"
              onChange={(e) => setCoverImage(e.target.value as CoverImageType)}
              required
              select
              title="Cover image"
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
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </BookLayout>
    </FormContainer>
  )
}
