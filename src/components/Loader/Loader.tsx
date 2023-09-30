import { Skeleton, Stack } from '@mui/material'

export function Loader() {
  return (
    <Stack>
      <Skeleton width="30%" />
      <Skeleton />
      <Skeleton width="60%" />
      <Skeleton width="40%" />
    </Stack>
  )
}
