import Header from '../header';
import ContainerBase from '../container/base';

const LayoutBase = ({
    maxWidth,
    children
}) => (
    <>
        <Header />
        <ContainerBase maxWidth={maxWidth}>
            { children }
        </ContainerBase>
    </>
);

LayoutBase.defaultProps = {
    maxWidth: `lg`
};

export default LayoutBase;
