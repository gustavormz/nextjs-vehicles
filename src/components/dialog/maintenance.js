import {
    useState
} from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    Hidden
} from '@material-ui/core';
import moment from 'moment';

import ButtonBase from '../ui/button/base';
import ButtonSecondary from '../ui/button/secondary';
import DividerBase from '../divider/base';
import TextFieldBase from '../ui/textField';
import DatePickerBase from '../ui/datepicker';

const getValueFromEvent = event => event.target.value

const DialogMaintenance = ({
    open,
    handleClose,
    handleFormSubmit
}) => {
    const [values, setValues] = useState({
        name: ``,
        datepicker: moment()
    });
    
    function handleNameChange (event) {
        setValues({
            ...values,
            name: getValueFromEvent(event)
        });
    }

    function handleDatePickerChange (value) {
        setValues({
            ...values,
            datepicker: value
        });
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}>
            <DialogTitle onClose={handleClose}>
                Poner en mantenimiento
            </DialogTitle>
            <DialogContent>
                <form onSubmit={event => {
                    event.preventDefault();
                    handleFormSubmit(values);
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextFieldBase
                                name={'name'}
                                label={`Nombre`}
                                value={values.name}
                                onChange={handleNameChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <DatePickerBase
                                label={`Fecha estimada de entrega`}
                                value={values.datepicker}
                                placeholder="10/10/2018"
                                onChange={handleDatePickerChange}
                                minDate={moment()} />
                        </Grid>
                        <Grid item xs={12}>
                            <DividerBase />
                        </Grid>
                        <Hidden mdDown>
                            <Grid item md={4}/>
                        </Hidden>
                        <Grid
                            md={4}
                            item xs={6}>
                            <ButtonBase
                                type={'submit'}>
                                Aceptar
                            </ButtonBase>
                        </Grid>
                        <Grid
                            md={4}
                            item xs={6}>
                            <ButtonSecondary
                                onClick={handleClose}>
                                Cancelar
                            </ButtonSecondary>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogMaintenance;
