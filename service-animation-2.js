var servicesTrigger = document.querySelectorAll(".service-container");
var servicesTitles = document.querySelectorAll(".service-title8");
var servicesSubTitles = document.querySelectorAll(".service-subtitle7");
var servicesImage = document.querySelectorAll(".service-image");
var servicesNumber = document.querySelectorAll(".service-index-2");
var servicesDetailsTitle = document.querySelectorAll(".service-details-title");
var servicesDetails = document.querySelectorAll(".service-details9");
var servicesDetailsImage = document.querySelectorAll(".service-details-image");
var backButton = document.querySelector(".service-details-back-button");
var nextButton = document.querySelector(".next-button-container");
var previousButton = document.querySelector(".previous-button-container");
var services = [];
var isAnimating = false;
var isOpening = false;
var isChanging = false;
var activeService = null;
var isDetailsOpen = false;
var timeMouseEntered;

class Service {

    constructor(index) {
                    
        this.index = index;
        this.trigger = servicesTrigger[index];
        this.isActive = index === 0 ? true : false;
        this.serviceTitle = servicesTitles[index];
        this.serviceSubTitle = servicesSubTitles[index];
        this.serviceImage = servicesImage[index];
        this.serviceNumber = servicesNumber[index];
        this.serviceDetailsTitle = servicesDetailsTitle[index];
        this.serviceDetails = servicesDetails[index];
        this.serviceDetailsImage = servicesDetailsImage[index];

        this.trigger.addEventListener("mouseenter", (e) => {

            timeMouseEntered = new Date().getTime();

            for(let service of services) {
                if(service.isActive) {
                    activeService = service;
                }
            }
                            
            if(!isAnimating && activeService !== this && window.screen.width > 480) {
                
                isAnimating = true;
                activeService.isActive = false;

                gsap.set(this.serviceSubTitle, {opacity: 0, y: "-64vw"});
                gsap.set(this.serviceTitle, {opacity: 0, y: "-2.6vw"});                
                gsap.set(this.serviceImage, {opacity: 0, y: "-72vw", x: "10%"});
                gsap.set(this.serviceNumber, {opacity: 0, y: "-50vw"}); 
                
                gsap.to(activeService.serviceSubTitle, {
                    y: "0vh",
                    duration: 0.7,
                    ease: "Expo.easeIn",
                });

                gsap.to(activeService.serviceTitle, {
                    y: "0vh",
                    duration: 0.7,
                    delay: 0.1,
                    ease: "Expo.easeIn",
                });
            
                gsap.to(activeService.serviceImage, {
                    y: "0vw",
                    duration: 0.7,
                    delay: 0.2,
                    ease: "Expo.easeIn",
                });
            
                gsap.to(activeService.serviceNumber, {
                    y: "0vh",
                    duration: 0.7,
                    delay: 0.3,
                    ease: "Expo.easeIn",
                });

                gsap.set(this.serviceSubTitle, {opacity: 1, delay: 0.7});
                gsap.set(this.serviceTitle, {opacity: 1, delay: 0.8});             
                gsap.set(this.serviceImage, {opacity: 1, delay: 0.9});
                gsap.set(this.serviceNumber, {opacity: 1, delay: 1});
            
                gsap.to(this.serviceSubTitle, {
                    y: "-32vw",
                    duration: 0.7,
                    delay: 0.7,
                    ease: "Expo.easeOut",
                });
            
                gsap.to(this.serviceTitle, {
                    y: "-1.3vw",
                    duration: 0.7,
                    delay: 0.8,
                    ease: "Expo.easeOut",
                });
            
                gsap.to(this.serviceImage, {
                    y: "-36vw",
                    duration: 0.7,
                    delay: 0.9,
                    ease: "Expo.easeOut",
                });
                
                gsap.to(this.serviceNumber, {
                    y: "-25vw",
                    duration: 0.7,
                    delay: 1,
                    ease: "Expo.easeOut",
                    onComplete: () => {
                        isAnimating = false;
                        this.isActive = true;
                    }
                });
            
            }
        
        });
        
        this.trigger.addEventListener("click", (e) => {
            let toOpen = true;
            for(let service of services) {
                console.log(service.isActive)
                if(service.isActive) {
                    toOpen = false;
                }
            }
            if(!isOpening && toOpen) {
                !isAnimating ? this.clickEventHandler() : setTimeout(() => this.clickEventHandler(), 1800 - (new Date().getTime() - timeMouseEntered));
            }
        });

    }

