import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link as MUILink} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <Box container
            component="footer"
            sx={{ py: "1rem", backgroundColor:'#55555E', color: "#f4f4f4", textAlign:'center' }}
            px={{ xs: 3, sm: 4, md: "9rem" }}>
              <Typography component='p'>
                Copyright &copy; 2022 | BeginnersWebGuide.com |  <Link href='/privacy-policies'><a style={{color:'white'}}>Privacy Policy</a></Link> | <Link href='/terms-condition'><a style={{color:'white'}}>Terms and Conditions </a></Link>| <Link href='/sitemap.xml'><a style={{color:'white' }}>Sitemap</a></Link></Typography>
        </Box>
    )
}