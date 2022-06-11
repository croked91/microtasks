import React from "react";
import { isJSDocNamepathType, visitEachChild } from "typescript";
import { IgnorePlugin } from "webpack";

export type UserType = {
    name: string
    hair: number
    addres: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & { laptop: LaptopType }




export const Immutable = () => {



    let Vitya: UserWithLaptopType = {
        name: 'Igor',
        hair: 15,
        addres: { title: "ufa" },
        laptop: { title: 'mac' }
    }
    
    function reduser() {
        let Grisha = {
            ...Vitya,
            addres: {...Vitya.addres, title: "blabla"},
            skill: [20,30,40]
        }
        console.log(Grisha.skill[0]);

        let copyGrisha = {
            ...Grisha,
            skill: [...Grisha.skill, Grisha.skill.map(a => a === 20 ? 100 : a)]
        }      

        console.log(copyGrisha.skill[3]);
        
    }


    reduser()
    



    return (<div>
    </div>)
}