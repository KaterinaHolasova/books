'use client'
import { Box, Button, FormControl, FormLabel, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

export default function Page() {
  const router = useRouter()

  return (
    <FormContainer onSuccess={console.log}>
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
        </Grid>
      </Grid>
    </FormContainer>
  )
}
