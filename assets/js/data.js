const destinationsData = {
    "sapa": {
        title: "Sapa — The City in Clouds",
        tag1: "Mountain",
        tag2: "North Vietnam",
        location: "Lào Cai Province",
        rating: "4.9",
        reviews: "2,400+",
        duration: "3–5 days recommended",
        coverImage: "assets/images/sapa.jpg",
        desc1: "Perched at 1,500 metres in Vietnam's northwestern highlands, Sapa is a world apart — a place where clouds settle into valleys every morning and the terraced hillsides turn gold each autumn. It has evolved into one of Southeast Asia's most celebrated trekking destinations.",
        desc2: "The town sits just below Fansipan — Indochina's highest peak — and serves as the gateway to the dramatic Muong Hoa Valley, a UNESCO-recognised cultural landscape of layered rice paddies.",
        price: "89",
        factElevation: "1,500 m above sea level",
        factBestTime: "Sep–Nov (harvest season)",
        attractions: [
            { title: "Fansipan Peak", desc: "Conquer the 'Roof of Indochina' at 3,147 m via cable car or a multi-day trek." },
            { title: "Muong Hoa Valley", desc: "A stunning 8 km valley of layered rice terraces and Black Hmong villages." },
            { title: "Cat Cat Village", desc: "A scenic 3 km walk from Sapa town leads to this Hmong cultural showcase." }
        ],
        gallery: [
            "assets/images/sapa-1.jpg",
            "assets/images/sapa-2.jpg",
            "assets/images/sapa-3.jpg",
            "assets/images/sapa-4.jpg",
            "assets/images/sapa-5.jpg"
        ],
        touristReviews: [
            { initials: "SM", name: "Sophie M.", country: "France", text: "An absolutely magical destination. The rice terraces at sunrise were the most beautiful thing I've seen in Asia." },
            { initials: "JK", name: "James K.", country: "Australia", text: "The trekking through ethnic minority villages was humbling and inspiring. Highly recommend spending at least 3 days here." }
        ]
    },
    "hanoi": {
        title: "Hanoi — A Thousand Years of History",
        tag1: "City",
        tag2: "North Vietnam",
        location: "Hanoi Capital",
        rating: "4.8",
        reviews: "5,100+",
        duration: "2–4 days recommended",
        coverImage: "assets/images/hanoi.jpg",
        desc1: "Hanoi is a captivating blend of East and West, combining traditional Sino-Vietnamese motifs with French flair. It is a city of lakes, shaded boulevards, and verdant public parks.",
        desc2: "The Old Quarter is a fascinating maze of 36 streets, each historically dedicated to a specific trade. Here, the aroma of street food fills the air, offering some of the best culinary experiences in the world.",
        price: "65",
        factElevation: "10 m above sea level",
        factBestTime: "Oct–Dec (Cool autumn)",
        attractions: [
            { title: "Hoan Kiem Lake", desc: "The historical heart of the city with the iconic Turtle Tower and Ngoc Son Temple." },
            { title: "Old Quarter", desc: "A fascinating maze of 36 bustling streets, perfect for street food and bia hoi." },
            { title: "Temple of Literature", desc: "Vietnam's first national university built in 1070, a beautiful tribute to Confucius." }
        ],
        gallery: [
            "assets/images/hanoi-1.jpg",
            "assets/images/hanoi-2.jpg",
            "assets/images/hanoi-3.jpg",
            "assets/images/hanoi-4.jpg",
            "assets/images/hanoi-5.jpg"
        ],
        touristReviews: [
            { initials: "JD", name: "John D.", country: "USA", text: "The street food tour in the Old Quarter changed my life. The egg coffee is a must-try!" },
            { initials: "AK", name: "Anna K.", country: "Germany", text: "Walking around Hoan Kiem lake early in the morning alongside locals practicing Tai Chi is incredibly peaceful." }
        ]
    },
    "halong": {
        title: "Ha Long Bay — The Descending Dragon",
        tag1: "Coastal",
        tag2: "North Vietnam",
        location: "Quảng Ninh Province",
        rating: "4.9",
        reviews: "8,200+",
        duration: "2–3 days recommended",
        coverImage: "assets/images/halong.jpg",
        desc1: "A UNESCO World Heritage Site, Ha Long Bay features thousands of limestone karsts and isles in various shapes and sizes. Sailing through these emerald waters feels like entering a mythical world.",
        desc2: "Explore hidden caves, kayak through glowing lagoons, and spend the night on a luxury junk boat beneath a canopy of stars.",
        price: "120",
        factElevation: "Sea level",
        factBestTime: "Mar–May & Sep–Nov",
        attractions: [
            { title: "Sung Sot Cave", desc: "The largest and most magnificent cave in the bay with incredible stalactites." },
            { title: "Titop Island", desc: "Hike to the top for a breathtaking panoramic view of the entire bay." },
            { title: "Cua Van Floating Village", desc: "Discover the unique lifestyle of fishermen living in houses floating on the sea." }
        ],
        gallery: [
            "assets/images/halong-1.jpg",
            "assets/images/halong-2.jpg",
            "assets/images/halong-3.jpg",
            "assets/images/halong-4.jpg",
            "assets/images/halong-5.jpg"
        ],
        touristReviews: [
            { initials: "MB", name: "Michael B.", country: "UK", text: "Sleeping on a junk boat surrounded by those giant karsts was the highlight of our Vietnam trip." },
            { initials: "SW", name: "Sarah W.", country: "Canada", text: "Kayaking through the Luon Cave at sunset was simply unforgettable. Pure magic." }
        ]
    },
    "ninhbinh": {
        title: "Ninh Binh — Ha Long on Land",
        tag1: "Scenic",
        tag2: "North Vietnam",
        location: "Ninh Bình Province",
        rating: "4.8",
        reviews: "1,800+",
        duration: "1–2 days recommended",
        coverImage: "assets/images/ninhbinh.jpg",
        desc1: "Often referred to as 'Ha Long Bay on land', Ninh Binh is a mesmerizing landscape of towering limestone karsts emerging from serene rice paddies and winding rivers.",
        desc2: "Take a sampan boat ride through the Trang An grottoes or climb the 500 steps of Mua Cave for a panoramic view that will leave you breathless.",
        price: "55",
        factElevation: "15 m above sea level",
        factBestTime: "May–Jul (golden rice)",
        attractions: [
            { title: "Trang An Grottoes", desc: "A relaxing 2-hour boat ride passing through hidden river caves and ancient temples." },
            { title: "Mua Cave Viewpoint", desc: "Climb 500 stone steps for the most iconic, sweeping view of the Tam Coc valley." },
            { title: "Bai Dinh Pagoda", desc: "The largest Buddhist complex in Southeast Asia, featuring massive bronze statues." }
        ],
        gallery: [
            "assets/images/ninhbinh-1.jpg",
            "assets/images/ninhbinh-2.jpg",
            "assets/images/ninhbinh-3.jpg",
            "assets/images/ninhbinh-4.jpg",
            "assets/images/ninhbinh-5.jpg"
        ],
        touristReviews: [
            { initials: "DL", name: "David L.", country: "USA", text: "Riding a bicycle through the rice paddies here felt like being in a movie. So peaceful." },
            { initials: "ER", name: "Emma R.", country: "Netherlands", text: "The boat rowers in Tam Coc are amazing. They row with their feet! The scenery is stunning." }
        ]
    },
    "hoian": {
        title: "Hoi An — The Lantern City",
        tag1: "Cultural",
        tag2: "Central Vietnam",
        location: "Quảng Nam Province",
        rating: "4.9",
        reviews: "6,500+",
        duration: "2–3 days recommended",
        coverImage: "assets/images/hoian.jpg",
        desc1: "Hoi An Ancient Town is an exceptionally well-preserved example of a South-East Asian trading port dating from the 15th to the 19th century. Its buildings reflect the influences, both indigenous and foreign, that have combined to produce this unique heritage site.",
        desc2: "At night, the town glows under the light of thousands of silk lanterns. Get custom clothing tailored in a day, or take a cooking class to learn the secrets of Central Vietnamese cuisine.",
        price: "70",
        factElevation: "Sea level",
        factBestTime: "Feb–Apr (dry and mild)",
        attractions: [
            { title: "Japanese Covered Bridge", desc: "The iconic 18th-century bridge featuring intricate carvings and a small temple." },
            { title: "Ancient Town Streets", desc: "Wander through yellow merchant houses glowing under thousands of silk lanterns." },
            { title: "An Bang Beach", desc: "Just a short bicycle ride from town, offering white sands and excellent seafood." }
        ],
        gallery: [
            "assets/images/hoian-1.jpg",
            "assets/images/hoian-2.jpg",
            "assets/images/hoian-3.jpg",
            "assets/images/hoian-4.jpg",
            "assets/images/hoian-5.jpg"
        ],
        touristReviews: [
            { initials: "LM", name: "Laura M.", country: "UK", text: "Getting clothes tailored here was such a fun experience. The lantern boats at night are magical." },
            { initials: "TC", name: "Tom C.", country: "Canada", text: "The banh mi in Hoi An is arguably the best in Vietnam. A perfect mix of history and relaxation." }
        ]
    },
    "danang": {
        title: "Da Nang — The Coastal Metropolis",
        tag1: "Beach",
        tag2: "Central Vietnam",
        location: "Da Nang City",
        rating: "4.7",
        reviews: "4,300+",
        duration: "3–4 days recommended",
        coverImage: "assets/images/danang.jpg",
        desc1: "Da Nang is Vietnam's most livable city, boasting clean streets, stunning bridges, and an incredible coastline. The iconic Golden Bridge, held up by giant stone hands, has become a global sensation.",
        desc2: "Enjoy world-class resorts on My Khe Beach, explore the mystical Marble Mountains, and indulge in phenomenal seafood at local beachfront eateries.",
        price: "75",
        factElevation: "Sea level",
        factBestTime: "Feb–May (Sunny & dry)",
        attractions: [
            { title: "Golden Bridge (Ba Na Hills)", desc: "Walk on the famous bridge held by two giant stone hands above the clouds." },
            { title: "Marble Mountains", desc: "A cluster of five marble and limestone hills with caves, tunnels, and Buddhist shrines." },
            { title: "My Khe Beach", desc: "A pristine 30km stretch of white sand, named one of the most attractive beaches on the planet." }
        ],
        gallery: [
            "assets/images/danang-1.jpg",
            "assets/images/danang-2.jpg",
            "assets/images/danang-3.jpg",
            "assets/images/danang-4.jpg",
            "assets/images/danang-5.jpg"
        ],
        touristReviews: [
            { initials: "CP", name: "Chris P.", country: "Australia", text: "The perfect balance of city life and beach relaxation. The Dragon Bridge show on weekends is awesome." },
            { initials: "YS", name: "Yuki S.", country: "Japan", text: "Amazing seafood and very clean beaches. Ba Na Hills feels like a completely different world." }
        ]
    },
    "hue": {
        title: "Hue — The Imperial Capital",
        tag1: "Cultural",
        tag2: "Central Vietnam",
        location: "Thừa Thiên Huế Province",
        rating: "4.6",
        reviews: "2,100+",
        duration: "2–3 days recommended",
        coverImage: "assets/images/hue.jpg",
        desc1: "Hue was the seat of Nguyen Dynasty emperors and the national capital from 1802 to 1945. The city is defined by the Perfume River, which divides the city into the old and the new.",
        desc2: "Explore the vast 19th-century Citadel, the elaborate royal tombs dotting the countryside, and the iconic Thien Mu Pagoda.",
        price: "60",
        factElevation: "15 m above sea level",
        factBestTime: "Jan–Apr",
        attractions: [
            { title: "The Imperial City", desc: "A walled fortress and palace that served as the home to Vietnam's emperors." },
            { title: "Thien Mu Pagoda", desc: "A historic, seven-story pagoda sitting gracefully on the banks of the Perfume River." },
            { title: "Tomb of Tu Duc", desc: "One of the most beautifully designed royal tombs, surrounded by lotus ponds and pine forests." }
        ],
        gallery: [
            "assets/images/hue-1.jpg",
            "assets/images/hue-2.jpg",
            "assets/images/hue-3.jpg",
            "assets/images/hue-4.jpg",
            "assets/images/hue-5.jpg"
        ],
        touristReviews: [
            { initials: "RF", name: "Robert F.", country: "USA", text: "A must-visit for history buffs. The architecture in the Citadel is beautifully preserved despite the wars." },
            { initials: "MG", name: "Maria G.", country: "Spain", text: "The spicy Bun Bo Hue soup here is incredible. The city has a very calm, poetic atmosphere." }
        ]
    },
    "phongnha": {
        title: "Phong Nha — The Cave Kingdom",
        tag1: "Adventure",
        tag2: "Central Vietnam",
        location: "Quảng Bình Province",
        rating: "4.9",
        reviews: "1,200+",
        duration: "2–4 days recommended",
        coverImage: "assets/images/phongnha.jpg",
        desc1: "Phong Nha-Ke Bang National Park is a haven for adventure seekers. It hides the oldest karst mountains in Asia and the world's most spectacular cave systems, including Son Doong, the largest cave on Earth.",
        desc2: "Zip-line into dark caves, swim in underground rivers, and trek through pristine jungles in this relatively untouched wilderness.",
        price: "85",
        factElevation: "150 m above sea level",
        factBestTime: "Mar–Aug (Dry season)",
        attractions: [
            { title: "Paradise Cave", desc: "Walk through 1km of this massive, spectacularly illuminated dry cave." },
            { title: "Phong Nha Cave", desc: "Take a scenic dragon boat ride deep into the underground river system." },
            { title: "Dark Cave (Hang Toi)", desc: "Zipline in, enjoy a natural mud bath in the dark, and kayak out. Pure adventure!" }
        ],
        gallery: [
            "assets/images/phongnha-1.jpg",
            "assets/images/phongnha-2.jpg",
            "assets/images/phongnha-3.jpg",
            "assets/images/phongnha-4.jpg",
            "assets/images/phongnha-5.jpg"
        ],
        touristReviews: [
            { initials: "AT", name: "Alex T.", country: "UK", text: "The caves here make you feel like you are on another planet. The scale of Paradise Cave is mind-blowing." },
            { initials: "CJ", name: "Chloe J.", country: "France", text: "The Dark Cave mud bath was hilarious and so much fun. The whole national park is stunning and untouched." }
        ]
    },
    "nhatrang": {
        title: "Nha Trang — The Riviera of the South China Sea",
        tag1: "Coastal",
        tag2: "Central Vietnam",
        location: "Khánh Hòa Province",
        rating: "4.5",
        reviews: "3,800+",
        duration: "3–5 days recommended",
        coverImage: "assets/images/nhatrang.jpg",
        desc1: "Renowned for its crescent-shaped bay, Nha Trang offers a 6-kilometer stretch of beautiful coastline with white sandy beaches, clear waters with an abundance of marine life and thriving reefs.",
        desc2: "It is the scuba diving center of Vietnam. When you aren't underwater, you can enjoy mud baths, historic Cham towers, and a vibrant nightlife.",
        price: "75",
        factElevation: "Sea level",
        factBestTime: "Feb–May",
        attractions: [
            { title: "Hon Mun Island", desc: "Vietnam's first marine protected area, offering world-class snorkeling and scuba diving." },
            { title: "VinWonders", desc: "A massive amusement park on a separate island, accessible by a scenic over-water cable car." },
            { title: "Po Nagar Cham Towers", desc: "Ancient Hindu temples built between the 7th and 12th centuries by the Cham civilization." }
        ],
        gallery: [
            "assets/images/nhatrang-1.jpg",
            "assets/images/nhatrang-2.jpg",
            "assets/images/nhatrang-3.jpg",
            "assets/images/nhatrang-4.jpg",
            "assets/images/nhatrang-5.jpg"
        ],
        touristReviews: [
            { initials: "KH", name: "Kevin H.", country: "USA", text: "The scuba diving was fantastic. Clear water, lots of corals. The nightlife along the beach is also very lively." },
            { initials: "OV", name: "Olga V.", country: "Russia", text: "The Thap Ba Mud Bath was so relaxing. A great city if you want a mix of beach resorts and entertainment." }
        ]
    },
    "dalat": {
        title: "Da Lat — City of Eternal Spring",
        tag1: "Mountain",
        tag2: "Central Highlands",
        location: "Lâm Đồng Province",
        rating: "4.8",
        reviews: "3,400+",
        duration: "2–3 days recommended",
        coverImage: "assets/images/dalat.jpg",
        desc1: "Nestled in the Central Highlands, Da Lat looks like a cross between a French alpine village and a Vietnamese countryside. It's famous for its cool pine forests, waterfalls, and flower gardens.",
        desc2: "Popular among local honeymooners, Da Lat offers a romantic and refreshing escape from the tropical heat of the lowlands.",
        price: "65",
        factElevation: "1,500 m above sea level",
        factBestTime: "Dec–Mar",
        attractions: [
            { title: "Xuan Huong Lake", desc: "The crescent-moon shaped lake in the center of town, perfect for a sunset swan boat ride." },
            { title: "Datanla Waterfall", desc: "A beautiful multi-tiered waterfall where you can ride an alpine coaster down the mountain." },
            { title: "Lang Biang Peak", desc: "Hike or take a jeep to the top for a stunning view of the entire Da Lat plateau." }
        ],
        gallery: [
            "assets/images/dalat-1.jpg",
            "assets/images/dalat-2.jpg",
            "assets/images/dalat-3.jpg",
            "assets/images/dalat-4.jpg",
            "assets/images/dalat-5.jpg"
        ],
        touristReviews: [
            { initials: "HM", name: "Hannah M.", country: "Australia", text: "Such a surprising contrast to the rest of Vietnam! The weather was perfectly cool and the coffee culture is top tier." },
            { initials: "PK", name: "Peter K.", country: "Germany", text: "Renting a motorbike and driving through the pine forests to see the waterfalls was my favorite memory." }
        ]
    },
    "hcmc": {
        title: "Ho Chi Minh City — The Vibrant Heartbeat",
        tag1: "City",
        tag2: "South Vietnam",
        location: "HCMC",
        rating: "4.7",
        reviews: "7,500+",
        duration: "3–5 days recommended",
        coverImage: "assets/images/hcmc.jpg",
        desc1: "Formerly known as Saigon, Ho Chi Minh City is a high-octane metropolis of commerce and culture that has driven the country forward with its pulsating energy.",
        desc2: "A dizzying mix of French colonial architecture, modern skyscrapers, ornate temples, and incredible street food stalls that stay open until dawn.",
        price: "70",
        factElevation: "19 m above sea level",
        factBestTime: "Dec–Apr (Dry season)",
        attractions: [
            { title: "War Remnants Museum", desc: "A powerful and sobering look at the Vietnam War through historical photography and artifacts." },
            { title: "Ben Thanh Market", desc: "A bustling indoor market where you can practice your bargaining skills for souvenirs and snacks." },
            { title: "Cu Chi Tunnels", desc: "A vast underground network used by the Viet Cong soldiers, located just outside the city." }
        ],
        gallery: [
            "assets/images/hcmc-1.jpg",
            "assets/images/hcmc-2.jpg",
            "assets/images/hcmc-3.jpg",
            "assets/images/hcmc-4.jpg",
            "assets/images/hcmc-5.jpg"
        ],
        touristReviews: [
            { initials: "WS", name: "William S.", country: "UK", text: "The energy in this city is unmatched. Thousands of motorbikes, amazing food on every corner, and history everywhere." },
            { initials: "JL", name: "Jessica L.", country: "USA", text: "Crawling through the Cu Chi tunnels was an eye-opening experience. Highly recommend taking a Vespa food tour at night!" }
        ]
    },
    "phuquoc": {
        title: "Phu Quoc — The Pearl Island",
        tag1: "Island",
        tag2: "South Vietnam",
        location: "Kiên Giang Province",
        rating: "4.9",
        reviews: "4,600+",
        duration: "4–6 days recommended",
        coverImage: "assets/images/phuquoc.jpg",
        desc1: "Floating in the warm turquoise waters in the Gulf of Thailand, Phu Quoc is Vietnam's premier island destination, boasting some of the most beautiful beaches in Southeast Asia.",
        desc2: "Over half the island is a protected national park. Enjoy fresh seafood, snorkel in coral gardens, and watch the best sunsets in the country.",
        price: "95",
        factElevation: "Sea level",
        factBestTime: "Nov–Apr (Perfect weather)",
        attractions: [
            { title: "Sao Beach (Bai Sao)", desc: "Known for its powdery white sand, turquoise water, and iconic palm tree swings." },
            { title: "Hon Thom Cable Car", desc: "The longest non-stop three-way cable car in the world, offering spectacular aerial ocean views." },
            { title: "Phu Quoc Night Market", desc: "A vibrant evening spot to try the freshest grilled seafood and local island pepper." }
        ],
        gallery: [
            "assets/images/phuquoc-1.jpg",
            "assets/images/phuquoc-2.jpg",
            "assets/images/phuquoc-3.jpg",
            "assets/images/phuquoc-4.jpg",
            "assets/images/phuquoc-5.jpg"
        ],
        touristReviews: [
            { initials: "MD", name: "Mark D.", country: "Canada", text: "The perfect place to end our Vietnam trip. Relaxing on Sao Beach with a coconut was heavenly." },
            { initials: "EP", name: "Elena P.", country: "Italy", text: "Taking the cable car to Pineapple Island was incredible. The seafood at the night market is so fresh and cheap!" }
        ]
    }
};