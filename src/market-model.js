/**
    @file       market-model.js
    @brief      Market model.

    @author     Oleg Kertanov <okertanov@gmail.com>
    @date       March 2012
    @copyright  Copyright (C) 2012 Oleg Kertanov <okertanov@gmail.com>
    @license    BSD
    @see LICENSE file
*/

(function()
{

// Strict mode by default
"use strict";

exports.MarketModel =
{
    page:
    {
        title: 'Static Makret primer::Market',
    },
    query:
    {
    },
    dataset:
    {
        // Mock object, that mimics real DB view/dataset
        items:
        [
            {
                title: 'Computers',
                items:
                [
                    {
                        title: 'Dell Black Box Super Mega One',
                        description: 'The best black box ever.',
                        image: '',
                        price: 300
                    },
                    {
                        title: 'Dell White Box Super Mega Two',
                        description: 'The best white box ever.',
                        image: '',
                        price: 350
                    },
                    {
                        title: 'HP Hewlett Packard Turbo HPZDTRXY-7080MPP',
                        description: 'Most powerful PC ever.',
                        image: '/img/prod-1-3.png',
                        price: 550
                    },
                    {
                        title: 'HP Yet another Hewlett Packard Turbo 1200-WOW',
                        description: 'Most beautiful HP ever.',
                        image: '',
                        price: 355
                    },
                    {
                        title: 'IBM Blue Gene',
                        description: 'The Chess Master. Number one on the Earth.',
                        image: '',
                        price: 100500
                    },
                    {
                        title: 'IBM PC XT 8088',
                        description: 'The Legend!',
                        image: '',
                        price: Number.POSITIVE_INFINITY
                    }
                ]
            },
            {
                title: 'Laptops',
                items:
                [
                    {
                        title: 'MBP 13',
                        description: 'MacBook Pro 13 inches',
                        image: '/img/prod-2-1.png',
                        price: 700
                    },
                    {
                        title: 'MBP 15',
                        description: 'MacBook Pro 15 inches',
                        image: '/img/prod-2-1.png',
                        price: 1000
                    },
                    {
                        title: 'MBP 17',
                        description: 'MacBook Pro 17 inches',
                        image: '/img/prod-2-1.png',
                        price: 1300
                    },
                    {
                        title: 'MBA 11',
                        description: 'MacBook Air 11 inches',
                        image: '/img/prod-2-4.png',
                        price: 600
                    },
                    {
                        title: 'MBA 13',
                        description: 'MacBook Air 13 inches',
                        image: '/img/prod-2-4.png',
                        price: 900
                    }
                ]
            },
            {
                title: 'Monitors',
                items:
                [
                    {
                        title: 'NEC',
                        description: 'Nec One.',
                        price: 300
                    },
                    {
                        title: 'Dell',
                        description: 'Dell Two.',
                        price: 350
                    },
                    {
                        title: 'Sony',
                        description: 'Sony Three Superbright.',
                        price: 550
                    },
                    {
                        title: 'Samsung',
                        description: 'Samsung Four Syncmaster.',
                        price: 355
                    },
                    {
                        title: 'Philips',
                        description: 'Mega Philips',
                        price: 100500
                    },
                    {
                        title: 'Apple Cinema',
                        description: 'It\'s 27, baby.',
                        image: '/img/prod-3-6.png',
                        price: 1000
                    }
                ]
            },
            {
                title: 'Mobiles',
                items:
                [
                    {
                        title: 'Samsung',
                        description: 'Android 2.3',
                        image: '/img/prod-4-1.png',
                        price: 100
                    },
                    {
                        title: 'Sony-Ericsson',
                        description: 'xPeria xxx',
                        price: 150
                    },
                    {
                        title: 'LG',
                        description: 'LiDgee Optimus Prime',
                        price: 200
                    },
                    {
                        title: 'Apple',
                        description: 'iOS 5.1',
                        price: 250
                    },
                    {
                        title: 'Nokia',
                        description: 'WP8',
                        price: 300
                    },
                    {
                        title: 'Motorola',
                        description: 'Razzr v1',
                        price: 350
                    },
                    {
                        title: 'Huawei',
                        description: 'Vodafone One',
                        price: 1000
                    }
                ]
            }
        ]
    }
};

})()

