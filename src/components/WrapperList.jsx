export const WrapperList = (props) => {
    const { children } = props;
    return (
        <div>
            <h1>HOLA DESDE VITE</h1>
            <div>
                {children}
            </div>
        </div>
    );
};
