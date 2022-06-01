import React from 'react'
//import walkSprite from '../../data/tiles/Characters/hero.png'
import walkSprite from '../../data/tiles/Characters/Japanese school characters/teachers/Teacherfmale01.png'
import {SPRITE_SIZE } from '../../config/constants'

function NPC(props) {

    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: `-${0*SPRITE_SIZE} ${0*SPRITE_SIZE}`,
                backgroundRepeat: 'no-repeat',
                width: `${SPRITE_SIZE}px`,
                height: `${SPRITE_SIZE}px`
            }}
        >
        </div>
    )

}

export default NPC
