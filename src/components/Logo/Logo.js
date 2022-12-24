// material-ui
import { useTheme } from '@mui/material/styles';
import petLogo from '../../assets/images/logo/PetMArtLogo.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <img src={petLogo} alt="Mantis" width="55" height="55" />
        </>
    );
};

export default Logo;
