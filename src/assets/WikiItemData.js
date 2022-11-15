import sword from '../assets/sword.png';
import mc_dog from '../assets/mc_dog.png';


export const weapons = Array(5).fill({
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: sword,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
})

export const beasts = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: mc_dog,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black'
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