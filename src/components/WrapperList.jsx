export const WrapperList = (props) => {
    const { children } = props;
    return (
        <div>
            <h2>HOLA DESDE VITE</h2>
            <div>
                {children}
            </div>
        </div>
    );
};
