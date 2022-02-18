import React from 'react'
import styled from 'styled-components'

export interface CircleButtonProps {
    color?: string,
    backgroundColor?: string,
    highlight?: string,
    pressed?: string,
    width?: string,
    height?: string
}

function CircleButton(props: React.PropsWithChildren<CircleButtonProps>) {
    const Btn = styled.div.attrs(dp => ({
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: props.height,
        highlight: props.highlight,
        pressed: props.pressed
    }))`
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        padding: 3px;
        cursor: pointer;
        user-select: none;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.backgroundColor || '#42a5f5'};
        color: ${props => props.color || '#222222'};
        width: ${props => props.width || 'auto'};
        height: ${props => props.height || 'auto'};


        &:hover { 
            background:${props => props.highlight || '#64b5f6'}
        }

        &:active {
            background:${props => props.pressed || '#3479be'}
        }

    `

  return (
    <Btn>{props.children}</Btn>
  )
}

export default CircleButton