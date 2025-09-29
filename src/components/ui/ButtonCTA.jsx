

const ButtonCTA = ({ children, className, icon }) => {
    return (
        <button
            className={className + ` ` + `py-[10px] px-5 bg-white rounded-lg text-[#0058FF] font-bold text-sm flex items-center
                md:text-base md:px-6 lg:py-4 cursor-pointer
                hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                active:scale-95
                `}
        >
            {children}
            <span>{icon}</span>
        </button>
    );
};

export default ButtonCTA;