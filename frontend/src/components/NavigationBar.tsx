import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

function NavigationBar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {isMobileMenuOpen && (
                <div 
                    className="overlay fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            <nav className="bg-white w-full h-18 top-0 sticky z-50 border-b border-gray-200 px-4 md:px-8 py-4">
                <div className="mx-auto flex justify-between items-center relative z-50">
                    <div className="flex items-center">
                        <Link onClick={closeMobileMenu} to='/' className={location.pathname === "/" ? 'active' : ''}>
                            <img src="/oblivion-times-logo-full.png" width="100" />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <ul className="flex space-x-4 font-sans text-primary">
                            <li>
                                {/* <Link onClick={closeMobileMenu} to='/' className={location.pathname === "/" ? 'active' : ''}>
                                    Home
                                </Link> */}
                            </li>
                            <li>
                                <Link onClick={closeMobileMenu} to='/essays' className={location.pathname === "/essays" ? 'active' : ''}>
                                    Essays
                                </Link>
                            </li>
                            {/* <li>
                                <Link onClick={closeMobileMenu} to='/authors' className={location.pathname === "/authors" ? 'active' : ''}>
                                    Authors
                                </Link>
                            </li> */}
                            <li>
                                <Link onClick={closeMobileMenu} to='/about' className={location.pathname === "/about" ? 'active' : ''}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                   <div className="flex gap-2">
                       <button className="font-sans text-sm md:text-base bg-accent hover:bg-accent-light cursor-pointer text-white font-semibold px-5 py-2 rounded-md">
                            Join the Dispatch
                       </button>
                        <button 
                            className="md:hidden p-2 transition-transform duration-200" 
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? (
                                <img src="/close.svg" width="25" alt='Menu' />
                            ) : (
                                <img src="/equal.svg" width="25" alt='Menu' />
                            )}
                                
                        </button>
                    </div>
                </div>
            </nav>

            <nav className={`
                    absolute top-18 left-0 w-full bg-white border-b border-gray-100 px-4 py-4 z-40 md:hidden 
                    transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            `}>
                <ul className="flex flex-col gap-2 list-none" role="list">
                    <li>
                        <Link onClick={closeMobileMenu} to='/' className={`font-sans text-primary py-3 border-b border-gray-200 block ${location.pathname === "/" ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} to='/essays' className={`font-sans text-primary py-3 border-b border-gray-200 block ${location.pathname === "/essays" ? 'active' : ''}`}>
                            Essays
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} to='/authors' className={`font-sans text-primary py-3 border-b border-gray-200 block ${location.pathname === "/authors" ? 'active' : ''}`}>
                            Authors
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} to='/about' className={`font-sans text-primary py-3 border-b border-gray-200 block ${location.pathname === "/about" ? 'active' : ''}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavigationBar;
