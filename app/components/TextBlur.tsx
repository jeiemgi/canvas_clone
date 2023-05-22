import React from 'react';

function TextBlur({children, as: Tag = "h1"}: { children: React.ReactNode, as?: string }) {

    return (
        <Tag className={'relative display--2'}>
             <span className={'text-blur-bottom'}>
                {children}
            </span>
            <span className={'text-blur-top'}>
                {children}
            </span>
        </Tag>
    );
}

export default TextBlur;