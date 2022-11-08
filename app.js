const questionsDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: 'Pick a vacation destination:',
        answers: [
            {
            text: 'New York',
            image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
            alt: 'Photo of the Empire state building during daytime',
            credit: 'Kit Suman'
        },
        {
            text: 'Austin',
            image: 'https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
            alt: 'Photo of Austin with large blue skies',
            credit: 'MJ Tangonan'
        },
        {
            text: 'Portland',
            image: 'https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
            alt: 'Photo of Portland during sunset',
            credit: 'Justin Shen'
        },
        {
            text: 'New Orleans',
            image: 'https://images.unsplash.com/photo-1571893544028-06b07af6dade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            alt: 'Photo of downtown New Orleans',
            credit: 'Mana'
        } 
        ]
    },
    {
        id: 1,
        text: 'Pick some food:',
        answers: [
            {
                text:'Pizza',
                image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                alt: 'Pepperoni Pizza',
                credit: 'Shourav Sheikh'

            },
            {
                text:'Sandwich',
                image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
                alt: 'ham sandwich on white surface',
                credit: 'Mae Mu'

            },
            {
                text:'Pasta',
                image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80',
                alt: 'Pasta in tomato sause',
                credit: 'Danijela Prijovic'

            },
            {
                text:'Hamburger',
                image: 'https://images.unsplash.com/photo-1576843776838-032ac46fbb93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80',
                alt: 'Hamburger with mean lettce and tomato',
                credit: 'Amirali Mirhashemian'

            }
        ]
    },
    {
        id: 2,
        text: 'Pick a home:',
        answers: [
            {
                text:'Traditional',
                image: 'https://images.unsplash.com/photo-1532891405780-3f3fe7f332d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                alt: 'building with brick and wood designs',
                credit: 'Ibrahim Rifath'

            },
            {
                text:'Modern',
                image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                alt: 'Modern Designed home with pool',
                credit: 'Rpocnab Anekceehko'

            },
            {
                text:'House',
                image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                alt: 'House with driveway',
                credit: 'Dillon Kydd'

            },
            {
                text:'Cabin',
                image: 'https://images.unsplash.com/photo-1523391139596-e7da8a18c733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                alt: 'Cabin in the woods',
                credit: 'Headway'

            }
        ]
    }
]

const answers =[
    {
        combination:['New York', 'Pizza', 'Traditional'],
        text: 'Blue Cheese',
        image: 'https://images.unsplash.com/photo-1626202375382-cfefecd3a3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        alt: 'Blue Cheese'
    },
    {
        combination:['Austin', 'Pasta', 'Modern'],
        text: 'Cheddar',
        image: 'https://images.unsplash.com/photo-1553653760-d787a53b4bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        alt: 'Cheddar Cheese'
    },
    {
        combination:['Portland', 'Sandwich', 'Cabin'],
        text: 'Feta',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Feta Cheese'
    },
    {
        combination:['New Orleans', 'Hamburger', 'House'],
        text: 'Halloumi',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        alt: 'Halloumi Cheese'
    },
    
]

//need default selection useless all combonations are used


const unAnsweredQuestions = []
const chosenAnswers = []

const populateQuestions = () =>{
    questions.forEach(question =>{
        const titleBlock = document.createElement('div') //selecting all the div elements
        titleBlock.id = question.id     //title block id will align with questions
        titleBlock.classList.add('title-block') //adding title-block class

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        
        titleBlock.append(titleHeading)
        questionsDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + '-questions'
        answersBlock.classList.add('answer-options')

        unAnsweredQuestions.push(question.id)

        question.answers.forEach(answer =>{
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src' , answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)


            answerBlock.append(answerImage, answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })

        questionsDisplay.append(answersBlock)

    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if(unAnsweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unAnsweredQuestions.indexOf(questionId)

    if(itemToRemove > - 1){
        unAnsweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unAnsweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)

    const lowestQuestionId = Math.min(...unAnsweredQuestions) //scroll to lowest unanswered question
    location.href = '#' + lowestQuestionId

    if(!unAnsweredQuestions.length){
        //scroll to answer
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () =>{
    let result
    answers.forEach(answer =>{
        if(
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
            ){
                result = answer
            } else if(!result) {
                //first answer object default
                result = answers[0]
            }
    })

    // console.log(result)

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)
    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => {
        answerBlock.replaceWith(answerBlock.cloneNode(true))
    })
}

const disableQuestionBlock = (questionId, chosenAnswer) =>{
    const currentQuestionBlock = document.getElementById(questionId + '-questions')
    Array.from(currentQuestionBlock.children).forEach(block =>{
        if(block.children.item(1).innerText != chosenAnswer){
            block.style.opacity = "50%"
        }
    })
}
