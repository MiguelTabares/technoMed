import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PublicRoute = ({ element }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center">
                <div className="font-space text-primary-container text-2xl font-bold tracking-widest uppercase animate-pulse">
                    Validating Connection...
                </div>
                <div className="w-48 h-1 bg-surface-container-highest mt-4 overflow-hidden">
                    <div className="w-1/2 h-full bg-primary-container shadow-[0_0_15px_#b7f700] animate-[ping_1.5s_ease-in-out_infinite]"></div>
                </div>
            </div>
        );
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return element;
};

export default PublicRoute;