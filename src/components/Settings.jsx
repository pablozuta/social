import { Box, Card, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'



function Settings() {
  return (
    <Box flex={4} p={1}>
      <Typography variant="h4" gutterBottom>SETTINGS</Typography>
      <FormGroup>
        <FormControlLabel control={<Switch color="secondary" />} label="Notifications" />
        <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="App Update" />
        <FormControlLabel control={<Switch color="secondary" />} label="Enable Custom Theme" />
        <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Sleep Mode" />
        <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Localization" />
        <FormControlLabel control={<Switch color="secondary" />} label="Time Limit" />
        <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Block Ads" />
        <FormControlLabel control={<Switch color="secondary" />} label="Screen Reader" />

      </FormGroup>



    </Box>
  )
}

export default Settings