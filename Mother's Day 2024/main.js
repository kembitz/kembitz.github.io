const childCircle = document.getElementById('child');
const middleCircle = document.getElementById('middle');
const womanCircle = document.getElementById('woman');
const highCircle = document.getElementById('high');
const schoolCircle = document.getElementById('school');

const dotsPreview = document.createElement('dotsPreview');
const previewText = document.createElement('previewText');
const previewHeader = document.createElement('previewHeader');
const previewClose = document.createElement('previewClose');

previewClose.addEventListener('click', () => {
    dotsPreview.style.opacity = 0;
    previewText.innerHTML = '';
    previewHeader.innerHTML = '';
})

childCircle.addEventListener('click', () => {
    dotsPreview.style.opacity = 1;
    previewText.innerHTML = ' You took care of every need and helped me when I was sick. Even when we struggled or I was stresed, you found a way to make it seem fun and so relaxed. Watching cartoons, going to the pool, getting me into reading, helping me with the Xbox, and most importantly great naps. There is so much more memories I have because of you. Thank you for an amazing childhood.'
    previewHeader.innerHTML = "Thank you for an amazing childhood!"
})

middleCircle.addEventListener('click', () => {
    dotsPreview.style.opacity = 1;
    previewText.innerHTML = 'Thank you for supporting me through one of the most difficult periods in my life. You made it to where I felt comfortable exploring myself and the world. In a time where I was not sure who I was, you made me comfortable. The deep talks and mental health talks made me into the person I am today. My wisdom and confidence started with you and it is the best gift I have ever received. Thank you.'; 
    previewHeader.innerHTML = "Middle School Years"
})

childCircle.addEventListener('click', () => {
    dotsPreview.style.opacity = 1;
    previewText.innerHTML = 'I struggled to get myself and my grades together. You gave me the work ethic to fix those. I am still not perfect with them, but thanks to you know I now know how I learn best. I started reading a lot and explored my creativity. I would not have been confidennt to start programming and other projects if it were not for you encouraging me and my skills. I feel like my skills are worth something to the world thanks to you.'
    previewHeader.innerHTML = "High School Years"
})

childCircle.addEventListener('click', () => {
    dotsPreview.style.opacity = 1;
    previewText.innerHTML = ' You took care of every need and helped me when I was sick. Even when we struggled or I was stresed, you found a way to make it seem fun and so relaxed. Watching cartoons, going to the pool, getting me into reading, helping me with the Xbox, and most importantly great naps. There is so much more memories I have because of you. Thank you for an amazing childhood.'
    previewHeader.innerHTML = "Thank you for an amazing childhood!"
})


