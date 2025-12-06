// ===================================
// Smooth Scroll & Navigation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===================================
    // Scroll Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add delay for staggered animations
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .timeline-item, .principle-card'
    );
    animatedElements.forEach(el => observer.observe(el));
    
    // ===================================
    // Counter Animation for Stats
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => animateCounter(stat));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // ===================================
    // Quotes Carousel
    // ===================================
    const quoteItems = document.querySelectorAll('.quote-item');
    const prevBtn = document.getElementById('prevQuote');
    const nextBtn = document.getElementById('nextQuote');
    const dotsContainer = document.getElementById('carouselDots');
    
    let currentQuote = 0;
    
    // Create dots
    if (dotsContainer) {
        quoteItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToQuote(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    function showQuote(index) {
        quoteItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
        
        // Update dots
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    function nextQuote() {
        currentQuote = (currentQuote + 1) % quoteItems.length;
        showQuote(currentQuote);
    }
    
    function prevQuote() {
        currentQuote = (currentQuote - 1 + quoteItems.length) % quoteItems.length;
        showQuote(currentQuote);
    }
    
    function goToQuote(index) {
        currentQuote = index;
        showQuote(currentQuote);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevQuote);
    if (nextBtn) nextBtn.addEventListener('click', nextQuote);
    
    // Auto-advance quotes every 5 seconds
    let quoteInterval = setInterval(nextQuote, 5000);
    
    // Pause auto-advance when hovering over carousel
    const quotesCarousel = document.getElementById('quotesCarousel');
    if (quotesCarousel) {
        quotesCarousel.addEventListener('mouseenter', () => {
            clearInterval(quoteInterval);
        });
        
        quotesCarousel.addEventListener('mouseleave', () => {
            quoteInterval = setInterval(nextQuote, 5000);
        });
    }
    
    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===================================
    // Chart.js Visualizations
    // ===================================
    
    // Cost vs Value Chart
    const costValueCtx = document.getElementById('costValueChart');
    if (costValueCtx) {
        new Chart(costValueCtx, {
            type: 'radar',
            data: {
                labels: ['客戶滿意度', '品牌價值', '進入門檻', '長期利潤', '市場地位', '團隊士氣'],
                datasets: [{
                    label: 'Cost Leading 成本領先',
                    data: [50, 40, 30, 50, 45, 40],
                    backgroundColor: 'rgba(229, 115, 115, 0.2)',
                    borderColor: 'rgba(229, 115, 115, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(229, 115, 115, 1)',
                }, {
                    label: 'Quality Leading 品質領先',
                    data: [95, 90, 85, 90, 95, 90],
                    backgroundColor: 'rgba(139, 115, 85, 0.2)',
                    borderColor: 'rgba(139, 115, 85, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(139, 115, 85, 1)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Noto Sans TC', sans-serif",
                                size: 13
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.r + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Cost Thinking Chart
    const costThinkingCtx = document.getElementById('costThinkingChart');
    if (costThinkingCtx) {
        new Chart(costThinkingCtx, {
            type: 'doughnut',
            data: {
                labels: ['機會成本', '時間成本', '金錢成本'],
                datasets: [{
                    data: [60, 30, 10],
                    backgroundColor: [
                        'rgba(229, 115, 115, 0.8)',
                        'rgba(255, 183, 77, 0.8)',
                        'rgba(129, 199, 132, 0.8)'
                    ],
                    borderColor: [
                        'rgba(229, 115, 115, 1)',
                        'rgba(255, 183, 77, 1)',
                        'rgba(129, 199, 132, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: "'Noto Sans TC', sans-serif",
                                size: 14
                            },
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Churn Prediction Chart
    const churnPredictionCtx = document.getElementById('churnPredictionChart');
    if (churnPredictionCtx) {
        new Chart(churnPredictionCtx, {
            type: 'line',
            data: {
                labels: ['第1堂', '第4堂', '第8堂', '第12堂', '第16堂', '第20堂', '第24堂'],
                datasets: [{
                    label: '高風險客戶',
                    data: [70, 65, 55, 35, 15, 5, 2],
                    borderColor: 'rgba(229, 115, 115, 1)',
                    backgroundColor: 'rgba(229, 115, 115, 0.2)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }, {
                    label: '一般客戶',
                    data: [30, 25, 18, 12, 8, 5, 3],
                    borderColor: 'rgba(139, 115, 85, 1)',
                    backgroundColor: 'rgba(139, 115, 85, 0.2)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 80,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: '退費機率',
                            font: {
                                size: 14
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '上課進度',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Noto Sans TC', sans-serif",
                                size: 13
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Sales Behavior Chart
    const salesBehaviorCtx = document.getElementById('salesBehaviorChart');
    if (salesBehaviorCtx) {
        new Chart(salesBehaviorCtx, {
            type: 'bar',
            data: {
                labels: ['關懷客戶', '開發新客', '產品研究', '團隊會議', '培訓學習', '行政作業'],
                datasets: [{
                    label: 'Top Sales',
                    data: [35, 25, 15, 12, 10, 3],
                    backgroundColor: 'rgba(139, 115, 85, 0.8)',
                    borderColor: 'rgba(139, 115, 85, 1)',
                    borderWidth: 2
                }, {
                    label: '一般業務',
                    data: [15, 30, 8, 15, 5, 27],
                    backgroundColor: 'rgba(160, 130, 109, 0.6)',
                    borderColor: 'rgba(160, 130, 109, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: '時間分配比例',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Noto Sans TC', sans-serif",
                                size: 13
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [{
                    label: '員工人數',
                    data: [5, 50, 500, 1200, 2500, 5000, 5500, 6000, 6200, 6500],
                    borderColor: 'rgba(139, 115, 85, 1)',
                    backgroundColor: 'rgba(139, 115, 85, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                }, {
                    label: '公司估值 (億美金)',
                    data: [0, 0, 1, 2, 5, 10, 12, 15, 18, 20],
                    borderColor: 'rgba(201, 168, 130, 1)',
                    backgroundColor: 'rgba(201, 168, 130, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: '員工人數',
                            font: {
                                size: 13
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: '估值 (億美金)',
                            font: {
                                size: 13
                            }
                        },
                        grid: {
                            drawOnChartArea: false,
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Noto Sans TC', sans-serif",
                                size: 13
                            }
                        }
                    }
                }
            }
        });
    }
    
    // ===================================
    // Parallax Effect (subtle)
    // ===================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ===================================
    // Add hover effect to cards
    // ===================================
    const cards = document.querySelectorAll('.principle-card, .mgmt-card, .decision-card, .lesson-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===================================
    // Lazy loading optimization
    // ===================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ===================================
    // Print/Share functionality
    // ===================================
    function addShareButtons() {
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const shareBtn = document.createElement('button');
            shareBtn.className = 'share-section-btn';
            shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
            shareBtn.title = '分享此章節';
            
            shareBtn.addEventListener('click', function() {
                const sectionId = section.id;
                const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
                
                if (navigator.share) {
                    navigator.share({
                        title: '獨角獸養成術',
                        text: '楊正大博士的創業心法',
                        url: url
                    });
                } else {
                    // Fallback: copy to clipboard
                    navigator.clipboard.writeText(url).then(() => {
                        alert('連結已複製到剪貼簿！');
                    });
                }
            });
            
            // section.style.position = 'relative';
            // section.appendChild(shareBtn);
        });
    }
    
    // Initialize after DOM is ready
    setTimeout(addShareButtons, 1000);
    
    // ===================================
    // Performance monitoring
    // ===================================
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`頁面載入時間: ${pageLoadTime}ms`);
        });
    }
    
    // ===================================
    // Accessibility enhancements
    // ===================================
    
    // Add keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevQuote();
        } else if (e.key === 'ArrowRight') {
            nextQuote();
        }
    });
    
    // Focus management for mobile menu
    const firstFocusableElement = navMenu.querySelector('a');
    const lastFocusableElement = navMenu.querySelectorAll('a')[navMenu.querySelectorAll('a').length - 1];
    
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
        
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.focus();
        }
    });
    
    console.log('🦄 獨角獸養成術網站已完全載入！');
    console.log('Made with ❤️ by 111 N.');
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}