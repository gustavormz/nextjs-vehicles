import {
    Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';

import DividerBase from '../../components/divider/base';
import TypographyBase from '../../components/typography/base';
import CardBase from '../../components/card/base';

const HomePage = ({
    vehicles,
    handleMaintenanceButtonClick,
    vehicleSelected
}) => (
    <Grid container spacing={1}>
        <Grid item xs={12}/>
        <Grid item xs={12}>
            <TypographyBase variant={'h1'}>
                Vehículos en Mantenimiento
            </TypographyBase>
        </Grid>
        <Grid item xs={12}>
            <DividerBase />
        </Grid>
        { vehicles.map(vehicle => (
            <Grid
                key={vehicle.id}
                item xs={12} sm={6}>
                <CardBase
                    backgroundColor={(vehicleSelected && vehicle.id === vehicleSelected.id) ? `#93adb4` : `white`}
                    handleMaintenanceButtonClick={handleMaintenanceButtonClick}
                    vehicle={vehicle}/>
            </Grid>    
        )) }
    </Grid>
);

HomePage.propTypes = {
    vehicles: PropTypes.array,
    handleMaintenanceButtonClick: PropTypes.func
};

export default HomePage;
