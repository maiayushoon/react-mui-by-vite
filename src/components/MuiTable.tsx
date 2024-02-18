import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Fleur",
    last_name: "Arzu",
    email: "farzu0@eventbrite.com",
    gender: "Genderqueer",
    ip_address: "141.134.117.17",
  },
  {
    id: 2,
    first_name: "Bealle",
    last_name: "Groundwater",
    email: "bgroundwater1@cbsnews.com",
    gender: "Male",
    ip_address: "22.170.221.22",
  },
  {
    id: 3,
    first_name: "Courtney",
    last_name: "Buff",
    email: "cbuff2@webeden.co.uk",
    gender: "Male",
    ip_address: "211.189.163.138",
  },
  {
    id: 4,
    first_name: "Grover",
    last_name: "Deesly",
    email: "gdeesly3@aboutads.info",
    gender: "Male",
    ip_address: "19.97.87.117",
  },
  {
    id: 5,
    first_name: "Zackariah",
    last_name: "Bridgland",
    email: "zbridgland4@chronoengine.com",
    gender: "Male",
    ip_address: "13.104.118.163",
  },
  {
    id: 6,
    first_name: "Donica",
    last_name: "Hellis",
    email: "dhellis5@state.tx.us",
    gender: "Female",
    ip_address: "54.29.206.33",
  },
  {
    id: 7,
    first_name: "Henry",
    last_name: "Birtle",
    email: "hbirtle6@123-reg.co.uk",
    gender: "Male",
    ip_address: "64.46.173.66",
  },
  {
    id: 8,
    first_name: "Brit",
    last_name: "Crigin",
    email: "bcrigin7@paypal.com",
    gender: "Male",
    ip_address: "197.26.105.196",
  },
  {
    id: 9,
    first_name: "Nevil",
    last_name: "Volkes",
    email: "nvolkes8@nature.com",
    gender: "Bigender",
    ip_address: "111.2.179.24",
  },
  {
    id: 10,
    first_name: "Antonella",
    last_name: "Hathwood",
    email: "ahathwood9@ucoz.com",
    gender: "Female",
    ip_address: "52.236.29.66",
  },
];
