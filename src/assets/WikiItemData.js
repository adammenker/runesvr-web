import sword from '../assets/sword.webp';

export const products = Array(5).fill({
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: sword,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
})

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