import React from 'react';

function TextBlur({children, as: Tag = "h1"}: { children: React.ReactNode, as?: string }) {

    return (
        <Tag className={'relative display--2'}>
            <span className={'text-blur'}>
                {children}
            </span>
            <span className={'text-blur select-none absolute top-1 left-1'}>
                {children}
            </span>
        </Tag>
    );
}

export default TextBlur;