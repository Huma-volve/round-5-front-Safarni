import compare from "../../assets/images/compare.png"
export interface CompareResult {
    id?: number;
    image: string;
    title: string;
    description: string;
    price: number;
    duration: string;
}

export const COMPARE_DATA: CompareResult[] = [
    {
        id: 1,
        image: compare,
        title: 'Iconic Paris Tour',
        description: 'Ideal for individuals starting their journey.',
        price: 19,
        duration: '6:00 PM - 9:00 PM ',
    },
    {
        id: 2,
        image:compare,
        title: 'Iconic Paris Tour',
        description: 'Perfect for small teams and startups.',
        price: 49,
        duration: '6:00 PM - 9:00 PM ',
    },
    {
        id: 3,
        image: compare,
        title: 'Paris  Evening Cruise',
        description: 'Best for large organizations and enterprises.',
        price: 99,
        duration: '6:00 PM - 9:00 PM ',
    },
    {
        id: 4,
        image: compare,
        title: 'Iconic Paris Tour',
        description: 'Ideal for individuals starting their journey.',
        price: 19,
        duration: '6:00 PM - 9:00 PM ',
    },
    {
        id: 5,
        image:compare,
        title: 'Iconic Paris Tour',
        description: 'Perfect for small teams and startups.',
        price: 49,
        duration: '6:00 PM - 9:00 PM ',
    },
    {
        id: 6,
        image: compare,
        title: 'Paris  Evening Cruise',
        description: 'Best for large organizations and enterprises.',
        price: 99,
        duration: '6:00 PM - 9:00 PM ',
    },
];