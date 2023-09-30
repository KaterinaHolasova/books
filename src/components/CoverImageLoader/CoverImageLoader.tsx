import { Skeleton } from '@mui/material'

export default function CoverImageLoader() {
  return (
    <Skeleton
      height="100%"
      sx={{
        aspectRatio: 210 / 297,
      }}
      width="100%"
    />
  )
}
