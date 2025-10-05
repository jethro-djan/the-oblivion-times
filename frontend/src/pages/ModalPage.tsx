import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ModalPage() {
    const navigate = useNavigate();
    const [isModalClosed, setIsModalClosed] = useState(false);

    const closeModal = () => {
        setIsModalClosed(!isModalClosed);
        navigate(-1);
    };

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black opacity-50 z-50 backdrop-blur-xs animate-fade-in ${isModalClosed ? 'hidden' : ''}`}
            >
                <div
                    className="min-h-screen flex items-end justify-center p-4 sm:items-center sm:p-6"
                >
                    <div
                        className="origin-bottom bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md animate-slide-up overflow-hidden shadow-xl"
                    >
                        <div 
                            className="flex items-center justify-between p-6 border-b border-border-light"
                        >
                            <h2 className="font-serif text-xl font-semibold text-primary">
                                The Oblivion Times Dispatch
                            </h2>
                            <button
                                className="p-2 hover:bg-gray-100 round-full transition-colors" 
                                aria-label="Close modal"
                                onClick={() => closeModal()}
                            >
                                <img src="/close.svg" width="25" alt='Menu' />
                            </button>
                        </div>

                        <div className="p-6">
                            <p
                                className="font-serif text-primary-light leading-relaxed mb-6"
                            >
								Hi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
