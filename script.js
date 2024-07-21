

 
// ?navbar Animation

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-link");
    const highlight = document.querySelector(".highlight");

    function moveHighlight(link) {
        const linkRect = link.getBoundingClientRect();
        const navbarRect = document.querySelector(".navbar").getBoundingClientRect();
        highlight.style.width = `${linkRect.width}px`;
        highlight.style.left = `${linkRect.left - navbarRect.left}px`;
    }

    navbarLinks.forEach(link => {
        link.addEventListener("mouseenter", () => moveHighlight(link));
        link.addEventListener("focus", () => moveHighlight(link));
    });

    
    document.querySelector(".navbar").addEventListener("mouseleave", () => {
        highlight.style.width = "0";
    });
});

// ? for mobile navbar

const mobile_nav= document.querySelector('.mobile-navbar-btn');
const nav_heared= document.querySelector('.header')

const toggleNavbar =()=>{
    nav_heared.classList.toggle('actiove');
};

mobile_nav.addEventListener('click', () => toggleNavbar())




// ?for about me education and exp 


document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.me_button');
    
    // Initial setup: add 'active' class to #btn_diva and display the corresponding block
    document.getElementById('btn_diva').classList.add('active');
    document.getElementById('diva').style.display = 'block';
    document.getElementById('divb').style.display = 'none';
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            this.classList.add('active'); // Add active class to the clicked button
            
            // Show/hide corresponding blocks
            if (this.id === 'btn_diva') {
                document.getElementById('diva').style.display = 'block';
                document.getElementById('divb').style.display = 'none';
            } else if (this.id === 'btn_divb') {
                document.getElementById('diva').style.display = 'none';
                document.getElementById('divb').style.display = 'block';
            }
        });
    });
});

