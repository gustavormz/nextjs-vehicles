import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Grid
} from '@material-ui/core';

import SkeletonCardAvatar from './card/avatar';
import SkeletonCardActionButton from './card/actionButton';
import SkeletonCardTitle from './card/title';
import SkeletonSimpleText from './simpleText';
import SkeletonCardChip from './card/chip';

const CardGuardSkeleton = () => (
    <Card
        style={{ borderColor: '#5BD6F7' }}
        variant={`outlined`}>
        <CardHeader
            action={
                <>
                    <SkeletonCardActionButton />
                </>
            }
            avatar={ <SkeletonCardAvatar /> }
            title={ <SkeletonCardTitle />} />
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SkeletonSimpleText />
                </Grid>
                <Grid item xs={12}>
                    <SkeletonSimpleText />
                </Grid>
                <Grid item xs={8}>
                    <SkeletonSimpleText />
                </Grid>
                <Grid item xs={4}/>
                <Grid
                    justify={'space-around'}
                    container
                    direction={'row'}
                    item xs={8}>
                    <SkeletonCardChip />
                    <SkeletonCardChip />
                    <SkeletonCardChip />
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
);

export default CardGuardSkeleton;
