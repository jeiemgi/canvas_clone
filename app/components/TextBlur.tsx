import React from 'react';
import clsx from "clsx";

interface Props {
    verticalLeft?: boolean,
    verticalRight?: boolean,
    black?: boolean,
    children: React.ReactNode,
    as?: string
}

function TextBlur({
                      as: Tag = "h1",
                      children,
                      verticalRight = false,
                      verticalLeft = false,
                      black = false
                  }: Props) {

    return (
        <Tag className={clsx('relative display--2')}>
             <span className={clsx(`text-blur-bottom-2`, {black, verticalLeft, verticalRight})}>
                {children}
            </span>
            <span className={clsx(`text-blur-bottom`, {black, verticalLeft, verticalRight})}>
                {children}
            </span>
            <span className={clsx(`text-blur-top`, {black, verticalLeft, verticalRight})}>
                {children}
            </span>
        </Tag>
    );
}

export default TextBlur;