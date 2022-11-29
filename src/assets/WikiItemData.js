import sword from '../assets/sword.png';
import mc_dog from '../assets/mc_dog.png';


export const weapons = Array(5).fill({
    id: 1,
    name: 'Sword',
    href: '#',
    imageSrc: sword,
    imageAlt: "Sword",
    detail1: 'Damage: 14',
    detail2: 'Durability: 25'
})

export const beasts = [
    {
        id: 1,
        name: 'Dog',
        href: '#',
        imageSrc: mc_dog,
        imageAlt: "Dog.",
        detail1: 'Damage: 6',
        detail2: 'Health: 25'
    }
]

// [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Basic Tee2',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     }
// ]