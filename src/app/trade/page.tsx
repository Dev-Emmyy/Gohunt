import { NavigationBar, TradeSection } from "@/components";
import { SCREEN_MAX_WIDTH } from "@/constant/width";
import { Box } from "@mui/material";
import Image from "next/image";
import Ellipse7 from '../../../public/svg/ellipse-7.svg';
import Ellipse8 from '../../../public/svg/ellipse-8.svg';

export default function Trade() {
  return (
    <main>
      <NavigationBar
        isNavBg
        showBreadcrumbs
      >
        <Box sx={{
          maxWidth: { xl: SCREEN_MAX_WIDTH, sm: '100%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          position: 'relative'
        }}>
          <TradeSection />
          <Box
            component={Image}
            sx={{
              position: "absolute",
              top: '10%',
              left: 0,
              zIndex: -1
            }}
            src={Ellipse7}
            alt='ellipse'
          />
          <Box
            component={Image}
            sx={{
              position: "absolute",
              bottom: '5%',
              left: '-3%',
              zIndex: -1
            }}
            src={Ellipse8}
            alt='ellipse'
          />
        </Box>
      </NavigationBar>
    </main>
  )
}