    clickEventHandler() {

        isAnimating = true;
        isOpening = true;

        for(let service of services) {
            if(service.isActive) {
                activeService = service;
            }
        }

        activeService.isActive = false;
        this.isActive = true;
        isDetailsOpen = true;

        if(this.index === 8) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }

        if(this.index === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "block";
        }

        gsap.set([".next-button", ".previous-button"], {x: "-100%"});
        gsap.set(".service-details-back-button", {y: "20vh"});

        gsap.to(activeService.serviceTitle, {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            ease: "Expo.easeIn",
        });
        
        gsap.to(activeService.serviceSubTitle, {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            delay: 0.1,
            ease: "Expo.easeIn",
        });
        
        gsap.to(activeService.serviceImage, {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "Expo.easeIn",
        });
        
        gsap.to(".service-index-1", {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "Expo.easeIn",
        });
        
        gsap.to(activeService.serviceNumber, {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            delay: 0.4,
            ease: "Expo.easeIn",
        });
        
        gsap.to([servicesTrigger], {
            y: "-120vw",
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            delay: 0.5,
            ease: "Expo.easeIn",
        });    
        
        gsap.to(".service-details-container", {
            display: "block",
            y: "-100%",
            delay: 1.5,
            duration: 1.2,
            ease: "Expo.easeOut",
        });
        
        gsap.to([".previous-button", ".next-button"], {
            x: "0%",
            delay: 2.1,
            duration: 0.7,
            ease: "Expo.easeOut",
        });

        var serviceDetailsTransformY, serviceTitleTransformY;

        if(window.location.href.includes("gr")) {
            serviceTitleTransformY = window.screen.width > 480 ? "-100%" : "-100%"
            serviceDetailsTransformY = window.screen.width > 480 ?  "-18vw" : "-100%";
        } else {
            serviceDetailsTransformY = window.screen.width > 480 ?  "-14vw" : "-50vw";
            serviceTitleTransformY = window.screen.width > 480 ? "-100%" : "-23vw"
        }
        
        gsap.to(this.serviceDetailsTitle, {
            y: serviceTitleTransformY,
            delay: 2.2,
            duration: 0.7,
            ease: "Expo.easeOut",
        });

        gsap.to(this.serviceDetails, {
            y: serviceDetailsTransformY,
            delay: 2.3,
            duration: 0.7,
            ease: "Expo.easeOut",
        });
        
        gsap.to(this.serviceDetailsImage, {
            y: window.screen.width > 480 ? "-38vw" : "-43vw",
            delay: 2.4,
            duration: 0.7,
            ease: "Expo.easeOut",
        });

        gsap.to(".service-details-back-button", {
            y: "0vh",
            delay: 2.5,
            duration: 0.7,
            ease: "Expo.easeOut",
            onComplete: () => {
                activeService = this;
                isAnimating = false;
                isOpening = false;
            }
        });

    }

}

for(let i=0; i<servicesTrigger.length; i++) {
    services.push(new Service(i));
}

activeService = services[0];


