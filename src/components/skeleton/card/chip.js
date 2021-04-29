import {
    Skeleton
} from '@material-ui/lab';

const SkeletonCardChip = () => (
    <Skeleton animation="wave" variant={'circle'} height={25} width={25} style={{ marginBottom: 6 }} />
);

export default SkeletonCardChip;
