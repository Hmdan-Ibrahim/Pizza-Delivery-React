import { Link } from "react-router-dom";

function EmptyCartMessage() {
    return (
        <div style={{marginBlock: 30}}>
        <p className="empty-message">Your cart is empty.</p>
        <Link className="link" to="/menu">
            Go to Menu
        </Link>
        </div>
    );
}

export default EmptyCartMessage;