backButton.addEventListener("click", (e) => {

    if(!isAnimating && !isChanging) {

        isAnimating = true;

        gsap.to(backButton, {
            y: "20vh",
            duration: 0.7,
            ease: "Expo.easeIn",
        });

        for(let service of services) {
            if(service.isActive) {
            
                gsap.set([servicesTrigger], {opacity: 0});
                gsap.set(service.serviceImage, {x: "10%", y: "-100vw", opacity: 0});
                gsap.set(service.serviceNumber, {y: "-100vw", opacity: 0});
                gsap.set(".service-index-1", {y: "-100vw", opacity: 0});
                gsap.set(service.serviceSubTitle, {y: "-100vw", opacity: 0});
                gsap.set(service.serviceTitle, {y: "-100vw", opacity: 0});
                
                gsap.to(service.serviceDetailsImage, {
                    y: "0vw",
                    delay: 0.1,
                    duration: 0.7,
                    ease: "Expo.easeIn",
                });

                gsap.to(service.serviceDetails, {
                    y: "0vw",
                    delay: 0.2,
                    duration: 0.7,
                    ease: "Expo.easeIn",
                });

                gsap.to(service.serviceDetailsTitle, {
                    y: "0%",
                    delay: 0.3,
                    duration: 0.7,
                    ease: "Expo.easeIn",
                });

                gsap.to([".previous-button", ".next-button"], {
                    x: "-100%",
                    delay: 0.4,
                    duration: 0.7,
                    ease: "Expo.easeIn",
                });

                gsap.to(".service-details-container", {
                    y: "0%",
                    display: "none",
                    delay: 0.4,
                    duration: 1.2,
                    ease: "Expo.easeIn",
                });

                gsap.to([servicesTrigger], {
                    y: "0vh",
                    opacity: 1,
                    duration: 1,
                    stagger: 0.03,
                    delay: 0.8,
                    ease: "Expo.easeIn",
                });

                gsap.to(".service-index-1", {
                    y: "-25vw",
                    opacity: 1,
                    duration: 1,
                    delay: 0.9,
                    ease: "Expo.easeIn",
                });
                
                gsap.to(service.serviceNumber, {
                    y: "-25vw",
                    opacity: 1,
                    duration: 1,
                    delay: 1,
                    ease: "Expo.easeIn",
                });

                gsap.to(service.serviceImage, {
                    y: window.screen.width > 480 ? "-36vw" : "-47vw",
                    opacity: 1,
                    duration: 1,
                    delay: 1.1,
                    ease: "Expo.easeIn",
                });

                gsap.to(service.serviceSubTitle, {
                    y: window.screen.width > 480 ? "-32vw" : "-52vw",
                    opacity: 1,
                    duration: 1,
                    delay: 1.2,
                    ease: "Expo.easeIn",
                });

                gsap.to(service.serviceTitle, {
                    y: window.screen.width > 480 ? "-1.3vw" : "-2.1vw",
                    opacity: 1,
                    duration: 1,
                    delay: 1.3,
                    ease: "Expo.easeIn",
                    onComplete: () => {
                        isDetailsOpen = false;
                        isAnimating = false;
                    }
                });
            }
        }

    }

});

const changeServiceDetails = (currentService, nextService) => {

    isChanging = true;

    gsap.to(currentService.serviceDetailsImage, {
        y: "0vw",
        duration: 0.7,
        ease: "Expo.easeIn",
    });

    gsap.to(currentService.serviceDetails, {
        y: "0vw",
        delay: 0.1,
        duration: 0.7,
        ease: "Expo.easeIn",
    });

    gsap.to(currentService.serviceDetailsTitle, {
        y: "0%",
        delay: 0.2,
        duration: 0.7,
        ease: "Expo.easeIn",
    });

    gsap.to(nextService.serviceDetailsTitle, {
        y: window.screen.width > 480 ? "-100%" : "-2.1vw",
        y: "-100%",
        delay: 0.9,
        duration: 0.7,
        ease: "Expo.easeOut",
    });

    var serviceDetailsTransformY;

    if(window.location.href.includes("gr")) {
        serviceDetailsTransformY = window.screen.width > 480 ?  "-18vw" : "-61vw";
    } else {
        serviceDetailsTransformY = window.screen.width > 480 ?  "-14vw" : "-50vw";
    }

    gsap.to(nextService.serviceDetails, {
        y: serviceDetailsTransformY,
        delay: 1,
        duration: 0.7,
        ease: "Expo.easeOut",
    });

    gsap.to(nextService.serviceDetailsImage, {
        y: window.screen.width > 480 ? "-38vw" : "-43vw",
        delay: 1.1,
        duration: 0.7,
        ease: "Expo.easeOut",
        onComplete: () => {
            currentService.isActive = false;
            currentService = nextService;
            currentService.isActive = true;
            activeService = currentService;
            isChanging = false
        }
    });

}

