import {
    useEffect,
    useState
} from 'react';
import PropTypes from 'prop-types';
import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';

import LayoutBase from '../src/components/layout/base';
import Static from '../src/pages/home/static';
import Page from '../src/pages/home/page';
import DialogMaintenance from '../src/components/dialog/maintenance';
import DialogFullscreenCircularLoader from '../src/components/dialog/loader/fullscreenCircular';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#428488',
            main: '#07575b',
            dark: '#002d32'
        },
        secondary: {
            light: '#f7ffff',
            main: '#c4dfe6',
            dark: '#93adb4'
        },
        action: {
            active: '#002d32',
            hover: '#428488',
            selected: '#07575b',
            focus: '#cabf45',
        }
    },
    overrides: {
        MuiFormControl: {
            root: {
                '& .MuiOutlinedInput-notchedOutline' : {
                    borderColor: `#002d32`
                }
            }
        }
    }
});

const Home = ({
    baseApiUrl
}) => {
    const [vehicles, setVehicles] = useState(undefined);
    const [vehicle, setVehicle] = useState(undefined);
    const [state, setState] = useState({
        isRequesting: false,
        isDialogMaintenanceOpen: false,
        refresh: false
    });

    useEffect(function () {
        async function fetchData () {
            setVehicles(undefined);
            const vehiclesResponse = await (await fetch (`${baseApiUrl}/vehicle`)).json();
            let vehiclesToSet = undefined;
            if (vehiclesResponse.error) {
                vehiclesToSet = [];
            } else {
                vehiclesToSet = vehiclesResponse.data;
            }
            setVehicles(vehiclesToSet);
        }

        fetchData ();
    }, [state.refresh]);

    function handleMaintenanceButtonClick (vehicle) {
        setVehicle(vehicle);
        setState({
            ...state,
            isDialogMaintenanceOpen: true
        });
    }

    function handleDialogMaintenanceClose () {
        setState({
            ...state,
            isDialogMaintenanceOpen: false
        });
    }

    async function handleFormSubmit (values) {
        setState({
            ...state,
            isRequesting: true
        });
        await fetch (`${baseApiUrl}/vehicle/${vehicle.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...values,
                dateMaintenance: values.datepicker.format('YYYY/MM/DD')
            })
        });

        const r = state.refresh;
        setState({
            ...state,
            isRequesting: false,
            isDialogMaintenanceOpen: false,
            refresh: !r
        });

    }

    return (
        <ThemeProvider theme={theme}>
            <LayoutBase>
                <DialogFullscreenCircularLoader open={state.isRequesting}/>
                <DialogMaintenance
                    handleClose={handleDialogMaintenanceClose}
                    handleFormSubmit={handleFormSubmit}
                    open={state.isDialogMaintenanceOpen}/>
                { vehicles ? (
                    <Page
                        vehicleSelected={vehicle}
                        handleMaintenanceButtonClick={handleMaintenanceButtonClick}
                        vehicles={vehicles}/>
                ) : (
                    <Static />
                ) }
            </LayoutBase>
        </ThemeProvider>
    );
};

Home.propTypes = {
    baseApiUrl: PropTypes.string
};

Home.defaultProps = {
    baseApiUrl: `/api`
};

export default Home;
