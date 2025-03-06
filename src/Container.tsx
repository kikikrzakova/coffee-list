import Buttons from './Buttons'
import styles from './Container.module.css'
import Headline from './Headline'
import Coffee from './Coffee';
import { useEffect, useState } from 'react';

export type CoffeeObject = {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: string | number | null;
    votes: number;
    popular: boolean;
    available: boolean;
}
export default function Container(){
    const [data, setData] = useState<undefined | CoffeeObject[]>();
    const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);
    let coffeeList;
    console.log(onlyAvailable)
    useEffect(()=>{
        async function getData(        ){
            const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
            setData(await response.json())
        }
        getData();
    }, [])

    if (data && !onlyAvailable) {
        coffeeList = data.map(coffee =>
            <Coffee coffee={coffee} key={coffee.id}/>
        )
    }
    if (data && onlyAvailable) {
        const availableCoffee = data.filter(coffee => coffee.available);
        coffeeList = availableCoffee.map(coffee =>
            <Coffee coffee={coffee} key={coffee.id}/>
        ) 
    }
    return <div className={`${styles.container} ${styles.c0}`}>
        <Headline/>
        <Buttons setOnlyAvailable={setOnlyAvailable} onlyAvailable={onlyAvailable}/>
        {data ? coffeeList : null}
    </div>
}