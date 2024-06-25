export const CustomButton: React.FC<{
    config: {
        key?: string | number;
        subKey?: string;
        icon?: string;
        onClickHandler: () => void;
        backGroundColour: string;
        type: 'key' | 'action';
    };
}> = ({ config }) => {
    return (
        <div className='flex justify-center items-center'>
            <button
                type='button'
                onClick={config.onClickHandler}
                className={`h-20 w-20 p-2 bg-[${config.backGroundColour}] text-black rounded-full `}
            >
                {config.type === 'key' ? (
                    <div className='flex flex-col justify-center items-center text-3xl'>
                        {config.key}
                        {Boolean(config.subKey) && (
                            <span className='text-xs'>{config.subKey}</span>
                        )}
                        {config.icon && (
                            <img src={config.icon} className='w-4' alt='' />
                        )}
                    </div>
                ) : (
                    <div className='flex flex-col gap-2 justify-center items-center text-black'>
                        <img
                            src={config.icon}
                            // className='w-4'
                            alt={config.subKey || ''}
                        />
                        {Boolean(config.subKey) && (
                            <span className='text-xs'>{config.subKey}</span>
                        )}
                    </div>
                )}
            </button>
        </div>
    );
};
