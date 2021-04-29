import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
    Tooltip
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
    EventNote
} from '@material-ui/icons';

import TypographyBase from '../typography/base';

const CardBase = ({
    vehicle,
    backgroundColor,
    handleMaintenanceButtonClick
}) => (
    <Card
        style={{
            backgroundColor
        }}>
        <CardHeader
            action={
                !vehicle.dateMaintenance && (
                    <Tooltip
                        onClick={() => handleMaintenanceButtonClick(vehicle)}
                        title={'Poner en Mantenimiento'}>
                        <IconButton>
                            <EventNote />
                        </IconButton>
                    </Tooltip>
                )
            }
            avatar={
                <Avatar
                    alt={vehicle.model || vehicle.id[0]}
                    src={vehicle.image}>
                    {vehicle.model[0]}
                </Avatar>
            }
            title={`${vehicle.make} ${vehicle.model}`}/>
        <CardContent>
            <TypographyBase style={{ textAlign: 'justify' }}>
                Id: {vehicle.id}
                <br/>
                Descripción: {vehicle.description}
                <br/>
                Kilometraje: {vehicle.km} km
                <br />
                Fecha programada: {vehicle.estimatedate || `No hay fecha`}
                <br/>
                Fecha estimada de entrega: {vehicle.dateMaintenance || `No hay fecha`}
                <br/>
                {vehicle.name ? `Nombre: ${vehicle.name}` : ``}
            </TypographyBase>
        </CardContent>
    </Card>
);

CardBase.propTypes = {
    vehicle: PropTypes.shape({
        description: PropTypes.string,
        make: PropTypes.string,
        model: PropTypes.string,
        km: PropTypes.number,
        id: PropTypes.string,
        image: PropTypes.string
    }),
    handleMaintenanceButtonClick: PropTypes.func,
    backgroundColor: PropTypes.string
};

CardBase.defaultProps = {
    backgroundColor: `white`
};

export default CardBase;
