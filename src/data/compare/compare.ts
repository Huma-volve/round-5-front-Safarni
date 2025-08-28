import compare from "../../assets/images/compare.png"
export interface CompareResult {
    id?: number;
    image: string;
    title: string;
    description: string;
    price: number;
    duration: string;
}
export interface CompareData {
    id?: number;
    title: string;
    price: number;
    duration: string;
    highlight: string;
    avaliability: string;
    guides: string;
    transportation: string;
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

export const COMPARE_DATA_FEATURES: CompareData[] = [
    {
        id: 1,
        title: 'Paris  Evening Cruise',
        price: 75,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
    {
        id: 2,
        title: 'Paris Louvre Museum Tour',
        price: 49,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
    {
        id: 3,
        title: 'Paris Historical Sites',
        price: 909,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
    {
        id: 4,
        title: 'Paris  Evening Cruise',
        price: 75,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
    {
        id: 5,
        title: 'Paris Louvre Museum Tour',
        price: 49,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
    {
        id: 6,
        title: 'Paris Historical Sites',
        price: 93,
        duration: '6:00 PM - 9:00 PM ',
        highlight: 'City Highlights',
        avaliability: 'All Year',
        guides: 'Live Guide',
        transportation: 'Audio Guide',
    },
];