nextButton.addEventListener("click", (e) => {

    var currentService, nextService;

    for(let service of services) {
        if(service.isActive) {
            currentService = service;
        }
    }

    if(currentService && currentService.index < 8 && !isChanging) {
        nextService = services[currentService.index + 1];
        changeServiceDetails(currentService, nextService);
    }

    if(nextService && nextService.index === 8) {
        nextButton.style.display = "none";
    }

    if(nextService && nextService.index !== 0) {
        previousButton.style.display = "block";
    }

});

previousButton.addEventListener("click", (e) => {

    var currentService, nextService;

    for(let service of services) {
        if(service.isActive) {
            service.isActive = false;
            currentService = service;
        }
    }

    if(currentService && currentService.index > 0 && !isChanging) {
        nextService = services[currentService.index - 1];
        changeServiceDetails(currentService, nextService);
    }

    if(nextService && nextService.index === 0) {
        previousButton.style.display = "none";
    }

    if(nextService && nextService.index !== 8) {
        nextButton.style.display = "block";
    }

});

if(screen.width < 480) {

    setInterval(() => {

        if(!isDetailsOpen) {

            isAnimating = true;
            activeService.isActive = false;

            gsap.set(services[activeService.index + 1].serviceSubTitle, {opacity: 0, y: "-102vw"});
            gsap.set(services[activeService.index + 1].serviceTitle, {opacity: 0, y: "-4.2vw"});                
            gsap.set(services[activeService.index + 1].serviceImage, {opacity: 0, y: "-94vw", x: "10%"});
            gsap.set(services[activeService.index + 1].serviceNumber, {opacity: 0, y: "-50vw"}); 
            
            gsap.to(activeService.serviceSubTitle, {
                y: "0vh",
                duration: 0.7,
                ease: "Expo.easeIn",
            });

            gsap.to(activeService.serviceTitle, {
                y: "0vh",
                duration: 0.7,
                delay: 0.1,
                ease: "Expo.easeIn",
            });
        
            gsap.to(activeService.serviceImage, {
                y: "0vw",
                duration: 0.7,
                delay: 0.2,
                ease: "Expo.easeIn",
            });
        
            gsap.to(activeService.serviceNumber, {
                y: "0vh",
                duration: 0.7,
                delay: 0.3,
                ease: "Expo.easeIn",
            });

            gsap.set(services[activeService.index + 1].serviceSubTitle, {opacity: 1, delay: 0.7});
            gsap.set(services[activeService.index + 1].serviceTitle, {opacity: 1, delay: 0.8});             
            gsap.set(services[activeService.index + 1].serviceImage, {opacity: 1, delay: 0.9});
            gsap.set(services[activeService.index + 1].serviceNumber, {opacity: 1, delay: 1});
        
            gsap.to(services[activeService.index + 1].serviceSubTitle, {
                y: "-51vw",
                duration: 0.7,
                delay: 0.7,
                ease: "Expo.easeOut",
            });
        
            gsap.to(services[activeService.index + 1].serviceTitle, {
                y: "-2.2vw",
                duration: 0.7,
                delay: 0.8,
                ease: "Expo.easeOut",
            });
        
            gsap.to(services[activeService.index + 1].serviceImage, {
                y: "-47vw",
                duration: 0.7,
                delay: 0.9,
                ease: "Expo.easeOut",
            });
            
            gsap.to(services[activeService.index + 1].serviceNumber, {
                y: "-25vw",
                duration: 0.7,
                delay: 1,
                ease: "Expo.easeOut",
                onComplete: () => {
                    isAnimating = false;
                    if(activeService.index + 1 < 9) {
                            services[activeService.index + 1].isActive = true;
                            activeService = services[activeService.index + 1];
                    } else {
                            services[0].isActive = true;
                            activeService = services[0];
                    }
                }
            });
        }
    
    }, 5000);
}