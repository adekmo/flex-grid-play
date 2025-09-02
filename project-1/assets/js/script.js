// toggle sidebar mobile
document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');

    menuToggle.addEventListener('click', function(){
        sidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if(sidebar.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else{
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // close sider bar
    mobileOverlay.addEventListener('click', function(){
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');

        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });

    // The toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');

        const themeicon = this.querySelector('i');
        if(document.body.classList.contains('dark-mode')){
            themeicon.classList.remove('fa-moon');
            themeicon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeicon.classList.remove('fa-sun');
            themeicon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // close sidebar
    document.addEventListener('click', function(e){
        const isClickInside = sidebar.contains('e.target');
        const isClickOnToggle = menuToggle.contains('e.target');

        if(sidebar.classList.contains('active') && !isClickInside && !isClickOnToggle){
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');

            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // load saved theme
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector(' .theme-toggle i ');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // add hover
    document.querySelectorAll('.task-bar').forEach(task=>{
        task.addEventListener('mouseenter', function(){
            this.style.zIndex = '10';
        });
        task.addEventListener('mouseleave', function(){
            this.style.zIndex = '1';
        });
    });

    document.querySelectorAll('.progress-ring.progress-fill').forEach(ring =>{
        const circumference = 283;
        const progressRing = ring.closest('.progress-ring');
        const progressText = progressRing.querySelector('.progress-text').textContent;
        const percentage = parseInt(progressText);
        const offset = circumference - (percentage * circumference / 100 );
        ring.style.strokeDashoffset = offset;
    })
    
})