import {
    useEffect,
    useState
} from 'react';
import {
    Grid,
    Grow
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CardSkeleton from '../../components/skeleton/card';
import DividerBase from '../../components/divider/base';
import TypographyBase from '../../components/typography/base';

const HomeStatic = ({
    timeDelays
}) => {
    const [isChecked, setIsChecked] = useState(true);

    useEffect (function () {
        const intervalRefence = setInterval(function () {
            setIsChecked(!isChecked);
        }, isChecked ? 5000 : 500);

        return () => clearInterval(intervalRefence);
    }, [isChecked]);

    return (
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
            { timeDelays.map((delay, index) => (
                <Grow
                    key={index}
                    in={isChecked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(isChecked ? { timeout: delay } : {})}
                    >
                    <Grid item xs={12} sm={6}>
                        <CardSkeleton />
                    </Grid>
                </Grow>
            )) }
        </Grid>
    );
};

HomeStatic.propTypes = {
    timeDelays: PropTypes.array
};

HomeStatic.defaultProps = {
    timeDelays: [
        1000,
        2000,
        3000,
        4000
    ]
};

export default HomeStatic;
