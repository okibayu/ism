window.Seed = (function () {
    
    const products = [
        {
            id: 1,
            logo: '/image/logo.jpg',
            kereta: 'Argo Parahyangan',
            no: '7098',
            kelas: 'Ekonomi',
            kode: 'C',
            berangkat: '22:30',
            stasiunawal: 'Gambir (GMR)',
            tiba: '01:44',
            stasiunakhir: 'Bandung (BD)',
            durasi: '3j 14m',
            harga: 'IDR 300.000',
            sisakursi: '5',
        },
        {   
            id: 2,
            logo: '/image/logo.jpg',
            kereta: 'Argo Lawu',
            no: '6009',
            kelas: 'Bisnis',
            kode: 'A',
            berangkat: '22:30',
            stasiunawal: 'Gambir (GMR)',
            tiba: '01:44',
            stasiunakhir: 'Bandung (BD)',
            durasi: '3j 14m',
            harga: 'IDR 500.000',
            sisakursi: '8',
        },
        {   
            id: 3,
            logo: '/image/logo.jpg',
            kereta: 'Argo Dwipangga',
            no: '5090',
            kelas: 'Eksekutif',
            kode: 'D',
            berangkat: '22:30',
            stasiunawal: 'Gambir (GMR)',
            tiba: '01:44',
            stasiunakhir: 'Bandung (BD)',
            durasi: '3j 14m',
            harga: 'IDR 700.000',
            sisakursi: '1',
        },
    ];

    return { products : products };

});
