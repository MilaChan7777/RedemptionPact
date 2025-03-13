export default function Button({ onClick, children }) {
    const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            onClick();
        }
    };

    return (
        <button onClick={onClick} onKeyDown={handleKeyPress}>
            {children}
        </button>
    );
}
