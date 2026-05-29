document.addEventListener('DOMContentLoaded', function() {

    /* ==========================================
       1. HIỆU ỨNG NAVBAR KHI CUỘN CHUỘT
       ========================================== */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                navbar.style.transition = 'all 0.3s ease';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });
    }

    /* ==========================================
       2. XỬ LÝ FORM LIÊN HỆ
       ========================================== */
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerHTML;
            
            btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Sending...';
            btnSubmit.disabled = true;
            
            setTimeout(function() {
                alert('Thank you! Your message has been sent successfully. We will contact you soon.');
                contactForm.reset(); 
                btnSubmit.innerHTML = originalText; 
                btnSubmit.disabled = false;
            }, 2000);
        });
    }

    /* ==========================================
       3. TÍNH NĂNG LỌC ĐỊA ĐIỂM (FILTER)
       ========================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');

    if (filterBtns.length > 0 && destinationCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.childNodes[0].textContent.trim().toLowerCase();

                destinationCards.forEach(card => {
                    const regionTag = card.querySelector('.tag-bottom-left');
                    const colWrapper = card.closest('[class*="col-"]'); 
                    card.style.transition = 'all 0.4s ease';

                    if (filterValue === 'all') {
                        colWrapper.style.display = 'block';
                        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                    } else {
                        if (regionTag && regionTag.textContent.toLowerCase().includes(filterValue)) {
                            colWrapper.style.display = 'block';
                            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => { colWrapper.style.display = 'none'; }, 400); 
                        }
                    }
                });
            });
        });
    }

    /* ==========================================
       4. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (REVEAL ON SCROLL)
       ========================================== */
    const revealElements = document.querySelectorAll('.card, .story-section, .feature-card, .intro-section');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================
       5. HIỆU ỨNG PARALLAX
       ========================================== */
    const heroBanners = document.querySelectorAll('.hero-section, .hero-destinations, .hero-detail, .hero-culture, .hero-contact');
    if (heroBanners.length > 0) {
        window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            heroBanners.forEach(banner => {
                banner.style.backgroundPositionY = (scrollPosition * 0.4) + 'px';
            });
        });
    }

    /* ==========================================
       6. TẠO NÚT "BACK TO TOP"
       ========================================== */
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopBtn.className = 'btn shadow-lg';
    Object.assign(backToTopBtn.style, {
        position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px',
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', zIndex: '999', opacity: '0', visibility: 'hidden',
        transition: 'all 0.3s ease', border: 'none', backgroundColor: 'var(--primary-green)', color: 'white'
    });
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTopBtn.style.opacity = '1'; backToTopBtn.style.visibility = 'visible'; backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0'; backToTopBtn.style.visibility = 'hidden'; backToTopBtn.style.transform = 'translateY(20px)';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ==========================================
       7. ĐẾM SỐ TỰ ĐỘNG
       ========================================== */
    const counterElements = document.querySelectorAll('.counter-value');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endValue = parseInt(target.getAttribute('data-target')); 
                    const duration = 2000; 
                    const frameRate = 1000 / 60; 
                    const totalFrames = Math.round(duration / frameRate);
                    let currentFrame = 0;

                    const counterInterval = setInterval(() => {
                        currentFrame++;
                        const progress = currentFrame / totalFrames;
                        const currentVal = Math.round(endValue * progress);
                        target.innerText = currentVal;
                        if (currentFrame === totalFrames) {
                            clearInterval(counterInterval);
                            target.innerText = endValue; 
                            if(target.hasAttribute('data-suffix')) target.innerText += target.getAttribute('data-suffix');
                        }
                    }, frameRate);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        counterElements.forEach(el => counterObserver.observe(el));
    }

    /* ==========================================
       8. ĐỔ DỮ LIỆU ĐỘNG CHO TRANG DETAIL (Đã nâng cấp)
       ========================================== */
    const heroDetail = document.querySelector('.hero-detail');
    
    if (heroDetail && typeof destinationsData !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        let destId = urlParams.get('id');
        
        if (!destId || !destinationsData[destId]) {
            destId = 'sapa'; 
        }

        const data = destinationsData[destId];

        // Tách chuỗi Title để lấy Tên Ngắn và Câu Slogan
        // Ví dụ: "Hanoi — A Thousand Years of History" -> Tên ngắn: "Hanoi", Slogan: "A Thousand Years of History"
        const titleParts = data.title.split('—');
        const shortName = titleParts[0].trim();
        const slogan = titleParts.length > 1 ? titleParts[1].trim() : shortName;

        // Đổ dữ liệu phần Banner
        heroDetail.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${data.coverImage}')`;
        if (document.querySelector('.hero-title')) document.querySelector('.hero-title').textContent = data.title;
        if (document.querySelector('.tag-pill-green')) document.querySelector('.tag-pill-green').textContent = data.tag1;
        if (document.querySelector('.tag-pill')) document.querySelector('.tag-pill').textContent = data.tag2;
        
        const metaSpans = document.querySelectorAll('.hero-detail .mt-3 > span');
        if (metaSpans.length >= 3) {
            metaSpans[0].innerHTML = `<i class="bi bi-geo-alt"></i> ${data.location}`;
            metaSpans[1].innerHTML = `<i class="bi bi-star-fill text-warning"></i> ${data.rating} (${data.reviews} reviews)`;
            metaSpans[2].innerHTML = `<i class="bi bi-clock"></i> ${data.duration}`;
        }

        // --- BỔ SUNG MỚI: ĐỔI CÁC TIÊU ĐỀ <h2> BÊN CỘT TRÁI ---
        const sectionHeaders = document.querySelectorAll('.col-lg-8 h2');
        if (sectionHeaders.length >= 3) {
            sectionHeaders[0].textContent = slogan; // Tiêu đề Overview -> Dùng câu Slogan
            sectionHeaders[1].textContent = `Must-See Places in ${shortName}`; // Thay chữ Sapa bằng tên địa điểm mới
            sectionHeaders[2].textContent = `${shortName} Through the Lens`; 
        }

        // Đổ dữ liệu phần Overview (Đoạn văn)
        const paragraphs = document.querySelectorAll('.col-lg-8 > .mb-5 p.text-muted');
        if (paragraphs.length >= 2) {
            paragraphs[0].innerHTML = data.desc1;
            paragraphs[1].innerHTML = data.desc2;
        }

        // Đổ dữ liệu Sidebar Giá & Facts
        const priceElement = document.querySelector('.booking-price');
        if (priceElement) priceElement.textContent = `$${data.price}`;

        const factValues = document.querySelectorAll('.fact-item .fw-bold');
        if (factValues.length >= 3) {
            factValues[0].textContent = data.location;
            factValues[1].textContent = data.factElevation;
            factValues[2].textContent = data.factBestTime;
        }

        // Đổ dữ liệu Top Attractions + SỬA LỖI ICON
        if (data.attractions) {
            const attractionItems = document.querySelectorAll('.attraction-item'); 
            // Cung cấp 3 icon chuẩn xác để nhét vào 3 ô, thay thế cho cái cũ bị lỗi
            const validIcons = ['bi-geo-alt', 'bi-camera-fill', 'bi-compass']; 

            data.attractions.forEach((attr, index) => {
                if (attractionItems[index]) { 
                    const titleEl = attractionItems[index].querySelector('h5');
                    const descEl = attractionItems[index].querySelector('p');
                    const iconEl = attractionItems[index].querySelector('.stat-icon i'); // Lấy thẻ icon

                    if (titleEl) titleEl.innerHTML = `${attr.title} <i class="bi bi-check-circle-fill text-success fs-6"></i>`;
                    if (descEl) descEl.textContent = attr.desc;
                    
                    // Gắn lại icon chuẩn
                    if (iconEl && validIcons[index]) {
                        iconEl.className = `bi ${validIcons[index]}`;
                    }
                }
            });
        }

        // Đổ dữ liệu Photo Gallery
        if (data.gallery) {
            const galleryImgs = document.querySelectorAll('.gallery-img');
            data.gallery.forEach((imgSrc, index) => {
                if (galleryImgs[index]) {
                    galleryImgs[index].src = imgSrc; 
                }
            });
        }

        // Đổ dữ liệu Reviews
        if (data.touristReviews) {
            const reviewCards = document.querySelectorAll('.review-card');
            data.touristReviews.forEach((rev, index) => {
                if (reviewCards[index]) {
                    const initialsEl = reviewCards[index].querySelector('.rounded-circle');
                    const nameEl = reviewCards[index].querySelector('h6');
                    const textEl = reviewCards[index].querySelector('p.text-muted');

                    if (initialsEl) initialsEl.textContent = rev.initials;
                    if (nameEl) nameEl.innerHTML = `${rev.name} <span class="text-muted fw-normal ms-2">${rev.country}</span>`;
                    if (textEl) textEl.textContent = `"${rev.text}"`;
                }
            });
        }
        // --- BỔ SUNG MỚI: XỬ LÝ THỜI TIẾT VÀ BIỂU ĐỒ ---
        
        // 1. Giả lập thời tiết hiện tại dựa trên tag vùng miền (North, Central, South)
        const tempEl = document.getElementById('current-temp');
        const descEl = document.getElementById('weather-desc');
        const iconEl = document.getElementById('weather-icon');
        const humidityEl = document.getElementById('weather-humidity');
        const windEl = document.getElementById('weather-wind');

        if (tempEl && descEl && iconEl) {
            let temp, desc, icon, hum, wind;
            
            // Giả lập logic thời tiết đơn giản
            if (data.tag2.includes('North')) {
                temp = Math.floor(Math.random() * (28 - 15 + 1)) + 15; // 15-28 độ
                desc = temp > 22 ? 'Partly Cloudy' : 'Cool & Misty';
                icon = temp > 22 ? 'bi-cloud-sun' : 'bi-cloud-fog2';
                hum = '75%'; wind = '12 km/h';
            } else if (data.tag2.includes('Central')) {
                temp = Math.floor(Math.random() * (35 - 24 + 1)) + 24; // 24-35 độ
                desc = temp > 30 ? 'Sunny & Clear' : 'Scattered Showers';
                icon = temp > 30 ? 'bi-sun' : 'bi-cloud-rain';
                hum = '65%'; wind = '18 km/h';
            } else { // South
                temp = Math.floor(Math.random() * (34 - 27 + 1)) + 27; // 27-34 độ
                desc = 'Hot & Humid';
                icon = 'bi-brightness-high';
                hum = '85%'; wind = '8 km/h';
            }

            // Ghi đè riêng cho Đà Lạt và Sapa vì là vùng núi
            if (destId === 'sapa' || destId === 'dalat') {
                temp -= 8; 
                desc = 'Crisp Mountain Air';
                icon = 'bi-cloud-sun';
            }

            tempEl.textContent = `${temp}°C`;
            descEl.textContent = desc;
            iconEl.innerHTML = `<i class="bi ${icon}"></i>`;
            if (humidityEl) humidityEl.textContent = hum;
            if (windEl) windEl.textContent = wind;
        }

        // 2. Vẽ biểu đồ nhiệt độ trung bình năm (Climate Chart)
        const chartContainer = document.getElementById('climate-chart');
        const bestTimeDesc = document.getElementById('best-time-desc');
        
        if (chartContainer) {
            chartContainer.innerHTML = ''; // Xóa trắng biểu đồ cũ
            
            // Dữ liệu nhiệt độ trung bình 12 tháng giả lập theo vùng
            let temps = [];
            let bestMonths = []; // Các tháng highlight (0 = Jan, 11 = Dec)
            
            if (data.tag2.includes('North')) {
                temps = [16, 17, 20, 24, 28, 29, 30, 29, 28, 25, 21, 18];
                bestMonths = [8, 9, 10, 2, 3]; // Mùa thu (Sep-Nov) và mùa xuân (Mar-Apr)
                if (bestTimeDesc) bestTimeDesc.textContent = `Best time: ${data.factBestTime}`;
            } else if (data.tag2.includes('Central')) {
                temps = [21, 22, 24, 27, 29, 30, 30, 30, 28, 26, 24, 22];
                bestMonths = [1, 2, 3, 4, 5]; // Feb - Jun
                if (bestTimeDesc) bestTimeDesc.textContent = `Best time: ${data.factBestTime}`;
            } else {
                temps = [26, 27, 28, 29, 29, 28, 28, 28, 28, 27, 27, 26];
                bestMonths = [10, 11, 0, 1, 2, 3]; // Mùa khô (Nov - Apr)
                if (bestTimeDesc) bestTimeDesc.textContent = `Best time: ${data.factBestTime}`;
            }

            // Ghi đè riêng cho Sapa
            if (destId === 'sapa') {
                temps = [8, 10, 14, 18, 20, 21, 21, 20, 18, 15, 12, 9];
                bestMonths = [8, 9, 10]; // Sep - Nov
            }

            const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
            const maxTemp = Math.max(...temps) + 5; // Để cột cao nhất không chạm trần

            temps.forEach((temp, index) => {
                const heightPercent = (temp / maxTemp) * 100;
                const isHighlight = bestMonths.includes(index) ? 'highlight' : '';
                
                const barHTML = `
                    <div class="chart-bar-group">
                        <div class="chart-bar ${isHighlight}" style="height: ${heightPercent}%;" data-temp="${temp}"></div>
                        <span class="chart-label">${months[index]}</span>
                    </div>
                `;
                chartContainer.innerHTML += barHTML;
            });
        }
        document.title = `${data.title} | VietJourney`;
    }
    /* ==========================================
       9. HỆ THỐNG THÔNG BÁO NỔI (TOAST NOTIFICATIONS)
       ========================================== */
    // 1. Hàm tạo và hiển thị thông báo
    function showToast(message, type = 'success', icon = 'bi-check-circle-fill') {
        // Xóa toast cũ nếu có
        const oldToast = document.querySelector('.custom-toast');
        if (oldToast) oldToast.remove();

        // Tạo element mới
        const toast = document.createElement('div');
        toast.className = `custom-toast ${type}`;
        toast.innerHTML = `<i class="bi ${icon} fs-5"></i> <span>${message}</span>`;
        
        document.body.appendChild(toast);

        // Kích hoạt animation hiện lên
        setTimeout(() => toast.classList.add('show'), 10);

        // Tự động ẩn đi sau 3 giây
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400); // Đợi CSS transition chạy xong mới xóa DOM
        }, 3000);
    }

    // 2. Bắt sự kiện cho các nút có class "btn-action"
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Ngăn hành vi nhảy trang mặc định
            
            // Đọc thuộc tính data-action để biết nút nào vừa được bấm
            const actionType = this.getAttribute('data-action');

            if (actionType === 'save') {
                showToast('Đã lưu địa điểm vào danh sách yêu thích!', 'success', 'bi-heart-fill');
                // Đổi icon tim rỗng thành tim đặc
                this.innerHTML = '<i class="bi bi-heart-fill text-danger"></i> Saved';
            } 
            else if (actionType === 'share') {
                showToast('Đã copy đường link để chia sẻ!', 'info', 'bi-link-45deg');
            }
            else if (actionType === 'book') {
                showToast('Chuyển hướng đến cổng thanh toán...', 'success', 'bi-credit-card-fill');
                // Chuyển sang trang contact sau 2 giây mô phỏng
                setTimeout(() => window.location.href = 'contact.html', 2000);
            }
            else if (actionType === 'coming-soon') {
                showToast('Tính năng này đang được phát triển!', 'warning', 'bi-tools');
            }
        });
    });
    /* ==========================================
       10. XỬ LÝ SỰ KIỆN VÀ FORM TRONG MODAL (NÂNG CẤP ĐỘNG)
       ========================================== */
    const bookingModalEl = document.getElementById('bookingModal');
    
    if (bookingModalEl) {
        // Lắng nghe sự kiện BẮT ĐẦU MỞ MODAL của Bootstrap
        bookingModalEl.addEventListener('show.bs.modal', function (event) {
            // Nút bấm vừa kích hoạt modal (Nút Book hoặc Nút Request)
            const button = event.relatedTarget;
            
            // Lấy tiêu đề từ text của nút bấm đó
            const buttonText = button.textContent.trim();
            
            // Tìm các phần tử cần thay đổi trong Modal
            const modalTitle = bookingModalEl.querySelector('.modal-title');
            const noteText = bookingModalEl.querySelector('.modal-body p');
            const textareaLabel = bookingModalEl.querySelector('label[for="specialRequest"]') || bookingModalEl.querySelectorAll('label fw-bold small')[5];
            const placeholderText = bookingModalEl.querySelector('textarea');

            // Cập nhật nội dung động dựa vào nút được bấm
            if (buttonText.includes('Request Custom Tour')) {
                modalTitle.innerHTML = '<i class="bi bi-pencil-square me-2"></i> Custom Tour Request';
                noteText.textContent = 'Tell us your dream itinerary. Our travel experts will design a personalized tour and send you a custom quote within 24 hours.';
                if (placeholderText) placeholderText.placeholder = "Example: I want to stay 7 days, upgrade to 5-star hotel, and add a food tour...";
            } else {
                modalTitle.innerHTML = '<i class="bi bi-calendar-check me-2"></i> Start Your Journey';
                noteText.textContent = 'Please fill in your details. Our travel expert will contact you within 24 hours to confirm the arrangement.';
                if (placeholderText) placeholderText.placeholder = "Dietary requirements, celebrations...";
            }
        });

        // Xử lý khi Submit Form (Giữ nguyên logic cũ nhưng đổi câu thông báo Toast cho khớp)
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const submitBtn = bookingForm.querySelector('button[type="submit"]');
                const modalTitleText = bookingModalEl.querySelector('.modal-title').textContent.trim();
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Processing...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    // Trả về thông báo tương ứng với loại yêu cầu
                    if (modalTitleText.includes('Custom')) {
                        if (typeof showToast === 'function') showToast('Custom tour request received! We will send your itinerary soon.', 'success');
                    } else {
                        if (typeof showToast === 'function') showToast('Booking request sent successfully! Check your email.', 'success');
                    }
                    
                    bookingForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    const modalInstance = bootstrap.Modal.getInstance(bookingModalEl);
                    if (modalInstance) modalInstance.hide();
                }, 1500);
            });
        }
    }

});