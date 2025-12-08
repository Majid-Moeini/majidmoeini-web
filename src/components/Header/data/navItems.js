export const NAV_ITEMS = [
    { id: 'home', label: 'خانه', href: '/' },
    { id: 'services', label: 'خدمات', href: '/services' },
    { id: 'courses', label: 'آموزش ها', href: '/courses' },
    {
        id: 'articles', label: 'مقالات', href: '/articles',
        children: [
            { id: 31, label: "مقاله اول", href: "/articles/article1" },
            { id: 32, label: "مقاله 2", href: "/articles/article2" }
        ]
    },
    { id: 'about', label: 'درباره ما', href: '/about' },
    { id: 'contact', label: 'تماس با ما', href: '/contact' },
    { id: 'download', label: 'دانلود', href: '/download' },
];
