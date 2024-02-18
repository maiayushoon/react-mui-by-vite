// import { MuiChip } from "./components/MuiChip"
// import { MuiList } from "./components/MuiList"
// import { MuiTable } from "./components/MuiTable"
// import { MuiTooltip } from "./components/MuiTooltip"
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiSnackBar } from "./components/MuiSnackBar";
// import { MuiLoadingButton } from "./components/MuiLoadingButton";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiPicker}  from "./components/MuiPicker";
// import  MuiDateRangePicker  from './components/MuiDateRangePicker';
// import { MuiTabs } from "./components/MuiTabs";
// import { MuiTimeline } from "./components/MuiTimeline";
// import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import {createTheme, colors, ThemeProvider} from '@mui/material'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[800],
    },
    // Define neutral color
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[900]
    }
  }
});   
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <div id="App">
        {/* <MuiList/> */}
        {/* <MuiChip/> */}
        {/* <MuiTooltip></MuiTooltip> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackBar></MuiSnackBar> */}
        {/* <MuiDialog></MuiDialog> */}
        {/* <MuiProgress></MuiProgress> */}
        {/* <MuiSkeleton></MuiSkeleton> */}
        {/* <MuiLoadingButton></MuiLoadingButton> */}
        {/* <MuiPicker/> */}
        {/* <MuiDateRangePicker/> */}
        {/* <MuiTabs></MuiTabs> */}
        {/* <MuiTimeline/> */}
        {/* <MuiMasonry/> */}
        <MuiResponsiveness/>
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;
