import {
    Grid,
    Hidden
} from '@material-ui/core';

import AppBarBase from './appBar/base';
import Logo from './icon/logo';
import TypographyBase from './typography/base';

const Header = () => (
    <AppBarBase>
        <Grid container spacing={1}>
            <Grid
                item xs={4}/>
            <Hidden mdDown>
                <Grid
                    alignItems={'center'}
                    container
                    justify={`center`}
                    item
                    xs={4}>
                    <Logo
                        height={60}
                        width={60}/>
                </Grid>
                <Grid
                    container
                    justify={`flex-end`}
                    alignItems={`center`}
                    item xs={4}>
                    <TypographyBase style={{
                        margin: 0,
                        padding: 0
                    }}>
                        Bienvenido
                    </TypographyBase>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid
                    alignItems={'center'}
                    container
                    justify={`flex-end`}
                    item
                    xs={8}>
                    <Logo
                        height={60}
                        width={60}/>
                </Grid>
            </Hidden>
        </Grid>
    </AppBarBase>
);

export default Header;
