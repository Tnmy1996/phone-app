import { CustomButton } from './CustomButton';

import { LettersMapping } from '../constants/letterMapping';

import voicemail from '../assets/icons/voicemail.svg';
export const NumberPad: React.FC<{
    onClickHandler: (value: string) => void;
}> = ({ onClickHandler }) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <CustomButton
                config={{
                    type: 'key',
                    key: '1',
                    icon: voicemail,
                    onClickHandler: () => onClickHandler('1'.toString()),
                    backGroundColour: '#F5F5F5',
                }}
            />
            {[2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
                <CustomButton
                    key={digit}
                    config={{
                        type: 'key',
                        key: digit,
                        subKey: LettersMapping[
                            digit as keyof typeof LettersMapping
                        ],
                        onClickHandler: () => onClickHandler(digit.toString()),
                        backGroundColour: '#F5F5F5',
                    }}
                />
            ))}
        </div>
    );
};
