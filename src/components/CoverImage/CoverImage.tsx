import { Box, Card, CardContent } from '@mui/material'
import { CoverImageProps } from './types'
import Image from 'next/image'
import { imageWrapperSx } from './styles'

export function CoverImage(props: CoverImageProps) {
  const { alt, image } = props

  return (
    <Card
      sx={{
        aspectRatio: 210 / 297,
      }}
    >
      <CardContent sx={{ height: '100%' }}>
        <Box sx={imageWrapperSx}>
          <Image alt={alt} fill objectFit="cover" src={`/cover-images/${image}`} />
        </Box>
      </CardContent>
    </Card>
  )
}
