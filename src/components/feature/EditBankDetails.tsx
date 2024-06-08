import { Button, Card, Typography } from "@mui/material";
import { AccountInput } from "../atoms";

export function EditBankDetails(){
  return (
    <Card elevation={0} sx={{
      borderRadius: '28px',
      px: 9.5,
      py: 4,
      display: 'flex',
      flexDirection: 'column',
      mx: 'auto',
      width: '50%',
      mt: 7
    }}>
      <Typography color='primary' variant="h6" textAlign='center' fontWeight='bold' mb={6.5}>Bank Details</Typography>

      <AccountInput />

      <Button variant="contained" color='primary' fullWidth sx={{ mt: 6.5 }}>Save Changes</Button>
    </Card>
  )
}