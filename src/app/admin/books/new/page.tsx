'use client'
import { CoverImage } from '@/components/CoverImage'
import { COVER_IMAGE_OPTIONS } from '@/constants/coverImageOptions'
import { createBook } from '@/helpers/createBook'
import { CoverImage as CoverImageType } from '@/types/book'
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

export default function Page() {
  const router = useRouter()
  const [coverImage, setCoverImage] = useState<CoverImageType>()

  return (
    <FormContainer onSuccess={createBook}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7} md={6} lg={4}>
          <Typography variant="h1" gutterBottom>
            Add a new book
          </Typography>
          <Box mb={{ xs: 3, lg: 4 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <TextFieldElement name="title" required />
              </FormControl>
              <FormControl>
                <FormLabel>Author</FormLabel>
                <TextFieldElement name="author" required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <TextFieldElement name="description" multiline rows={4} />
              </FormControl>
              <FormControl>
                <FormLabel>Cover image</FormLabel>
                <TextFieldElement
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
                </TextFieldElement>
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
        </Grid>
        <Grid item xs={12} sm={5} md={6} lg={5}>
          <Typography variant="h2" gutterBottom>
            Book preview
          </Typography>
          {coverImage ? (
            <CoverImage image={coverImage} />
          ) : (
            <Alert severity="info">Select cover image to see the book preview</Alert>
          )}
        </Grid>
      </Grid>
    </FormContainer>
  )
}
