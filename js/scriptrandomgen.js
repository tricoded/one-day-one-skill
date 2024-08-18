let btnRandom = document.querySelector('button')
let result = document.querySelector('h2')

let skills = ['Fast Typing', 'Coding', 'Interior Design', 'Basic Home Repair and Maintenance', 'Sewing', 'Crocheting', 'Cooking', 'Baking', 'Organizing and Decluttering your home', 'Navigating a map', 'Geography', 'Learning common automobile terminologies', 'Learning to create a budget', 'Checking, Building, and Repairing credit scores', 'Saving and Investing Money', 'Basic social and conversational etiquette', 'Debate', 'Public Speaking', 'Learn to negotiate', 'Develop critical thinking skills', 'Learn Problem-solving techniques through Math problems or puzzles', 'Interpreting statistics', 'Crafting a resume', 'Leadership', 'Networking', 'Learning about the economy and how taxes work', 'Gardening', 'Understanding local, national, and international news', 'Painting', 'Drawing', 'Creative Writing', 'Photography', 'Videography', 'Video Editing', 'Papercraft', 'Re-purposing old furniture', 'Journaling', 'Dancing', 'Swimming', 'Tennis', 'Basketball', 'Soccer', 'Golf', 'Running', 'Weightlifitng', 'Learn about nutrition', 'Study history', 'Advanced Math']

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, skills.length-1);
    result.innerText = skills[index]
})


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-button', {delay:200, origin:'right'});
