import { useRecoilValue } from "recoil"
import { currentPrices } from "../../recoil/home"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function HomeFeature() {
  const { bpi, chartName, disclaimer, time } = useRecoilValue(currentPrices)

  const columns = [
    {
      field: 'code',
      headerName: 'Code',
      width: 200,
    },
    {
      field: 'rate',
      headerName: 'Rate',
      width: 200,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 500,
    },
  ];

  const rows = Object.values(bpi).map((currency, index) => ({
    id: index,
    code: currency.code,
    rate: currency['rate_float'],
    description: currency.description,
  }))

  return (
    <>
      <h2>{chartName}</h2>
      <strong>{time.updated}</strong>
      <p>{disclaimer}</p>

      <Box sx={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  )
}

export default HomeFeature